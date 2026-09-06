(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function r(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(u){if(u.ep)return;u.ep=!0;const m=r(u);fetch(u.href,m)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},oc={};var Fb;function HC(){if(Fb)return oc;Fb=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,u,m){var g=null;if(m!==void 0&&(g=""+m),u.key!==void 0&&(g=""+u.key),"key"in u){m={};for(var b in u)b!=="key"&&(m[b]=u[b])}else m=u;return u=m.ref,{$$typeof:t,type:s,key:g,ref:u!==void 0?u:null,props:m}}return oc.Fragment=i,oc.jsx=r,oc.jsxs=r,oc}var Hb;function $C(){return Hb||(Hb=1,qm.exports=HC()),qm.exports}var h=$C(),Gm={exports:{}},Ie={};var $b;function VC(){if($b)return Ie;$b=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),O=Symbol.iterator;function I(j){return j===null||typeof j!="object"?null:(j=O&&j[O]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,U={};function B(j,Y,ie){this.props=j,this.context=Y,this.refs=U,this.updater=ie||z}B.prototype.isReactComponent={},B.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=B.prototype;function K(j,Y,ie){this.props=j,this.context=Y,this.refs=U,this.updater=ie||z}var ue=K.prototype=new $;ue.constructor=K,P(ue,B.prototype),ue.isPureReactComponent=!0;var J=Array.isArray;function se(){}var Q={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function Ce(j,Y,ie){var oe=ie.ref;return{$$typeof:t,type:j,key:Y,ref:oe!==void 0?oe:null,props:ie}}function Ue(j,Y){return Ce(j.type,Y,j.props)}function ve(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function ke(j){var Y={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ie){return Y[ie]})}var ge=/\/+/g;function ae(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?ke(""+j.key):Y.toString(36)}function Oe(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(se,se):(j.status="pending",j.then(function(Y){j.status==="pending"&&(j.status="fulfilled",j.value=Y)},function(Y){j.status==="pending"&&(j.status="rejected",j.reason=Y)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function D(j,Y,ie,oe,fe){var pe=typeof j;(pe==="undefined"||pe==="boolean")&&(j=null);var ze=!1;if(j===null)ze=!0;else switch(pe){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(j.$$typeof){case t:case i:ze=!0;break;case C:return ze=j._init,D(ze(j._payload),Y,ie,oe,fe)}}if(ze)return fe=fe(j),ze=oe===""?"."+ae(j,0):oe,J(fe)?(ie="",ze!=null&&(ie=ze.replace(ge,"$&/")+"/"),D(fe,Y,ie,"",function(kt){return kt})):fe!=null&&(ve(fe)&&(fe=Ue(fe,ie+(fe.key==null||j&&j.key===fe.key?"":(""+fe.key).replace(ge,"$&/")+"/")+ze)),Y.push(fe)),1;ze=0;var nt=oe===""?".":oe+":";if(J(j))for(var Qe=0;Qe<j.length;Qe++)oe=j[Qe],pe=nt+ae(oe,Qe),ze+=D(oe,Y,ie,pe,fe);else if(Qe=I(j),typeof Qe=="function")for(j=Qe.call(j),Qe=0;!(oe=j.next()).done;)oe=oe.value,pe=nt+ae(oe,Qe++),ze+=D(oe,Y,ie,pe,fe);else if(pe==="object"){if(typeof j.then=="function")return D(Oe(j),Y,ie,oe,fe);throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ze}function le(j,Y,ie){if(j==null)return j;var oe=[],fe=0;return D(j,oe,"","",function(pe){return Y.call(ie,pe,fe++)}),oe}function re(j){if(j._status===-1){var Y=j._result;Y=Y(),Y.then(function(ie){(j._status===0||j._status===-1)&&(j._status=1,j._result=ie)},function(ie){(j._status===0||j._status===-1)&&(j._status=2,j._result=ie)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var Re=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ce={map:le,forEach:function(j,Y,ie){le(j,function(){Y.apply(this,arguments)},ie)},count:function(j){var Y=0;return le(j,function(){Y++}),Y},toArray:function(j){return le(j,function(Y){return Y})||[]},only:function(j){if(!ve(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return Ie.Activity=T,Ie.Children=ce,Ie.Component=B,Ie.Fragment=r,Ie.Profiler=u,Ie.PureComponent=K,Ie.StrictMode=s,Ie.Suspense=y,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(j){return Q.H.useMemoCache(j)}},Ie.cache=function(j){return function(){return j.apply(null,arguments)}},Ie.cacheSignal=function(){return null},Ie.cloneElement=function(j,Y,ie){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var oe=P({},j.props),fe=j.key;if(Y!=null)for(pe in Y.key!==void 0&&(fe=""+Y.key),Y)!he.call(Y,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&Y.ref===void 0||(oe[pe]=Y[pe]);var pe=arguments.length-2;if(pe===1)oe.children=ie;else if(1<pe){for(var ze=Array(pe),nt=0;nt<pe;nt++)ze[nt]=arguments[nt+2];oe.children=ze}return Ce(j.type,fe,oe)},Ie.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},Ie.createElement=function(j,Y,ie){var oe,fe={},pe=null;if(Y!=null)for(oe in Y.key!==void 0&&(pe=""+Y.key),Y)he.call(Y,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(fe[oe]=Y[oe]);var ze=arguments.length-2;if(ze===1)fe.children=ie;else if(1<ze){for(var nt=Array(ze),Qe=0;Qe<ze;Qe++)nt[Qe]=arguments[Qe+2];fe.children=nt}if(j&&j.defaultProps)for(oe in ze=j.defaultProps,ze)fe[oe]===void 0&&(fe[oe]=ze[oe]);return Ce(j,pe,fe)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(j){return{$$typeof:b,render:j}},Ie.isValidElement=ve,Ie.lazy=function(j){return{$$typeof:C,_payload:{_status:-1,_result:j},_init:re}},Ie.memo=function(j,Y){return{$$typeof:_,type:j,compare:Y===void 0?null:Y}},Ie.startTransition=function(j){var Y=Q.T,ie={};Q.T=ie;try{var oe=j(),fe=Q.S;fe!==null&&fe(ie,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(se,Re)}catch(pe){Re(pe)}finally{Y!==null&&ie.types!==null&&(Y.types=ie.types),Q.T=Y}},Ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},Ie.use=function(j){return Q.H.use(j)},Ie.useActionState=function(j,Y,ie){return Q.H.useActionState(j,Y,ie)},Ie.useCallback=function(j,Y){return Q.H.useCallback(j,Y)},Ie.useContext=function(j){return Q.H.useContext(j)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(j,Y){return Q.H.useDeferredValue(j,Y)},Ie.useEffect=function(j,Y){return Q.H.useEffect(j,Y)},Ie.useEffectEvent=function(j){return Q.H.useEffectEvent(j)},Ie.useId=function(){return Q.H.useId()},Ie.useImperativeHandle=function(j,Y,ie){return Q.H.useImperativeHandle(j,Y,ie)},Ie.useInsertionEffect=function(j,Y){return Q.H.useInsertionEffect(j,Y)},Ie.useLayoutEffect=function(j,Y){return Q.H.useLayoutEffect(j,Y)},Ie.useMemo=function(j,Y){return Q.H.useMemo(j,Y)},Ie.useOptimistic=function(j,Y){return Q.H.useOptimistic(j,Y)},Ie.useReducer=function(j,Y,ie){return Q.H.useReducer(j,Y,ie)},Ie.useRef=function(j){return Q.H.useRef(j)},Ie.useState=function(j){return Q.H.useState(j)},Ie.useSyncExternalStore=function(j,Y,ie){return Q.H.useSyncExternalStore(j,Y,ie)},Ie.useTransition=function(){return Q.H.useTransition()},Ie.version="19.2.4",Ie}var Vb;function Jg(){return Vb||(Vb=1,Gm.exports=VC()),Gm.exports}var k=Jg();const Wn=Pw(k);var Ym={exports:{}},sc={},Wm={exports:{}},Km={};var Zb;function ZC(){return Zb||(Zb=1,(function(t){function i(D,le){var re=D.length;D.push(le);e:for(;0<re;){var Re=re-1>>>1,ce=D[Re];if(0<u(ce,le))D[Re]=le,D[re]=ce,re=Re;else break e}}function r(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var le=D[0],re=D.pop();if(re!==le){D[0]=re;e:for(var Re=0,ce=D.length,j=ce>>>1;Re<j;){var Y=2*(Re+1)-1,ie=D[Y],oe=Y+1,fe=D[oe];if(0>u(ie,re))oe<ce&&0>u(fe,ie)?(D[Re]=fe,D[oe]=re,Re=oe):(D[Re]=ie,D[Y]=re,Re=Y);else if(oe<ce&&0>u(fe,re))D[Re]=fe,D[oe]=re,Re=oe;else break e}}return le}function u(D,le){var re=D.sortIndex-le.sortIndex;return re!==0?re:D.id-le.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;t.unstable_now=function(){return m.now()}}else{var g=Date,b=g.now();t.unstable_now=function(){return g.now()-b}}var y=[],_=[],C=1,T=null,O=3,I=!1,z=!1,P=!1,U=!1,B=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ue(D){for(var le=r(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=D)s(_),le.sortIndex=le.expirationTime,i(y,le);else break;le=r(_)}}function J(D){if(P=!1,ue(D),!z)if(r(y)!==null)z=!0,se||(se=!0,ke());else{var le=r(_);le!==null&&Oe(J,le.startTime-D)}}var se=!1,Q=-1,he=5,Ce=-1;function Ue(){return U?!0:!(t.unstable_now()-Ce<he)}function ve(){if(U=!1,se){var D=t.unstable_now();Ce=D;var le=!0;try{e:{z=!1,P&&(P=!1,$(Q),Q=-1),I=!0;var re=O;try{t:{for(ue(D),T=r(y);T!==null&&!(T.expirationTime>D&&Ue());){var Re=T.callback;if(typeof Re=="function"){T.callback=null,O=T.priorityLevel;var ce=Re(T.expirationTime<=D);if(D=t.unstable_now(),typeof ce=="function"){T.callback=ce,ue(D),le=!0;break t}T===r(y)&&s(y),ue(D)}else s(y);T=r(y)}if(T!==null)le=!0;else{var j=r(_);j!==null&&Oe(J,j.startTime-D),le=!1}}break e}finally{T=null,O=re,I=!1}le=void 0}}finally{le?ke():se=!1}}}var ke;if(typeof K=="function")ke=function(){K(ve)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ae=ge.port2;ge.port1.onmessage=ve,ke=function(){ae.postMessage(null)}}else ke=function(){B(ve,0)};function Oe(D,le){Q=B(function(){D(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return O},t.unstable_next=function(D){switch(O){case 1:case 2:case 3:var le=3;break;default:le=O}var re=O;O=le;try{return D()}finally{O=re}},t.unstable_requestPaint=function(){U=!0},t.unstable_runWithPriority=function(D,le){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var re=O;O=D;try{return le()}finally{O=re}},t.unstable_scheduleCallback=function(D,le,re){var Re=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Re+re:Re):re=Re,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=re+ce,D={id:C++,callback:le,priorityLevel:D,startTime:re,expirationTime:ce,sortIndex:-1},re>Re?(D.sortIndex=re,i(_,D),r(y)===null&&D===r(_)&&(P?($(Q),Q=-1):P=!0,Oe(J,re-Re))):(D.sortIndex=ce,i(y,D),z||I||(z=!0,se||(se=!0,ke()))),D},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(D){var le=O;return function(){var re=O;O=le;try{return D.apply(this,arguments)}finally{O=re}}}})(Km)),Km}var qb;function qC(){return qb||(qb=1,Wm.exports=ZC()),Wm.exports}var Xm={exports:{}},nn={};var Gb;function GC(){if(Gb)return nn;Gb=1;var t=Jg();function i(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)_+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,_,C){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:""+T,children:y,containerInfo:_,implementation:C}}var g=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(y,_){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(i(299));return m(y,_,null,C)},nn.flushSync=function(y){var _=g.T,C=s.p;try{if(g.T=null,s.p=2,y)return y()}finally{g.T=_,s.p=C,s.d.f()}},nn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(y,_))},nn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},nn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var C=_.as,T=b(C,_.crossOrigin),O=typeof _.integrity=="string"?_.integrity:void 0,I=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;C==="style"?s.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:O,fetchPriority:I}):C==="script"&&s.d.X(y,{crossOrigin:T,integrity:O,fetchPriority:I,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},nn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var C=b(_.as,_.crossOrigin);s.d.M(y,{crossOrigin:C,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(y)},nn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var C=_.as,T=b(C,_.crossOrigin);s.d.L(y,C,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},nn.preloadModule=function(y,_){if(typeof y=="string")if(_){var C=b(_.as,_.crossOrigin);s.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:C,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(y)},nn.requestFormReset=function(y){s.d.r(y)},nn.unstable_batchedUpdates=function(y,_){return y(_)},nn.useFormState=function(y,_,C){return g.H.useFormState(y,_,C)},nn.useFormStatus=function(){return g.H.useHostTransitionStatus()},nn.version="19.2.4",nn}var Yb;function Mw(){if(Yb)return Xm.exports;Yb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Xm.exports=GC(),Xm.exports}var Wb;function YC(){if(Wb)return sc;Wb=1;var t=qC(),i=Jg(),r=Mw();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(s(188))}function _(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(s(188));return n!==e?null:e}for(var o=e,c=n;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return y(f),e;if(p===c)return y(f),n;p=p.sibling}throw Error(s(188))}if(o.return!==c.return)o=f,c=p;else{for(var S=!1,A=f.child;A;){if(A===o){S=!0,o=f,c=p;break}if(A===c){S=!0,c=f,o=p;break}A=A.sibling}if(!S){for(A=p.child;A;){if(A===o){S=!0,o=p,c=f;break}if(A===c){S=!0,c=p,o=f;break}A=A.sibling}if(!S)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?e:n}function C(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=C(e),n!==null)return n;e=e.sibling}return null}var T=Object.assign,O=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case B:return"Profiler";case U:return"StrictMode";case J:return"Suspense";case se:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case K:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case ue:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case he:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var Oe=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Re=[],ce=-1;function j(e){return{current:e}}function Y(e){0>ce||(e.current=Re[ce],Re[ce]=null,ce--)}function ie(e,n){ce++,Re[ce]=e.current,e.current=n}var oe=j(null),fe=j(null),pe=j(null),ze=j(null);function nt(e,n){switch(ie(pe,n),ie(fe,e),ie(oe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ub(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ub(n),e=db(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(oe),ie(oe,e)}function Qe(){Y(oe),Y(fe),Y(pe)}function kt(e){e.memoizedState!==null&&ie(ze,e);var n=oe.current,o=db(n,e.type);n!==o&&(ie(fe,e),ie(oe,o))}function xi(e){fe.current===e&&(Y(oe),Y(fe)),ze.current===e&&(Y(ze),nc._currentValue=re)}var we,Et;function Nn(e){if(we===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);we=n&&n[1]||"",Et=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+Et}var Pa=!1;function Ma(e,n){if(!e||Pa)return"";Pa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(n){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(W){var G=W}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(W){G=W}e.call(ne.prototype)}}else{try{throw Error()}catch(W){G=W}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(W){if(W&&G&&typeof W.stack=="string")return[W.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=c.DetermineComponentFrameRoot(),S=p[0],A=p[1];if(S&&A){var M=S.split(`
`),Z=A.split(`
`);for(f=c=0;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;for(;f<Z.length&&!Z[f].includes("DetermineComponentFrameRoot");)f++;if(c===M.length||f===Z.length)for(c=M.length-1,f=Z.length-1;1<=c&&0<=f&&M[c]!==Z[f];)f--;for(;1<=c&&0<=f;c--,f--)if(M[c]!==Z[f]){if(c!==1||f!==1)do if(c--,f--,0>f||M[c]!==Z[f]){var X=`
`+M[c].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=c&&0<=f);break}}}finally{Pa=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Nn(o):""}function $i(e,n){switch(e.tag){case 26:case 27:case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return e.child!==n&&n!==null?Nn("Suspense Fallback"):Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 15:return Ma(e.type,!1);case 11:return Ma(e.type.render,!1);case 1:return Ma(e.type,!0);case 31:return Nn("Activity");default:return""}}function wi(e){try{var n="",o=null;do n+=$i(e,o),o=e,e=e.return;while(e);return n}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Ia=Object.prototype.hasOwnProperty,Vi=t.unstable_scheduleCallback,Dr=t.unstable_cancelCallback,au=t.unstable_shouldYield,ru=t.unstable_requestPaint,on=t.unstable_now,Yf=t.unstable_getCurrentPriorityLevel,No=t.unstable_ImmediatePriority,nl=t.unstable_UserBlockingPriority,Br=t.unstable_NormalPriority,Wf=t.unstable_LowPriority,il=t.unstable_IdlePriority,ou=t.log,Kf=t.unstable_setDisableYieldValue,Na=null,Gt=null;function ei(e){if(typeof ou=="function"&&Kf(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Na,e)}catch{}}var sn=Math.clz32?Math.clz32:Jf,Ur=Math.log,Xf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Ur(e)/Xf|0)|0}var Fr=256,Hr=262144,$r=4194304;function Zi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Do(e,n,o){var c=e.pendingLanes;if(c===0)return 0;var f=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=c&134217727;return A!==0?(c=A&~p,c!==0?f=Zi(c):(S&=A,S!==0?f=Zi(S):o||(o=A&~e,o!==0&&(f=Zi(o))))):(A=c&~p,A!==0?f=Zi(A):S!==0?f=Zi(S):o||(o=c&~e,o!==0&&(f=Zi(o)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,o=n&-n,p>=o||p===32&&(o&4194048)!==0)?n:f}function Vr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Qf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function su(){var e=$r;return $r<<=1,($r&62914560)===0&&($r=4194304),e}function al(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function qi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function eh(e,n,o,c,f,p){var S=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var A=e.entanglements,M=e.expirationTimes,Z=e.hiddenUpdates;for(o=S&~o;0<o;){var X=31-sn(o),ne=1<<X;A[X]=0,M[X]=-1;var G=Z[X];if(G!==null)for(Z[X]=null,X=0;X<G.length;X++){var W=G[X];W!==null&&(W.lane&=-536870913)}o&=~ne}c!==0&&lu(e,c,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~n))}function lu(e,n,o){e.pendingLanes|=n,e.suspendedLanes&=~n;var c=31-sn(n);e.entangledLanes|=n,e.entanglements[c]=e.entanglements[c]|1073741824|o&261930}function cu(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var c=31-sn(o),f=1<<c;f&n|e[c]&n&&(e[c]|=n),o&=~f}}function uu(e,n){var o=n&-n;return o=(o&42)!==0?1:fn(o),(o&(e.suspendedLanes|n))!==0?0:o}function fn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rl(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Pb(e.type))}function ol(e,n){var o=le.p;try{return le.p=e,n()}finally{le.p=o}}var ti=Math.random().toString(36).slice(2),Ot="__reactFiber$"+ti,Ft="__reactProps$"+ti,Gi="__reactContainer$"+ti,Si="__reactEvents$"+ti,du="__reactListeners$"+ti,th="__reactHandles$"+ti,fu="__reactResources$"+ti,Zr="__reactMarker$"+ti;function sl(e){delete e[Ot],delete e[Ft],delete e[Si],delete e[du],delete e[th]}function Yi(e){var n=e[Ot];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Gi]||o[Ot]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=yb(e);e!==null;){if(o=e[Ot])return o;e=yb(e)}return n}e=o,o=e.parentNode}return null}function Da(e){if(e=e[Ot]||e[Gi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ti(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ba(e){var n=e[fu];return n||(n=e[fu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function jt(e){e[Zr]=!0}var hu=new Set,mu={};function Wi(e,n){Ei(e,n),Ei(e+"Capture",n)}function Ei(e,n){for(mu[e]=n,e=0;e<n.length;e++)hu.add(n[e])}var qr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ll={},cl={};function Gr(e){return Ia.call(cl,e)?!0:Ia.call(ll,e)?!1:qr.test(e)?cl[e]=!0:(ll[e]=!0,!1)}function He(e,n,o){if(Gr(n))if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var c=n.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+o)}}function ot(e,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+o)}}function hn(e,n,o,c){if(c===null)e.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(n,o,""+c)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ki(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ul(e,n,o){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var f=c.get,p=c.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){o=""+S,p.call(this,S)}}),Object.defineProperty(e,n,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){if(!e._valueTracker){var n=Ki(e)?"checked":"value";e._valueTracker=ul(e,n,""+e[n])}}function vt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return e&&(c=Ki(e)?e.checked?"true":"false":e.value),e=c,e!==o?(n.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bo=/[\n"\\]/g;function ht(e){return e.replace(Bo,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function dl(e,n,o,c,f,p,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Nt(n)):e.value!==""+Nt(n)&&(e.value=""+Nt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?ni(e,S,Nt(n)):o!=null?ni(e,S,Nt(o)):c!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Nt(A):e.removeAttribute("name")}function Yr(e,n,o,c,f,p,S,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Me(e);return}o=o!=null?""+Nt(o):"",n=n!=null?""+Nt(n):o,A||n===e.value||(e.value=n),e.defaultValue=n}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=A?e.checked:!!c,e.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Me(e)}function ni(e,n,o){n==="number"&&Ua(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function ut(e,n,o,c){if(e=e.options,n){n={};for(var f=0;f<o.length;f++)n["$"+o[f]]=!0;for(o=0;o<e.length;o++)f=n.hasOwnProperty("$"+e[o].value),e[o].selected!==f&&(e[o].selected=f),f&&c&&(e[o].defaultSelected=!0)}else{for(o=""+Nt(o),n=null,f=0;f<e.length;f++){if(e[f].value===o){e[f].selected=!0,c&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function Ci(e,n,o){if(n!=null&&(n=""+Nt(n),n!==e.value&&(e.value=n),o==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=o!=null?""+Nt(o):""}function Fa(e,n,o,c){if(n==null){if(c!=null){if(o!=null)throw Error(s(92));if(Oe(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),n=o}o=Nt(n),e.defaultValue=o,c=e.textContent,c===o&&c!==""&&c!==null&&(e.value=c),Me(e)}function Dn(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var fl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ha(e,n,o){var c=n.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":c?e.setProperty(n,o):typeof o!="number"||o===0||fl.has(n)?n==="float"?e.cssFloat=o:e[n]=(""+o).trim():e[n]=o+"px"}function Uo(e,n,o){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||n!=null&&n.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var f in n)c=n[f],n.hasOwnProperty(f)&&o[f]!==c&&Ha(e,f,c)}else for(var p in n)n.hasOwnProperty(p)&&Ha(e,p,n[p])}function Wr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $a(e){return hl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var Ho=null;function Kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,Le=null;function En(e){var n=Da(e);if(n&&(e=n.stateNode)){var o=e[Ft]||null;e:switch(e=n.stateNode,n.type){case"input":if(dl(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ht(""+n)+'"][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==e&&c.form===e.form){var f=c[Ft]||null;if(!f)throw Error(s(90));dl(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<o.length;n++)c=o[n],c.form===e.form&&vt(c)}break e;case"textarea":Ci(e,o.value,o.defaultValue);break e;case"select":n=o.value,n!=null&&ut(e,!!o.multiple,n,!1)}}}var it=!1;function ml(e,n,o){if(it)return e(n,o);it=!0;try{var c=e(n);return c}finally{if(it=!1,(Va!==null||Le!==null)&&(ud(),Va&&(n=Va,e=Le,Le=Va=null,En(n),e)))for(n=0;n<e.length;n++)En(e[n])}}function Xi(e,n){var o=e.stateNode;if(o===null)return null;var c=o[Ft]||null;if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(s(231,n,typeof o));return o}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xr=!1;if(Cn)try{var An={};Object.defineProperty(An,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Xr=!1}var Bn=null,Ji=null,xt=null;function Ai(){if(xt)return xt;var e,n=Ji,o=n.length,c,f="value"in Bn?Bn.value:Bn.textContent,p=f.length;for(e=0;e<o&&n[e]===f[e];e++);var S=o-e;for(c=1;c<=S&&n[o-c]===f[p-c];c++);return xt=f.slice(e,1<c?1-c:void 0)}function Jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function pu(){return!1}function Yt(e){function n(o,c,f,p,S){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qr:pu,this.isPropagationStopped=pu,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),n}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Yt(ii),Za=T({},ii,{view:0,detail:0}),qe=Yt(Za),pl,ln,ai,eo=T({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(pl=e.screenX-ai.screenX,ln=e.screenY-ai.screenY):ln=pl=0,ai=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),gu=Yt(eo),gl=T({},eo,{dataTransfer:0}),nh=Yt(gl),vu=T({},Za,{relatedTarget:0}),vl=Yt(vu),ih=T({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),yl=Yt(ih),ah=T({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Un=Yt(ah),rh=T({},ii,{data:0}),bl=Yt(rh),ki={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bu[e])?!!n[e]:!1}function xl(){return _l}var _u=T({},Za,{key:function(e){if(e.key){var n=ki[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=Yt(_u),oh=T({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Yt(oh),wl=T({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),sh=Yt(wl),Su=T({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tu=Yt(Su),Vo=T({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qi=Yt(Vo),lh=T({},ii,{newState:0,oldState:0}),to=Yt(lh),pn=[9,13,27,32],Zo=Cn&&"CompositionEvent"in window,qa=null;Cn&&"documentMode"in document&&(qa=document.documentMode);var ch=Cn&&"TextEvent"in window&&!qa,qo=Cn&&(!Zo||qa&&8<qa&&11>=qa),Go=" ",Eu=!1;function Cu(e,n){switch(e){case"keyup":return pn.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function kn(e,n){switch(e){case"compositionend":return Sl(n);case"keypress":return n.which!==32?null:(Eu=!0,Go);case"textInput":return e=n.data,e===Go&&Eu?null:e;default:return null}}function Ya(e,n){if(Ga)return e==="compositionend"||!Zo&&Cu(e,n)?(e=Ai(),xt=Ji=Bn=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qo&&n.locale!=="ko"?null:n.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fn(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!uh[e.type]:n==="textarea"}function Au(e,n,o,c){Va?Le?Le.push(c):Le=[c]:Va=c,n=vd(n,"onChange"),0<n.length&&(o=new $o("onChange","change",null,o,c),e.push({event:o,listeners:n}))}var Hn=null,no=null;function io(e){ab(e,0)}function ao(e){var n=Ti(e);if(vt(n))return e}function ro(e,n){if(e==="change")return n}var ku=!1;if(Cn){var $n;if(Cn){var Wa="oninput"in document;if(!Wa){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Wa=typeof Ou.oninput=="function"}$n=Wa}else $n=!1;ku=$n&&(!document.documentMode||9<document.documentMode)}function Yo(){Hn&&(Hn.detachEvent("onpropertychange",ju),no=Hn=null)}function ju(e){if(e.propertyName==="value"&&ao(no)){var n=[];Au(n,no,e,Kr(e)),ml(io,n)}}function ri(e,n,o){e==="focusin"?(Yo(),Hn=n,no=o,Hn.attachEvent("onpropertychange",ju)):e==="focusout"&&Yo()}function dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(no)}function Ka(e,n){if(e==="click")return ao(n)}function fh(e,n){if(e==="input"||e==="change")return ao(n)}function oi(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ht=typeof Object.is=="function"?Object.is:oi;function Xa(e,n){if(Ht(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Ia.call(n,f)||!Ht(e[f],n[f]))return!1}return!0}function Wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oo(e,n){var o=Wo(e);e=0;for(var c;o;){if(o.nodeType===3){if(c=e+o.textContent.length,e<=n&&c>=n)return{node:o,offset:n-e};e=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wo(o)}}function Ko(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ko(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function so(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ua(e.document);n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Ua(e.document)}return n}function Oi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xo=Cn&&"documentMode"in document&&11>=document.documentMode,ji=null,Jo=null,lo=null,Ja=!1;function zu(e,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ja||ji==null||ji!==Ua(c)||(c=ji,"selectionStart"in c&&Oi(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),lo&&Xa(lo,c)||(lo=c,c=vd(Jo,"onSelect"),0<c.length&&(n=new $o("onSelect","select",null,n,o),e.push({event:n,listeners:c}),n.target=ji)))}function zi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Qa={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},Qo={},Lu={};Cn&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function $t(e){if(Qo[e])return Qo[e];if(!Qa[e])return e;var n=Qa[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Lu)return Qo[e]=n[o];return e}var co=$t("animationend"),Ru=$t("animationiteration"),uo=$t("animationstart"),hh=$t("transitionrun"),Pu=$t("transitionstart"),mh=$t("transitioncancel"),er=$t("transitionend"),Mu=new Map,Li="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Li.push("scrollEnd");function gn(e,n){Mu.set(e,n),Wi(n,[e])}var fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vn=[],en=0,es=0;function ho(){for(var e=en,n=es=en=0;n<e;){var o=vn[n];vn[n++]=null;var c=vn[n];vn[n++]=null;var f=vn[n];vn[n++]=null;var p=vn[n];if(vn[n++]=null,c!==null&&f!==null){var S=c.pending;S===null?f.next=f:(f.next=S.next,S.next=f),c.pending=f}p!==0&&tr(o,f,p)}}function Ri(e,n,o,c){vn[en++]=e,vn[en++]=n,vn[en++]=o,vn[en++]=c,es|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function Tl(e,n,o,c){return Ri(e,n,o,c),mo(e)}function Vn(e,n){return Ri(e,null,null,n),mo(e)}function tr(e,n,o){e.lanes|=o;var c=e.alternate;c!==null&&(c.lanes|=o);for(var f=!1,p=e.return;p!==null;)p.childLanes|=o,c=p.alternate,c!==null&&(c.childLanes|=o),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&n!==null&&(f=31-sn(o),e=p.hiddenUpdates,c=e[f],c===null?e[f]=[n]:c.push(n),n.lane=o|536870912),p):null}function mo(e){if(50<Wl)throw Wl=0,gm=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ea={};function ph(e,n,o,c){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,o,c){return new ph(e,n,o,c)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zn(e,n){var o=e.alternate;return o===null?(o=tn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function El(e,n){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,n=o.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function po(e,n,o,c,f,p){var S=0;if(c=e,typeof e=="function")ts(e)&&(S=1);else if(typeof e=="string")S=jC(e,o,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=tn(31,o,n,f),e.elementType=Ce,e.lanes=p,e;case P:return ta(o.children,f,p,n);case U:S=8,f|=24;break;case B:return e=tn(12,o,n,f|2),e.elementType=B,e.lanes=p,e;case J:return e=tn(13,o,n,f),e.elementType=J,e.lanes=p,e;case se:return e=tn(19,o,n,f),e.elementType=se,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:S=10;break e;case $:S=9;break e;case ue:S=11;break e;case Q:S=14;break e;case he:S=16,c=null;break e}S=29,o=Error(s(130,e===null?"null":typeof e,"")),c=null}return n=tn(S,o,n,f),n.elementType=e,n.type=c,n.lanes=p,n}function ta(e,n,o,c){return e=tn(7,e,c,n),e.lanes=o,e}function ns(e,n,o){return e=tn(6,e,null,n),e.lanes=o,e}function Cl(e){var n=tn(18,null,null,0);return n.stateNode=e,n}function Al(e,n,o){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var a=new WeakMap;function l(e,n){if(typeof e=="object"&&e!==null){var o=a.get(e);return o!==void 0?o:(n={value:e,source:n,stack:wi(n)},a.set(e,n),n)}return{value:e,source:n,stack:wi(n)}}var d=[],v=0,x=null,E=0,R=[],H=0,q=null,te=1,me="";function Se(e,n){d[v++]=E,d[v++]=x,x=e,E=n}function De(e,n,o){R[H++]=te,R[H++]=me,R[H++]=q,q=e;var c=te;e=me;var f=32-sn(c)-1;c&=~(1<<f),o+=1;var p=32-sn(n)+f;if(30<p){var S=f-f%5;p=(c&(1<<S)-1).toString(32),c>>=S,f-=S,te=1<<32-sn(n)+f|o<<f|c,me=p+e}else te=1<<p|o<<f|c,me=e}function Dt(e){e.return!==null&&(Se(e,1),De(e,1,0))}function wt(e){for(;e===x;)x=d[--v],d[v]=null,E=d[--v],d[v]=null;for(;e===q;)q=R[--H],R[H]=null,me=R[--H],R[H]=null,te=R[--H],R[H]=null}function cn(e,n){R[H++]=te,R[H++]=me,R[H++]=q,te=n.id,me=n.overflow,q=e}var We=null,Ke=null,$e=!1,Pi=null,yn=!1,is=Error(s(519));function Mi(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(l(n,e)),is}function kl(e){var n=e.stateNode,o=e.type,c=e.memoizedProps;switch(n[Ot]=e,n[Ft]=c,o){case"dialog":Ze("cancel",n),Ze("close",n);break;case"iframe":case"object":case"embed":Ze("load",n);break;case"video":case"audio":for(o=0;o<Xl.length;o++)Ze(Xl[o],n);break;case"source":Ze("error",n);break;case"img":case"image":case"link":Ze("error",n),Ze("load",n);break;case"details":Ze("toggle",n);break;case"input":Ze("invalid",n),Yr(n,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ze("invalid",n);break;case"textarea":Ze("invalid",n),Fa(n,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||n.textContent===""+o||c.suppressHydrationWarning===!0||lb(n.textContent,o)?(c.popover!=null&&(Ze("beforetoggle",n),Ze("toggle",n)),c.onScroll!=null&&Ze("scroll",n),c.onScrollEnd!=null&&Ze("scrollend",n),c.onClick!=null&&(n.onclick=mn),n=!0):n=!1,n||Mi(e,!0)}function _t(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:yn=!1;return;case 27:case 3:yn=!0;return;default:We=We.return}}function si(e){if(e!==We)return!1;if(!$e)return _t(e),$e=!0,!1;var n=e.tag,o;if((o=n!==3&&n!==27)&&((o=n===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||zm(e.type,e.memoizedProps)),o=!o),o&&Ke&&Mi(e),_t(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=vb(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=vb(e)}else n===27?(n=Ke,pr(e.type)?(e=Im,Im=null,Ke=e):Ke=n):Ke=We?Gn(e.stateNode.nextSibling):null;return!0}function na(){Ke=We=null,$e=!1}function Ol(){var e=Pi;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),Pi=null),e}function go(e){Pi===null?Pi=[e]:Pi.push(e)}var vo=j(null),Ii=null,li=null;function nr(e,n,o){ie(vo,n._currentValue),n._currentValue=o}function ia(e){e._currentValue=vo.current,Y(vo)}function gh(e,n,o){for(;e!==null;){var c=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),e===o)break;e=e.return}}function vh(e,n,o,c){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var M=0;M<n.length;M++)if(A.context===n[M]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),gh(p.return,o,e),c||(S=null);break e}p=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=o,p=S.alternate,p!==null&&(p.lanes|=o),gh(S,o,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function as(e,n,o,c){e=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=f.type;Ht(f.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(f===ze.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(nc):e=[nc])}f=f.return}e!==null&&vh(n,e,o,c),n.flags|=262144}function Iu(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yo(e){Ii=e,li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wt(e){return G0(Ii,e)}function Nu(e,n){return Ii===null&&yo(e),G0(e,n)}function G0(e,n){var o=n._currentValue;if(n={context:n,memoizedValue:o,next:null},li===null){if(e===null)throw Error(s(308));li=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else li=li.next=n;return o}var CE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(o,c){e.push(c)}};this.abort=function(){n.aborted=!0,e.forEach(function(o){return o()})}},AE=t.unstable_scheduleCallback,kE=t.unstable_NormalPriority,zt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yh(){return{controller:new CE,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&AE(kE,function(){e.controller.abort()})}var zl=null,bh=0,rs=0,os=null;function OE(e,n){if(zl===null){var o=zl=[];bh=0,rs=wm(),os={status:"pending",value:void 0,then:function(c){o.push(c)}}}return bh++,n.then(Y0,Y0),n}function Y0(){if(--bh===0&&zl!==null){os!==null&&(os.status="fulfilled");var e=zl;zl=null,rs=0,os=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function jE(e,n){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return e.then(function(){c.status="fulfilled",c.value=n;for(var f=0;f<o.length;f++)(0,o[f])(n)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var W0=D.S;D.S=function(e,n){Ly=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&OE(e,n),W0!==null&&W0(e,n)};var bo=j(null);function _h(){var e=bo.current;return e!==null?e:dt.pooledCache}function Du(e,n){n===null?ie(bo,bo.current):ie(bo,n.pool)}function K0(){var e=_h();return e===null?null:{parent:zt._currentValue,pool:e}}var ss=Error(s(460)),xh=Error(s(474)),Bu=Error(s(542)),Uu={then:function(){}};function X0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function J0(e,n,o){switch(o=e[o],o===void 0?e.push(n):o!==n&&(n.then(mn,mn),n=o),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ev(e),e;default:if(typeof n.status=="string")n.then(mn,mn);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(c){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=c}},function(c){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=c}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ev(e),e}throw xo=n,ss}}function _o(e){try{var n=e._init;return n(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(xo=o,ss):o}}var xo=null;function Q0(){if(xo===null)throw Error(s(459));var e=xo;return xo=null,e}function ev(e){if(e===ss||e===Bu)throw Error(s(483))}var ls=null,Ll=0;function Fu(e){var n=Ll;return Ll+=1,ls===null&&(ls=[]),J0(ls,e,n)}function Rl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Hu(e,n){throw n.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tv(e){function n(F,N){if(e){var V=F.deletions;V===null?(F.deletions=[N],F.flags|=16):V.push(N)}}function o(F,N){if(!e)return null;for(;N!==null;)n(F,N),N=N.sibling;return null}function c(F){for(var N=new Map;F!==null;)F.key!==null?N.set(F.key,F):N.set(F.index,F),F=F.sibling;return N}function f(F,N){return F=Zn(F,N),F.index=0,F.sibling=null,F}function p(F,N,V){return F.index=V,e?(V=F.alternate,V!==null?(V=V.index,V<N?(F.flags|=67108866,N):V):(F.flags|=67108866,N)):(F.flags|=1048576,N)}function S(F){return e&&F.alternate===null&&(F.flags|=67108866),F}function A(F,N,V,ee){return N===null||N.tag!==6?(N=ns(V,F.mode,ee),N.return=F,N):(N=f(N,V),N.return=F,N)}function M(F,N,V,ee){var Te=V.type;return Te===P?X(F,N,V.props.children,ee,V.key):N!==null&&(N.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===he&&_o(Te)===N.type)?(N=f(N,V.props),Rl(N,V),N.return=F,N):(N=po(V.type,V.key,V.props,null,F.mode,ee),Rl(N,V),N.return=F,N)}function Z(F,N,V,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==V.containerInfo||N.stateNode.implementation!==V.implementation?(N=Al(V,F.mode,ee),N.return=F,N):(N=f(N,V.children||[]),N.return=F,N)}function X(F,N,V,ee,Te){return N===null||N.tag!==7?(N=ta(V,F.mode,ee,Te),N.return=F,N):(N=f(N,V),N.return=F,N)}function ne(F,N,V){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ns(""+N,F.mode,V),N.return=F,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case I:return V=po(N.type,N.key,N.props,null,F.mode,V),Rl(V,N),V.return=F,V;case z:return N=Al(N,F.mode,V),N.return=F,N;case he:return N=_o(N),ne(F,N,V)}if(Oe(N)||ke(N))return N=ta(N,F.mode,V,null),N.return=F,N;if(typeof N.then=="function")return ne(F,Fu(N),V);if(N.$$typeof===K)return ne(F,Nu(F,N),V);Hu(F,N)}return null}function G(F,N,V,ee){var Te=N!==null?N.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Te!==null?null:A(F,N,""+V,ee);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case I:return V.key===Te?M(F,N,V,ee):null;case z:return V.key===Te?Z(F,N,V,ee):null;case he:return V=_o(V),G(F,N,V,ee)}if(Oe(V)||ke(V))return Te!==null?null:X(F,N,V,ee,null);if(typeof V.then=="function")return G(F,N,Fu(V),ee);if(V.$$typeof===K)return G(F,N,Nu(F,V),ee);Hu(F,V)}return null}function W(F,N,V,ee,Te){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return F=F.get(V)||null,A(N,F,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:return F=F.get(ee.key===null?V:ee.key)||null,M(N,F,ee,Te);case z:return F=F.get(ee.key===null?V:ee.key)||null,Z(N,F,ee,Te);case he:return ee=_o(ee),W(F,N,V,ee,Te)}if(Oe(ee)||ke(ee))return F=F.get(V)||null,X(N,F,ee,Te,null);if(typeof ee.then=="function")return W(F,N,V,Fu(ee),Te);if(ee.$$typeof===K)return W(F,N,V,Nu(N,ee),Te);Hu(N,ee)}return null}function be(F,N,V,ee){for(var Te=null,Xe=null,_e=N,Be=N=0,Ye=null;_e!==null&&Be<V.length;Be++){_e.index>Be?(Ye=_e,_e=null):Ye=_e.sibling;var Je=G(F,_e,V[Be],ee);if(Je===null){_e===null&&(_e=Ye);break}e&&_e&&Je.alternate===null&&n(F,_e),N=p(Je,N,Be),Xe===null?Te=Je:Xe.sibling=Je,Xe=Je,_e=Ye}if(Be===V.length)return o(F,_e),$e&&Se(F,Be),Te;if(_e===null){for(;Be<V.length;Be++)_e=ne(F,V[Be],ee),_e!==null&&(N=p(_e,N,Be),Xe===null?Te=_e:Xe.sibling=_e,Xe=_e);return $e&&Se(F,Be),Te}for(_e=c(_e);Be<V.length;Be++)Ye=W(_e,F,Be,V[Be],ee),Ye!==null&&(e&&Ye.alternate!==null&&_e.delete(Ye.key===null?Be:Ye.key),N=p(Ye,N,Be),Xe===null?Te=Ye:Xe.sibling=Ye,Xe=Ye);return e&&_e.forEach(function(_r){return n(F,_r)}),$e&&Se(F,Be),Te}function je(F,N,V,ee){if(V==null)throw Error(s(151));for(var Te=null,Xe=null,_e=N,Be=N=0,Ye=null,Je=V.next();_e!==null&&!Je.done;Be++,Je=V.next()){_e.index>Be?(Ye=_e,_e=null):Ye=_e.sibling;var _r=G(F,_e,Je.value,ee);if(_r===null){_e===null&&(_e=Ye);break}e&&_e&&_r.alternate===null&&n(F,_e),N=p(_r,N,Be),Xe===null?Te=_r:Xe.sibling=_r,Xe=_r,_e=Ye}if(Je.done)return o(F,_e),$e&&Se(F,Be),Te;if(_e===null){for(;!Je.done;Be++,Je=V.next())Je=ne(F,Je.value,ee),Je!==null&&(N=p(Je,N,Be),Xe===null?Te=Je:Xe.sibling=Je,Xe=Je);return $e&&Se(F,Be),Te}for(_e=c(_e);!Je.done;Be++,Je=V.next())Je=W(_e,F,Be,Je.value,ee),Je!==null&&(e&&Je.alternate!==null&&_e.delete(Je.key===null?Be:Je.key),N=p(Je,N,Be),Xe===null?Te=Je:Xe.sibling=Je,Xe=Je);return e&&_e.forEach(function(FC){return n(F,FC)}),$e&&Se(F,Be),Te}function ct(F,N,V,ee){if(typeof V=="object"&&V!==null&&V.type===P&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case I:e:{for(var Te=V.key;N!==null;){if(N.key===Te){if(Te=V.type,Te===P){if(N.tag===7){o(F,N.sibling),ee=f(N,V.props.children),ee.return=F,F=ee;break e}}else if(N.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===he&&_o(Te)===N.type){o(F,N.sibling),ee=f(N,V.props),Rl(ee,V),ee.return=F,F=ee;break e}o(F,N);break}else n(F,N);N=N.sibling}V.type===P?(ee=ta(V.props.children,F.mode,ee,V.key),ee.return=F,F=ee):(ee=po(V.type,V.key,V.props,null,F.mode,ee),Rl(ee,V),ee.return=F,F=ee)}return S(F);case z:e:{for(Te=V.key;N!==null;){if(N.key===Te)if(N.tag===4&&N.stateNode.containerInfo===V.containerInfo&&N.stateNode.implementation===V.implementation){o(F,N.sibling),ee=f(N,V.children||[]),ee.return=F,F=ee;break e}else{o(F,N);break}else n(F,N);N=N.sibling}ee=Al(V,F.mode,ee),ee.return=F,F=ee}return S(F);case he:return V=_o(V),ct(F,N,V,ee)}if(Oe(V))return be(F,N,V,ee);if(ke(V)){if(Te=ke(V),typeof Te!="function")throw Error(s(150));return V=Te.call(V),je(F,N,V,ee)}if(typeof V.then=="function")return ct(F,N,Fu(V),ee);if(V.$$typeof===K)return ct(F,N,Nu(F,V),ee);Hu(F,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,N!==null&&N.tag===6?(o(F,N.sibling),ee=f(N,V),ee.return=F,F=ee):(o(F,N),ee=ns(V,F.mode,ee),ee.return=F,F=ee),S(F)):o(F,N)}return function(F,N,V,ee){try{Ll=0;var Te=ct(F,N,V,ee);return ls=null,Te}catch(_e){if(_e===ss||_e===Bu)throw _e;var Xe=tn(29,_e,null,F.mode);return Xe.lanes=ee,Xe.return=F,Xe}}}var wo=tv(!0),nv=tv(!1),ir=!1;function wh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rr(e,n,o){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(et&2)!==0){var f=c.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),c.pending=n,n=mo(e),tr(e,null,o),n}return Ri(e,c,n,o),mo(e)}function Pl(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194048)!==0)){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,cu(e,o)}}function Th(e,n){var o=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,o=o.next}while(o!==null);p===null?f=p=n:p=p.next=n}else f=p=n;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,callbacks:c.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}var Eh=!1;function Ml(){if(Eh){var e=os;if(e!==null)throw e}}function Il(e,n,o,c){Eh=!1;var f=e.updateQueue;ir=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var M=A,Z=M.next;M.next=null,S===null?p=Z:S.next=Z,S=M;var X=e.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==S&&(A===null?X.firstBaseUpdate=Z:A.next=Z,X.lastBaseUpdate=M))}if(p!==null){var ne=f.baseState;S=0,X=Z=M=null,A=p;do{var G=A.lane&-536870913,W=G!==A.lane;if(W?(Ge&G)===G:(c&G)===G){G!==0&&G===rs&&(Eh=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var be=e,je=A;G=n;var ct=o;switch(je.tag){case 1:if(be=je.payload,typeof be=="function"){ne=be.call(ct,ne,G);break e}ne=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=je.payload,G=typeof be=="function"?be.call(ct,ne,G):be,G==null)break e;ne=T({},ne,G);break e;case 2:ir=!0}}G=A.callback,G!==null&&(e.flags|=64,W&&(e.flags|=8192),W=f.callbacks,W===null?f.callbacks=[G]:W.push(G))}else W={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(Z=X=W,M=ne):X=X.next=W,S|=G;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;W=A,A=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);X===null&&(M=ne),f.baseState=M,f.firstBaseUpdate=Z,f.lastBaseUpdate=X,p===null&&(f.shared.lanes=0),ur|=S,e.lanes=S,e.memoizedState=ne}}function iv(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function av(e,n){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)iv(o[e],n)}var cs=j(null),$u=j(0);function rv(e,n){e=fa,ie($u,e),ie(cs,n),fa=e|n.baseLanes}function Ch(){ie($u,fa),ie(cs,cs.current)}function Ah(){fa=$u.current,Y(cs),Y($u)}var On=j(null),qn=null;function or(e){var n=e.alternate;ie(Ct,Ct.current&1),ie(On,e),qn===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(qn=e)}function kh(e){ie(Ct,Ct.current),ie(On,e),qn===null&&(qn=e)}function ov(e){e.tag===22?(ie(Ct,Ct.current),ie(On,e),qn===null&&(qn=e)):sr()}function sr(){ie(Ct,Ct.current),ie(On,On.current)}function jn(e){Y(On),qn===e&&(qn=null),Y(Ct)}var Ct=j(0);function Vu(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Pm(o)||Mm(o)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,Ne=null,st=null,Lt=null,Zu=!1,us=!1,So=!1,qu=0,Nl=0,ds=null,zE=0;function St(){throw Error(s(321))}function Oh(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Ht(e[o],n[o]))return!1;return!0}function jh(e,n,o,c,f,p){return aa=p,Ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?$v:Zh,So=!1,p=o(c,f),So=!1,us&&(p=lv(n,o,c,f)),sv(e),p}function sv(e){D.H=Ul;var n=st!==null&&st.next!==null;if(aa=0,Lt=st=Ne=null,Zu=!1,Nl=0,ds=null,n)throw Error(s(300));e===null||Rt||(e=e.dependencies,e!==null&&Iu(e)&&(Rt=!0))}function lv(e,n,o,c){Ne=e;var f=0;do{if(us&&(ds=null),Nl=0,us=!1,25<=f)throw Error(s(301));if(f+=1,Lt=st=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}D.H=Vv,p=n(o,c)}while(us);return p}function LE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Dl(n):n,e=e.useState()[0],(st!==null?st.memoizedState:null)!==e&&(Ne.flags|=1024),n}function zh(){var e=qu!==0;return qu=0,e}function Lh(e,n,o){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o}function Rh(e){if(Zu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Zu=!1}aa=0,Lt=st=Ne=null,us=!1,Nl=qu=0,ds=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Ne.memoizedState=Lt=e:Lt=Lt.next=e,Lt}function At(){if(st===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var n=Lt===null?Ne.memoizedState:Lt.next;if(n!==null)Lt=n,st=e;else{if(e===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Lt===null?Ne.memoizedState=Lt=e:Lt=Lt.next=e}return Lt}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var n=Nl;return Nl+=1,ds===null&&(ds=[]),e=J0(ds,e,n),n=Ne,(Lt===null?n.memoizedState:Lt.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?$v:Zh),e}function Yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===K)return Wt(e)}throw Error(s(438,String(e)))}function Ph(e){var n=null,o=Ne.updateQueue;if(o!==null&&(n=o.memoCache),n==null){var c=Ne.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(n={data:c.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),o===null&&(o=Gu(),Ne.updateQueue=o),o.memoCache=n,o=n.data[n.index],o===void 0)for(o=n.data[n.index]=Array(e),c=0;c<e;c++)o[c]=Ue;return n.index++,o}function ra(e,n){return typeof n=="function"?n(e):n}function Wu(e){var n=At();return Mh(n,st,e)}function Mh(e,n,o){var c=e.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var f=e.baseQueue,p=c.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,c.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{n=f.next;var A=S=null,M=null,Z=n,X=!1;do{var ne=Z.lane&-536870913;if(ne!==Z.lane?(Ge&ne)===ne:(aa&ne)===ne){var G=Z.revertLane;if(G===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ne===rs&&(X=!0);else if((aa&G)===G){Z=Z.next,G===rs&&(X=!0);continue}else ne={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},M===null?(A=M=ne,S=p):M=M.next=ne,Ne.lanes|=G,ur|=G;ne=Z.action,So&&o(p,ne),p=Z.hasEagerState?Z.eagerState:o(p,ne)}else G={lane:ne,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},M===null?(A=M=G,S=p):M=M.next=G,Ne.lanes|=ne,ur|=ne;Z=Z.next}while(Z!==null&&Z!==n);if(M===null?S=p:M.next=A,!Ht(p,e.memoizedState)&&(Rt=!0,X&&(o=os,o!==null)))throw o;e.memoizedState=p,e.baseState=S,e.baseQueue=M,c.lastRenderedState=p}return f===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function Ih(e){var n=At(),o=n.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var c=o.dispatch,f=o.pending,p=n.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do p=e(p,S.action),S=S.next;while(S!==f);Ht(p,n.memoizedState)||(Rt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,c]}function cv(e,n,o){var c=Ne,f=At(),p=$e;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=n();var S=!Ht((st||f).memoizedState,o);if(S&&(f.memoizedState=o,Rt=!0),f=f.queue,Bh(fv.bind(null,c,f,e),[e]),f.getSnapshot!==n||S||Lt!==null&&Lt.memoizedState.tag&1){if(c.flags|=2048,fs(9,{destroy:void 0},dv.bind(null,c,f,o,n),null),dt===null)throw Error(s(349));p||(aa&127)!==0||uv(c,n,o)}return o}function uv(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=Ne.updateQueue,n===null?(n=Gu(),Ne.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function dv(e,n,o,c){n.value=o,n.getSnapshot=c,hv(n)&&mv(e)}function fv(e,n,o){return o(function(){hv(n)&&mv(e)})}function hv(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Ht(e,o)}catch{return!0}}function mv(e){var n=Vn(e,2);n!==null&&Sn(n,e,2)}function Nh(e){var n=un();if(typeof e=="function"){var o=e;if(e=o(),So){ei(!0);try{o()}finally{ei(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function pv(e,n,o,c){return e.baseState=o,Mh(e,st,typeof c=="function"?c:ra)}function RE(e,n,o,c,f){if(Ju(e))throw Error(s(485));if(e=n.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};D.T!==null?o(!0):p.isTransition=!1,c(p),o=n.pending,o===null?(p.next=n.pending=p,gv(n,p)):(p.next=o.next,n.pending=o.next=p)}}function gv(e,n){var o=n.action,c=n.payload,f=e.state;if(n.isTransition){var p=D.T,S={};D.T=S;try{var A=o(f,c),M=D.S;M!==null&&M(S,A),vv(e,n,A)}catch(Z){Dh(e,n,Z)}finally{p!==null&&S.types!==null&&(p.types=S.types),D.T=p}}else try{p=o(f,c),vv(e,n,p)}catch(Z){Dh(e,n,Z)}}function vv(e,n,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){yv(e,n,c)},function(c){return Dh(e,n,c)}):yv(e,n,o)}function yv(e,n,o){n.status="fulfilled",n.value=o,bv(n),e.state=o,n=e.pending,n!==null&&(o=n.next,o===n?e.pending=null:(o=o.next,n.next=o,gv(e,o)))}function Dh(e,n,o){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do n.status="rejected",n.reason=o,bv(n),n=n.next;while(n!==c)}e.action=null}function bv(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _v(e,n){return n}function xv(e,n){if($e){var o=dt.formState;if(o!==null){e:{var c=Ne;if($e){if(Ke){t:{for(var f=Ke,p=yn;f.nodeType!==8;){if(!p){f=null;break t}if(f=Gn(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Ke=Gn(f.nextSibling),c=f.data==="F!";break e}}Mi(c)}c=!1}c&&(n=o[0])}}return o=un(),o.memoizedState=o.baseState=n,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_v,lastRenderedState:n},o.queue=c,o=Uv.bind(null,Ne,c),c.dispatch=o,c=Nh(!1),p=Vh.bind(null,Ne,!1,c.queue),c=un(),f={state:n,dispatch:null,action:e,pending:null},c.queue=f,o=RE.bind(null,Ne,f,p,o),f.dispatch=o,c.memoizedState=e,[n,o,!1]}function wv(e){var n=At();return Sv(n,st,e)}function Sv(e,n,o){if(n=Mh(e,n,_v)[0],e=Wu(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var c=Dl(n)}catch(S){throw S===ss?Bu:S}else c=n;n=At();var f=n.queue,p=f.dispatch;return o!==n.memoizedState&&(Ne.flags|=2048,fs(9,{destroy:void 0},PE.bind(null,f,o),null)),[c,p,e]}function PE(e,n){e.action=n}function Tv(e){var n=At(),o=st;if(o!==null)return Sv(n,o,e);At(),n=n.memoizedState,o=At();var c=o.queue.dispatch;return o.memoizedState=e,[n,c,!1]}function fs(e,n,o,c){return e={tag:e,create:o,deps:c,inst:n,next:null},n=Ne.updateQueue,n===null&&(n=Gu(),Ne.updateQueue=n),o=n.lastEffect,o===null?n.lastEffect=e.next=e:(c=o.next,o.next=e,e.next=c,n.lastEffect=e),e}function Ev(){return At().memoizedState}function Ku(e,n,o,c){var f=un();Ne.flags|=e,f.memoizedState=fs(1|n,{destroy:void 0},o,c===void 0?null:c)}function Xu(e,n,o,c){var f=At();c=c===void 0?null:c;var p=f.memoizedState.inst;st!==null&&c!==null&&Oh(c,st.memoizedState.deps)?f.memoizedState=fs(n,p,o,c):(Ne.flags|=e,f.memoizedState=fs(1|n,p,o,c))}function Cv(e,n){Ku(8390656,8,e,n)}function Bh(e,n){Xu(2048,8,e,n)}function ME(e){Ne.flags|=4;var n=Ne.updateQueue;if(n===null)n=Gu(),Ne.updateQueue=n,n.events=[e];else{var o=n.events;o===null?n.events=[e]:o.push(e)}}function Av(e){var n=At().memoizedState;return ME({ref:n,nextImpl:e}),function(){if((et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function kv(e,n){return Xu(4,2,e,n)}function Ov(e,n){return Xu(4,4,e,n)}function jv(e,n){if(typeof n=="function"){e=e();var o=n(e);return function(){typeof o=="function"?o():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zv(e,n,o){o=o!=null?o.concat([e]):null,Xu(4,4,jv.bind(null,n,e),o)}function Uh(){}function Lv(e,n){var o=At();n=n===void 0?null:n;var c=o.memoizedState;return n!==null&&Oh(n,c[1])?c[0]:(o.memoizedState=[e,n],e)}function Rv(e,n){var o=At();n=n===void 0?null:n;var c=o.memoizedState;if(n!==null&&Oh(n,c[1]))return c[0];if(c=e(),So){ei(!0);try{e()}finally{ei(!1)}}return o.memoizedState=[c,n],c}function Fh(e,n,o){return o===void 0||(aa&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=n:(e.memoizedState=o,e=Py(),Ne.lanes|=e,ur|=e,o)}function Pv(e,n,o,c){return Ht(o,n)?o:cs.current!==null?(e=Fh(e,o,c),Ht(e,n)||(Rt=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(Ge&261930)===0?(Rt=!0,e.memoizedState=o):(e=Py(),Ne.lanes|=e,ur|=e,n)}function Mv(e,n,o,c,f){var p=le.p;le.p=p!==0&&8>p?p:8;var S=D.T,A={};D.T=A,Vh(e,!1,n,o);try{var M=f(),Z=D.S;if(Z!==null&&Z(A,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var X=jE(M,c);Bl(e,n,X,Rn(e))}else Bl(e,n,c,Rn(e))}catch(ne){Bl(e,n,{then:function(){},status:"rejected",reason:ne},Rn())}finally{le.p=p,S!==null&&A.types!==null&&(S.types=A.types),D.T=S}}function IE(){}function Hh(e,n,o,c){if(e.tag!==5)throw Error(s(476));var f=Iv(e).queue;Mv(e,f,n,re,o===null?IE:function(){return Nv(e),o(c)})}function Iv(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:re},next:null};var o={};return n.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:o},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nv(e){var n=Iv(e);n.next===null&&(n=e.alternate.memoizedState),Bl(e,n.next.queue,{},Rn())}function $h(){return Wt(nc)}function Dv(){return At().memoizedState}function Bv(){return At().memoizedState}function NE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var o=Rn();e=ar(o);var c=rr(n,e,o);c!==null&&(Sn(c,n,o),Pl(c,n,o)),n={cache:yh()},e.payload=n;return}n=n.return}}function DE(e,n,o){var c=Rn();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ju(e)?Fv(n,o):(o=Tl(e,n,o,c),o!==null&&(Sn(o,e,c),Hv(o,n,c)))}function Uv(e,n,o){var c=Rn();Bl(e,n,o,c)}function Bl(e,n,o,c){var f={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))Fv(n,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,A=p(S,o);if(f.hasEagerState=!0,f.eagerState=A,Ht(A,S))return Ri(e,n,f,0),dt===null&&ho(),!1}catch{}if(o=Tl(e,n,f,c),o!==null)return Sn(o,e,c),Hv(o,n,c),!0}return!1}function Vh(e,n,o,c){if(c={lane:2,revertLane:wm(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Ju(e)){if(n)throw Error(s(479))}else n=Tl(e,o,c,2),n!==null&&Sn(n,e,2)}function Ju(e){var n=e.alternate;return e===Ne||n!==null&&n===Ne}function Fv(e,n){us=Zu=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Hv(e,n,o){if((o&4194048)!==0){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,cu(e,o)}}var Ul={readContext:Wt,use:Yu,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};Ul.useEffectEvent=St;var $v={readContext:Wt,use:Yu,useCallback:function(e,n){return un().memoizedState=[e,n===void 0?null:n],e},useContext:Wt,useEffect:Cv,useImperativeHandle:function(e,n,o){o=o!=null?o.concat([e]):null,Ku(4194308,4,jv.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Ku(4194308,4,e,n)},useInsertionEffect:function(e,n){Ku(4,2,e,n)},useMemo:function(e,n){var o=un();n=n===void 0?null:n;var c=e();if(So){ei(!0);try{e()}finally{ei(!1)}}return o.memoizedState=[c,n],c},useReducer:function(e,n,o){var c=un();if(o!==void 0){var f=o(n);if(So){ei(!0);try{o(n)}finally{ei(!1)}}}else f=n;return c.memoizedState=c.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},c.queue=e,e=e.dispatch=DE.bind(null,Ne,e),[c.memoizedState,e]},useRef:function(e){var n=un();return e={current:e},n.memoizedState=e},useState:function(e){e=Nh(e);var n=e.queue,o=Uv.bind(null,Ne,n);return n.dispatch=o,[e.memoizedState,o]},useDebugValue:Uh,useDeferredValue:function(e,n){var o=un();return Fh(o,e,n)},useTransition:function(){var e=Nh(!1);return e=Mv.bind(null,Ne,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,o){var c=Ne,f=un();if($e){if(o===void 0)throw Error(s(407));o=o()}else{if(o=n(),dt===null)throw Error(s(349));(Ge&127)!==0||uv(c,n,o)}f.memoizedState=o;var p={value:o,getSnapshot:n};return f.queue=p,Cv(fv.bind(null,c,p,e),[e]),c.flags|=2048,fs(9,{destroy:void 0},dv.bind(null,c,p,o,n),null),o},useId:function(){var e=un(),n=dt.identifierPrefix;if($e){var o=me,c=te;o=(c&~(1<<32-sn(c)-1)).toString(32)+o,n="_"+n+"R_"+o,o=qu++,0<o&&(n+="H"+o.toString(32)),n+="_"}else o=zE++,n="_"+n+"r_"+o.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$h,useFormState:xv,useActionState:xv,useOptimistic:function(e){var n=un();n.memoizedState=n.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=o,n=Vh.bind(null,Ne,!0,o),o.dispatch=n,[e,n]},useMemoCache:Ph,useCacheRefresh:function(){return un().memoizedState=NE.bind(null,Ne)},useEffectEvent:function(e){var n=un(),o={impl:e};return n.memoizedState=o,function(){if((et&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},Zh={readContext:Wt,use:Yu,useCallback:Lv,useContext:Wt,useEffect:Bh,useImperativeHandle:zv,useInsertionEffect:kv,useLayoutEffect:Ov,useMemo:Rv,useReducer:Wu,useRef:Ev,useState:function(){return Wu(ra)},useDebugValue:Uh,useDeferredValue:function(e,n){var o=At();return Pv(o,st.memoizedState,e,n)},useTransition:function(){var e=Wu(ra)[0],n=At().memoizedState;return[typeof e=="boolean"?e:Dl(e),n]},useSyncExternalStore:cv,useId:Dv,useHostTransitionStatus:$h,useFormState:wv,useActionState:wv,useOptimistic:function(e,n){var o=At();return pv(o,st,e,n)},useMemoCache:Ph,useCacheRefresh:Bv};Zh.useEffectEvent=Av;var Vv={readContext:Wt,use:Yu,useCallback:Lv,useContext:Wt,useEffect:Bh,useImperativeHandle:zv,useInsertionEffect:kv,useLayoutEffect:Ov,useMemo:Rv,useReducer:Ih,useRef:Ev,useState:function(){return Ih(ra)},useDebugValue:Uh,useDeferredValue:function(e,n){var o=At();return st===null?Fh(o,e,n):Pv(o,st.memoizedState,e,n)},useTransition:function(){var e=Ih(ra)[0],n=At().memoizedState;return[typeof e=="boolean"?e:Dl(e),n]},useSyncExternalStore:cv,useId:Dv,useHostTransitionStatus:$h,useFormState:Tv,useActionState:Tv,useOptimistic:function(e,n){var o=At();return st!==null?pv(o,st,e,n):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Ph,useCacheRefresh:Bv};Vv.useEffectEvent=Av;function qh(e,n,o,c){n=e.memoizedState,o=o(c,n),o=o==null?n:T({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Gh={enqueueSetState:function(e,n,o){e=e._reactInternals;var c=Rn(),f=ar(c);f.payload=n,o!=null&&(f.callback=o),n=rr(e,f,c),n!==null&&(Sn(n,e,c),Pl(n,e,c))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var c=Rn(),f=ar(c);f.tag=1,f.payload=n,o!=null&&(f.callback=o),n=rr(e,f,c),n!==null&&(Sn(n,e,c),Pl(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Rn(),c=ar(o);c.tag=2,n!=null&&(c.callback=n),n=rr(e,c,o),n!==null&&(Sn(n,e,o),Pl(n,e,o))}};function Zv(e,n,o,c,f,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,p,S):n.prototype&&n.prototype.isPureReactComponent?!Xa(o,c)||!Xa(f,p):!0}function qv(e,n,o,c){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==e&&Gh.enqueueReplaceState(n,n.state,null)}function To(e,n){var o=n;if("ref"in n){o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}if(e=e.defaultProps){o===n&&(o=T({},o));for(var f in e)o[f]===void 0&&(o[f]=e[f])}return o}function Gv(e){fo(e)}function Yv(e){console.error(e)}function Wv(e){fo(e)}function Qu(e,n){try{var o=e.onUncaughtError;o(n.value,{componentStack:n.stack})}catch(c){setTimeout(function(){throw c})}}function Kv(e,n,o){try{var c=e.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Yh(e,n,o){return o=ar(o),o.tag=3,o.payload={element:null},o.callback=function(){Qu(e,n)},o}function Xv(e){return e=ar(e),e.tag=3,e}function Jv(e,n,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=c.value;e.payload=function(){return f(p)},e.callback=function(){Kv(n,o,c)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Kv(n,o,c),typeof f!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function BE(e,n,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(n=o.alternate,n!==null&&as(n,o,f,!0),o=On.current,o!==null){switch(o.tag){case 31:case 13:return qn===null?dd():o.alternate===null&&Tt===0&&(Tt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Uu?o.flags|=16384:(n=o.updateQueue,n===null?o.updateQueue=new Set([c]):n.add(c),bm(e,c,f)),!1;case 22:return o.flags|=65536,c===Uu?o.flags|=16384:(n=o.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=n):(o=n.retryQueue,o===null?n.retryQueue=new Set([c]):o.add(c)),bm(e,c,f)),!1}throw Error(s(435,o.tag))}return bm(e,c,f),dd(),!1}if($e)return n=On.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,c!==is&&(e=Error(s(422),{cause:c}),go(l(e,o)))):(c!==is&&(n=Error(s(423),{cause:c}),go(l(n,o))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,c=l(c,o),f=Yh(e.stateNode,c,f),Th(e,f),Tt!==4&&(Tt=2)),!1;var p=Error(s(520),{cause:c});if(p=l(p,o),Yl===null?Yl=[p]:Yl.push(p),Tt!==4&&(Tt=2),n===null)return!0;c=l(c,o),o=n;do{switch(o.tag){case 3:return o.flags|=65536,e=f&-f,o.lanes|=e,e=Yh(o.stateNode,c,e),Th(o,e),!1;case 1:if(n=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dr===null||!dr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Xv(f),Jv(f,e,o,c),Th(o,f),!1}o=o.return}while(o!==null);return!1}var Wh=Error(s(461)),Rt=!1;function Kt(e,n,o,c){n.child=e===null?nv(n,null,o,c):wo(n,e.child,o,c)}function Qv(e,n,o,c,f){o=o.render;var p=n.ref;if("ref"in c){var S={};for(var A in c)A!=="ref"&&(S[A]=c[A])}else S=c;return yo(n),c=jh(e,n,o,S,p,f),A=zh(),e!==null&&!Rt?(Lh(e,n,f),oa(e,n,f)):($e&&A&&Dt(n),n.flags|=1,Kt(e,n,c,f),n.child)}function ey(e,n,o,c,f){if(e===null){var p=o.type;return typeof p=="function"&&!ts(p)&&p.defaultProps===void 0&&o.compare===null?(n.tag=15,n.type=p,ty(e,n,p,c,f)):(e=po(o.type,null,c,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!im(e,f)){var S=p.memoizedProps;if(o=o.compare,o=o!==null?o:Xa,o(S,c)&&e.ref===n.ref)return oa(e,n,f)}return n.flags|=1,e=Zn(p,c),e.ref=n.ref,e.return=n,n.child=e}function ty(e,n,o,c,f){if(e!==null){var p=e.memoizedProps;if(Xa(p,c)&&e.ref===n.ref)if(Rt=!1,n.pendingProps=c=p,im(e,f))(e.flags&131072)!==0&&(Rt=!0);else return n.lanes=e.lanes,oa(e,n,f)}return Kh(e,n,o,c,f)}function ny(e,n,o,c){var f=c.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|o:o,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;c=f&~p}else c=0,n.child=null;return iy(e,n,p,o,c)}if((o&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(n,p!==null?p.cachePool:null),p!==null?rv(n,p):Ch(),ov(n);else return c=n.lanes=536870912,iy(e,n,p!==null?p.baseLanes|o:o,o,c)}else p!==null?(Du(n,p.cachePool),rv(n,p),sr(),n.memoizedState=null):(e!==null&&Du(n,null),Ch(),sr());return Kt(e,n,f,o),n.child}function Fl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function iy(e,n,o,c,f){var p=_h();return p=p===null?null:{parent:zt._currentValue,pool:p},n.memoizedState={baseLanes:o,cachePool:p},e!==null&&Du(n,null),Ch(),ov(n),e!==null&&as(e,n,c,!0),n.childLanes=f,null}function ed(e,n){return n=nd({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ay(e,n,o){return wo(n,e.child,null,o),e=ed(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function UE(e,n,o){var c=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if($e){if(c.mode==="hidden")return e=ed(n,c),n.lanes=536870912,Fl(null,e);if(kh(n),(e=Ke)?(e=gb(e,yn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:q!==null?{id:te,overflow:me}:null,retryLane:536870912,hydrationErrors:null},o=Cl(e),o.return=n,n.child=o,We=n,Ke=null)):e=null,e===null)throw Mi(n);return n.lanes=536870912,null}return ed(n,c)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(kh(n),f)if(n.flags&256)n.flags&=-257,n=ay(e,n,o);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Rt||as(e,n,o,!1),f=(o&e.childLanes)!==0,Rt||f){if(c=dt,c!==null&&(S=uu(c,o),S!==0&&S!==p.retryLane))throw p.retryLane=S,Vn(e,S),Sn(c,e,S),Wh;dd(),n=ay(e,n,o)}else e=p.treeContext,Ke=Gn(S.nextSibling),We=n,$e=!0,Pi=null,yn=!1,e!==null&&cn(n,e),n=ed(n,c),n.flags|=4096;return n}return e=Zn(e.child,{mode:c.mode,children:c.children}),e.ref=n.ref,n.child=e,e.return=n,e}function td(e,n){var o=n.ref;if(o===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(e===null||e.ref!==o)&&(n.flags|=4194816)}}function Kh(e,n,o,c,f){return yo(n),o=jh(e,n,o,c,void 0,f),c=zh(),e!==null&&!Rt?(Lh(e,n,f),oa(e,n,f)):($e&&c&&Dt(n),n.flags|=1,Kt(e,n,o,f),n.child)}function ry(e,n,o,c,f,p){return yo(n),n.updateQueue=null,o=lv(n,c,o,f),sv(e),c=zh(),e!==null&&!Rt?(Lh(e,n,p),oa(e,n,p)):($e&&c&&Dt(n),n.flags|=1,Kt(e,n,o,p),n.child)}function oy(e,n,o,c,f){if(yo(n),n.stateNode===null){var p=ea,S=o.contextType;typeof S=="object"&&S!==null&&(p=Wt(S)),p=new o(c,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Gh,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=c,p.state=n.memoizedState,p.refs={},wh(n),S=o.contextType,p.context=typeof S=="object"&&S!==null?Wt(S):ea,p.state=n.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(qh(n,o,S,c),p.state=n.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Gh.enqueueReplaceState(p,p.state,null),Il(n,c,p,f),Ml(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),c=!0}else if(e===null){p=n.stateNode;var A=n.memoizedProps,M=To(o,A);p.props=M;var Z=p.context,X=o.contextType;S=ea,typeof X=="object"&&X!==null&&(S=Wt(X));var ne=o.getDerivedStateFromProps;X=typeof ne=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,X||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||Z!==S)&&qv(n,p,c,S),ir=!1;var G=n.memoizedState;p.state=G,Il(n,c,p,f),Ml(),Z=n.memoizedState,A||G!==Z||ir?(typeof ne=="function"&&(qh(n,o,ne,c),Z=n.memoizedState),(M=ir||Zv(n,o,M,c,G,Z,S))?(X||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=Z),p.props=c,p.state=Z,p.context=S,c=M):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{p=n.stateNode,Sh(e,n),S=n.memoizedProps,X=To(o,S),p.props=X,ne=n.pendingProps,G=p.context,Z=o.contextType,M=ea,typeof Z=="object"&&Z!==null&&(M=Wt(Z)),A=o.getDerivedStateFromProps,(Z=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==ne||G!==M)&&qv(n,p,c,M),ir=!1,G=n.memoizedState,p.state=G,Il(n,c,p,f),Ml();var W=n.memoizedState;S!==ne||G!==W||ir||e!==null&&e.dependencies!==null&&Iu(e.dependencies)?(typeof A=="function"&&(qh(n,o,A,c),W=n.memoizedState),(X=ir||Zv(n,o,X,c,G,W,M)||e!==null&&e.dependencies!==null&&Iu(e.dependencies))?(Z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(c,W,M),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(c,W,M)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=W),p.props=c,p.state=W,p.context=M,c=X):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),c=!1)}return p=c,td(e,n),c=(n.flags&128)!==0,p||c?(p=n.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&c?(n.child=wo(n,e.child,null,f),n.child=wo(n,null,o,f)):Kt(e,n,o,f),n.memoizedState=p.state,e=n.child):e=oa(e,n,f),e}function sy(e,n,o,c){return na(),n.flags|=256,Kt(e,n,o,c),n.child}var Xh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jh(e){return{baseLanes:e,cachePool:K0()}}function Qh(e,n,o){return e=e!==null?e.childLanes&~o:0,n&&(e|=Ln),e}function ly(e,n,o){var c=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(Ct.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if($e){if(f?or(n):sr(),(e=Ke)?(e=gb(e,yn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:q!==null?{id:te,overflow:me}:null,retryLane:536870912,hydrationErrors:null},o=Cl(e),o.return=n,n.child=o,We=n,Ke=null)):e=null,e===null)throw Mi(n);return Mm(e)?n.lanes=32:n.lanes=536870912,null}var A=c.children;return c=c.fallback,f?(sr(),f=n.mode,A=nd({mode:"hidden",children:A},f),c=ta(c,f,o,null),A.return=n,c.return=n,A.sibling=c,n.child=A,c=n.child,c.memoizedState=Jh(o),c.childLanes=Qh(e,S,o),n.memoizedState=Xh,Fl(null,c)):(or(n),em(n,A))}var M=e.memoizedState;if(M!==null&&(A=M.dehydrated,A!==null)){if(p)n.flags&256?(or(n),n.flags&=-257,n=tm(e,n,o)):n.memoizedState!==null?(sr(),n.child=e.child,n.flags|=128,n=null):(sr(),A=c.fallback,f=n.mode,c=nd({mode:"visible",children:c.children},f),A=ta(A,f,o,null),A.flags|=2,c.return=n,A.return=n,c.sibling=A,n.child=c,wo(n,e.child,null,o),c=n.child,c.memoizedState=Jh(o),c.childLanes=Qh(e,S,o),n.memoizedState=Xh,n=Fl(null,c));else if(or(n),Mm(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var Z=S.dgst;S=Z,c=Error(s(419)),c.stack="",c.digest=S,go({value:c,source:null,stack:null}),n=tm(e,n,o)}else if(Rt||as(e,n,o,!1),S=(o&e.childLanes)!==0,Rt||S){if(S=dt,S!==null&&(c=uu(S,o),c!==0&&c!==M.retryLane))throw M.retryLane=c,Vn(e,c),Sn(S,e,c),Wh;Pm(A)||dd(),n=tm(e,n,o)}else Pm(A)?(n.flags|=192,n.child=e.child,n=null):(e=M.treeContext,Ke=Gn(A.nextSibling),We=n,$e=!0,Pi=null,yn=!1,e!==null&&cn(n,e),n=em(n,c.children),n.flags|=4096);return n}return f?(sr(),A=c.fallback,f=n.mode,M=e.child,Z=M.sibling,c=Zn(M,{mode:"hidden",children:c.children}),c.subtreeFlags=M.subtreeFlags&65011712,Z!==null?A=Zn(Z,A):(A=ta(A,f,o,null),A.flags|=2),A.return=n,c.return=n,c.sibling=A,n.child=c,Fl(null,c),c=n.child,A=e.child.memoizedState,A===null?A=Jh(o):(f=A.cachePool,f!==null?(M=zt._currentValue,f=f.parent!==M?{parent:M,pool:M}:f):f=K0(),A={baseLanes:A.baseLanes|o,cachePool:f}),c.memoizedState=A,c.childLanes=Qh(e,S,o),n.memoizedState=Xh,Fl(e.child,c)):(or(n),o=e.child,e=o.sibling,o=Zn(o,{mode:"visible",children:c.children}),o.return=n,o.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=o,n.memoizedState=null,o)}function em(e,n){return n=nd({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function nd(e,n){return e=tn(22,e,null,n),e.lanes=0,e}function tm(e,n,o){return wo(n,e.child,null,o),e=em(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cy(e,n,o){e.lanes|=n;var c=e.alternate;c!==null&&(c.lanes|=n),gh(e.return,n,o)}function nm(e,n,o,c,f,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=c,S.tail=o,S.tailMode=f,S.treeForkCount=p)}function uy(e,n,o){var c=n.pendingProps,f=c.revealOrder,p=c.tail;c=c.children;var S=Ct.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ie(Ct,S),Kt(e,n,c,o),c=$e?E:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cy(e,o,n);else if(e.tag===19)cy(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(o=n.child,f=null;o!==null;)e=o.alternate,e!==null&&Vu(e)===null&&(f=o),o=o.sibling;o=f,o===null?(f=n.child,n.child=null):(f=o.sibling,o.sibling=null),nm(n,!1,f,o,p,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&Vu(e)===null){n.child=f;break}e=f.sibling,f.sibling=o,o=f,f=e}nm(n,!0,o,null,p,c);break;case"together":nm(n,!1,null,null,void 0,c);break;default:n.memoizedState=null}return n.child}function oa(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),ur|=n.lanes,(o&n.childLanes)===0)if(e!==null){if(as(e,n,o,!1),(o&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,o=Zn(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Zn(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function im(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Iu(e)))}function FE(e,n,o){switch(n.tag){case 3:nt(n,n.stateNode.containerInfo),nr(n,zt,e.memoizedState.cache),na();break;case 27:case 5:kt(n);break;case 4:nt(n,n.stateNode.containerInfo);break;case 10:nr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,kh(n),null;break;case 13:var c=n.memoizedState;if(c!==null)return c.dehydrated!==null?(or(n),n.flags|=128,null):(o&n.child.childLanes)!==0?ly(e,n,o):(or(n),e=oa(e,n,o),e!==null?e.sibling:null);or(n);break;case 19:var f=(e.flags&128)!==0;if(c=(o&n.childLanes)!==0,c||(as(e,n,o,!1),c=(o&n.childLanes)!==0),f){if(c)return uy(e,n,o);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Ct,Ct.current),c)break;return null;case 22:return n.lanes=0,ny(e,n,o,n.pendingProps);case 24:nr(n,zt,e.memoizedState.cache)}return oa(e,n,o)}function dy(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rt=!0;else{if(!im(e,o)&&(n.flags&128)===0)return Rt=!1,FE(e,n,o);Rt=(e.flags&131072)!==0}else Rt=!1,$e&&(n.flags&1048576)!==0&&De(n,E,n.index);switch(n.lanes=0,n.tag){case 16:e:{var c=n.pendingProps;if(e=_o(n.elementType),n.type=e,typeof e=="function")ts(e)?(c=To(e,c),n.tag=1,n=oy(null,n,e,c,o)):(n.tag=0,n=Kh(null,n,e,c,o));else{if(e!=null){var f=e.$$typeof;if(f===ue){n.tag=11,n=Qv(null,n,e,c,o);break e}else if(f===Q){n.tag=14,n=ey(null,n,e,c,o);break e}}throw n=ae(e)||e,Error(s(306,n,""))}}return n;case 0:return Kh(e,n,n.type,n.pendingProps,o);case 1:return c=n.type,f=To(c,n.pendingProps),oy(e,n,c,f,o);case 3:e:{if(nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));c=n.pendingProps;var p=n.memoizedState;f=p.element,Sh(e,n),Il(n,c,null,o);var S=n.memoizedState;if(c=S.cache,nr(n,zt,c),c!==p.cache&&vh(n,[zt],o,!0),Ml(),c=S.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=sy(e,n,c,o);break e}else if(c!==f){f=l(Error(s(424)),n),go(f),n=sy(e,n,c,o);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=Gn(e.firstChild),We=n,$e=!0,Pi=null,yn=!0,o=nv(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(na(),c===f){n=oa(e,n,o);break e}Kt(e,n,c,o)}n=n.child}return n;case 26:return td(e,n),e===null?(o=wb(n.type,null,n.pendingProps,null))?n.memoizedState=o:$e||(o=n.type,e=n.pendingProps,c=yd(pe.current).createElement(o),c[Ot]=n,c[Ft]=e,Xt(c,o,e),jt(c),n.stateNode=c):n.memoizedState=wb(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&$e&&(c=n.stateNode=bb(n.type,n.pendingProps,pe.current),We=n,yn=!0,f=Ke,pr(n.type)?(Im=f,Ke=Gn(c.firstChild)):Ke=f),Kt(e,n,n.pendingProps.children,o),td(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&$e&&((f=c=Ke)&&(c=vC(c,n.type,n.pendingProps,yn),c!==null?(n.stateNode=c,We=n,Ke=Gn(c.firstChild),yn=!1,f=!0):f=!1),f||Mi(n)),kt(n),f=n.type,p=n.pendingProps,S=e!==null?e.memoizedProps:null,c=p.children,zm(f,p)?c=null:S!==null&&zm(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=jh(e,n,LE,null,null,o),nc._currentValue=f),td(e,n),Kt(e,n,c,o),n.child;case 6:return e===null&&$e&&((e=o=Ke)&&(o=yC(o,n.pendingProps,yn),o!==null?(n.stateNode=o,We=n,Ke=null,e=!0):e=!1),e||Mi(n)),null;case 13:return ly(e,n,o);case 4:return nt(n,n.stateNode.containerInfo),c=n.pendingProps,e===null?n.child=wo(n,null,c,o):Kt(e,n,c,o),n.child;case 11:return Qv(e,n,n.type,n.pendingProps,o);case 7:return Kt(e,n,n.pendingProps,o),n.child;case 8:return Kt(e,n,n.pendingProps.children,o),n.child;case 12:return Kt(e,n,n.pendingProps.children,o),n.child;case 10:return c=n.pendingProps,nr(n,n.type,c.value),Kt(e,n,c.children,o),n.child;case 9:return f=n.type._context,c=n.pendingProps.children,yo(n),f=Wt(f),c=c(f),n.flags|=1,Kt(e,n,c,o),n.child;case 14:return ey(e,n,n.type,n.pendingProps,o);case 15:return ty(e,n,n.type,n.pendingProps,o);case 19:return uy(e,n,o);case 31:return UE(e,n,o);case 22:return ny(e,n,o,n.pendingProps);case 24:return yo(n),c=Wt(zt),e===null?(f=_h(),f===null&&(f=dt,p=yh(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),n.memoizedState={parent:c,cache:f},wh(n),nr(n,zt,f)):((e.lanes&o)!==0&&(Sh(e,n),Il(n,null,null,o),Ml()),f=e.memoizedState,p=n.memoizedState,f.parent!==c?(f={parent:c,cache:c},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),nr(n,zt,c)):(c=p.cache,nr(n,zt,c),c!==f.cache&&vh(n,[zt],o,!0))),Kt(e,n,n.pendingProps.children,o),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(e){e.flags|=4}function am(e,n,o,c,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Dy())e.flags|=8192;else throw xo=Uu,xh}else e.flags&=-16777217}function fy(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ab(n))if(Dy())e.flags|=8192;else throw xo=Uu,xh}function id(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?su():536870912,e.lanes|=n,gs|=n)}function Hl(e,n){if(!$e)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function mt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,c=0;if(n)for(var f=e.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=c,e.childLanes=o,n}function HE(e,n,o){var c=n.pendingProps;switch(wt(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(n),null;case 1:return mt(n),null;case 3:return o=n.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),n.memoizedState.cache!==c&&(n.flags|=2048),ia(zt),Qe(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(si(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ol())),mt(n),null;case 26:var f=n.type,p=n.memoizedState;return e===null?(sa(n),p!==null?(mt(n),fy(n,p)):(mt(n),am(n,f,null,c,o))):p?p!==e.memoizedState?(sa(n),mt(n),fy(n,p)):(mt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==c&&sa(n),mt(n),am(n,f,e,c,o)),null;case 27:if(xi(n),o=pe.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&sa(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return mt(n),null}e=oe.current,si(n)?kl(n):(e=bb(f,c,o),n.stateNode=e,sa(n))}return mt(n),null;case 5:if(xi(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==c&&sa(n);else{if(!c){if(n.stateNode===null)throw Error(s(166));return mt(n),null}if(p=oe.current,si(n))kl(n);else{var S=yd(pe.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof c.is=="string"?S.createElement("select",{is:c.is}):S.createElement("select"),c.multiple?p.multiple=!0:c.size&&(p.size=c.size);break;default:p=typeof c.is=="string"?S.createElement(f,{is:c.is}):S.createElement(f)}}p[Ot]=n,p[Ft]=c;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Xt(p,f,c),f){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&sa(n)}}return mt(n),am(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,o),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==c&&sa(n);else{if(typeof c!="string"&&n.stateNode===null)throw Error(s(166));if(e=pe.current,si(n)){if(e=n.stateNode,o=n.memoizedProps,c=null,f=We,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}e[Ot]=n,e=!!(e.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||lb(e.nodeValue,o)),e||Mi(n,!0)}else e=yd(e).createTextNode(c),e[Ot]=n,n.stateNode=e}return mt(n),null;case 31:if(o=n.memoizedState,e===null||e.memoizedState!==null){if(c=si(n),o!==null){if(e===null){if(!c)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ot]=n}else na(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mt(n),e=!1}else o=Ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mt(n),null;case 13:if(c=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=si(n),c!==null&&c.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ot]=n}else na(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mt(n),f=!1}else f=Ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=o,n):(o=c!==null,e=e!==null&&e.memoizedState!==null,o&&(c=n.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool),p=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(p=c.memoizedState.cachePool.pool),p!==f&&(c.flags|=2048)),o!==e&&o&&(n.child.flags|=8192),id(n,n.updateQueue),mt(n),null);case 4:return Qe(),e===null&&Cm(n.stateNode.containerInfo),mt(n),null;case 10:return ia(n.type),mt(n),null;case 19:if(Y(Ct),c=n.memoizedState,c===null)return mt(n),null;if(f=(n.flags&128)!==0,p=c.rendering,p===null)if(f)Hl(c,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Vu(e),p!==null){for(n.flags|=128,Hl(c,!1),e=p.updateQueue,n.updateQueue=e,id(n,e),n.subtreeFlags=0,e=o,o=n.child;o!==null;)El(o,e),o=o.sibling;return ie(Ct,Ct.current&1|2),$e&&Se(n,c.treeForkCount),n.child}e=e.sibling}c.tail!==null&&on()>ld&&(n.flags|=128,f=!0,Hl(c,!1),n.lanes=4194304)}else{if(!f)if(e=Vu(p),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,id(n,e),Hl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!$e)return mt(n),null}else 2*on()-c.renderingStartTime>ld&&o!==536870912&&(n.flags|=128,f=!0,Hl(c,!1),n.lanes=4194304);c.isBackwards?(p.sibling=n.child,n.child=p):(e=c.last,e!==null?e.sibling=p:n.child=p,c.last=p)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=on(),e.sibling=null,o=Ct.current,ie(Ct,f?o&1|2:o&1),$e&&Se(n,c.treeForkCount),e):(mt(n),null);case 22:case 23:return jn(n),Ah(),c=n.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(n.flags|=8192):c&&(n.flags|=8192),c?(o&536870912)!==0&&(n.flags&128)===0&&(mt(n),n.subtreeFlags&6&&(n.flags|=8192)):mt(n),o=n.updateQueue,o!==null&&id(n,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),c=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==o&&(n.flags|=2048),e!==null&&Y(bo),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(zt),mt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $E(e,n){switch(wt(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(zt),Qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xi(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(Ct),null;case 4:return Qe(),null;case 10:return ia(n.type),null;case 22:case 23:return jn(n),Ah(),e!==null&&Y(bo),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(zt),null;case 25:return null;default:return null}}function hy(e,n){switch(wt(n),n.tag){case 3:ia(zt),Qe();break;case 26:case 27:case 5:xi(n);break;case 4:Qe();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:Y(Ct);break;case 10:ia(n.type);break;case 22:case 23:jn(n),Ah(),e!==null&&Y(bo);break;case 24:ia(zt)}}function $l(e,n){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){c=void 0;var p=o.create,S=o.inst;c=p(),S.destroy=c}o=o.next}while(o!==f)}}catch(A){rt(n,n.return,A)}}function lr(e,n,o){try{var c=n.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var p=f.next;c=p;do{if((c.tag&e)===e){var S=c.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=n;var M=o,Z=A;try{Z()}catch(X){rt(f,M,X)}}}c=c.next}while(c!==p)}}catch(X){rt(n,n.return,X)}}function my(e){var n=e.updateQueue;if(n!==null){var o=e.stateNode;try{av(n,o)}catch(c){rt(e,e.return,c)}}}function py(e,n,o){o.props=To(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(c){rt(e,n,c)}}function Vl(e,n){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof o=="function"?e.refCleanup=o(c):o.current=c}}catch(f){rt(e,n,f)}}function Ni(e,n){var o=e.ref,c=e.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){rt(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(e,n,f)}else o.current=null}function gy(e){var n=e.type,o=e.memoizedProps,c=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){rt(e,e.return,f)}}function rm(e,n,o){try{var c=e.stateNode;dC(c,e.type,o,n),c[Ft]=n}catch(f){rt(e,e.return,f)}}function vy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pr(e.type)||e.tag===4}function om(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sm(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,n):(n=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,n.appendChild(e),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=mn));else if(c!==4&&(c===27&&pr(e.type)&&(o=e.stateNode,n=null),e=e.child,e!==null))for(sm(e,n,o),e=e.sibling;e!==null;)sm(e,n,o),e=e.sibling}function ad(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(c!==4&&(c===27&&pr(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(ad(e,n,o),e=e.sibling;e!==null;)ad(e,n,o),e=e.sibling}function yy(e){var n=e.stateNode,o=e.memoizedProps;try{for(var c=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Xt(n,c,o),n[Ot]=e,n[Ft]=o}catch(p){rt(e,e.return,p)}}var la=!1,Pt=!1,lm=!1,by=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function VE(e,n){if(e=e.containerInfo,Om=Ed,e=so(e),Oi(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var S=0,A=-1,M=-1,Z=0,X=0,ne=e,G=null;t:for(;;){for(var W;ne!==o||f!==0&&ne.nodeType!==3||(A=S+f),ne!==p||c!==0&&ne.nodeType!==3||(M=S+c),ne.nodeType===3&&(S+=ne.nodeValue.length),(W=ne.firstChild)!==null;)G=ne,ne=W;for(;;){if(ne===e)break t;if(G===o&&++Z===f&&(A=S),G===p&&++X===c&&(M=S),(W=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=W}o=A===-1||M===-1?null:{start:A,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;for(jm={focusedElem:e,selectionRange:o},Ed=!1,Vt=n;Vt!==null;)if(n=Vt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Vt=e;else for(;Vt!==null;){switch(n=Vt,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)f=e[o],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,o=n,f=p.memoizedProps,p=p.memoizedState,c=o.stateNode;try{var be=To(o.type,f);e=c.getSnapshotBeforeUpdate(be,p),c.__reactInternalSnapshotBeforeUpdate=e}catch(je){rt(o,o.return,je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,o=e.nodeType,o===9)Rm(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Vt=e;break}Vt=n.return}}function _y(e,n,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ua(e,o),c&4&&$l(5,o);break;case 1:if(ua(e,o),c&4)if(e=o.stateNode,n===null)try{e.componentDidMount()}catch(S){rt(o,o.return,S)}else{var f=To(o.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){rt(o,o.return,S)}}c&64&&my(o),c&512&&Vl(o,o.return);break;case 3:if(ua(e,o),c&64&&(e=o.updateQueue,e!==null)){if(n=null,o.child!==null)switch(o.child.tag){case 27:case 5:n=o.child.stateNode;break;case 1:n=o.child.stateNode}try{av(e,n)}catch(S){rt(o,o.return,S)}}break;case 27:n===null&&c&4&&yy(o);case 26:case 5:ua(e,o),n===null&&c&4&&gy(o),c&512&&Vl(o,o.return);break;case 12:ua(e,o);break;case 31:ua(e,o),c&4&&Sy(e,o);break;case 13:ua(e,o),c&4&&Ty(e,o),c&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=QE.bind(null,o),bC(e,o))));break;case 22:if(c=o.memoizedState!==null||la,!c){n=n!==null&&n.memoizedState!==null||Pt,f=la;var p=Pt;la=c,(Pt=n)&&!p?da(e,o,(o.subtreeFlags&8772)!==0):ua(e,o),la=f,Pt=p}break;case 30:break;default:ua(e,o)}}function xy(e){var n=e.alternate;n!==null&&(e.alternate=null,xy(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&sl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yt=null,bn=!1;function ca(e,n,o){for(o=o.child;o!==null;)wy(e,n,o),o=o.sibling}function wy(e,n,o){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Na,o)}catch{}switch(o.tag){case 26:Pt||Ni(o,n),ca(e,n,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Pt||Ni(o,n);var c=yt,f=bn;pr(o.type)&&(yt=o.stateNode,bn=!1),ca(e,n,o),Ql(o.stateNode),yt=c,bn=f;break;case 5:Pt||Ni(o,n);case 6:if(c=yt,f=bn,yt=null,ca(e,n,o),yt=c,bn=f,yt!==null)if(bn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(p){rt(o,n,p)}else try{yt.removeChild(o.stateNode)}catch(p){rt(o,n,p)}break;case 18:yt!==null&&(bn?(e=yt,mb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Ts(e)):mb(yt,o.stateNode));break;case 4:c=yt,f=bn,yt=o.stateNode.containerInfo,bn=!0,ca(e,n,o),yt=c,bn=f;break;case 0:case 11:case 14:case 15:lr(2,o,n),Pt||lr(4,o,n),ca(e,n,o);break;case 1:Pt||(Ni(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"&&py(o,n,c)),ca(e,n,o);break;case 21:ca(e,n,o);break;case 22:Pt=(c=Pt)||o.memoizedState!==null,ca(e,n,o),Pt=c;break;default:ca(e,n,o)}}function Sy(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ts(e)}catch(o){rt(n,n.return,o)}}}function Ty(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ts(e)}catch(o){rt(n,n.return,o)}}function ZE(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new by),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new by),n;default:throw Error(s(435,e.tag))}}function rd(e,n){var o=ZE(e);n.forEach(function(c){if(!o.has(c)){o.add(c);var f=eC.bind(null,e,c);c.then(f,f)}})}function _n(e,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],p=e,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(pr(A.type)){yt=A.stateNode,bn=!1;break e}break;case 5:yt=A.stateNode,bn=!1;break e;case 3:case 4:yt=A.stateNode.containerInfo,bn=!0;break e}A=A.return}if(yt===null)throw Error(s(160));wy(p,S,f),yt=null,bn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ey(n,e),n=n.sibling}var ci=null;function Ey(e,n){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_n(n,e),xn(e),c&4&&(lr(3,e,e.return),$l(3,e),lr(5,e,e.return));break;case 1:_n(n,e),xn(e),c&512&&(Pt||o===null||Ni(o,o.return)),c&64&&la&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=ci;if(_n(n,e),xn(e),c&512&&(Pt||o===null||Ni(o,o.return)),c&4){var p=o!==null?o.memoizedState:null;if(c=e.memoizedState,o===null)if(c===null)if(e.stateNode===null){e:{c=e.type,o=e.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Zr]||p[Ot]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(c),f.head.insertBefore(p,f.querySelector("head > title"))),Xt(p,c,o),p[Ot]=e,jt(p),c=p;break e;case"link":var S=Eb("link","href",f).get(c+(o.href||""));if(S){for(var A=0;A<S.length;A++)if(p=S[A],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(A,1);break t}}p=f.createElement(c),Xt(p,c,o),f.head.appendChild(p);break;case"meta":if(S=Eb("meta","content",f).get(c+(o.content||""))){for(A=0;A<S.length;A++)if(p=S[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(A,1);break t}}p=f.createElement(c),Xt(p,c,o),f.head.appendChild(p);break;default:throw Error(s(468,c))}p[Ot]=e,jt(p),c=p}e.stateNode=c}else Cb(f,e.type,e.stateNode);else e.stateNode=Tb(f,c,e.memoizedProps);else p!==c?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,c===null?Cb(f,e.type,e.stateNode):Tb(f,c,e.memoizedProps)):c===null&&e.stateNode!==null&&rm(e,e.memoizedProps,o.memoizedProps)}break;case 27:_n(n,e),xn(e),c&512&&(Pt||o===null||Ni(o,o.return)),o!==null&&c&4&&rm(e,e.memoizedProps,o.memoizedProps);break;case 5:if(_n(n,e),xn(e),c&512&&(Pt||o===null||Ni(o,o.return)),e.flags&32){f=e.stateNode;try{Dn(f,"")}catch(be){rt(e,e.return,be)}}c&4&&e.stateNode!=null&&(f=e.memoizedProps,rm(e,f,o!==null?o.memoizedProps:f)),c&1024&&(lm=!0);break;case 6:if(_n(n,e),xn(e),c&4){if(e.stateNode===null)throw Error(s(162));c=e.memoizedProps,o=e.stateNode;try{o.nodeValue=c}catch(be){rt(e,e.return,be)}}break;case 3:if(xd=null,f=ci,ci=bd(n.containerInfo),_n(n,e),ci=f,xn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ts(n.containerInfo)}catch(be){rt(e,e.return,be)}lm&&(lm=!1,Cy(e));break;case 4:c=ci,ci=bd(e.stateNode.containerInfo),_n(n,e),xn(e),ci=c;break;case 12:_n(n,e),xn(e);break;case 31:_n(n,e),xn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,rd(e,c)));break;case 13:_n(n,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sd=on()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,rd(e,c)));break;case 22:f=e.memoizedState!==null;var M=o!==null&&o.memoizedState!==null,Z=la,X=Pt;if(la=Z||f,Pt=X||M,_n(n,e),Pt=X,la=Z,xn(e),c&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(o===null||M||la||Pt||Eo(e)),o=null,n=e;;){if(n.tag===5||n.tag===26){if(o===null){M=o=n;try{if(p=M.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=M.stateNode;var ne=M.memoizedProps.style,G=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(be){rt(M,M.return,be)}}}else if(n.tag===6){if(o===null){M=n;try{M.stateNode.nodeValue=f?"":M.memoizedProps}catch(be){rt(M,M.return,be)}}}else if(n.tag===18){if(o===null){M=n;try{var W=M.stateNode;f?pb(W,!0):pb(M.stateNode,!1)}catch(be){rt(M,M.return,be)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;o===n&&(o=null),n=n.return}o===n&&(o=null),n.sibling.return=n.return,n=n.sibling}c&4&&(c=e.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,rd(e,o))));break;case 19:_n(n,e),xn(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,rd(e,c)));break;case 30:break;case 21:break;default:_n(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{for(var o,c=e.return;c!==null;){if(vy(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=om(e);ad(e,p,f);break;case 5:var S=o.stateNode;o.flags&32&&(Dn(S,""),o.flags&=-33);var A=om(e);ad(e,A,S);break;case 3:case 4:var M=o.stateNode.containerInfo,Z=om(e);sm(e,Z,M);break;default:throw Error(s(161))}}catch(X){rt(e,e.return,X)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_y(e,n.alternate,n),n=n.sibling}function Eo(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:lr(4,n,n.return),Eo(n);break;case 1:Ni(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&py(n,n.return,o),Eo(n);break;case 27:Ql(n.stateNode);case 26:case 5:Ni(n,n.return),Eo(n);break;case 22:n.memoizedState===null&&Eo(n);break;case 30:Eo(n);break;default:Eo(n)}e=e.sibling}}function da(e,n,o){for(o=o&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var c=n.alternate,f=e,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:da(f,p,o),$l(4,p);break;case 1:if(da(f,p,o),c=p,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Z){rt(c,c.return,Z)}if(c=p,f=c.updateQueue,f!==null){var A=c.stateNode;try{var M=f.shared.hiddenCallbacks;if(M!==null)for(f.shared.hiddenCallbacks=null,f=0;f<M.length;f++)iv(M[f],A)}catch(Z){rt(c,c.return,Z)}}o&&S&64&&my(p),Vl(p,p.return);break;case 27:yy(p);case 26:case 5:da(f,p,o),o&&c===null&&S&4&&gy(p),Vl(p,p.return);break;case 12:da(f,p,o);break;case 31:da(f,p,o),o&&S&4&&Sy(f,p);break;case 13:da(f,p,o),o&&S&4&&Ty(f,p);break;case 22:p.memoizedState===null&&da(f,p,o),Vl(p,p.return);break;case 30:break;default:da(f,p,o)}n=n.sibling}}function cm(e,n){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&jl(o))}function um(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jl(e))}function ui(e,n,o,c){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ay(e,n,o,c),n=n.sibling}function Ay(e,n,o,c){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ui(e,n,o,c),f&2048&&$l(9,n);break;case 1:ui(e,n,o,c);break;case 3:ui(e,n,o,c),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jl(e)));break;case 12:if(f&2048){ui(e,n,o,c),e=n.stateNode;try{var p=n.memoizedProps,S=p.id,A=p.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){rt(n,n.return,M)}}else ui(e,n,o,c);break;case 31:ui(e,n,o,c);break;case 13:ui(e,n,o,c);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?ui(e,n,o,c):Zl(e,n):p._visibility&2?ui(e,n,o,c):(p._visibility|=2,hs(e,n,o,c,(n.subtreeFlags&10256)!==0||!1)),f&2048&&cm(S,n);break;case 24:ui(e,n,o,c),f&2048&&um(n.alternate,n);break;default:ui(e,n,o,c)}}function hs(e,n,o,c,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,S=n,A=o,M=c,Z=S.flags;switch(S.tag){case 0:case 11:case 15:hs(p,S,A,M,f),$l(8,S);break;case 23:break;case 22:var X=S.stateNode;S.memoizedState!==null?X._visibility&2?hs(p,S,A,M,f):Zl(p,S):(X._visibility|=2,hs(p,S,A,M,f)),f&&Z&2048&&cm(S.alternate,S);break;case 24:hs(p,S,A,M,f),f&&Z&2048&&um(S.alternate,S);break;default:hs(p,S,A,M,f)}n=n.sibling}}function Zl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var o=e,c=n,f=c.flags;switch(c.tag){case 22:Zl(o,c),f&2048&&cm(c.alternate,c);break;case 24:Zl(o,c),f&2048&&um(c.alternate,c);break;default:Zl(o,c)}n=n.sibling}}var ql=8192;function ms(e,n,o){if(e.subtreeFlags&ql)for(e=e.child;e!==null;)ky(e,n,o),e=e.sibling}function ky(e,n,o){switch(e.tag){case 26:ms(e,n,o),e.flags&ql&&e.memoizedState!==null&&zC(o,ci,e.memoizedState,e.memoizedProps);break;case 5:ms(e,n,o);break;case 3:case 4:var c=ci;ci=bd(e.stateNode.containerInfo),ms(e,n,o),ci=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=ql,ql=16777216,ms(e,n,o),ql=c):ms(e,n,o));break;default:ms(e,n,o)}}function Oy(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var o=0;o<n.length;o++){var c=n[o];Vt=c,zy(c,e)}Oy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jy(e),e=e.sibling}function jy(e){switch(e.tag){case 0:case 11:case 15:Gl(e),e.flags&2048&&lr(9,e,e.return);break;case 3:Gl(e);break;case 12:Gl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,od(e)):Gl(e);break;default:Gl(e)}}function od(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var o=0;o<n.length;o++){var c=n[o];Vt=c,zy(c,e)}Oy(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:lr(8,n,n.return),od(n);break;case 22:o=n.stateNode,o._visibility&2&&(o._visibility&=-3,od(n));break;default:od(n)}e=e.sibling}}function zy(e,n){for(;Vt!==null;){var o=Vt;switch(o.tag){case 0:case 11:case 15:lr(8,o,n);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:jl(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Vt=c;else e:for(o=e;Vt!==null;){c=Vt;var f=c.sibling,p=c.return;if(xy(c),c===o){Vt=null;break e}if(f!==null){f.return=p,Vt=f;break e}Vt=p}}}var qE={getCacheForType:function(e){var n=Wt(zt),o=n.data.get(e);return o===void 0&&(o=e(),n.data.set(e,o)),o},cacheSignal:function(){return Wt(zt).controller.signal}},GE=typeof WeakMap=="function"?WeakMap:Map,et=0,dt=null,Ve=null,Ge=0,at=0,zn=null,cr=!1,ps=!1,dm=!1,fa=0,Tt=0,ur=0,Co=0,fm=0,Ln=0,gs=0,Yl=null,wn=null,hm=!1,sd=0,Ly=0,ld=1/0,cd=null,dr=null,Bt=0,fr=null,vs=null,ha=0,mm=0,pm=null,Ry=null,Wl=0,gm=null;function Rn(){return(et&2)!==0&&Ge!==0?Ge&-Ge:D.T!==null?wm():rl()}function Py(){if(Ln===0)if((Ge&536870912)===0||$e){var e=Hr;Hr<<=1,(Hr&3932160)===0&&(Hr=262144),Ln=e}else Ln=536870912;return e=On.current,e!==null&&(e.flags|=32),Ln}function Sn(e,n,o){(e===dt&&(at===2||at===9)||e.cancelPendingCommit!==null)&&(ys(e,0),hr(e,Ge,Ln,!1)),qi(e,o),((et&2)===0||e!==dt)&&(e===dt&&((et&2)===0&&(Co|=o),Tt===4&&hr(e,Ge,Ln,!1)),Di(e))}function My(e,n,o){if((et&6)!==0)throw Error(s(327));var c=!o&&(n&127)===0&&(n&e.expiredLanes)===0||Vr(e,n),f=c?KE(e,n):ym(e,n,!0),p=c;do{if(f===0){ps&&!c&&hr(e,n,0,!1);break}else{if(o=e.current.alternate,p&&!YE(o)){f=ym(e,n,!1),p=!1;continue}if(f===2){if(p=n,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=e;f=Yl;var M=A.current.memoizedState.isDehydrated;if(M&&(ys(A,S).flags|=256),S=ym(A,S,!1),S!==2){if(dm&&!M){A.errorRecoveryDisabledLanes|=p,Co|=p,f=4;break e}p=wn,wn=f,p!==null&&(wn===null?wn=p:wn.push.apply(wn,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){ys(e,0),hr(e,n,0,!0);break}e:{switch(c=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:hr(c,n,Ln,!cr);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(f=sd+300-on(),10<f)){if(hr(c,n,Ln,!cr),Do(c,0,!0)!==0)break e;ha=n,c.timeoutHandle=fb(Iy.bind(null,c,o,wn,cd,hm,n,Ln,Co,gs,cr,p,"Throttled",-0,0),f);break e}Iy(c,o,wn,cd,hm,n,Ln,Co,gs,cr,p,null,-0,0)}}break}while(!0);Di(e)}function Iy(e,n,o,c,f,p,S,A,M,Z,X,ne,G,W){if(e.timeoutHandle=-1,ne=n.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},ky(n,p,ne);var be=(p&62914560)===p?sd-on():(p&4194048)===p?Ly-on():0;if(be=LC(ne,be),be!==null){ha=p,e.cancelPendingCommit=be(Vy.bind(null,e,n,p,o,c,f,S,A,M,X,ne,null,G,W)),hr(e,p,S,!Z);return}}Vy(e,n,p,o,c,f,S,A,M)}function YE(e){for(var n=e;;){var o=n.tag;if((o===0||o===11||o===15)&&n.flags&16384&&(o=n.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],p=f.getSnapshot;f=f.value;try{if(!Ht(p(),f))return!1}catch{return!1}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n,o,c){n&=~fm,n&=~Co,e.suspendedLanes|=n,e.pingedLanes&=~n,c&&(e.warmLanes|=n),c=e.expirationTimes;for(var f=n;0<f;){var p=31-sn(f),S=1<<p;c[p]=-1,f&=~S}o!==0&&lu(e,o,n)}function ud(){return(et&6)===0?(Kl(0),!1):!0}function vm(){if(Ve!==null){if(at===0)var e=Ve.return;else e=Ve,li=Ii=null,Rh(e),ls=null,Ll=0,e=Ve;for(;e!==null;)hy(e.alternate,e),e=e.return;Ve=null}}function ys(e,n){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,mC(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ha=0,vm(),dt=e,Ve=o=Zn(e.current,null),Ge=n,at=0,zn=null,cr=!1,ps=Vr(e,n),dm=!1,gs=Ln=fm=Co=ur=Tt=0,wn=Yl=null,hm=!1,(n&8)!==0&&(n|=n&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=n;0<c;){var f=31-sn(c),p=1<<f;n|=e[f],c&=~p}return fa=n,ho(),o}function Ny(e,n){Ne=null,D.H=Ul,n===ss||n===Bu?(n=Q0(),at=3):n===xh?(n=Q0(),at=4):at=n===Wh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zn=n,Ve===null&&(Tt=1,Qu(e,l(n,e.current)))}function Dy(){var e=On.current;return e===null?!0:(Ge&4194048)===Ge?qn===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===qn:!1}function By(){var e=D.H;return D.H=Ul,e===null?Ul:e}function Uy(){var e=D.A;return D.A=qE,e}function dd(){Tt=4,cr||(Ge&4194048)!==Ge&&On.current!==null||(ps=!0),(ur&134217727)===0&&(Co&134217727)===0||dt===null||hr(dt,Ge,Ln,!1)}function ym(e,n,o){var c=et;et|=2;var f=By(),p=Uy();(dt!==e||Ge!==n)&&(cd=null,ys(e,n)),n=!1;var S=Tt;e:do try{if(at!==0&&Ve!==null){var A=Ve,M=zn;switch(at){case 8:vm(),S=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(n=!0);var Z=at;if(at=0,zn=null,bs(e,A,M,Z),o&&ps){S=0;break e}break;default:Z=at,at=0,zn=null,bs(e,A,M,Z)}}WE(),S=Tt;break}catch(X){Ny(e,X)}while(!0);return n&&e.shellSuspendCounter++,li=Ii=null,et=c,D.H=f,D.A=p,Ve===null&&(dt=null,Ge=0,ho()),S}function WE(){for(;Ve!==null;)Fy(Ve)}function KE(e,n){var o=et;et|=2;var c=By(),f=Uy();dt!==e||Ge!==n?(cd=null,ld=on()+500,ys(e,n)):ps=Vr(e,n);e:do try{if(at!==0&&Ve!==null){n=Ve;var p=zn;t:switch(at){case 1:at=0,zn=null,bs(e,n,p,1);break;case 2:case 9:if(X0(p)){at=0,zn=null,Hy(n);break}n=function(){at!==2&&at!==9||dt!==e||(at=7),Di(e)},p.then(n,n);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:X0(p)?(at=0,zn=null,Hy(n)):(at=0,zn=null,bs(e,n,p,7));break;case 5:var S=null;switch(Ve.tag){case 26:S=Ve.memoizedState;case 5:case 27:var A=Ve;if(S?Ab(S):A.stateNode.complete){at=0,zn=null;var M=A.sibling;if(M!==null)Ve=M;else{var Z=A.return;Z!==null?(Ve=Z,fd(Z)):Ve=null}break t}}at=0,zn=null,bs(e,n,p,5);break;case 6:at=0,zn=null,bs(e,n,p,6);break;case 8:vm(),Tt=6;break e;default:throw Error(s(462))}}XE();break}catch(X){Ny(e,X)}while(!0);return li=Ii=null,D.H=c,D.A=f,et=o,Ve!==null?0:(dt=null,Ge=0,ho(),Tt)}function XE(){for(;Ve!==null&&!au();)Fy(Ve)}function Fy(e){var n=dy(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?fd(e):Ve=n}function Hy(e){var n=e,o=n.alternate;switch(n.tag){case 15:case 0:n=ry(o,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=ry(o,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:Rh(n);default:hy(o,n),n=Ve=El(n,fa),n=dy(o,n,fa)}e.memoizedProps=e.pendingProps,n===null?fd(e):Ve=n}function bs(e,n,o,c){li=Ii=null,Rh(n),ls=null,Ll=0;var f=n.return;try{if(BE(e,f,n,o,Ge)){Tt=1,Qu(e,l(o,e.current)),Ve=null;return}}catch(p){if(f!==null)throw Ve=f,p;Tt=1,Qu(e,l(o,e.current)),Ve=null;return}n.flags&32768?($e||c===1?e=!0:ps||(Ge&536870912)!==0?e=!1:(cr=e=!0,(c===2||c===9||c===3||c===6)&&(c=On.current,c!==null&&c.tag===13&&(c.flags|=16384))),$y(n,e)):fd(n)}function fd(e){var n=e;do{if((n.flags&32768)!==0){$y(n,cr);return}e=n.return;var o=HE(n.alternate,n,fa);if(o!==null){Ve=o;return}if(n=n.sibling,n!==null){Ve=n;return}Ve=n=e}while(n!==null);Tt===0&&(Tt=5)}function $y(e,n){do{var o=$E(e.alternate,e);if(o!==null){o.flags&=32767,Ve=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!n&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=o}while(e!==null);Tt=6,Ve=null}function Vy(e,n,o,c,f,p,S,A,M){e.cancelPendingCommit=null;do hd();while(Bt!==0);if((et&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(p=n.lanes|n.childLanes,p|=es,eh(e,o,p,S,A,M),e===dt&&(Ve=dt=null,Ge=0),vs=n,fr=e,ha=o,mm=p,pm=f,Ry=c,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tC(Br,function(){return Wy(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||c){c=D.T,D.T=null,f=le.p,le.p=2,S=et,et|=4;try{VE(e,n,o)}finally{et=S,le.p=f,D.T=c}}Bt=1,Zy(),qy(),Gy()}}function Zy(){if(Bt===1){Bt=0;var e=fr,n=vs,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null;var c=le.p;le.p=2;var f=et;et|=4;try{Ey(n,e);var p=jm,S=so(e.containerInfo),A=p.focusedElem,M=p.selectionRange;if(S!==A&&A&&A.ownerDocument&&Ko(A.ownerDocument.documentElement,A)){if(M!==null&&Oi(A)){var Z=M.start,X=M.end;if(X===void 0&&(X=Z),"selectionStart"in A)A.selectionStart=Z,A.selectionEnd=Math.min(X,A.value.length);else{var ne=A.ownerDocument||document,G=ne&&ne.defaultView||window;if(G.getSelection){var W=G.getSelection(),be=A.textContent.length,je=Math.min(M.start,be),ct=M.end===void 0?je:Math.min(M.end,be);!W.extend&&je>ct&&(S=ct,ct=je,je=S);var F=oo(A,je),N=oo(A,ct);if(F&&N&&(W.rangeCount!==1||W.anchorNode!==F.node||W.anchorOffset!==F.offset||W.focusNode!==N.node||W.focusOffset!==N.offset)){var V=ne.createRange();V.setStart(F.node,F.offset),W.removeAllRanges(),je>ct?(W.addRange(V),W.extend(N.node,N.offset)):(V.setEnd(N.node,N.offset),W.addRange(V))}}}}for(ne=[],W=A;W=W.parentNode;)W.nodeType===1&&ne.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ne.length;A++){var ee=ne[A];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Ed=!!Om,jm=Om=null}finally{et=f,le.p=c,D.T=o}}e.current=n,Bt=2}}function qy(){if(Bt===2){Bt=0;var e=fr,n=vs,o=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||o){o=D.T,D.T=null;var c=le.p;le.p=2;var f=et;et|=4;try{_y(e,n.alternate,n)}finally{et=f,le.p=c,D.T=o}}Bt=3}}function Gy(){if(Bt===4||Bt===3){Bt=0,ru();var e=fr,n=vs,o=ha,c=Ry;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Bt=5:(Bt=0,vs=fr=null,Yy(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(dr=null),xe(o),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Na,n,void 0,(n.current.flags&128)===128)}catch{}if(c!==null){n=D.T,f=le.p,le.p=2,D.T=null;try{for(var p=e.onRecoverableError,S=0;S<c.length;S++){var A=c[S];p(A.value,{componentStack:A.stack})}}finally{D.T=n,le.p=f}}(ha&3)!==0&&hd(),Di(e),f=e.pendingLanes,(o&261930)!==0&&(f&42)!==0?e===gm?Wl++:(Wl=0,gm=e):Wl=0,Kl(0)}}function Yy(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,jl(n)))}function hd(){return Zy(),qy(),Gy(),Wy()}function Wy(){if(Bt!==5)return!1;var e=fr,n=mm;mm=0;var o=xe(ha),c=D.T,f=le.p;try{le.p=32>o?32:o,D.T=null,o=pm,pm=null;var p=fr,S=ha;if(Bt=0,vs=fr=null,ha=0,(et&6)!==0)throw Error(s(331));var A=et;if(et|=4,jy(p.current),Ay(p,p.current,S,o),et=A,Kl(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Na,p)}catch{}return!0}finally{le.p=f,D.T=c,Yy(e,n)}}function Ky(e,n,o){n=l(o,n),n=Yh(e.stateNode,n,2),e=rr(e,n,2),e!==null&&(qi(e,2),Di(e))}function rt(e,n,o){if(e.tag===3)Ky(e,e,o);else for(;n!==null;){if(n.tag===3){Ky(n,e,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){e=l(o,e),o=Xv(2),c=rr(n,o,2),c!==null&&(Jv(o,c,n,e),qi(c,2),Di(c));break}}n=n.return}}function bm(e,n,o){var c=e.pingCache;if(c===null){c=e.pingCache=new GE;var f=new Set;c.set(n,f)}else f=c.get(n),f===void 0&&(f=new Set,c.set(n,f));f.has(o)||(dm=!0,f.add(o),e=JE.bind(null,e,n,o),n.then(e,e))}function JE(e,n,o){var c=e.pingCache;c!==null&&c.delete(n),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,dt===e&&(Ge&o)===o&&(Tt===4||Tt===3&&(Ge&62914560)===Ge&&300>on()-sd?(et&2)===0&&ys(e,0):fm|=o,gs===Ge&&(gs=0)),Di(e)}function Xy(e,n){n===0&&(n=su()),e=Vn(e,n),e!==null&&(qi(e,n),Di(e))}function QE(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Xy(e,o)}function eC(e,n){var o=0;switch(e.tag){case 31:case 13:var c=e.stateNode,f=e.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(n),Xy(e,o)}function tC(e,n){return Vi(e,n)}var md=null,_s=null,_m=!1,pd=!1,xm=!1,mr=0;function Di(e){e!==_s&&e.next===null&&(_s===null?md=_s=e:_s=_s.next=e),pd=!0,_m||(_m=!0,iC())}function Kl(e,n){if(!xm&&pd){xm=!0;do for(var o=!1,c=md;c!==null;){if(e!==0){var f=c.pendingLanes;if(f===0)var p=0;else{var S=c.suspendedLanes,A=c.pingedLanes;p=(1<<31-sn(42|e)+1)-1,p&=f&~(S&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,tb(c,p))}else p=Ge,p=Do(c,c===dt?p:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(p&3)===0||Vr(c,p)||(o=!0,tb(c,p));c=c.next}while(o);xm=!1}}function nC(){Jy()}function Jy(){pd=_m=!1;var e=0;mr!==0&&hC()&&(e=mr);for(var n=on(),o=null,c=md;c!==null;){var f=c.next,p=Qy(c,n);p===0?(c.next=null,o===null?md=f:o.next=f,f===null&&(_s=o)):(o=c,(e!==0||(p&3)!==0)&&(pd=!0)),c=f}Bt!==0&&Bt!==5||Kl(e),mr!==0&&(mr=0)}function Qy(e,n){for(var o=e.suspendedLanes,c=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-sn(p),A=1<<S,M=f[S];M===-1?((A&o)===0||(A&c)!==0)&&(f[S]=Qf(A,n)):M<=n&&(e.expiredLanes|=A),p&=~A}if(n=dt,o=Ge,o=Do(e,e===n?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,o===0||e===n&&(at===2||at===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&Dr(c),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||Vr(e,o)){if(n=o&-o,n===e.callbackPriority)return n;switch(c!==null&&Dr(c),xe(o)){case 2:case 8:o=nl;break;case 32:o=Br;break;case 268435456:o=il;break;default:o=Br}return c=eb.bind(null,e),o=Vi(o,c),e.callbackPriority=n,e.callbackNode=o,n}return c!==null&&c!==null&&Dr(c),e.callbackPriority=2,e.callbackNode=null,2}function eb(e,n){if(Bt!==0&&Bt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(hd()&&e.callbackNode!==o)return null;var c=Ge;return c=Do(e,e===dt?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(My(e,c,n),Qy(e,on()),e.callbackNode!=null&&e.callbackNode===o?eb.bind(null,e):null)}function tb(e,n){if(hd())return null;My(e,n,!0)}function iC(){pC(function(){(et&6)!==0?Vi(No,nC):Jy()})}function wm(){if(mr===0){var e=rs;e===0&&(e=Fr,Fr<<=1,(Fr&261888)===0&&(Fr=256)),mr=e}return mr}function nb(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$a(""+e)}function ib(e,n){var o=n.ownerDocument.createElement("input");return o.name=n.name,o.value=n.value,e.id&&o.setAttribute("form",e.id),n.parentNode.insertBefore(o,n),e=new FormData(e),o.parentNode.removeChild(o),e}function aC(e,n,o,c,f){if(n==="submit"&&o&&o.stateNode===f){var p=nb((f[Ft]||null).action),S=c.submitter;S&&(n=(n=S[Ft]||null)?nb(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var A=new $o("action","action",null,c,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(mr!==0){var M=S?ib(f,S):new FormData(f);Hh(o,{pending:!0,data:M,method:f.method,action:p},null,M)}}else typeof p=="function"&&(A.preventDefault(),M=S?ib(f,S):new FormData(f),Hh(o,{pending:!0,data:M,method:f.method,action:p},p,M))},currentTarget:f}]})}}for(var Sm=0;Sm<Li.length;Sm++){var Tm=Li[Sm],rC=Tm.toLowerCase(),oC=Tm[0].toUpperCase()+Tm.slice(1);gn(rC,"on"+oC)}gn(co,"onAnimationEnd"),gn(Ru,"onAnimationIteration"),gn(uo,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(hh,"onTransitionRun"),gn(Pu,"onTransitionStart"),gn(mh,"onTransitionCancel"),gn(er,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function ab(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var c=e[o],f=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var S=c.length-1;0<=S;S--){var A=c[S],M=A.instance,Z=A.currentTarget;if(A=A.listener,M!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=Z;try{p(f)}catch(X){fo(X)}f.currentTarget=null,p=M}else for(S=0;S<c.length;S++){if(A=c[S],M=A.instance,Z=A.currentTarget,A=A.listener,M!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=Z;try{p(f)}catch(X){fo(X)}f.currentTarget=null,p=M}}}}function Ze(e,n){var o=n[Si];o===void 0&&(o=n[Si]=new Set);var c=e+"__bubble";o.has(c)||(rb(n,e,2,!1),o.add(c))}function Em(e,n,o){var c=0;n&&(c|=4),rb(o,e,c,n)}var gd="_reactListening"+Math.random().toString(36).slice(2);function Cm(e){if(!e[gd]){e[gd]=!0,hu.forEach(function(o){o!=="selectionchange"&&(sC.has(o)||Em(o,!1,e),Em(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gd]||(n[gd]=!0,Em("selectionchange",!1,n))}}function rb(e,n,o,c){switch(Pb(n)){case 2:var f=MC;break;case 8:f=IC;break;default:f=Fm}o=f.bind(null,n,o,e),f=void 0,!Xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),c?f!==void 0?e.addEventListener(n,o,{capture:!0,passive:f}):e.addEventListener(n,o,!0):f!==void 0?e.addEventListener(n,o,{passive:f}):e.addEventListener(n,o,!1)}function Am(e,n,o,c,f){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var A=c.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=c.return;S!==null;){var M=S.tag;if((M===3||M===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=Yi(A),S===null)return;if(M=S.tag,M===5||M===6||M===26||M===27){c=p=S;continue e}A=A.parentNode}}c=c.return}ml(function(){var Z=p,X=Kr(o),ne=[];e:{var G=Mu.get(e);if(G!==void 0){var W=$o,be=e;switch(e){case"keypress":if(Jr(o)===0)break e;case"keydown":case"keyup":W=xu;break;case"focusin":be="focus",W=vl;break;case"focusout":be="blur",W=vl;break;case"beforeblur":case"afterblur":W=vl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=sh;break;case co:case Ru:case uo:W=yl;break;case er:W=Tu;break;case"scroll":case"scrollend":W=qe;break;case"wheel":W=Qi;break;case"copy":case"cut":case"paste":W=Un;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=wu;break;case"toggle":case"beforetoggle":W=to}var je=(n&4)!==0,ct=!je&&(e==="scroll"||e==="scrollend"),F=je?G!==null?G+"Capture":null:G;je=[];for(var N=Z,V;N!==null;){var ee=N;if(V=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||V===null||F===null||(ee=Xi(N,F),ee!=null&&je.push(Jl(N,ee,V))),ct)break;N=N.return}0<je.length&&(G=new W(G,be,null,o,X),ne.push({event:G,listeners:je}))}}if((n&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",G&&o!==Ho&&(be=o.relatedTarget||o.fromElement)&&(Yi(be)||be[Gi]))break e;if((W||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,W?(be=o.relatedTarget||o.toElement,W=Z,be=be?Yi(be):null,be!==null&&(ct=m(be),je=be.tag,be!==ct||je!==5&&je!==27&&je!==6)&&(be=null)):(W=null,be=Z),W!==be)){if(je=gu,ee="onMouseLeave",F="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(je=wu,ee="onPointerLeave",F="onPointerEnter",N="pointer"),ct=W==null?G:Ti(W),V=be==null?G:Ti(be),G=new je(ee,N+"leave",W,o,X),G.target=ct,G.relatedTarget=V,ee=null,Yi(X)===Z&&(je=new je(F,N+"enter",be,o,X),je.target=V,je.relatedTarget=ct,ee=je),ct=ee,W&&be)t:{for(je=lC,F=W,N=be,V=0,ee=F;ee;ee=je(ee))V++;ee=0;for(var Te=N;Te;Te=je(Te))ee++;for(;0<V-ee;)F=je(F),V--;for(;0<ee-V;)N=je(N),ee--;for(;V--;){if(F===N||N!==null&&F===N.alternate){je=F;break t}F=je(F),N=je(N)}je=null}else je=null;W!==null&&ob(ne,G,W,je,!1),be!==null&&ct!==null&&ob(ne,ct,be,je,!0)}}e:{if(G=Z?Ti(Z):window,W=G.nodeName&&G.nodeName.toLowerCase(),W==="select"||W==="input"&&G.type==="file")var Xe=ro;else if(Fn(G))if(ku)Xe=fh;else{Xe=dh;var _e=ri}else W=G.nodeName,!W||W.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Z&&Wr(Z.elementType)&&(Xe=ro):Xe=Ka;if(Xe&&(Xe=Xe(e,Z))){Au(ne,Xe,o,X);break e}_e&&_e(e,G,Z),e==="focusout"&&Z&&G.type==="number"&&Z.memoizedProps.value!=null&&ni(G,"number",G.value)}switch(_e=Z?Ti(Z):window,e){case"focusin":(Fn(_e)||_e.contentEditable==="true")&&(ji=_e,Jo=Z,lo=null);break;case"focusout":lo=Jo=ji=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,zu(ne,o,X);break;case"selectionchange":if(Xo)break;case"keydown":case"keyup":zu(ne,o,X)}var Be;if(Zo)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Ga?Cu(e,o)&&(Ye="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ye="onCompositionStart");Ye&&(qo&&o.locale!=="ko"&&(Ga||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Ga&&(Be=Ai()):(Bn=X,Ji="value"in Bn?Bn.value:Bn.textContent,Ga=!0)),_e=vd(Z,Ye),0<_e.length&&(Ye=new bl(Ye,e,null,o,X),ne.push({event:Ye,listeners:_e}),Be?Ye.data=Be:(Be=Sl(o),Be!==null&&(Ye.data=Be)))),(Be=ch?kn(e,o):Ya(e,o))&&(Ye=vd(Z,"onBeforeInput"),0<Ye.length&&(_e=new bl("onBeforeInput","beforeinput",null,o,X),ne.push({event:_e,listeners:Ye}),_e.data=Be)),aC(ne,e,Z,o,X)}ab(ne,n)})}function Jl(e,n,o){return{instance:e,listener:n,currentTarget:o}}function vd(e,n){for(var o=n+"Capture",c=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Xi(e,o),f!=null&&c.unshift(Jl(e,f,p)),f=Xi(e,n),f!=null&&c.push(Jl(e,f,p))),e.tag===3)return c;e=e.return}return[]}function lC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ob(e,n,o,c,f){for(var p=n._reactName,S=[];o!==null&&o!==c;){var A=o,M=A.alternate,Z=A.stateNode;if(A=A.tag,M!==null&&M===c)break;A!==5&&A!==26&&A!==27||Z===null||(M=Z,f?(Z=Xi(o,p),Z!=null&&S.unshift(Jl(o,Z,M))):f||(Z=Xi(o,p),Z!=null&&S.push(Jl(o,Z,M)))),o=o.return}S.length!==0&&e.push({event:n,listeners:S})}var cC=/\r\n?/g,uC=/\u0000|\uFFFD/g;function sb(e){return(typeof e=="string"?e:""+e).replace(cC,`
`).replace(uC,"")}function lb(e,n){return n=sb(n),sb(e)===n}function lt(e,n,o,c,f,p){switch(o){case"children":typeof c=="string"?n==="body"||n==="textarea"&&c===""||Dn(e,c):(typeof c=="number"||typeof c=="bigint")&&n!=="body"&&Dn(e,""+c);break;case"className":ot(e,"class",c);break;case"tabIndex":ot(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(e,o,c);break;case"style":Uo(e,c,p);break;case"data":if(n!=="object"){ot(e,"data",c);break}case"src":case"href":if(c===""&&(n!=="a"||o!=="href")){e.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(o);break}c=$a(""+c),e.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(n!=="input"&&lt(e,n,"name",f.name,f,null),lt(e,n,"formEncType",f.formEncType,f,null),lt(e,n,"formMethod",f.formMethod,f,null),lt(e,n,"formTarget",f.formTarget,f,null)):(lt(e,n,"encType",f.encType,f,null),lt(e,n,"method",f.method,f,null),lt(e,n,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(o);break}c=$a(""+c),e.setAttribute(o,c);break;case"onClick":c!=null&&(e.onclick=mn);break;case"onScroll":c!=null&&Ze("scroll",e);break;case"onScrollEnd":c!=null&&Ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=o}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}o=$a(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,""+c):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":c===!0?e.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(o,c):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(o,c):e.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(o):e.setAttribute(o,c);break;case"popover":Ze("beforetoggle",e),Ze("toggle",e),He(e,"popover",c);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":He(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Fo.get(o)||o,He(e,o,c))}}function km(e,n,o,c,f,p){switch(o){case"style":Uo(e,c,p);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=o}}break;case"children":typeof c=="string"?Dn(e,c):(typeof c=="number"||typeof c=="bigint")&&Dn(e,""+c);break;case"onScroll":c!=null&&Ze("scroll",e);break;case"onScrollEnd":c!=null&&Ze("scrollend",e);break;case"onClick":c!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mu.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),n=o.slice(2,f?o.length-7:void 0),p=e[Ft]||null,p=p!=null?p[o]:null,typeof p=="function"&&e.removeEventListener(n,p,f),typeof c=="function")){typeof p!="function"&&p!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(n,c,f);break e}o in e?e[o]=c:c===!0?e.setAttribute(o,""):He(e,o,c)}}}function Xt(e,n,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ze("error",e),Ze("load",e);var c=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var S=o[p];if(S!=null)switch(p){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:lt(e,n,p,S,o,null)}}f&&lt(e,n,"srcSet",o.srcSet,o,null),c&&lt(e,n,"src",o.src,o,null);return;case"input":Ze("invalid",e);var A=p=S=f=null,M=null,Z=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":f=X;break;case"type":S=X;break;case"checked":M=X;break;case"defaultChecked":Z=X;break;case"value":p=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:lt(e,n,c,X,o,null)}}Yr(e,p,A,M,Z,S,f,!1);return;case"select":Ze("invalid",e),c=S=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":S=A;break;case"multiple":c=A;default:lt(e,n,f,A,o,null)}n=p,o=S,e.multiple=!!c,n!=null?ut(e,!!c,n,!1):o!=null&&ut(e,!!c,o,!0);return;case"textarea":Ze("invalid",e),p=f=c=null;for(S in o)if(o.hasOwnProperty(S)&&(A=o[S],A!=null))switch(S){case"value":c=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:lt(e,n,S,A,o,null)}Fa(e,c,f,p);return;case"option":for(M in o)o.hasOwnProperty(M)&&(c=o[M],c!=null)&&(M==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":lt(e,n,M,c,o,null));return;case"dialog":Ze("beforetoggle",e),Ze("toggle",e),Ze("cancel",e),Ze("close",e);break;case"iframe":case"object":Ze("load",e);break;case"video":case"audio":for(c=0;c<Xl.length;c++)Ze(Xl[c],e);break;case"image":Ze("error",e),Ze("load",e);break;case"details":Ze("toggle",e);break;case"embed":case"source":case"link":Ze("error",e),Ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in o)if(o.hasOwnProperty(Z)&&(c=o[Z],c!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:lt(e,n,Z,c,o,null)}return;default:if(Wr(n)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&km(e,n,X,c,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(c=o[A],c!=null&&lt(e,n,A,c,o,null))}function dC(e,n,o,c){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,A=null,M=null,Z=null,X=null;for(W in o){var ne=o[W];if(o.hasOwnProperty(W)&&ne!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":M=ne;default:c.hasOwnProperty(W)||lt(e,n,W,null,c,ne)}}for(var G in c){var W=c[G];if(ne=o[G],c.hasOwnProperty(G)&&(W!=null||ne!=null))switch(G){case"type":p=W;break;case"name":f=W;break;case"checked":Z=W;break;case"defaultChecked":X=W;break;case"value":S=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:W!==ne&&lt(e,n,G,W,c,ne)}}dl(e,S,A,M,Z,X,p,f);return;case"select":W=S=A=G=null;for(p in o)if(M=o[p],o.hasOwnProperty(p)&&M!=null)switch(p){case"value":break;case"multiple":W=M;default:c.hasOwnProperty(p)||lt(e,n,p,null,c,M)}for(f in c)if(p=c[f],M=o[f],c.hasOwnProperty(f)&&(p!=null||M!=null))switch(f){case"value":G=p;break;case"defaultValue":A=p;break;case"multiple":S=p;default:p!==M&&lt(e,n,f,p,c,M)}n=A,o=S,c=W,G!=null?ut(e,!!o,G,!1):!!c!=!!o&&(n!=null?ut(e,!!o,n,!0):ut(e,!!o,o?[]:"",!1));return;case"textarea":W=G=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:lt(e,n,A,null,c,f)}for(S in c)if(f=c[S],p=o[S],c.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":G=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&lt(e,n,S,f,c,p)}Ci(e,G,W);return;case"option":for(var be in o)G=o[be],o.hasOwnProperty(be)&&G!=null&&!c.hasOwnProperty(be)&&(be==="selected"?e.selected=!1:lt(e,n,be,null,c,G));for(M in c)G=c[M],W=o[M],c.hasOwnProperty(M)&&G!==W&&(G!=null||W!=null)&&(M==="selected"?e.selected=G&&typeof G!="function"&&typeof G!="symbol":lt(e,n,M,G,c,W));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in o)G=o[je],o.hasOwnProperty(je)&&G!=null&&!c.hasOwnProperty(je)&&lt(e,n,je,null,c,G);for(Z in c)if(G=c[Z],W=o[Z],c.hasOwnProperty(Z)&&G!==W&&(G!=null||W!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:lt(e,n,Z,G,c,W)}return;default:if(Wr(n)){for(var ct in o)G=o[ct],o.hasOwnProperty(ct)&&G!==void 0&&!c.hasOwnProperty(ct)&&km(e,n,ct,void 0,c,G);for(X in c)G=c[X],W=o[X],!c.hasOwnProperty(X)||G===W||G===void 0&&W===void 0||km(e,n,X,G,c,W);return}}for(var F in o)G=o[F],o.hasOwnProperty(F)&&G!=null&&!c.hasOwnProperty(F)&&lt(e,n,F,null,c,G);for(ne in c)G=c[ne],W=o[ne],!c.hasOwnProperty(ne)||G===W||G==null&&W==null||lt(e,n,ne,G,c,W)}function cb(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var f=o[c],p=f.transferSize,S=f.initiatorType,A=f.duration;if(p&&A&&cb(S)){for(S=0,A=f.responseEnd,c+=1;c<o.length;c++){var M=o[c],Z=M.startTime;if(Z>A)break;var X=M.transferSize,ne=M.initiatorType;X&&cb(ne)&&(M=M.responseEnd,S+=X*(M<A?1:(A-Z)/(M-Z)))}if(--c,n+=8*(p+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Om=null,jm=null;function yd(e){return e.nodeType===9?e:e.ownerDocument}function ub(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function db(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zm(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lm=null;function hC(){var e=window.event;return e&&e.type==="popstate"?e===Lm?!1:(Lm=e,!0):(Lm=null,!1)}var fb=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,hb=typeof Promise=="function"?Promise:void 0,pC=typeof queueMicrotask=="function"?queueMicrotask:typeof hb<"u"?function(e){return hb.resolve(null).then(e).catch(gC)}:fb;function gC(e){setTimeout(function(){throw e})}function pr(e){return e==="head"}function mb(e,n){var o=n,c=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"||o==="/&"){if(c===0){e.removeChild(f),Ts(n);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Ql(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,Ql(o);for(var p=o.firstChild;p;){var S=p.nextSibling,A=p.nodeName;p[Zr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||o.removeChild(p),p=S}}else o==="body"&&Ql(e.ownerDocument.body);o=f}while(o);Ts(n)}function pb(e,n){var o=e;e=0;do{var c=o.nextSibling;if(o.nodeType===1?n?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(n?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=c}while(o)}function Rm(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var o=n;switch(n=n.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Rm(o),sl(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function vC(e,n,o,c){for(;e.nodeType===1;){var f=o;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[Zr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function yC(e,n,o){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Gn(e.nextSibling),e===null))return null;return e}function gb(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gn(e.nextSibling),e===null))return null;return e}function Pm(e){return e.data==="$?"||e.data==="$~"}function Mm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bC(e,n){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||o.readyState!=="loading")n();else{var c=function(){n(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Im=null;function vb(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(n===0)return Gn(e.nextSibling);n--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||n++}e=e.nextSibling}return null}function yb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(n===0)return e;n--}else o!=="/$"&&o!=="/&"||n++}e=e.previousSibling}return null}function bb(e,n,o){switch(n=yd(o),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ql(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);sl(e)}var Yn=new Map,_b=new Set;function bd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=le.d;le.d={f:_C,r:xC,D:wC,C:SC,L:TC,m:EC,X:AC,S:CC,M:kC};function _C(){var e=ma.f(),n=ud();return e||n}function xC(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?Nv(n):ma.r(e)}var xs=typeof document>"u"?null:document;function xb(e,n,o){var c=xs;if(c&&typeof n=="string"&&n){var f=ht(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),_b.has(f)||(_b.add(f),e={rel:e,crossOrigin:o,href:n},c.querySelector(f)===null&&(n=c.createElement("link"),Xt(n,"link",e),jt(n),c.head.appendChild(n)))}}function wC(e){ma.D(e),xb("dns-prefetch",e,null)}function SC(e,n){ma.C(e,n),xb("preconnect",e,n)}function TC(e,n,o){ma.L(e,n,o);var c=xs;if(c&&e&&n){var f='link[rel="preload"][as="'+ht(n)+'"]';n==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ht(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ht(o.imageSizes)+'"]')):f+='[href="'+ht(e)+'"]';var p=f;switch(n){case"style":p=ws(e);break;case"script":p=Ss(e)}Yn.has(p)||(e=T({rel:"preload",href:n==="image"&&o&&o.imageSrcSet?void 0:e,as:n},o),Yn.set(p,e),c.querySelector(f)!==null||n==="style"&&c.querySelector(ec(p))||n==="script"&&c.querySelector(tc(p))||(n=c.createElement("link"),Xt(n,"link",e),jt(n),c.head.appendChild(n)))}}function EC(e,n){ma.m(e,n);var o=xs;if(o&&e){var c=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+ht(c)+'"][href="'+ht(e)+'"]',p=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ss(e)}if(!Yn.has(p)&&(e=T({rel:"modulepreload",href:e},n),Yn.set(p,e),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(tc(p)))return}c=o.createElement("link"),Xt(c,"link",e),jt(c),o.head.appendChild(c)}}}function CC(e,n,o){ma.S(e,n,o);var c=xs;if(c&&e){var f=Ba(c).hoistableStyles,p=ws(e);n=n||"default";var S=f.get(p);if(!S){var A={loading:0,preload:null};if(S=c.querySelector(ec(p)))A.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},o),(o=Yn.get(p))&&Nm(e,o);var M=S=c.createElement("link");jt(M),Xt(M,"link",e),M._p=new Promise(function(Z,X){M.onload=Z,M.onerror=X}),M.addEventListener("load",function(){A.loading|=1}),M.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_d(S,n,c)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(p,S)}}}function AC(e,n){ma.X(e,n);var o=xs;if(o&&e){var c=Ba(o).hoistableScripts,f=Ss(e),p=c.get(f);p||(p=o.querySelector(tc(f)),p||(e=T({src:e,async:!0},n),(n=Yn.get(f))&&Dm(e,n),p=o.createElement("script"),jt(p),Xt(p,"link",e),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},c.set(f,p))}}function kC(e,n){ma.M(e,n);var o=xs;if(o&&e){var c=Ba(o).hoistableScripts,f=Ss(e),p=c.get(f);p||(p=o.querySelector(tc(f)),p||(e=T({src:e,async:!0,type:"module"},n),(n=Yn.get(f))&&Dm(e,n),p=o.createElement("script"),jt(p),Xt(p,"link",e),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},c.set(f,p))}}function wb(e,n,o,c){var f=(f=pe.current)?bd(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(n=ws(o.href),o=Ba(f).hoistableStyles,c=o.get(n),c||(c={type:"style",instance:null,count:0,state:null},o.set(n,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=ws(o.href);var p=Ba(f).hoistableStyles,S=p.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=f.querySelector(ec(e)))&&!p._p&&(S.instance=p,S.state.loading=5),Yn.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Yn.set(e,o),p||OC(f,e,o,S.state))),n&&c===null)throw Error(s(528,""));return S}if(n&&c!==null)throw Error(s(529,""));return null;case"script":return n=o.async,o=o.src,typeof o=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(o),o=Ba(f).hoistableScripts,c=o.get(n),c||(c={type:"script",instance:null,count:0,state:null},o.set(n,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ws(e){return'href="'+ht(e)+'"'}function ec(e){return'link[rel="stylesheet"]['+e+"]"}function Sb(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function OC(e,n,o,c){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?c.loading=1:(n=e.createElement("link"),c.preload=n,n.addEventListener("load",function(){return c.loading|=1}),n.addEventListener("error",function(){return c.loading|=2}),Xt(n,"link",o),jt(n),e.head.appendChild(n))}function Ss(e){return'[src="'+ht(e)+'"]'}function tc(e){return"script[async]"+e}function Tb(e,n,o){if(n.count++,n.instance===null)switch(n.type){case"style":var c=e.querySelector('style[data-href~="'+ht(o.href)+'"]');if(c)return n.instance=c,jt(c),c;var f=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),jt(c),Xt(c,"style",f),_d(c,o.precedence,e),n.instance=c;case"stylesheet":f=ws(o.href);var p=e.querySelector(ec(f));if(p)return n.state.loading|=4,n.instance=p,jt(p),p;c=Sb(o),(f=Yn.get(f))&&Nm(c,f),p=(e.ownerDocument||e).createElement("link"),jt(p);var S=p;return S._p=new Promise(function(A,M){S.onload=A,S.onerror=M}),Xt(p,"link",c),n.state.loading|=4,_d(p,o.precedence,e),n.instance=p;case"script":return p=Ss(o.src),(f=e.querySelector(tc(p)))?(n.instance=f,jt(f),f):(c=o,(f=Yn.get(p))&&(c=T({},o),Dm(c,f)),e=e.ownerDocument||e,f=e.createElement("script"),jt(f),Xt(f,"link",c),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(c=n.instance,n.state.loading|=4,_d(c,o.precedence,e));return n.instance}function _d(e,n,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,p=f,S=0;S<c.length;S++){var A=c[S];if(A.dataset.precedence===n)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=o.nodeType===9?o.head:o,n.insertBefore(e,n.firstChild))}function Nm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Dm(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xd=null;function Eb(e,n,o){if(xd===null){var c=new Map,f=xd=new Map;f.set(o,c)}else f=xd,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(e))return c;for(c.set(e,null),o=o.getElementsByTagName(e),f=0;f<o.length;f++){var p=o[f];if(!(p[Zr]||p[Ot]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=e+S;var A=c.get(S);A?A.push(p):c.set(S,[p])}}return c}function Cb(e,n,o){e=e.ownerDocument||e,e.head.insertBefore(o,n==="title"?e.querySelector("head > title"):null)}function jC(e,n,o){if(o===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ab(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zC(e,n,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var f=ws(c.href),p=n.querySelector(ec(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wd.bind(e),n.then(e,e)),o.state.loading|=4,o.instance=p,jt(p);return}p=n.ownerDocument||n,c=Sb(c),(f=Yn.get(f))&&Nm(c,f),p=p.createElement("link"),jt(p);var S=p;S._p=new Promise(function(A,M){S.onload=A,S.onerror=M}),Xt(p,"link",c),o.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,n),(n=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=wd.bind(e),n.addEventListener("load",o),n.addEventListener("error",o))}}var Bm=0;function LC(e,n){return e.stylesheets&&e.count===0&&Td(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var c=setTimeout(function(){if(e.stylesheets&&Td(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&Bm===0&&(Bm=62500*fC());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Td(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>Bm?50:800)+n);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(f)}}:null}function wd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Td(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sd=null;function Td(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sd=new Map,n.forEach(RC,e),Sd=null,wd.call(e))}function RC(e,n){if(!(n.state.loading&4)){var o=Sd.get(e);if(o)var c=o.get(null);else{o=new Map,Sd.set(e,o);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),c=S)}c&&o.set(null,c)}f=n.instance,S=f.getAttribute("data-precedence"),p=o.get(S)||c,p===c&&o.set(null,f),o.set(S,f),this.count++,c=wd.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var nc={$$typeof:K,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function PC(e,n,o,c,f,p,S,A,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=al(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.hiddenUpdates=al(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function kb(e,n,o,c,f,p,S,A,M,Z,X,ne){return e=new PC(e,n,o,S,M,Z,X,ne,A),n=1,p===!0&&(n|=24),p=tn(3,null,null,n),e.current=p,p.stateNode=e,n=yh(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:c,isDehydrated:o,cache:n},wh(p),e}function Ob(e){return e?(e=ea,e):ea}function jb(e,n,o,c,f,p){f=Ob(f),c.context===null?c.context=f:c.pendingContext=f,c=ar(n),c.payload={element:o},p=p===void 0?null:p,p!==null&&(c.callback=p),o=rr(e,c,n),o!==null&&(Sn(o,e,n),Pl(o,e,n))}function zb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Um(e,n){zb(e,n),(e=e.alternate)&&zb(e,n)}function Lb(e){if(e.tag===13||e.tag===31){var n=Vn(e,67108864);n!==null&&Sn(n,e,67108864),Um(e,67108864)}}function Rb(e){if(e.tag===13||e.tag===31){var n=Rn();n=fn(n);var o=Vn(e,n);o!==null&&Sn(o,e,n),Um(e,n)}}var Ed=!0;function MC(e,n,o,c){var f=D.T;D.T=null;var p=le.p;try{le.p=2,Fm(e,n,o,c)}finally{le.p=p,D.T=f}}function IC(e,n,o,c){var f=D.T;D.T=null;var p=le.p;try{le.p=8,Fm(e,n,o,c)}finally{le.p=p,D.T=f}}function Fm(e,n,o,c){if(Ed){var f=Hm(c);if(f===null)Am(e,n,c,Cd,o),Mb(e,c);else if(DC(f,e,n,o,c))c.stopPropagation();else if(Mb(e,c),n&4&&-1<NC.indexOf(e)){for(;f!==null;){var p=Da(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Zi(p.pendingLanes);if(S!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var M=1<<31-sn(S);A.entanglements[1]|=M,S&=~M}Di(p),(et&6)===0&&(ld=on()+500,Kl(0))}}break;case 31:case 13:A=Vn(p,2),A!==null&&Sn(A,p,2),ud(),Um(p,2)}if(p=Hm(c),p===null&&Am(e,n,c,Cd,o),p===f)break;f=p}f!==null&&c.stopPropagation()}else Am(e,n,c,null,o)}}function Hm(e){return e=Kr(e),$m(e)}var Cd=null;function $m(e){if(Cd=null,e=Yi(e),e!==null){var n=m(e);if(n===null)e=null;else{var o=n.tag;if(o===13){if(e=g(n),e!==null)return e;e=null}else if(o===31){if(e=b(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Cd=e,null}function Pb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yf()){case No:return 2;case nl:return 8;case Br:case Wf:return 32;case il:return 268435456;default:return 32}default:return 32}}var Vm=!1,gr=null,vr=null,yr=null,ic=new Map,ac=new Map,br=[],NC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mb(e,n){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ic.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ac.delete(n.pointerId)}}function rc(e,n,o,c,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Da(n),n!==null&&Lb(n)),e):(e.eventSystemFlags|=c,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function DC(e,n,o,c,f){switch(n){case"focusin":return gr=rc(gr,e,n,o,c,f),!0;case"dragenter":return vr=rc(vr,e,n,o,c,f),!0;case"mouseover":return yr=rc(yr,e,n,o,c,f),!0;case"pointerover":var p=f.pointerId;return ic.set(p,rc(ic.get(p)||null,e,n,o,c,f)),!0;case"gotpointercapture":return p=f.pointerId,ac.set(p,rc(ac.get(p)||null,e,n,o,c,f)),!0}return!1}function Ib(e){var n=Yi(e.target);if(n!==null){var o=m(n);if(o!==null){if(n=o.tag,n===13){if(n=g(o),n!==null){e.blockedOn=n,ol(e.priority,function(){Rb(o)});return}}else if(n===31){if(n=b(o),n!==null){e.blockedOn=n,ol(e.priority,function(){Rb(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ad(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Hm(e.nativeEvent);if(o===null){o=e.nativeEvent;var c=new o.constructor(o.type,o);Ho=c,o.target.dispatchEvent(c),Ho=null}else return n=Da(o),n!==null&&Lb(n),e.blockedOn=o,!1;n.shift()}return!0}function Nb(e,n,o){Ad(e)&&o.delete(n)}function BC(){Vm=!1,gr!==null&&Ad(gr)&&(gr=null),vr!==null&&Ad(vr)&&(vr=null),yr!==null&&Ad(yr)&&(yr=null),ic.forEach(Nb),ac.forEach(Nb)}function kd(e,n){e.blockedOn===n&&(e.blockedOn=null,Vm||(Vm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,BC)))}var Od=null;function Db(e){Od!==e&&(Od=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Od===e&&(Od=null);for(var n=0;n<e.length;n+=3){var o=e[n],c=e[n+1],f=e[n+2];if(typeof c!="function"){if($m(c||o)===null)continue;break}var p=Da(o);p!==null&&(e.splice(n,3),n-=3,Hh(p,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Ts(e){function n(M){return kd(M,e)}gr!==null&&kd(gr,e),vr!==null&&kd(vr,e),yr!==null&&kd(yr,e),ic.forEach(n),ac.forEach(n);for(var o=0;o<br.length;o++){var c=br[o];c.blockedOn===e&&(c.blockedOn=null)}for(;0<br.length&&(o=br[0],o.blockedOn===null);)Ib(o),o.blockedOn===null&&br.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],p=o[c+1],S=f[Ft]||null;if(typeof p=="function")S||Db(o);else if(S){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Ft]||null)A=S.formAction;else if($m(f)!==null)continue}else A=S.action;typeof A=="function"?o[c+1]=A:(o.splice(c,3),c-=3),Db(o)}}}function Bb(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Zm(e){this._internalRoot=e}jd.prototype.render=Zm.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var o=n.current,c=Rn();jb(o,c,e,n,null,null)},jd.prototype.unmount=Zm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jb(e.current,2,null,e,null,null),ud(),n[Gi]=null}};function jd(e){this._internalRoot=e}jd.prototype.unstable_scheduleHydration=function(e){if(e){var n=rl();e={blockedOn:null,target:e,priority:n};for(var o=0;o<br.length&&n!==0&&n<br[o].priority;o++);br.splice(o,0,e),o===0&&Ib(e)}};var Ub=i.version;if(Ub!=="19.2.4")throw Error(s(527,Ub,"19.2.4"));le.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=_(n),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var UC={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zd.isDisabled&&zd.supportsFiber)try{Na=zd.inject(UC),Gt=zd}catch{}}return sc.createRoot=function(e,n){if(!u(e))throw Error(s(299));var o=!1,c="",f=Gv,p=Yv,S=Wv;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=kb(e,1,!1,null,null,o,c,null,f,p,S,Bb),e[Gi]=n.current,Cm(e),new Zm(n)},sc.hydrateRoot=function(e,n,o){if(!u(e))throw Error(s(299));var c=!1,f="",p=Gv,S=Yv,A=Wv,M=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.formState!==void 0&&(M=o.formState)),n=kb(e,1,!0,n,o??null,c,f,M,p,S,A,Bb),n.context=Ob(null),o=n.current,c=Rn(),c=fn(c),f=ar(c),f.callback=null,rr(o,f,c),o=c,n.current.lanes=o,qi(n,o),Di(n),e[Gi]=n.current,Cm(e),new jd(n)},sc.version="19.2.4",sc}var Kb;function WC(){if(Kb)return Ym.exports;Kb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Ym.exports=YC(),Ym.exports}var KC=WC();var Qg=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Iw=/^[\\/]{2}/;function XC(t,i){return i+t.replace(/\\/g,"/")}var Xb="popstate";function Jb(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function JC(t={}){function i(s,u){let m=u.state?.masked,{pathname:g,search:b,hash:y}=m||s.location;return ng("",{pathname:g,search:b,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default",m?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function r(s,u){return typeof u=="string"?u:Rc(u)}return eA(i,r,null,t)}function bt(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function Xn(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function QC(){return Math.random().toString(36).substring(2,10)}function Qb(t,i){return{usr:t.state,key:t.key,idx:i,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function ng(t,i,r=null,s,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?Ys(i):i,state:r,key:i&&i.key||s||QC(),mask:u}}function Rc({pathname:t="/",search:i="",hash:r=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ys(t){let i={};if(t){let r=t.indexOf("#");r>=0&&(i.hash=t.substring(r),t=t.substring(0,r));let s=t.indexOf("?");s>=0&&(i.search=t.substring(s),t=t.substring(0,s)),t&&(i.pathname=t)}return i}function eA(t,i,r,s={}){let{window:u=document.defaultView,v5Compat:m=!1}=s,g=u.history,b="POP",y=null,_=C();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function C(){return(g.state||{idx:null}).idx}function T(){b="POP";let U=C(),B=U==null?null:U-_;_=U,y&&y({action:b,location:P.location,delta:B})}function O(U,B){b="PUSH";let $=Jb(U)?U:ng(P.location,U,B);_=C()+1;let K=Qb($,_),ue=P.createHref($.mask||$);try{g.pushState(K,"",ue)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;u.location.assign(ue)}m&&y&&y({action:b,location:P.location,delta:1})}function I(U,B){b="REPLACE";let $=Jb(U)?U:ng(P.location,U,B);_=C();let K=Qb($,_),ue=P.createHref($.mask||$);g.replaceState(K,"",ue),m&&y&&y({action:b,location:P.location,delta:0})}function z(U){return tA(u,U)}let P={get action(){return b},get location(){return t(u,g)},listen(U){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(Xb,T),y=U,()=>{u.removeEventListener(Xb,T),y=null}},createHref(U){return i(u,U)},createURL:z,encodeLocation(U){let B=z(U);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:O,replace:I,go(U){return g.go(U)}};return P}function tA(t,i,r=!1){let s="http://localhost";t&&(s=t.location.origin!=="null"?t.location.origin:t.location.href),bt(s,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Rc(i);return u=u.replace(/ $/,"%20"),!r&&Iw.test(u)&&(u=s+u),new URL(u,s)}function Nw(t,i,r="/"){return nA(t,i,r,!1)}function nA(t,i,r,s,u){let m=typeof i=="string"?Ys(i):i,g=Ta(m.pathname||"/",r);if(g==null)return null;let b=iA(t),y=null,_=mA(g);for(let C=0;y==null&&C<b.length;++C)y=hA(b[C],_,s);return y}function iA(t){let i=Dw(t);return aA(i),i}function Dw(t,i=[],r=[],s="",u=!1){let m=(g,b,y=u,_)=>{let C={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(s)&&y)return;bt(C.relativePath.startsWith(s),`Absolute route path "${C.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(s.length)}let T=gi([s,C.relativePath]),O=r.concat(C);g.children&&g.children.length>0&&(bt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Dw(g.children,i,O,T,y)),!(g.path==null&&!g.index)&&i.push({path:T,score:dA(T,g.index),routesMeta:O.map((I,z)=>{let[P,U]=Fw(I.relativePath,I.caseSensitive,z===O.length-1);return{...I,matcher:P,compiledParams:U}})})};return t.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))m(g,b);else for(let y of Bw(g.path))m(g,b,!0,y)}),i}function Bw(t){let i=t.split("/");if(i.length===0)return[];let[r,...s]=i,u=r.endsWith("?"),m=r.replace(/\?$/,"");if(s.length===0)return u?[m,""]:[m];let g=Bw(s.join("/")),b=[];return b.push(...g.map(y=>y===""?m:[m,y].join("/"))),u&&b.push(...g),b.map(y=>t.startsWith("/")&&y===""?"/":y)}function aA(t){t.sort((i,r)=>i.score!==r.score?r.score-i.score:fA(i.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var rA=/^:[\w-]+$/,oA=3,sA=2,lA=1,cA=10,uA=-2,e_=t=>t==="*";function dA(t,i){let r=t.split("/"),s=r.length;return r.some(e_)&&(s+=uA),i&&(s+=sA),r.filter(u=>!e_(u)).reduce((u,m)=>u+(rA.test(m)?oA:m===""?lA:cA),s)}function fA(t,i){return t.length===i.length&&t.slice(0,-1).every((s,u)=>s===i[u])?t[t.length-1]-i[i.length-1]:0}function hA(t,i,r=!1){let{routesMeta:s}=t,u={},m="/",g=[];for(let b=0;b<s.length;++b){let y=s[b],_=b===s.length-1,C=m==="/"?i:i.slice(m.length)||"/",T={path:y.relativePath,caseSensitive:y.caseSensitive,end:_},O=y.matcher&&y.compiledParams?Uw(T,C,y.matcher,y.compiledParams):sf(T,C),I=y.route;if(!O&&_&&r&&!s[s.length-1].route.index&&(O=sf({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},C)),!O)return null;Object.assign(u,O.params),g.push({params:u,pathname:gi([m,O.pathname]),pathnameBase:vA(gi([m,O.pathnameBase])),route:I}),O.pathnameBase!=="/"&&(m=gi([m,O.pathnameBase]))}return g}function sf(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,s]=Fw(t.path,t.caseSensitive,t.end);return Uw(t,i,r,s)}function Uw(t,i,r,s){let u=i.match(r);if(!u)return null;let m=u[0],g=m.replace(/(.)\/+$/,"$1"),b=u.slice(1);return{params:s.reduce((_,{paramName:C,isOptional:T},O)=>{if(C==="*"){let z=b[O]||"";g=m.slice(0,m.length-z.length).replace(/(.)\/+$/,"$1")}const I=b[O];return T&&!I?_[C]=void 0:_[C]=(I||"").replace(/%2F/g,"/"),_},{}),pathname:m,pathnameBase:g,pattern:t}}function Fw(t,i=!1,r=!0){Xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,y,_,C)=>{if(s.push({paramName:b,isOptional:y!=null}),y){let T=C.charAt(_+g.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(s.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function mA(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Xn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Ta(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,s=t.charAt(r);return s&&s!=="/"?null:t.slice(r)||"/"}function pA(t,i="/"){let{pathname:r,search:s="",hash:u=""}=typeof t=="string"?Ys(t):t,m;return r?(r=Hw(r),r.startsWith("/")?m=t_(r.substring(1),"/"):m=t_(r,i)):m=i,{pathname:m,search:yA(s),hash:bA(u)}}function t_(t,i){let r=lf(i).split("/");return t.split("/").forEach(u=>{u===".."?r.length>1&&r.pop():u!=="."&&r.push(u)}),r.length>1?r.join("/"):"/"}function Jm(t,i,r,s){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gA(t){return t.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function e0(t){let i=gA(t);return i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase)}function Cf(t,i,r,s=!1){let u;typeof t=="string"?u=Ys(t):(u={...t},bt(!u.pathname||!u.pathname.includes("?"),Jm("?","pathname","search",u)),bt(!u.pathname||!u.pathname.includes("#"),Jm("#","pathname","hash",u)),bt(!u.search||!u.search.includes("#"),Jm("#","search","hash",u)));let m=t===""||u.pathname==="",g=m?"/":u.pathname,b;if(g==null)b=r;else{let T=i.length-1;if(!s&&g.startsWith("..")){let O=g.split("/");for(;O[0]==="..";)O.shift(),T-=1;u.pathname=O.join("/")}b=T>=0?i[T]:"/"}let y=pA(u,b),_=g&&g!=="/"&&g.endsWith("/"),C=(m||g===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(_||C)&&(y.pathname+="/"),y}var Hw=t=>t.replace(/[\\/]{2,}/g,"/"),gi=t=>Hw(t.join("/")),lf=t=>t.replace(/\/+$/,""),vA=t=>lf(t).replace(/^\/*/,"/"),yA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,_A=class{constructor(t,i,r,s=!1){this.status=t,this.statusText=i||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function xA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function wA(t){let i=t.map(r=>r.route.path).filter(Boolean);return gi(i)||"/"}var $w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vw(t,i){let r=t;if(typeof r!="string"||!Qg.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let s=r,u=!1;if($w)try{let m=new URL(window.location.href),g=Iw.test(r)?new URL(XC(r,m.protocol)):new URL(r),b=Ta(g.pathname,i);g.origin===m.origin&&b!=null?r=b+g.search+g.hash:u=!0}catch{Xn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zw=["POST","PUT","PATCH","DELETE"];new Set(Zw);var SA=["GET",...Zw];new Set(SA);var TA=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function EA(t){try{return TA.includes(new URL(t).protocol)}catch{return!1}}var Ws=k.createContext(null);Ws.displayName="DataRouter";var Af=k.createContext(null);Af.displayName="DataRouterState";var qw=k.createContext(!1);function CA(){return k.useContext(qw)}var Gw=k.createContext({isTransitioning:!1});Gw.displayName="ViewTransition";var AA=k.createContext(new Map);AA.displayName="Fetchers";var kA=k.createContext(null);kA.displayName="Await";var Mn=k.createContext(null);Mn.displayName="Navigation";var Hc=k.createContext(null);Hc.displayName="Location";var Qn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Qn.displayName="Route";var t0=k.createContext(null);t0.displayName="RouteError";var Yw="REACT_ROUTER_ERROR",OA="REDIRECT",jA="ROUTE_ERROR_RESPONSE";function zA(t){if(t.startsWith(`${Yw}:${OA}:{`))try{let i=JSON.parse(t.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function LA(t){if(t.startsWith(`${Yw}:${jA}:{`))try{let i=JSON.parse(t.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new _A(i.status,i.statusText,i.data)}catch{}}function RA(t,{relative:i}={}){bt(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=k.useContext(Mn),{hash:u,pathname:m,search:g}=$c(t,{relative:i}),b=m;return r!=="/"&&(b=m==="/"?r:gi([r,m])),s.createHref({pathname:b,search:g,hash:u})}function Ks(){return k.useContext(Hc)!=null}function rn(){return bt(Ks(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Hc).location}var Ww="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kw(t){k.useContext(Mn).static||k.useLayoutEffect(t)}function Qt(){let{isDataRoute:t}=k.useContext(Qn);return t?WA():PA()}function PA(){bt(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(Ws),{basename:i,navigator:r}=k.useContext(Mn),{matches:s}=k.useContext(Qn),{pathname:u}=rn(),m=JSON.stringify(e0(s)),g=k.useRef(!1);return Kw(()=>{g.current=!0}),k.useCallback((y,_={})=>{if(Xn(g.current,Ww),!g.current)return;if(typeof y=="number"){r.go(y);return}let C=Cf(y,JSON.parse(m),u,_.relative==="path");t==null&&i!=="/"&&(C.pathname=C.pathname==="/"?i:gi([i,C.pathname])),(_.replace?r.replace:r.push)(C,_.state,_)},[i,r,m,u,t])}var MA=k.createContext(null);function IA(t){let i=k.useContext(Qn).outlet;return k.useMemo(()=>i&&k.createElement(MA.Provider,{value:t},i),[i,t])}function NA(){let{matches:t}=k.useContext(Qn);return t[t.length-1]?.params??{}}function $c(t,{relative:i}={}){let{matches:r}=k.useContext(Qn),{pathname:s}=rn(),u=JSON.stringify(e0(r));return k.useMemo(()=>Cf(t,JSON.parse(u),s,i==="path"),[t,u,s,i])}function DA(t,i){return Xw(t,i)}function Xw(t,i,r){bt(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(Mn),{matches:u}=k.useContext(Qn),m=u[u.length-1],g=m?m.params:{},b=m?m.pathname:"/",y=m?m.pathnameBase:"/",_=m&&m.route;{let U=_&&_.path||"";Qw(b,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let C=rn(),T;if(i){let U=typeof i=="string"?Ys(i):i;bt(y==="/"||U.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),T=U}else T=C;let O=T.pathname||"/",I=O;if(y!=="/"){let U=y.replace(/^\//,"").split("/");I="/"+O.replace(/^\//,"").split("/").slice(U.length).join("/")}let z=r&&r.state.matches.length?r.state.matches.map(U=>Object.assign(U,{route:r.manifest[U.route.id]||U.route})):Nw(t,{pathname:I});Xn(_||z!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Xn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=$A(z&&z.map(U=>Object.assign({},U,{params:Object.assign({},g,U.params),pathname:gi([y,s.encodeLocation?s.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:gi([y,s.encodeLocation?s.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),u,r);return i&&P?k.createElement(Hc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...T},navigationType:"POP"}},P):P}function BA(){let t=YA(),i=xA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",t),g=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},i),r?k.createElement("pre",{style:u},r):null,g)}var UA=k.createElement(BA,null),Jw=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){this.props.onError?this.props.onError(t,i):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=LA(t.digest);r&&(t=r)}let i=t!==void 0?k.createElement(Qn.Provider,{value:this.props.routeContext},k.createElement(t0.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?k.createElement(FA,{error:t},i):i}};Jw.contextType=qw;var Qm=new WeakMap;function FA({children:t,error:i}){let{basename:r}=k.useContext(Mn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let s=zA(i.digest);if(s){let u=Qm.get(i);if(u)throw u;let m=Vw(s.location,r),g=m.absoluteURL||m.to;if(EA(g))throw new Error("Invalid redirect location");if($w&&!Qm.get(i))if(m.isExternal||s.reloadDocument)window.location.href=g;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:s.replace}));throw Qm.set(i,b),b}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return t}function HA({routeContext:t,match:i,children:r}){let s=k.useContext(Ws);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(Qn.Provider,{value:t},r)}function $A(t,i=[],r){let s=r?.state;if(t==null){if(!s)return null;if(s.errors)t=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let u=t,m=s?.errors;if(m!=null){let C=u.findIndex(T=>T.route.id&&m?.[T.route.id]!==void 0);bt(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,C+1))}let g=!1,b=-1;if(r&&s){g=s.renderFallback;for(let C=0;C<u.length;C++){let T=u[C];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(b=C),T.route.id){let{loaderData:O,errors:I}=s,z=T.route.loader&&!O.hasOwnProperty(T.route.id)&&(!I||I[T.route.id]===void 0);if(T.route.lazy||z){r.isStatic&&(g=!0),b>=0?u=u.slice(0,b+1):u=[u[0]];break}}}}let y=r?.onError,_=s&&y?(C,T)=>{y(C,{location:s.location,params:s.matches?.[0]?.params??{},pattern:wA(s.matches),errorInfo:T})}:void 0;return u.reduceRight((C,T,O)=>{let I,z=!1,P=null,U=null;s&&(I=m&&T.route.id?m[T.route.id]:void 0,P=T.route.errorElement||UA,g&&(b<0&&O===0?(Qw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,U=null):b===O&&(z=!0,U=T.route.hydrateFallbackElement||null)));let B=i.concat(u.slice(0,O+1)),$=()=>{let K;return I?K=P:z?K=U:T.route.Component?K=k.createElement(T.route.Component,null):T.route.element?K=T.route.element:K=C,k.createElement(HA,{match:T,routeContext:{outlet:C,matches:B,isDataRoute:s!=null},children:K})};return s&&(T.route.ErrorBoundary||T.route.errorElement||O===0)?k.createElement(Jw,{location:s.location,revalidation:s.revalidation,component:P,error:I,children:$(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:_}):$()},null)}function n0(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VA(t){let i=k.useContext(Ws);return bt(i,n0(t)),i}function ZA(t){let i=k.useContext(Af);return bt(i,n0(t)),i}function qA(t){let i=k.useContext(Qn);return bt(i,n0(t)),i}function i0(t){let i=qA(t),r=i.matches[i.matches.length-1];return bt(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function GA(){return i0("useRouteId")}function YA(){let t=k.useContext(t0),i=ZA("useRouteError"),r=i0("useRouteError");return t!==void 0?t:i.errors?.[r]}function WA(){let{router:t}=VA("useNavigate"),i=i0("useNavigate"),r=k.useRef(!1);return Kw(()=>{r.current=!0}),k.useCallback(async(u,m={})=>{Xn(r.current,Ww),r.current&&(typeof u=="number"?await t.navigate(u):await t.navigate(u,{fromRouteId:i,...m}))},[t,i])}var n_={};function Qw(t,i,r){!i&&!n_[t]&&(n_[t]=!0,Xn(!1,r))}k.memo(KA);function KA({routes:t,manifest:i,future:r,state:s,isStatic:u,onError:m}){return Xw(t,void 0,{manifest:i,state:s,isStatic:u,onError:m})}function a0({to:t,replace:i,state:r,relative:s}){bt(Ks(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=k.useContext(Mn);Xn(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=k.useContext(Qn),{pathname:g}=rn(),b=Qt(),y=Cf(t,e0(m),g,s==="path"),_=JSON.stringify(y);return k.useEffect(()=>{b(JSON.parse(_),{replace:i,state:r,relative:s})},[b,_,s,i,r]),null}function r0(t){return IA(t.context)}function qt(t){bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XA({basename:t="/",children:i=null,location:r,navigationType:s="POP",navigator:u,static:m=!1,useTransitions:g}){bt(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=t.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:b,navigator:u,static:m,useTransitions:g,future:{}}),[b,u,m,g]);typeof r=="string"&&(r=Ys(r));let{pathname:_="/",search:C="",hash:T="",state:O=null,key:I="default",mask:z}=r,P=k.useMemo(()=>{let U=Ta(_,b);return U==null?null:{location:{pathname:U,search:C,hash:T,state:O,key:I,mask:z},navigationType:s}},[b,_,C,T,O,I,s,z]);return Xn(P!=null,`<Router basename="${b}"> is not able to match the URL "${_}${C}${T}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:k.createElement(Mn.Provider,{value:y},k.createElement(Hc.Provider,{children:i,value:P}))}function JA({children:t,location:i}){return DA(ig(t),i)}function ig(t,i=[]){let r=[];return k.Children.forEach(t,(s,u)=>{if(!k.isValidElement(s))return;let m=[...i,u];if(s.type===k.Fragment){r.push.apply(r,ig(s.props.children,m));return}bt(s.type===qt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),bt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=ig(s.props.children,m)),r.push(g)}),r}var $d="get",Vd="application/x-www-form-urlencoded";function kf(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function QA(t){return kf(t)&&t.tagName.toLowerCase()==="button"}function e2(t){return kf(t)&&t.tagName.toLowerCase()==="form"}function t2(t){return kf(t)&&t.tagName.toLowerCase()==="input"}function n2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function i2(t,i){return t.button===0&&(!i||i==="_self")&&!n2(t)}function ag(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((i,r)=>{let s=t[r];return i.concat(Array.isArray(s)?s.map(u=>[r,u]):[[r,s]])},[]))}function a2(t,i){let r=ag(t);return i&&i.forEach((s,u)=>{r.has(u)||i.getAll(u).forEach(m=>{r.append(u,m)})}),r}var Ld=null;function r2(){if(Ld===null)try{new FormData(document.createElement("form"),0),Ld=!1}catch{Ld=!0}return Ld}var o2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ep(t){return t!=null&&!o2.has(t)?(Xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vd}"`),null):t}function s2(t,i){let r,s,u,m,g;if(e2(t)){let b=t.getAttribute("action");s=b?Ta(b,i):null,r=t.getAttribute("method")||$d,u=ep(t.getAttribute("enctype"))||Vd,m=new FormData(t)}else if(QA(t)||t2(t)&&(t.type==="submit"||t.type==="image")){let b=t.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=t.getAttribute("formaction")||b.getAttribute("action");if(s=y?Ta(y,i):null,r=t.getAttribute("formmethod")||b.getAttribute("method")||$d,u=ep(t.getAttribute("formenctype"))||ep(b.getAttribute("enctype"))||Vd,m=new FormData(b,t),!r2()){let{name:_,type:C,value:T}=t;if(C==="image"){let O=_?`${_}.`:"";m.append(`${O}x`,"0"),m.append(`${O}y`,"0")}else _&&m.append(_,T)}}else{if(kf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=$d,s=null,u=Vd,g=t}return m&&u==="text/plain"&&(g=m,m=void 0),{action:s,method:r.toLowerCase(),encType:u,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function o0(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function e1(t,i,r,s){let u=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:i&&Ta(u.pathname,i)==="/"?u.pathname=`${lf(i)}/_root.${s}`:u.pathname=`${lf(u.pathname)}.${s}`,u}async function l2(t,i){if(t.id in i)return i[t.id];try{let r=await import(t.module);return i[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function c2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function u2(t,i,r){let s=await Promise.all(t.map(async u=>{let m=i.routes[u.route.id];if(m){let g=await l2(m,r);return g.links?g.links():[]}return[]}));return m2(s.flat(1).filter(c2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function i_(t,i,r,s,u,m){let g=(y,_)=>r[_]?y.route.id!==r[_].route.id:!0,b=(y,_)=>r[_].pathname!==y.pathname||r[_].route.path?.endsWith("*")&&r[_].params["*"]!==y.params["*"];return m==="assets"?i.filter((y,_)=>g(y,_)||b(y,_)):m==="data"?i.filter((y,_)=>{let C=s.routes[y.route.id];if(!C||!C.hasLoader)return!1;if(g(y,_)||b(y,_))return!0;if(y.route.shouldRevalidate){let T=y.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function d2(t,i,{includeHydrateFallback:r}={}){return f2(t.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),r&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function f2(t){return[...new Set(t)]}function h2(t){let i={},r=Object.keys(t).sort();for(let s of r)i[s]=t[s];return i}function m2(t,i){let r=new Set;return new Set(i),t.reduce((s,u)=>{let m=JSON.stringify(h2(u));return r.has(m)||(r.add(m),s.push({key:m,link:u})),s},[])}function s0(){let t=k.useContext(Ws);return o0(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function p2(){let t=k.useContext(Af);return o0(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var l0=k.createContext(void 0);l0.displayName="FrameworkContext";function Of(){let t=k.useContext(l0);return o0(t,"You must render this element inside a <HydratedRouter> element"),t}function g2(t,i){let r=k.useContext(l0),[s,u]=k.useState(!1),[m,g]=k.useState(!1),{onFocus:b,onBlur:y,onMouseEnter:_,onMouseLeave:C,onTouchStart:T}=i,O=k.useRef(null);k.useEffect(()=>{if(t==="render"&&g(!0),t==="viewport"){let P=B=>{B.forEach($=>{g($.isIntersecting)})},U=new IntersectionObserver(P,{threshold:.5});return O.current&&U.observe(O.current),()=>{U.disconnect()}}},[t]),k.useEffect(()=>{if(s){let P=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(P)}}},[s]);let I=()=>{u(!0)},z=()=>{u(!1),g(!1)};return r?t!=="intent"?[m,O,{}]:[m,O,{onFocus:lc(b,I),onBlur:lc(y,z),onMouseEnter:lc(_,I),onMouseLeave:lc(C,z),onTouchStart:lc(T,I)}]:[!1,O,{}]}function lc(t,i){return r=>{t&&t(r),r.defaultPrevented||i(r)}}function v2({page:t,...i}){let r=CA(),{nonce:s}=Of(),{router:u}=s0(),m=k.useMemo(()=>Nw(u.routes,t,u.basename),[u.routes,t,u.basename]);return m?(i.nonce==null&&s&&(i={...i,nonce:s}),r?k.createElement(b2,{page:t,matches:m,...i}):k.createElement(_2,{page:t,matches:m,...i})):null}function y2(t){let{manifest:i,routeModules:r}=Of(),[s,u]=k.useState([]);return k.useEffect(()=>{let m=!1;return u2(t,i,r).then(g=>{m||u(g)}),()=>{m=!0}},[t,i,r]),s}function b2({page:t,matches:i,...r}){let s=rn(),{future:u}=Of(),{basename:m}=s0(),g=k.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let b=e1(t,m,u.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,_=[];for(let C of i)typeof C.route.shouldRevalidate=="function"?y=!0:_.push(C.route.id);return y&&_.length>0&&b.searchParams.set("_routes",_.join(",")),[b.pathname+b.search]},[m,u.v8_trailingSlashAwareDataRequests,t,s,i]);return k.createElement(k.Fragment,null,g.map(b=>k.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})))}function _2({page:t,matches:i,...r}){let s=rn(),{future:u,manifest:m,routeModules:g}=Of(),{basename:b}=s0(),{loaderData:y,matches:_}=p2(),C=k.useMemo(()=>i_(t,i,_,m,s,"data"),[t,i,_,m,s]),T=k.useMemo(()=>i_(t,i,_,m,s,"assets"),[t,i,_,m,s]),O=k.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let P=new Set,U=!1;if(i.forEach($=>{let K=m.routes[$.route.id];!K||!K.hasLoader||(!C.some(ue=>ue.route.id===$.route.id)&&$.route.id in y&&g[$.route.id]?.shouldRevalidate||K.hasClientLoader?U=!0:P.add($.route.id))}),P.size===0)return[];let B=e1(t,b,u.v8_trailingSlashAwareDataRequests,"data");return U&&P.size>0&&B.searchParams.set("_routes",i.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[B.pathname+B.search]},[b,u.v8_trailingSlashAwareDataRequests,y,s,m,C,i,t,g]),I=k.useMemo(()=>d2(T,m),[T,m]),z=y2(T);return k.createElement(k.Fragment,null,O.map(P=>k.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...r})),I.map(P=>k.createElement("link",{key:P,rel:"modulepreload",href:P,...r})),z.map(({key:P,link:U})=>k.createElement("link",{key:P,nonce:r.nonce,...U,crossOrigin:U.crossOrigin??r.crossOrigin})))}function x2(...t){return i=>{t.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w2&&(window.__reactRouterVersion="7.18.2")}catch{}function S2({basename:t,children:i,useTransitions:r,window:s}){let u=k.useRef();u.current==null&&(u.current=JC({window:s,v5Compat:!0}));let m=u.current,[g,b]=k.useState({action:m.action,location:m.location}),y=k.useCallback(_=>{r===!1?b(_):k.startTransition(()=>b(_))},[r]);return k.useLayoutEffect(()=>m.listen(y),[m,y]),k.createElement(XA,{basename:t,children:i,location:g.location,navigationType:g.action,navigator:m,useTransitions:r})}var wa=k.forwardRef(function({onClick:i,discover:r="render",prefetch:s="none",relative:u,reloadDocument:m,replace:g,mask:b,state:y,target:_,to:C,preventScrollReset:T,viewTransition:O,defaultShouldRevalidate:I,...z},P){let{basename:U,navigator:B,useTransitions:$}=k.useContext(Mn),K=typeof C=="string"&&Qg.test(C),ue=Vw(C,U);C=ue.to;let J=RA(C,{relative:u}),se=rn(),Q=null;if(b){let Oe=Cf(b,[],se.mask?se.mask.pathname:"/",!0);U!=="/"&&(Oe.pathname=Oe.pathname==="/"?U:gi([U,Oe.pathname])),Q=B.createHref(Oe)}let[he,Ce,Ue]=g2(s,z),ve=A2(C,{replace:g,mask:b,state:y,target:_,preventScrollReset:T,relative:u,viewTransition:O,defaultShouldRevalidate:I,useTransitions:$});function ke(Oe){i&&i(Oe),Oe.defaultPrevented||ve(Oe)}let ge=!(ue.isExternal||m),ae=k.createElement("a",{...z,...Ue,href:(ge?Q:void 0)||ue.absoluteURL||J,onClick:ge?ke:i,ref:x2(P,Ce),target:_,"data-discover":!K&&r==="render"?"true":void 0});return he&&!K?k.createElement(k.Fragment,null,ae,k.createElement(v2,{page:J})):ae});wa.displayName="Link";var T2=k.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:s="",end:u=!1,style:m,to:g,viewTransition:b,children:y,..._},C){let T=$c(g,{relative:_.relative}),O=rn(),I=k.useContext(Af),{navigator:z,basename:P}=k.useContext(Mn),U=I!=null&&R2(T)&&b===!0,B=z.encodeLocation?z.encodeLocation(T).pathname:T.pathname,$=O.pathname,K=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;r||($=$.toLowerCase(),K=K?K.toLowerCase():null,B=B.toLowerCase()),K&&P&&(K=Ta(K,P)||K);const ue=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let J=$===B||!u&&$.startsWith(B)&&$.charAt(ue)==="/",se=K!=null&&(K===B||!u&&K.startsWith(B)&&K.charAt(B.length)==="/"),Q={isActive:J,isPending:se,isTransitioning:U},he=J?i:void 0,Ce;typeof s=="function"?Ce=s(Q):Ce=[s,J?"active":null,se?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof m=="function"?m(Q):m;return k.createElement(wa,{..._,"aria-current":he,className:Ce,ref:C,style:Ue,to:g,viewTransition:b},typeof y=="function"?y(Q):y)});T2.displayName="NavLink";var E2=k.forwardRef(({discover:t="render",fetcherKey:i,navigate:r,reloadDocument:s,replace:u,state:m,method:g=$d,action:b,onSubmit:y,relative:_,preventScrollReset:C,viewTransition:T,defaultShouldRevalidate:O,...I},z)=>{let{useTransitions:P}=k.useContext(Mn),U=z2(),B=L2(b,{relative:_}),$=g.toLowerCase()==="get"?"get":"post",K=typeof b=="string"&&Qg.test(b),ue=J=>{if(y&&y(J),J.defaultPrevented)return;J.preventDefault();let se=J.nativeEvent.submitter,Q=se?.getAttribute("formmethod")||g,he=()=>U(se||J.currentTarget,{fetcherKey:i,method:Q,navigate:r,replace:u,state:m,relative:_,preventScrollReset:C,viewTransition:T,defaultShouldRevalidate:O});P&&r!==!1?k.startTransition(()=>he()):he()};return k.createElement("form",{ref:z,method:$,action:B,onSubmit:s?y:ue,...I,"data-discover":!K&&t==="render"?"true":void 0})});E2.displayName="Form";function C2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t1(t){let i=k.useContext(Ws);return bt(i,C2(t)),i}function A2(t,{target:i,replace:r,mask:s,state:u,preventScrollReset:m,relative:g,viewTransition:b,defaultShouldRevalidate:y,useTransitions:_}={}){let C=Qt(),T=rn(),O=$c(t,{relative:g});return k.useCallback(I=>{if(i2(I,i)){I.preventDefault();let z=r!==void 0?r:Rc(T)===Rc(O),P=()=>C(t,{replace:z,mask:s,state:u,preventScrollReset:m,relative:g,viewTransition:b,defaultShouldRevalidate:y});_?k.startTransition(()=>P()):P()}},[T,C,O,r,s,u,i,t,m,g,b,y,_])}function k2(t){Xn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=k.useRef(ag(t)),r=k.useRef(!1),s=rn(),u=k.useMemo(()=>a2(s.search,r.current?null:i.current),[s.search]),m=Qt(),g=k.useCallback((b,y)=>{const _=ag(typeof b=="function"?b(new URLSearchParams(u)):b);r.current=!0,m("?"+_,y)},[m,u]);return[u,g]}var O2=0,j2=()=>`__${String(++O2)}__`;function z2(){let{router:t}=t1("useSubmit"),{basename:i}=k.useContext(Mn),r=GA(),s=t.fetch,u=t.navigate;return k.useCallback(async(m,g={})=>{let{action:b,method:y,encType:_,formData:C,body:T}=s2(m,i);if(g.navigate===!1){let O=g.fetcherKey||j2();await s(O,r,g.action||b,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:T,formMethod:g.method||y,formEncType:g.encType||_,flushSync:g.flushSync})}else await u(g.action||b,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:T,formMethod:g.method||y,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:r,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,u,i,r])}function L2(t,{relative:i}={}){let{basename:r}=k.useContext(Mn),s=k.useContext(Qn);bt(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),m={...$c(t||".",{relative:i})},g=rn();if(t==null){m.search=g.search;let b=new URLSearchParams(m.search),y=b.getAll("index");if(y.some(C=>C==="")){b.delete("index"),y.filter(T=>T).forEach(T=>b.append("index",T));let C=b.toString();m.search=C?`?${C}`:""}}return(!t||t===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(m.pathname=m.pathname==="/"?r:gi([r,m.pathname])),Rc(m)}function R2(t,{relative:i}={}){let r=k.useContext(Gw);bt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t1("useViewTransitionState"),u=$c(t,{relative:i});if(!r.isTransitioning)return!1;let m=Ta(r.currentLocation.pathname,s)||r.currentLocation.pathname,g=Ta(r.nextLocation.pathname,s)||r.nextLocation.pathname;return sf(u.pathname,g)!=null||sf(u.pathname,m)!=null}var n1=Mw(),pt="-ms-",wc="-moz-",tt="-webkit-",i1="comm",jf="rule",c0="decl",P2="@import",M2="@namespace",a1="@keyframes",I2="@layer",r1=Math.abs,u0=String.fromCharCode,rg=Object.assign;function N2(t,i){return Ut(t,0)^45?(((i<<2^Ut(t,0))<<2^Ut(t,1))<<2^Ut(t,2))<<2^Ut(t,3):0}function o1(t){return t.trim()}function va(t,i){return(t=i.exec(t))?t[0]:t}function Fe(t,i,r){return t.replace(i,r)}function Zd(t,i,r){return t.indexOf(i,r)}function Ut(t,i){return t.charCodeAt(i)|0}function Ro(t,i,r){return t.slice(i,r)}function fi(t){return t.length}function s1(t){return t.length}function gc(t,i){return i.push(t),t}function D2(t,i){return t.map(i).join("")}function a_(t,i){return t.filter(function(r){return!va(r,i)})}var zf=1,Us=1,l1=0,Jn=0,It=0,Xs="";function Lf(t,i,r,s,u,m,g,b){return{value:t,root:i,parent:r,type:s,props:u,children:m,line:zf,column:Us,length:g,return:"",siblings:b}}function Sr(t,i){return rg(Lf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function Es(t){for(;t.root;)t=Sr(t.root,{children:[t]});gc(t,t.siblings)}function B2(){return It}function U2(){return It=Jn>0?Ut(Xs,--Jn):0,Us--,It===10&&(Us=1,zf--),It}function vi(){return It=Jn<l1?Ut(Xs,Jn++):0,Us++,It===10&&(Us=1,zf++),It}function kr(){return Ut(Xs,Jn)}function qd(){return Jn}function Rf(t,i){return Ro(Xs,t,i)}function Pc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F2(t){return zf=Us=1,l1=fi(Xs=t),Jn=0,[]}function H2(t){return Xs="",t}function tp(t){return o1(Rf(Jn-1,og(t===91?t+2:t===40?t+1:t)))}function $2(t){for(;(It=kr())&&It<33;)vi();return Pc(t)>2||Pc(It)>3?"":" "}function V2(t,i){for(;--i&&vi()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return Rf(t,qd()+(i<6&&kr()==32&&vi()==32))}function og(t){for(;vi();)switch(It){case t:return Jn;case 34:case 39:t!==34&&t!==39&&og(It);break;case 40:t===41&&og(t);break;case 92:vi();break}return Jn}function Z2(t,i){for(;vi()&&t+It!==57;)if(t+It===84&&kr()===47)break;return"/*"+Rf(i,Jn-1)+"*"+u0(t===47?t:vi())}function q2(t){for(;!Pc(kr());)vi();return Rf(t,Jn)}function G2(t){return H2(Gd("",null,null,null,[""],t=F2(t),0,[0],t))}function Gd(t,i,r,s,u,m,g,b,y){for(var _=0,C=0,T=g,O=0,I=0,z=0,P=1,U=1,B=1,$=0,K="",ue=u,J=m,se=s,Q=K;U;)switch(z=$,$=vi()){case 40:if(z!=108&&Ut(Q,T-1)==58){Zd(Q+=Fe(tp($),"&","&\f"),"&\f",r1(_?b[_-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:Q+=tp($);break;case 9:case 10:case 13:case 32:Q+=$2(z);break;case 92:Q+=V2(qd()-1,7);continue;case 47:switch(kr()){case 42:case 47:gc(Y2(Z2(vi(),qd()),i,r,y),y),(Pc(z||1)==5||Pc(kr()||1)==5)&&fi(Q)&&Ro(Q,-1,void 0)!==" "&&(Q+=" ");break;default:Q+="/"}break;case 123*P:b[_++]=fi(Q)*B;case 125*P:case 59:case 0:switch($){case 0:case 125:U=0;case 59+C:B==-1&&(Q=Fe(Q,/\f/g,"")),I>0&&(fi(Q)-T||P===0&&z===47)&&gc(I>32?o_(Q+";",s,r,T-1,y):o_(Fe(Q," ","")+";",s,r,T-2,y),y);break;case 59:Q+=";";default:if(gc(se=r_(Q,i,r,_,C,u,b,K,ue=[],J=[],T,m),m),$===123)if(C===0)Gd(Q,i,se,se,ue,m,T,b,J);else{switch(O){case 99:if(Ut(Q,3)===110)break;case 108:if(Ut(Q,2)===97)break;default:C=0;case 100:case 109:case 115:}C?Gd(t,se,se,s&&gc(r_(t,se,se,0,0,u,b,K,u,ue=[],T,J),J),u,J,T,b,s?ue:J):Gd(Q,se,se,se,[""],J,0,b,J)}}_=C=I=0,P=B=1,K=Q="",T=g;break;case 58:T=1+fi(Q),I=z;default:if(P<1){if($==123)--P;else if($==125&&P++==0&&U2()==125)continue}switch(Q+=u0($),$*P){case 38:B=C>0?1:(Q+="\f",-1);break;case 44:b[_++]=(fi(Q)-1)*B,B=1;break;case 64:kr()===45&&(Q+=tp(vi())),O=kr(),C=T=fi(K=Q+=q2(qd())),$++;break;case 45:z===45&&fi(Q)==2&&(P=0)}}return m}function r_(t,i,r,s,u,m,g,b,y,_,C,T){for(var O=u-1,I=u===0?m:[""],z=s1(I),P=0,U=0,B=0;P<s;++P)for(var $=0,K=Ro(t,O+1,O=r1(U=g[P])),ue=t;$<z;++$)(ue=o1(U>0?I[$]+" "+K:Fe(K,/&\f/g,I[$])))&&(y[B++]=ue);return Lf(t,i,r,u===0?jf:b,y,_,C,T)}function Y2(t,i,r,s){return Lf(t,i,r,i1,u0(B2()),Ro(t,2,-2),0,s)}function o_(t,i,r,s,u){return Lf(t,i,r,c0,Ro(t,0,s),Ro(t,s+1,-1),s,u)}function c1(t,i,r){switch(N2(t,i)){case 5103:return tt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return tt+t+t;case 4855:return tt+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return wc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+t+wc+t+pt+t+t;case 5936:switch(Ut(t,i+11)){case 114:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tt+t+pt+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tt+t+pt+t+t;case 6165:return tt+t+pt+"flex-"+t+t;case 5187:return tt+t+Fe(t,/(\w+).+(:[^]+)/,tt+"box-$1$2"+pt+"flex-$1$2")+t;case 5443:return tt+t+pt+"flex-item-"+Fe(t,/flex-|-self/g,"")+(va(t,/flex-|baseline/)?"":pt+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return tt+t+pt+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return tt+t+pt+Fe(t,"shrink","negative")+t;case 5292:return tt+t+pt+Fe(t,"basis","preferred-size")+t;case 6060:return tt+"box-"+Fe(t,"-grow","")+tt+t+pt+Fe(t,"grow","positive")+t;case 4554:return tt+Fe(t,/([^-])(transform)/g,"$1"+tt+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+tt+t+t;case 4200:if(!va(t,/flex-|baseline/))return pt+"grid-column-align"+Ro(t,i)+t;break;case 2592:case 3360:return pt+Fe(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,u){return i=u,va(s.props,/grid-\w+-end/)})?~Zd(t+(r=r[i].value),"span",0)?t:pt+Fe(t,"-start","")+t+pt+"grid-row-span:"+(~Zd(r,"span",0)?va(r,/\d+/):+va(r,/\d+/)-+va(t,/\d+/))+";":pt+Fe(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return va(s.props,/grid-\w+-start/)})?t:pt+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,tt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fi(t)-1-i>6)switch(Ut(t,i+1)){case 109:if(Ut(t,i+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+wc+(Ut(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~Zd(t,"stretch",0)?c1(Fe(t,"stretch","fill-available"),i,r)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,m,g,b,y,_){return pt+u+":"+m+_+(g?pt+u+"-span:"+(b?y:+y-+m)+_:"")+t});case 4949:if(Ut(t,i+6)===121)return Fe(t,":",":"+tt)+t;break;case 6444:switch(Ut(t,Ut(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Ut(t,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+pt+"$2box$3")+t;case 100:return Fe(t,":",":"+pt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function cf(t,i){for(var r="",s=0;s<t.length;s++)r+=i(t[s],s,t,i)||"";return r}function W2(t,i,r,s){switch(t.type){case I2:if(t.children.length)break;case P2:case M2:case c0:return t.return=t.return||t.value;case i1:return"";case a1:return t.return=t.value+"{"+cf(t.children,s)+"}";case jf:if(!fi(t.value=t.props.join(",")))return""}return fi(r=cf(t.children,s))?t.return=t.value+"{"+r+"}":""}function K2(t){var i=s1(t);return function(r,s,u,m){for(var g="",b=0;b<i;b++)g+=t[b](r,s,u,m)||"";return g}}function X2(t){return function(i){i.root||(i=i.return)&&t(i)}}function J2(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case c0:t.return=c1(t.value,t.length,r);return;case a1:return cf([Sr(t,{value:Fe(t.value,"@","@"+tt)})],s);case jf:if(t.length)return D2(r=t.props,function(u){switch(va(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Es(Sr(t,{props:[Fe(u,/:(read-\w+)/,":"+wc+"$1")]})),Es(Sr(t,{props:[u]})),rg(t,{props:a_(r,s)});break;case"::placeholder":Es(Sr(t,{props:[Fe(u,/:(plac\w+)/,":"+tt+"input-$1")]})),Es(Sr(t,{props:[Fe(u,/:(plac\w+)/,":"+wc+"$1")]})),Es(Sr(t,{props:[Fe(u,/:(plac\w+)/,pt+"input-$1")]})),Es(Sr(t,{props:[u]})),rg(t,{props:a_(r,s)});break}return""})}}var Ps={},np,ip;const Fs=typeof process<"u"&&Ps!==void 0&&(Ps.REACT_APP_SC_ATTR||Ps.SC_ATTR)||"data-styled",u1="active",d1="data-styled-version",Pf="6.5.3",d0=`/*!sc*/
`,Sc=typeof window<"u"&&typeof document<"u";function s_(t){if(typeof process<"u"&&Ps!==void 0){const i=Ps[t];if(i!==void 0&&i!=="")return i!=="false"}}const Q2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ip=(np=s_("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&np!==void 0?np:s_("SC_DISABLE_SPEEDY"))!==null&&ip!==void 0?ip:typeof process<"u"&&Ps!==void 0&&!1),f1="sc-keyframes-";function Vc(t,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}let Yd=new Map,uf=new Map,Wd=1;const vc=t=>{if(Yd.has(t))return Yd.get(t);for(;uf.has(Wd);)Wd++;const i=Wd++;return Yd.set(t,i),uf.set(i,t),i},ek=t=>uf.get(t),tk=(t,i)=>{Wd=i+1,Yd.set(t,i),uf.set(i,t)},f0=Object.freeze([]),Hs=Object.freeze({});function nk(t,i,r=Hs){return t.theme!==r.theme&&t.theme||i||r.theme}const ik=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ak=/(^-|-$)/g;function h1(t){return t.replace(ik,"-").replace(ak,"")}const rk=/(a)(d)/gi,l_=t=>String.fromCharCode(t+(t>25?39:97));function h0(t){let i,r="";for(i=Math.abs(t);i>52;i=i/52|0)r=l_(i%52)+r;return(l_(i%52)+r).replace(rk,"$1-$2")}const sg=5381,jo=(t,i)=>{let r=i.length;for(;r;)t=33*t^i.charCodeAt(--r);return t},m1=t=>jo(sg,t);function p1(t){return h0(m1(t)>>>0)}function ok(t){return t.displayName||t.name||"Component"}function lg(t){return typeof t=="string"&&!0}function sk(t){return lg(t)?`styled.${t}`:`Styled(${ok(t)})`}const g1=Symbol.for("react.memo"),lk=Symbol.for("react.forward_ref"),ck={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},uk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dk={[lk]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[g1]:v1};function c_(t){return("type"in(i=t)&&i.type.$$typeof)===g1?v1:"$$typeof"in t?dk[t.$$typeof]:ck;var i}const fk=Object.defineProperty,hk=Object.getOwnPropertyNames,mk=Object.getOwnPropertySymbols,pk=Object.getOwnPropertyDescriptor,gk=Object.getPrototypeOf,vk=Object.prototype;function y1(t,i,r){if(typeof i!="string"){const s=gk(i);s&&s!==vk&&y1(t,s,r);const u=hk(i).concat(mk(i)),m=c_(t),g=c_(i);for(let b=0;b<u.length;++b){const y=u[b];if(!(y in uk||r&&r[y]||g&&y in g||m&&y in m)){const _=pk(i,y);try{fk(t,y,_)}catch{}}}}return t}function Mf(t){return typeof t=="function"}const yk=Symbol.for("react.forward_ref");function b1(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===yk&&"styledComponentId"in t}function yc(t,i){return t&&i?t+" "+i:t||i||""}function cg(t,i){return t.join("")}function Mc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ug(t,i,r=!1){if(!r&&!Mc(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(let s=0;s<i.length;s++)t[s]=ug(t[s],i[s]);else if(Mc(i))for(const s in i)t[s]=ug(t[s],i[s]);return t}function m0(t,i){Object.defineProperty(t,"toString",{value:i})}const bk=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let i=this._cIndex;if(t>this._cGroup)for(let r=this._cGroup;r<t;r++)i+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=t;r--)i-=this.groupSizes[r];return this._cGroup=t,this._cIndex=i,i}insertRules(t,i){if(t>=this.groupSizes.length){const u=this.groupSizes,m=u.length;let g=m;for(;t>=g;)if(g<<=1,g<0)throw Vc(16,`${t}`);this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(let b=m;b<g;b++)this.groupSizes[b]=0}let r=this.indexOfGroup(t+1),s=0;for(let u=0,m=i.length;u<m;u++)this.tag.insertRule(r,i[u])&&(this.groupSizes[t]++,r++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)}clearGroup(t){if(t<this.length){const i=this.groupSizes[t],r=this.indexOfGroup(t),s=r+i;this.groupSizes[t]=0;for(let u=r;u<s;u++)this.tag.deleteRule(r);i>0&&this._cGroup>t&&(this._cIndex-=i)}}getGroup(t){let i="";if(t>=this.length||this.groupSizes[t]===0)return i;const r=this.groupSizes[t],s=this.indexOfGroup(t),u=s+r;for(let m=s;m<u;m++)i+=this.tag.getRule(m)+d0;return i}},_k=`style[${Fs}][${d1}="${Pf}"]`,xk=new RegExp(`^${Fs}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),u_=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,dg=t=>{if(!t)return document;if(u_(t))return t;if("getRootNode"in t){const i=t.getRootNode();if(u_(i))return i}return document},wk=(t,i,r)=>{const s=r.split(",");let u;for(let m=0,g=s.length;m<g;m++)(u=s[m])&&t.registerName(i,u)},Sk=(t,i)=>{var r;const s=((r=i.textContent)!==null&&r!==void 0?r:"").split(d0),u=[];for(let m=0,g=s.length;m<g;m++){const b=s[m].trim();if(!b)continue;const y=b.match(xk);if(y){const _=0|parseInt(y[1],10),C=y[2];_!==0&&(tk(C,_),wk(t,C,y[3]),t.getTag().insertRules(_,u)),u.length=0}else u.push(b)}},ap=t=>{const i=dg(t.options.target).querySelectorAll(_k);for(let r=0,s=i.length;r<s;r++){const u=i[r];u&&u.getAttribute(Fs)!==u1&&(Sk(t,u),u.parentNode&&u.parentNode.removeChild(u))}};let cc=!1;function Tk(){if(cc!==!1)return cc;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return cc=t.nonce||t.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return cc=i.getAttribute("content")||void 0}return cc=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const _1=(t,i)=>{const r=document.head,s=t||r,u=document.createElement("style"),m=(y=>{const _=Array.from(y.querySelectorAll(`style[${Fs}]`));return _[_.length-1]})(s),g=m!==void 0?m.nextSibling:null;u.setAttribute(Fs,u1),u.setAttribute(d1,Pf);const b=i||Tk();return b&&u.setAttribute("nonce",b),s.insertBefore(u,g),u},Ek=class{constructor(t,i){this.element=_1(t,i),this.element.appendChild(document.createTextNode("")),this.sheet=(r=>{var s;if(r.sheet)return r.sheet;const u=(s=r.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let m=0,g=u.length;m<g;m++){const b=u[m];if(b.ownerNode===r)return b}throw Vc(17)})(this.element),this.length=0}insertRule(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""}},Ck=class{constructor(t,i){this.element=_1(t,i),this.nodes=this.element.childNodes,this.length=0}insertRule(t,i){if(t<=this.length&&t>=0){const r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let d_=Sc;const Ak={isServer:!Sc,useCSSOMInjection:!Q2};class If{static registerId(i){return vc(i)}constructor(i=Hs,r={},s){this.options=Object.assign(Object.assign({},Ak),i),this.gs=r,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Sc&&d_&&(d_=!1,ap(this)),m0(this,()=>(u=>{const m=u.getTag(),{length:g}=m;let b="";for(let y=0;y<g;y++){const _=ek(y);if(_===void 0)continue;const C=u.names.get(_);if(C===void 0||!C.size)continue;const T=m.getGroup(y);if(T.length===0)continue;const O=Fs+".g"+y+'[id="'+_+'"]';let I="";for(const z of C)z.length>0&&(I+=z+",");b+=T+O+'{content:"'+I+'"}'+d0}return b})(this))}rehydrate(){!this.server&&Sc&&ap(this)}reconstructWithOptions(i,r=!0){const s=new If(Object.assign(Object.assign({},this.options),i),this.gs,r&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Sc&&i.target!==this.options.target&&dg(this.options.target)!==dg(i.target)&&ap(s),s}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:r,target:s,nonce:u})=>r?new Ek(s,u):new Ck(s,u))(this.options),new bk(i)));var i}hasNameForId(i,r){var s,u;return(u=(s=this.names.get(i))===null||s===void 0?void 0:s.has(r))!==null&&u!==void 0&&u}registerName(i,r){vc(i),i.startsWith(f1)&&this.keyframeIds.add(i);const s=this.names.get(i);s?s.add(r):this.names.set(i,new Set([r]))}insertRules(i,r,s){this.registerName(i,r),this.getTag().insertRules(vc(i),s)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(vc(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const x1=new WeakSet,kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ok(t,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in kk||t.startsWith("--")?String(i).trim():i+"px"}const ko=47;function f_(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let i="";for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);i+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):t[r]}return i.startsWith("ms-")?"-"+i:i}const w1=Symbol.for("sc-keyframes");function jk(t){return typeof t=="object"&&t!==null&&w1 in t}function S1(t){return Mf(t)&&!(t.prototype&&t.prototype.isReactComponent)}const T1=t=>t==null||t===!1||t==="",zk=Symbol.for("react.client.reference");function h_(t){return t.$$typeof===zk}function E1(t,i){for(const r in t){const s=t[r];t.hasOwnProperty(r)&&!T1(s)&&(Array.isArray(s)&&x1.has(s)||Mf(s)?i.push(f_(r)+":",s,";"):Mc(s)?(i.push(r+" {"),E1(s,i),i.push("}")):i.push(f_(r)+": "+Ok(r,s)+";"))}}function zo(t,i,r,s,u=[]){if(T1(t))return u;const m=typeof t;if(m==="string")return u.push(t),u;if(m==="function"){if(h_(t))return u;if(S1(t)&&i){const g=t(i);return zo(g,i,r,s,u)}return u.push(t),u}if(Array.isArray(t)){for(let g=0;g<t.length;g++)zo(t[g],i,r,s,u);return u}return b1(t)?(u.push(`.${t.styledComponentId}`),u):jk(t)?(r?(t.inject(r,s),u.push(t.getName(s))):u.push(t),u):h_(t)?u:Mc(t)?t.toString!==Object.prototype.toString?(u.push(t.toString()),u):(E1(t,u),u):(u.push(t.toString()),u)}const Lk=m1(Pf);class Rk{constructor(i,r,s){this.rules=i,this.componentId=r,this.baseHash=jo(Lk,r),this.baseStyle=s,If.registerId(r)}generateAndInjectStyles(i,r,s){let u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,s):"";{let m="";for(let g=0;g<this.rules.length;g++){const b=this.rules[g];if(typeof b=="string")m+=b;else if(b)if(S1(b)){const y=b(i);typeof y=="string"?m+=y:y!=null&&y!==!1&&(m+=cg(zo(y,i,r,s)))}else m+=cg(zo(b,i,r,s))}if(m){this.dynamicNameCache||(this.dynamicNameCache=new Map);const g=s.hash?s.hash+m:m;let b=this.dynamicNameCache.get(g);if(!b){if(b=h0(jo(jo(this.baseHash,s.hash),m)>>>0),this.dynamicNameCache.size>=200){const y=this.dynamicNameCache.keys().next().value;y!==void 0&&this.dynamicNameCache.delete(y)}this.dynamicNameCache.set(g,b)}if(!r.hasNameForId(this.componentId,b)){const y=s(m,"."+b,void 0,this.componentId);r.insertRules(this.componentId,b,y)}u=yc(u,b)}}return u}}const Pk=/&/g;function C1(t,i){let r=0;for(;--i>=0&&t.charCodeAt(i)===92;)r++;return!(1&~r)}function rp(t){const i=t.length;let r="",s=0,u=0,m=0,g=!1,b=!1;for(let y=0;y<i;y++){const _=t.charCodeAt(y);if(m!==0||g||_!==ko||t.charCodeAt(y+1)!==42)if(g)_===42&&t.charCodeAt(y+1)===ko&&(g=!1,y++);else if(_!==34&&_!==39||C1(t,y)){if(m===0)if(_===123)u++;else if(_===125){if(u--,u<0){b=!0;let C=y+1;for(;C<i;){const T=t.charCodeAt(C);if(T===59||T===10)break;C++}C<i&&t.charCodeAt(C)===59&&C++,u=0,y=C-1,s=C;continue}u===0&&(r+=t.substring(s,y+1),s=y+1)}else _===59&&u===0&&(r+=t.substring(s,y+1),s=y+1)}else m===0?m=_:m===_&&(m=0);else g=!0,y++}return b||u!==0||m!==0?(s<i&&u===0&&m===0&&(r+=t.substring(s)),r):t}function A1(t,i){const r=i+" ",s=","+r;for(let u=0;u<t.length;u++){const m=t[u];if(m.type==="rule"){m.value=(r+m.value).replaceAll(",",s);const g=m.props,b=[];for(let y=0;y<g.length;y++)b[y]=r+g[y];m.props=b}Array.isArray(m.children)&&m.type!=="@keyframes"&&A1(m.children,i)}return t}function Mk({options:t=Hs,plugins:i=f0}=Hs){let r,s,u;const m=(O,I,z)=>z.startsWith(s)&&z.endsWith(s)&&z.replaceAll(s,"").length>0?`.${r}`:O,g=i.slice();g.push(O=>{O.type===jf&&O.value.includes("&")&&(u||(u=new RegExp(`\\${s}\\b`,"g")),O.props[0]=O.props[0].replace(Pk,s).replace(u,m))}),t.prefix&&g.push(J2),g.push(W2);let b=[];const y=K2(g.concat(X2(O=>b.push(O)))),_=(O,I="",z="",P="&")=>{r=P,s=I,u=void 0;const U=(function($){const K=$.indexOf("//")!==-1,ue=$.indexOf("}")!==-1;if(!K&&!ue)return $;if(!K)return rp($);const J=$.length;let se="",Q=0,he=0,Ce=0,Ue=0,ve=0,ke=!1;for(;he<J;){const ge=$.charCodeAt(he);if(ge!==34&&ge!==39||C1($,he))if(Ce===0)if(ge===ko&&he+1<J&&$.charCodeAt(he+1)===42){for(he+=2;he+1<J&&($.charCodeAt(he)!==42||$.charCodeAt(he+1)!==ko);)he++;he+=2}else if(ge!==40)if(ge!==41)if(Ue>0)he++;else if(ge===42&&he+1<J&&$.charCodeAt(he+1)===ko)se+=$.substring(Q,he),he+=2,Q=he,ke=!0;else if(ge===ko&&he+1<J&&$.charCodeAt(he+1)===ko){for(se+=$.substring(Q,he);he<J&&$.charCodeAt(he)!==10;)he++;Q=he,ke=!0}else ge===123?ve++:ge===125&&ve--,he++;else Ue>0&&Ue--,he++;else Ue++,he++;else he++;else Ce===0?Ce=ge:Ce===ge&&(Ce=0),he++}return ke?(Q<J&&(se+=$.substring(Q)),ve===0?se:rp(se)):ve===0?$:rp($)})(O);let B=G2(z||I?z+" "+I+" { "+U+" }":U);return t.namespace&&(B=A1(B,t.namespace)),b=[],cf(B,y),b},C=t;let T=sg;for(let O=0;O<i.length;O++)i[O].name||Vc(15),T=jo(T,i[O].name);return C?.namespace&&(T=jo(T,C.namespace)),C?.prefix&&(T=jo(T,"p")),_.hash=T!==sg?T.toString():"",_}const Ik=new If,fg=Mk(),k1=Wn.createContext({shouldForwardProp:void 0,styleSheet:Ik,stylis:fg,stylisPlugins:void 0});k1.Consumer;function Nk(){return Wn.useContext(k1)}const O1=Wn.createContext(void 0);O1.Consumer;const m_=Object.prototype.hasOwnProperty,op={};function Dk(t,i){const r=typeof t!="string"?"sc":h1(t);op[r]=(op[r]||0)+1;const s=r+"-"+p1(Pf+r+op[r]);return i?i+"-"+s:s}function Bk(t,i,r){const s=b1(t),u=t,m=!lg(t),{attrs:g=f0,componentId:b=Dk(i.displayName,i.parentComponentId),displayName:y=sk(t)}=i,_=i.displayName&&i.componentId?h1(i.displayName)+"-"+i.componentId:i.componentId||b,C=s&&u.attrs?u.attrs.concat(g).filter(Boolean):g;let{shouldForwardProp:T}=i;if(s&&u.shouldForwardProp){const P=u.shouldForwardProp;if(i.shouldForwardProp){const U=i.shouldForwardProp;T=(B,$)=>P(B,$)&&U(B,$)}else T=P}const O=new Rk(r,_,s?u.componentStyle:void 0);function I(P,U){return(function(B,$,K){const{attrs:ue,componentStyle:J,defaultProps:se,foldedComponentIds:Q,styledComponentId:he,target:Ce}=B,Ue=Wn.useContext(O1),ve=Nk(),ke=B.shouldForwardProp||ve.shouldForwardProp,ge=nk($,Ue,se)||Hs;let ae,Oe;{const Re=Wn.useRef(null),ce=Re.current;if(ce!==null&&ce[1]===ge&&ce[2]===ve.styleSheet&&ce[3]===ve.stylis&&ce[7]===J&&(function(j,Y,ie){const oe=j,fe=Y;let pe=0;for(const ze in fe)if(m_.call(fe,ze)&&(pe++,oe[ze]!==fe[ze]))return!1;return pe===ie})(ce[0],$,ce[4]))ae=ce[5],Oe=ce[6];else{ae=(function(Y,ie,oe){const fe=Object.assign(Object.assign({},ie),{className:void 0,theme:oe}),pe=Y.length>1;for(let ze=0;ze<Y.length;ze++){const nt=Y[ze],Qe=Mf(nt)?nt(pe?Object.assign({},fe):fe):nt;for(const kt in Qe)kt==="className"?fe.className=yc(fe.className,Qe[kt]):kt==="style"?fe.style=Object.assign(Object.assign({},fe.style),Qe[kt]):kt in ie&&ie[kt]===void 0||(fe[kt]=Qe[kt])}return"className"in ie&&typeof ie.className=="string"&&(fe.className=yc(fe.className,ie.className)),fe})(ue,$,ge),Oe=J.generateAndInjectStyles(ae,ve.styleSheet,ve.stylis);let j=0;for(const Y in $)m_.call($,Y)&&j++;Re.current=[$,ge,ve.styleSheet,ve.stylis,j,ae,Oe,J]}}const D=ae.as||Ce,le=(function(Re,ce,j,Y){const ie={};for(const oe in Re)Re[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&Re.theme===j||(oe==="forwardedAs"?ie.as=Re.forwardedAs:Y&&!Y(oe,ce)||(ie[oe]=Re[oe]));return ie})(ae,D,ge,ke);let re=yc(Q,he);return Oe&&(re+=" "+Oe),ae.className&&(re+=" "+ae.className),le[lg(D)&&D.includes("-")?"class":"className"]=re,K&&(le.ref=K),k.createElement(D,le)})(z,P,U)}I.displayName=y;let z=Wn.forwardRef(I);return z.attrs=C,z.componentStyle=O,z.displayName=y,z.shouldForwardProp=T,z.foldedComponentIds=s?yc(u.foldedComponentIds,u.styledComponentId):"",z.styledComponentId=_,z.target=s?u.target:t,Object.defineProperty(z,"defaultProps",{get(){return this._foldedDefaultProps},set(P){this._foldedDefaultProps=s?(function(U,...B){for(const $ of B)ug(U,$,!0);return U})({},u.defaultProps,P):P}}),m0(z,()=>`.${z.styledComponentId}`),m&&y1(z,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}var Uk=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function p_(t,i){const r=[t[0]];for(let s=0,u=i.length;s<u;s+=1)r.push(i[s],t[s+1]);return r}const g_=t=>(x1.add(t),t);function p0(t,...i){if(Mf(t)||Mc(t))return g_(zo(p_(f0,[t,...i])));const r=t;return i.length===0&&r.length===1&&typeof r[0]=="string"?zo(r):g_(zo(p_(r,i)))}function hg(t,i,r=Hs){if(!i)throw Vc(1,i);const s=(u,...m)=>t(i,r,p0(u,...m));return s.attrs=u=>hg(t,i,Object.assign(Object.assign({},r),{attrs:Array.prototype.concat(r.attrs,u).filter(Boolean)})),s.withConfig=u=>hg(t,i,Object.assign(Object.assign({},r),u)),s}const j1=t=>hg(Bk,t),w=j1;Uk.forEach(t=>{w[t]=j1(t)});var z1;class Fk{constructor(i,r){this[z1]=!0,this.inject=(s,u=fg)=>{const m=this.getName(u);if(!s.hasNameForId(this.id,m)){const g=u(this.rules,m,"@keyframes");s.insertRules(this.id,m,g)}},this.name=i,this.id=f1+i,this.rules=r,vc(this.id),m0(this,()=>{throw Vc(12,String(this.name))})}getName(i=fg){return i.hash?this.name+h0(+i.hash>>>0):this.name}}function Hk(t,...i){const r=cg(p0(t,...i)),s=p1(r);return new Fk(s,r)}z1=w1;const $k=w.button`
    border-radius: 0;
    border: 1px solid black;
    background-color: ${({$clicked:t})=>t?"#E3E6FF":"white"};
    padding: 0.3rem 0.6rem;
    
    &, &:link, &:visited, &:hover, &:active {
        color: black;
        text-decoration: none;
    }
`;function L1({categoryName:t,clicked:i,onClick:r}){return h.jsx($k,{$clicked:i,onClick:()=>{r?.()},children:t})}const Vk=w.button`
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
`;function Nf({className:t,onClick:i}){return h.jsx(Vk,{className:t,onClick:i,children:"X"})}const Zk=w.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.1rem;
`,qk=w(Nf)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`;function Gk({categoryNameProp:t,onSelectCategory:i,onRemoveCategory:r,categoryKoreanName:s,selectedCategory:u}){const m=u.includes(s);return h.jsxs(Zk,{children:[h.jsx(L1,{categoryName:t,clicked:m,onClick:()=>i(s)}),m&&h.jsx(qk,{onClick:()=>r(s)})]})}function Zc(){return alert("개발 중입니다! To be continued!"),h.jsx(h.Fragment,{})}const Yk=w.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.1rem;
`,Wk=w(Nf)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`;function Kk({categoryNameProp:t,onRemoveCategory:i,categoryKoreanName:r,selectedCategory:s}){const u=s.includes(r);return h.jsxs(Yk,{children:[h.jsx(L1,{categoryName:t,clicked:u,onClick:()=>Zc()}),u&&h.jsx(Wk,{onClick:()=>i(r)})]})}const Xk=w.div`
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
`;function Jk({className:t,onRemoveCategory:i,onSelectCategory:r,language:s,selectedCategory:u,categories:m}){return h.jsxs(Xk,{className:t,children:[h.jsx(Kk,{onRemoveCategory:i,categoryNameProp:s==="eng"?"📢open":"📢영업중",language:s,categoryKoreanName:"📢영업중",selectedCategory:u},"open"),m.map(g=>h.jsx(Gk,{onRemoveCategory:i,onSelectCategory:r,categoryNameProp:s==="eng"?g.name.eng:g.name.kor,language:s,categoryKoreanName:g.name.kor,selectedCategory:u},g._id))]})}const Qk=w.button`
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
`;function sp({optionName:t,onClick:i,active:r}){return h.jsx(Qk,{type:"button",$active:r,onClick:i,children:t})}const eO=w.div`
    display: flex;
    flex-direction: column;
`;function tO({className:t,onOpenWebsiteInfo:i,onMyLocation:r,onToggleFavorites:s,favoritesOnly:u}){return h.jsxs(eO,{className:t,children:[h.jsx(sp,{optionName:"⭐",active:u,onClick:s}),h.jsx(sp,{optionName:"👤",onClick:r}),h.jsx(sp,{optionName:"❓",onClick:i})]})}var bc={exports:{}};var nO=bc.exports,v_;function iO(){return v_||(v_=1,(function(t,i){(function(r,s){s(i)})(nO,(function(r){var s="1.9.4";function u(a){var l,d,v,x;for(d=1,v=arguments.length;d<v;d++){x=arguments[d];for(l in x)a[l]=x[l]}return a}var m=Object.create||(function(){function a(){}return function(l){return a.prototype=l,new a}})();function g(a,l){var d=Array.prototype.slice;if(a.bind)return a.bind.apply(a,d.call(arguments,1));var v=d.call(arguments,2);return function(){return a.apply(l,v.length?v.concat(d.call(arguments)):arguments)}}var b=0;function y(a){return"_leaflet_id"in a||(a._leaflet_id=++b),a._leaflet_id}function _(a,l,d){var v,x,E,R;return R=function(){v=!1,x&&(E.apply(d,x),x=!1)},E=function(){v?x=arguments:(a.apply(d,arguments),setTimeout(R,l),v=!0)},E}function C(a,l,d){var v=l[1],x=l[0],E=v-x;return a===v&&d?a:((a-x)%E+E)%E+x}function T(){return!1}function O(a,l){if(l===!1)return a;var d=Math.pow(10,l===void 0?6:l);return Math.round(a*d)/d}function I(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function z(a){return I(a).split(/\s+/)}function P(a,l){Object.prototype.hasOwnProperty.call(a,"options")||(a.options=a.options?m(a.options):{});for(var d in l)a.options[d]=l[d];return a.options}function U(a,l,d){var v=[];for(var x in a)v.push(encodeURIComponent(d?x.toUpperCase():x)+"="+encodeURIComponent(a[x]));return(!l||l.indexOf("?")===-1?"?":"&")+v.join("&")}var B=/\{ *([\w_ -]+) *\}/g;function $(a,l){return a.replace(B,function(d,v){var x=l[v];if(x===void 0)throw new Error("No value provided for variable "+d);return typeof x=="function"&&(x=x(l)),x})}var K=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"};function ue(a,l){for(var d=0;d<a.length;d++)if(a[d]===l)return d;return-1}var J="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function se(a){return window["webkit"+a]||window["moz"+a]||window["ms"+a]}var Q=0;function he(a){var l=+new Date,d=Math.max(0,16-(l-Q));return Q=l+d,window.setTimeout(a,d)}var Ce=window.requestAnimationFrame||se("RequestAnimationFrame")||he,Ue=window.cancelAnimationFrame||se("CancelAnimationFrame")||se("CancelRequestAnimationFrame")||function(a){window.clearTimeout(a)};function ve(a,l,d){if(d&&Ce===he)a.call(l);else return Ce.call(window,g(a,l))}function ke(a){a&&Ue.call(window,a)}var ge={__proto__:null,extend:u,create:m,bind:g,get lastId(){return b},stamp:y,throttle:_,wrapNum:C,falseFn:T,formatNum:O,trim:I,splitWords:z,setOptions:P,getParamString:U,template:$,isArray:K,indexOf:ue,emptyImageUrl:J,requestFn:Ce,cancelFn:Ue,requestAnimFrame:ve,cancelAnimFrame:ke};function ae(){}ae.extend=function(a){var l=function(){P(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},d=l.__super__=this.prototype,v=m(d);v.constructor=l,l.prototype=v;for(var x in this)Object.prototype.hasOwnProperty.call(this,x)&&x!=="prototype"&&x!=="__super__"&&(l[x]=this[x]);return a.statics&&u(l,a.statics),a.includes&&(Oe(a.includes),u.apply(null,[v].concat(a.includes))),u(v,a),delete v.statics,delete v.includes,v.options&&(v.options=d.options?m(d.options):{},u(v.options,a.options)),v._initHooks=[],v.callInitHooks=function(){if(!this._initHooksCalled){d.callInitHooks&&d.callInitHooks.call(this),this._initHooksCalled=!0;for(var E=0,R=v._initHooks.length;E<R;E++)v._initHooks[E].call(this)}},l},ae.include=function(a){var l=this.prototype.options;return u(this.prototype,a),a.options&&(this.prototype.options=l,this.mergeOptions(a.options)),this},ae.mergeOptions=function(a){return u(this.prototype.options,a),this},ae.addInitHook=function(a){var l=Array.prototype.slice.call(arguments,1),d=typeof a=="function"?a:function(){this[a].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(d),this};function Oe(a){if(!(typeof L>"u"||!L||!L.Mixin)){a=K(a)?a:[a];for(var l=0;l<a.length;l++)a[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var D={on:function(a,l,d){if(typeof a=="object")for(var v in a)this._on(v,a[v],l);else{a=z(a);for(var x=0,E=a.length;x<E;x++)this._on(a[x],l,d)}return this},off:function(a,l,d){if(!arguments.length)delete this._events;else if(typeof a=="object")for(var v in a)this._off(v,a[v],l);else{a=z(a);for(var x=arguments.length===1,E=0,R=a.length;E<R;E++)x?this._off(a[E]):this._off(a[E],l,d)}return this},_on:function(a,l,d,v){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(a,l,d)===!1){d===this&&(d=void 0);var x={fn:l,ctx:d};v&&(x.once=!0),this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(x)}},_off:function(a,l,d){var v,x,E;if(this._events&&(v=this._events[a],!!v)){if(arguments.length===1){if(this._firingCount)for(x=0,E=v.length;x<E;x++)v[x].fn=T;delete this._events[a];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var R=this._listens(a,l,d);if(R!==!1){var H=v[R];this._firingCount&&(H.fn=T,this._events[a]=v=v.slice()),v.splice(R,1)}}},fire:function(a,l,d){if(!this.listens(a,d))return this;var v=u({},l,{type:a,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var x=this._events[a];if(x){this._firingCount=this._firingCount+1||1;for(var E=0,R=x.length;E<R;E++){var H=x[E],q=H.fn;H.once&&this.off(a,q,H.ctx),q.call(H.ctx||this,v)}this._firingCount--}}return d&&this._propagateEvent(v),this},listens:function(a,l,d,v){typeof a!="string"&&console.warn('"string" type argument expected');var x=l;typeof l!="function"&&(v=!!l,x=void 0,d=void 0);var E=this._events&&this._events[a];if(E&&E.length&&this._listens(a,x,d)!==!1)return!0;if(v){for(var R in this._eventParents)if(this._eventParents[R].listens(a,l,d,v))return!0}return!1},_listens:function(a,l,d){if(!this._events)return!1;var v=this._events[a]||[];if(!l)return!!v.length;d===this&&(d=void 0);for(var x=0,E=v.length;x<E;x++)if(v[x].fn===l&&v[x].ctx===d)return x;return!1},once:function(a,l,d){if(typeof a=="object")for(var v in a)this._on(v,a[v],l,!0);else{a=z(a);for(var x=0,E=a.length;x<E;x++)this._on(a[x],l,d,!0)}return this},addEventParent:function(a){return this._eventParents=this._eventParents||{},this._eventParents[y(a)]=a,this},removeEventParent:function(a){return this._eventParents&&delete this._eventParents[y(a)],this},_propagateEvent:function(a){for(var l in this._eventParents)this._eventParents[l].fire(a.type,u({layer:a.target,propagatedFrom:a.target},a),!0)}};D.addEventListener=D.on,D.removeEventListener=D.clearAllEventListeners=D.off,D.addOneTimeEventListener=D.once,D.fireEvent=D.fire,D.hasEventListeners=D.listens;var le=ae.extend(D);function re(a,l,d){this.x=d?Math.round(a):a,this.y=d?Math.round(l):l}var Re=Math.trunc||function(a){return a>0?Math.floor(a):Math.ceil(a)};re.prototype={clone:function(){return new re(this.x,this.y)},add:function(a){return this.clone()._add(ce(a))},_add:function(a){return this.x+=a.x,this.y+=a.y,this},subtract:function(a){return this.clone()._subtract(ce(a))},_subtract:function(a){return this.x-=a.x,this.y-=a.y,this},divideBy:function(a){return this.clone()._divideBy(a)},_divideBy:function(a){return this.x/=a,this.y/=a,this},multiplyBy:function(a){return this.clone()._multiplyBy(a)},_multiplyBy:function(a){return this.x*=a,this.y*=a,this},scaleBy:function(a){return new re(this.x*a.x,this.y*a.y)},unscaleBy:function(a){return new re(this.x/a.x,this.y/a.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Re(this.x),this.y=Re(this.y),this},distanceTo:function(a){a=ce(a);var l=a.x-this.x,d=a.y-this.y;return Math.sqrt(l*l+d*d)},equals:function(a){return a=ce(a),a.x===this.x&&a.y===this.y},contains:function(a){return a=ce(a),Math.abs(a.x)<=Math.abs(this.x)&&Math.abs(a.y)<=Math.abs(this.y)},toString:function(){return"Point("+O(this.x)+", "+O(this.y)+")"}};function ce(a,l,d){return a instanceof re?a:K(a)?new re(a[0],a[1]):a==null?a:typeof a=="object"&&"x"in a&&"y"in a?new re(a.x,a.y):new re(a,l,d)}function j(a,l){if(a)for(var d=l?[a,l]:a,v=0,x=d.length;v<x;v++)this.extend(d[v])}j.prototype={extend:function(a){var l,d;if(!a)return this;if(a instanceof re||typeof a[0]=="number"||"x"in a)l=d=ce(a);else if(a=Y(a),l=a.min,d=a.max,!l||!d)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=d.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(d.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(d.y,this.max.y)),this},getCenter:function(a){return ce((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,a)},getBottomLeft:function(){return ce(this.min.x,this.max.y)},getTopRight:function(){return ce(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(a){var l,d;return typeof a[0]=="number"||a instanceof re?a=ce(a):a=Y(a),a instanceof j?(l=a.min,d=a.max):l=d=a,l.x>=this.min.x&&d.x<=this.max.x&&l.y>=this.min.y&&d.y<=this.max.y},intersects:function(a){a=Y(a);var l=this.min,d=this.max,v=a.min,x=a.max,E=x.x>=l.x&&v.x<=d.x,R=x.y>=l.y&&v.y<=d.y;return E&&R},overlaps:function(a){a=Y(a);var l=this.min,d=this.max,v=a.min,x=a.max,E=x.x>l.x&&v.x<d.x,R=x.y>l.y&&v.y<d.y;return E&&R},isValid:function(){return!!(this.min&&this.max)},pad:function(a){var l=this.min,d=this.max,v=Math.abs(l.x-d.x)*a,x=Math.abs(l.y-d.y)*a;return Y(ce(l.x-v,l.y-x),ce(d.x+v,d.y+x))},equals:function(a){return a?(a=Y(a),this.min.equals(a.getTopLeft())&&this.max.equals(a.getBottomRight())):!1}};function Y(a,l){return!a||a instanceof j?a:new j(a,l)}function ie(a,l){if(a)for(var d=l?[a,l]:a,v=0,x=d.length;v<x;v++)this.extend(d[v])}ie.prototype={extend:function(a){var l=this._southWest,d=this._northEast,v,x;if(a instanceof fe)v=a,x=a;else if(a instanceof ie){if(v=a._southWest,x=a._northEast,!v||!x)return this}else return a?this.extend(pe(a)||oe(a)):this;return!l&&!d?(this._southWest=new fe(v.lat,v.lng),this._northEast=new fe(x.lat,x.lng)):(l.lat=Math.min(v.lat,l.lat),l.lng=Math.min(v.lng,l.lng),d.lat=Math.max(x.lat,d.lat),d.lng=Math.max(x.lng,d.lng)),this},pad:function(a){var l=this._southWest,d=this._northEast,v=Math.abs(l.lat-d.lat)*a,x=Math.abs(l.lng-d.lng)*a;return new ie(new fe(l.lat-v,l.lng-x),new fe(d.lat+v,d.lng+x))},getCenter:function(){return new fe((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new fe(this.getNorth(),this.getWest())},getSouthEast:function(){return new fe(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(a){typeof a[0]=="number"||a instanceof fe||"lat"in a?a=pe(a):a=oe(a);var l=this._southWest,d=this._northEast,v,x;return a instanceof ie?(v=a.getSouthWest(),x=a.getNorthEast()):v=x=a,v.lat>=l.lat&&x.lat<=d.lat&&v.lng>=l.lng&&x.lng<=d.lng},intersects:function(a){a=oe(a);var l=this._southWest,d=this._northEast,v=a.getSouthWest(),x=a.getNorthEast(),E=x.lat>=l.lat&&v.lat<=d.lat,R=x.lng>=l.lng&&v.lng<=d.lng;return E&&R},overlaps:function(a){a=oe(a);var l=this._southWest,d=this._northEast,v=a.getSouthWest(),x=a.getNorthEast(),E=x.lat>l.lat&&v.lat<d.lat,R=x.lng>l.lng&&v.lng<d.lng;return E&&R},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(a,l){return a?(a=oe(a),this._southWest.equals(a.getSouthWest(),l)&&this._northEast.equals(a.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function oe(a,l){return a instanceof ie?a:new ie(a,l)}function fe(a,l,d){if(isNaN(a)||isNaN(l))throw new Error("Invalid LatLng object: ("+a+", "+l+")");this.lat=+a,this.lng=+l,d!==void 0&&(this.alt=+d)}fe.prototype={equals:function(a,l){if(!a)return!1;a=pe(a);var d=Math.max(Math.abs(this.lat-a.lat),Math.abs(this.lng-a.lng));return d<=(l===void 0?1e-9:l)},toString:function(a){return"LatLng("+O(this.lat,a)+", "+O(this.lng,a)+")"},distanceTo:function(a){return nt.distance(this,pe(a))},wrap:function(){return nt.wrapLatLng(this)},toBounds:function(a){var l=180*a/40075017,d=l/Math.cos(Math.PI/180*this.lat);return oe([this.lat-l,this.lng-d],[this.lat+l,this.lng+d])},clone:function(){return new fe(this.lat,this.lng,this.alt)}};function pe(a,l,d){return a instanceof fe?a:K(a)&&typeof a[0]!="object"?a.length===3?new fe(a[0],a[1],a[2]):a.length===2?new fe(a[0],a[1]):null:a==null?a:typeof a=="object"&&"lat"in a?new fe(a.lat,"lng"in a?a.lng:a.lon,a.alt):l===void 0?null:new fe(a,l,d)}var ze={latLngToPoint:function(a,l){var d=this.projection.project(a),v=this.scale(l);return this.transformation._transform(d,v)},pointToLatLng:function(a,l){var d=this.scale(l),v=this.transformation.untransform(a,d);return this.projection.unproject(v)},project:function(a){return this.projection.project(a)},unproject:function(a){return this.projection.unproject(a)},scale:function(a){return 256*Math.pow(2,a)},zoom:function(a){return Math.log(a/256)/Math.LN2},getProjectedBounds:function(a){if(this.infinite)return null;var l=this.projection.bounds,d=this.scale(a),v=this.transformation.transform(l.min,d),x=this.transformation.transform(l.max,d);return new j(v,x)},infinite:!1,wrapLatLng:function(a){var l=this.wrapLng?C(a.lng,this.wrapLng,!0):a.lng,d=this.wrapLat?C(a.lat,this.wrapLat,!0):a.lat,v=a.alt;return new fe(d,l,v)},wrapLatLngBounds:function(a){var l=a.getCenter(),d=this.wrapLatLng(l),v=l.lat-d.lat,x=l.lng-d.lng;if(v===0&&x===0)return a;var E=a.getSouthWest(),R=a.getNorthEast(),H=new fe(E.lat-v,E.lng-x),q=new fe(R.lat-v,R.lng-x);return new ie(H,q)}},nt=u({},ze,{wrapLng:[-180,180],R:6371e3,distance:function(a,l){var d=Math.PI/180,v=a.lat*d,x=l.lat*d,E=Math.sin((l.lat-a.lat)*d/2),R=Math.sin((l.lng-a.lng)*d/2),H=E*E+Math.cos(v)*Math.cos(x)*R*R,q=2*Math.atan2(Math.sqrt(H),Math.sqrt(1-H));return this.R*q}}),Qe=6378137,kt={R:Qe,MAX_LATITUDE:85.0511287798,project:function(a){var l=Math.PI/180,d=this.MAX_LATITUDE,v=Math.max(Math.min(d,a.lat),-d),x=Math.sin(v*l);return new re(this.R*a.lng*l,this.R*Math.log((1+x)/(1-x))/2)},unproject:function(a){var l=180/Math.PI;return new fe((2*Math.atan(Math.exp(a.y/this.R))-Math.PI/2)*l,a.x*l/this.R)},bounds:(function(){var a=Qe*Math.PI;return new j([-a,-a],[a,a])})()};function xi(a,l,d,v){if(K(a)){this._a=a[0],this._b=a[1],this._c=a[2],this._d=a[3];return}this._a=a,this._b=l,this._c=d,this._d=v}xi.prototype={transform:function(a,l){return this._transform(a.clone(),l)},_transform:function(a,l){return l=l||1,a.x=l*(this._a*a.x+this._b),a.y=l*(this._c*a.y+this._d),a},untransform:function(a,l){return l=l||1,new re((a.x/l-this._b)/this._a,(a.y/l-this._d)/this._c)}};function we(a,l,d,v){return new xi(a,l,d,v)}var Et=u({},nt,{code:"EPSG:3857",projection:kt,transformation:(function(){var a=.5/(Math.PI*kt.R);return we(a,.5,-a,.5)})()}),Nn=u({},Et,{code:"EPSG:900913"});function Pa(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function Ma(a,l){var d="",v,x,E,R,H,q;for(v=0,E=a.length;v<E;v++){for(H=a[v],x=0,R=H.length;x<R;x++)q=H[x],d+=(x?"L":"M")+q.x+" "+q.y;d+=l?xe.svg?"z":"x":""}return d||"M0 0"}var $i=document.documentElement.style,wi="ActiveXObject"in window,Ia=wi&&!document.addEventListener,Vi="msLaunchUri"in navigator&&!("documentMode"in document),Dr=fn("webkit"),au=fn("android"),ru=fn("android 2")||fn("android 3"),on=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Yf=au&&fn("Google")&&on<537&&!("AudioNode"in window),No=!!window.opera,nl=!Vi&&fn("chrome"),Br=fn("gecko")&&!Dr&&!No&&!wi,Wf=!nl&&fn("safari"),il=fn("phantom"),ou="OTransition"in $i,Kf=navigator.platform.indexOf("Win")===0,Na=wi&&"transition"in $i,Gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ru,ei="MozPerspective"in $i,sn=!window.L_DISABLE_3D&&(Na||Gt||ei)&&!ou&&!il,Ur=typeof orientation<"u"||fn("mobile"),Xf=Ur&&Dr,Jf=Ur&&Gt,Fr=!window.PointerEvent&&window.MSPointerEvent,Hr=!!(window.PointerEvent||Fr),$r="ontouchstart"in window||!!window.TouchEvent,Zi=!window.L_NO_TOUCH&&($r||Hr),Do=Ur&&No,Vr=Ur&&Br,Qf=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,su=(function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveEventSupport",T,l),window.removeEventListener("testPassiveEventSupport",T,l)}catch{}return a})(),al=(function(){return!!document.createElement("canvas").getContext})(),qi=!!(document.createElementNS&&Pa("svg").createSVGRect),eh=!!qi&&(function(){var a=document.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),lu=!qi&&(function(){try{var a=document.createElement("div");a.innerHTML='<v:shape adj="1"/>';var l=a.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}})(),cu=navigator.platform.indexOf("Mac")===0,uu=navigator.platform.indexOf("Linux")===0;function fn(a){return navigator.userAgent.toLowerCase().indexOf(a)>=0}var xe={ie:wi,ielt9:Ia,edge:Vi,webkit:Dr,android:au,android23:ru,androidStock:Yf,opera:No,chrome:nl,gecko:Br,safari:Wf,phantom:il,opera12:ou,win:Kf,ie3d:Na,webkit3d:Gt,gecko3d:ei,any3d:sn,mobile:Ur,mobileWebkit:Xf,mobileWebkit3d:Jf,msPointer:Fr,pointer:Hr,touch:Zi,touchNative:$r,mobileOpera:Do,mobileGecko:Vr,retina:Qf,passiveEvents:su,canvas:al,svg:qi,vml:lu,inlineSvg:eh,mac:cu,linux:uu},rl=xe.msPointer?"MSPointerDown":"pointerdown",ol=xe.msPointer?"MSPointerMove":"pointermove",ti=xe.msPointer?"MSPointerUp":"pointerup",Ot=xe.msPointer?"MSPointerCancel":"pointercancel",Ft={touchstart:rl,touchmove:ol,touchend:ti,touchcancel:Ot},Gi={touchstart:Ba,touchmove:Ti,touchend:Ti,touchcancel:Ti},Si={},du=!1;function th(a,l,d){return l==="touchstart"&&Da(),Gi[l]?(d=Gi[l].bind(this,d),a.addEventListener(Ft[l],d,!1),d):(console.warn("wrong event specified:",l),T)}function fu(a,l,d){if(!Ft[l]){console.warn("wrong event specified:",l);return}a.removeEventListener(Ft[l],d,!1)}function Zr(a){Si[a.pointerId]=a}function sl(a){Si[a.pointerId]&&(Si[a.pointerId]=a)}function Yi(a){delete Si[a.pointerId]}function Da(){du||(document.addEventListener(rl,Zr,!0),document.addEventListener(ol,sl,!0),document.addEventListener(ti,Yi,!0),document.addEventListener(Ot,Yi,!0),du=!0)}function Ti(a,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var d in Si)l.touches.push(Si[d]);l.changedTouches=[l],a(l)}}function Ba(a,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&xt(l),Ti(a,l)}function jt(a){var l={},d,v;for(v in a)d=a[v],l[v]=d&&d.bind?d.bind(a):d;return a=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var hu=200;function mu(a,l){a.addEventListener("dblclick",l);var d=0,v;function x(E){if(E.detail!==1){v=E.detail;return}if(!(E.pointerType==="mouse"||E.sourceCapabilities&&!E.sourceCapabilities.firesTouchEvents)){var R=Jr(E);if(!(R.some(function(q){return q instanceof HTMLLabelElement&&q.attributes.for})&&!R.some(function(q){return q instanceof HTMLInputElement||q instanceof HTMLSelectElement}))){var H=Date.now();H-d<=hu?(v++,v===2&&l(jt(E))):v=1,d=H}}}return a.addEventListener("click",x),{dblclick:l,simDblclick:x}}function Wi(a,l){a.removeEventListener("dblclick",l.dblclick),a.removeEventListener("click",l.simDblclick)}var Ei=Yr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),qr=Yr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ll=qr==="webkitTransition"||qr==="OTransition"?qr+"End":"transitionend";function cl(a){return typeof a=="string"?document.getElementById(a):a}function Gr(a,l){var d=a.style[l]||a.currentStyle&&a.currentStyle[l];if((!d||d==="auto")&&document.defaultView){var v=document.defaultView.getComputedStyle(a,null);d=v?v[l]:null}return d==="auto"?null:d}function He(a,l,d){var v=document.createElement(a);return v.className=l||"",d&&d.appendChild(v),v}function ot(a){var l=a.parentNode;l&&l.removeChild(a)}function hn(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function Nt(a){var l=a.parentNode;l&&l.lastChild!==a&&l.appendChild(a)}function Ki(a){var l=a.parentNode;l&&l.firstChild!==a&&l.insertBefore(a,l.firstChild)}function ul(a,l){if(a.classList!==void 0)return a.classList.contains(l);var d=Bo(a);return d.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(d)}function Me(a,l){if(a.classList!==void 0)for(var d=z(l),v=0,x=d.length;v<x;v++)a.classList.add(d[v]);else if(!ul(a,l)){var E=Bo(a);Ua(a,(E?E+" ":"")+l)}}function vt(a,l){a.classList!==void 0?a.classList.remove(l):Ua(a,I((" "+Bo(a)+" ").replace(" "+l+" "," ")))}function Ua(a,l){a.className.baseVal===void 0?a.className=l:a.className.baseVal=l}function Bo(a){return a.correspondingElement&&(a=a.correspondingElement),a.className.baseVal===void 0?a.className:a.className.baseVal}function ht(a,l){"opacity"in a.style?a.style.opacity=l:"filter"in a.style&&dl(a,l)}function dl(a,l){var d=!1,v="DXImageTransform.Microsoft.Alpha";try{d=a.filters.item(v)}catch{if(l===1)return}l=Math.round(l*100),d?(d.Enabled=l!==100,d.Opacity=l):a.style.filter+=" progid:"+v+"(opacity="+l+")"}function Yr(a){for(var l=document.documentElement.style,d=0;d<a.length;d++)if(a[d]in l)return a[d];return!1}function ni(a,l,d){var v=l||new re(0,0);a.style[Ei]=(xe.ie3d?"translate("+v.x+"px,"+v.y+"px)":"translate3d("+v.x+"px,"+v.y+"px,0)")+(d?" scale("+d+")":"")}function ut(a,l){a._leaflet_pos=l,xe.any3d?ni(a,l):(a.style.left=l.x+"px",a.style.top=l.y+"px")}function Ci(a){return a._leaflet_pos||new re(0,0)}var Fa,Dn,fl;if("onselectstart"in document)Fa=function(){Le(window,"selectstart",xt)},Dn=function(){it(window,"selectstart",xt)};else{var Ha=Yr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Fa=function(){if(Ha){var a=document.documentElement.style;fl=a[Ha],a[Ha]="none"}},Dn=function(){Ha&&(document.documentElement.style[Ha]=fl,fl=void 0)}}function Uo(){Le(window,"dragstart",xt)}function Wr(){it(window,"dragstart",xt)}var Fo,hl;function $a(a){for(;a.tabIndex===-1;)a=a.parentNode;a.style&&(mn(),Fo=a,hl=a.style.outlineStyle,a.style.outlineStyle="none",Le(window,"keydown",mn))}function mn(){Fo&&(Fo.style.outlineStyle=hl,Fo=void 0,hl=void 0,it(window,"keydown",mn))}function Ho(a){do a=a.parentNode;while((!a.offsetWidth||!a.offsetHeight)&&a!==document.body);return a}function Kr(a){var l=a.getBoundingClientRect();return{x:l.width/a.offsetWidth||1,y:l.height/a.offsetHeight||1,boundingClientRect:l}}var Va={__proto__:null,TRANSFORM:Ei,TRANSITION:qr,TRANSITION_END:ll,get:cl,getStyle:Gr,create:He,remove:ot,empty:hn,toFront:Nt,toBack:Ki,hasClass:ul,addClass:Me,removeClass:vt,setClass:Ua,getClass:Bo,setOpacity:ht,testProp:Yr,setTransform:ni,setPosition:ut,getPosition:Ci,get disableTextSelection(){return Fa},get enableTextSelection(){return Dn},disableImageDrag:Uo,enableImageDrag:Wr,preventOutline:$a,restoreOutline:mn,getSizedParentNode:Ho,getScale:Kr};function Le(a,l,d,v){if(l&&typeof l=="object")for(var x in l)Cn(a,x,l[x],d);else{l=z(l);for(var E=0,R=l.length;E<R;E++)Cn(a,l[E],d,v)}return this}var En="_leaflet_events";function it(a,l,d,v){if(arguments.length===1)ml(a),delete a[En];else if(l&&typeof l=="object")for(var x in l)Xr(a,x,l[x],d);else if(l=z(l),arguments.length===2)ml(a,function(H){return ue(l,H)!==-1});else for(var E=0,R=l.length;E<R;E++)Xr(a,l[E],d,v);return this}function ml(a,l){for(var d in a[En]){var v=d.split(/\d/)[0];(!l||l(v))&&Xr(a,v,null,null,d)}}var Xi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Cn(a,l,d,v){var x=l+y(d)+(v?"_"+y(v):"");if(a[En]&&a[En][x])return this;var E=function(H){return d.call(v||a,H||window.event)},R=E;!xe.touchNative&&xe.pointer&&l.indexOf("touch")===0?E=th(a,l,E):xe.touch&&l==="dblclick"?E=mu(a,E):"addEventListener"in a?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?a.addEventListener(Xi[l]||l,E,xe.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(E=function(H){H=H||window.event,ii(a,H)&&R(H)},a.addEventListener(Xi[l],E,!1)):a.addEventListener(l,R,!1):a.attachEvent("on"+l,E),a[En]=a[En]||{},a[En][x]=E}function Xr(a,l,d,v,x){x=x||l+y(d)+(v?"_"+y(v):"");var E=a[En]&&a[En][x];if(!E)return this;!xe.touchNative&&xe.pointer&&l.indexOf("touch")===0?fu(a,l,E):xe.touch&&l==="dblclick"?Wi(a,E):"removeEventListener"in a?a.removeEventListener(Xi[l]||l,E,!1):a.detachEvent("on"+l,E),a[En][x]=null}function An(a){return a.stopPropagation?a.stopPropagation():a.originalEvent?a.originalEvent._stopped=!0:a.cancelBubble=!0,this}function Bn(a){return Cn(a,"wheel",An),this}function Ji(a){return Le(a,"mousedown touchstart dblclick contextmenu",An),a._leaflet_disable_click=!0,this}function xt(a){return a.preventDefault?a.preventDefault():a.returnValue=!1,this}function Ai(a){return xt(a),An(a),this}function Jr(a){if(a.composedPath)return a.composedPath();for(var l=[],d=a.target;d;)l.push(d),d=d.parentNode;return l}function Qr(a,l){if(!l)return new re(a.clientX,a.clientY);var d=Kr(l),v=d.boundingClientRect;return new re((a.clientX-v.left)/d.x-l.clientLeft,(a.clientY-v.top)/d.y-l.clientTop)}var pu=xe.linux&&xe.chrome?window.devicePixelRatio:xe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Yt(a){return xe.edge?a.wheelDeltaY/2:a.deltaY&&a.deltaMode===0?-a.deltaY/pu:a.deltaY&&a.deltaMode===1?-a.deltaY*20:a.deltaY&&a.deltaMode===2?-a.deltaY*60:a.deltaX||a.deltaZ?0:a.wheelDelta?(a.wheelDeltaY||a.wheelDelta)/2:a.detail&&Math.abs(a.detail)<32765?-a.detail*20:a.detail?a.detail/-32765*60:0}function ii(a,l){var d=l.relatedTarget;if(!d)return!0;try{for(;d&&d!==a;)d=d.parentNode}catch{return!1}return d!==a}var $o={__proto__:null,on:Le,off:it,stopPropagation:An,disableScrollPropagation:Bn,disableClickPropagation:Ji,preventDefault:xt,stop:Ai,getPropagationPath:Jr,getMousePosition:Qr,getWheelDelta:Yt,isExternalTarget:ii,addListener:Le,removeListener:it},Za=le.extend({run:function(a,l,d,v){this.stop(),this._el=a,this._inProgress=!0,this._duration=d||.25,this._easeOutPower=1/Math.max(v||.5,.2),this._startPos=Ci(a),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=ve(this._animate,this),this._step()},_step:function(a){var l=+new Date-this._startTime,d=this._duration*1e3;l<d?this._runFrame(this._easeOut(l/d),a):(this._runFrame(1),this._complete())},_runFrame:function(a,l){var d=this._startPos.add(this._offset.multiplyBy(a));l&&d._round(),ut(this._el,d),this.fire("step")},_complete:function(){ke(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(a){return 1-Math.pow(1-a,this._easeOutPower)}}),qe=le.extend({options:{crs:Et,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(a,l){l=P(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(a),this._initLayout(),this._onResize=g(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(pe(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=qr&&xe.any3d&&!xe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Le(this._proxy,ll,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(a,l,d){if(l=l===void 0?this._zoom:this._limitZoom(l),a=this._limitCenter(pe(a),l,this.options.maxBounds),d=d||{},this._stop(),this._loaded&&!d.reset&&d!==!0){d.animate!==void 0&&(d.zoom=u({animate:d.animate},d.zoom),d.pan=u({animate:d.animate,duration:d.duration},d.pan));var v=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(a,l,d.zoom):this._tryAnimatedPan(a,d.pan);if(v)return clearTimeout(this._sizeTimer),this}return this._resetView(a,l,d.pan&&d.pan.noMoveStart),this},setZoom:function(a,l){return this._loaded?this.setView(this.getCenter(),a,{zoom:l}):(this._zoom=a,this)},zoomIn:function(a,l){return a=a||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+a,l)},zoomOut:function(a,l){return a=a||(xe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-a,l)},setZoomAround:function(a,l,d){var v=this.getZoomScale(l),x=this.getSize().divideBy(2),E=a instanceof re?a:this.latLngToContainerPoint(a),R=E.subtract(x).multiplyBy(1-1/v),H=this.containerPointToLatLng(x.add(R));return this.setView(H,l,{zoom:d})},_getBoundsCenterZoom:function(a,l){l=l||{},a=a.getBounds?a.getBounds():oe(a);var d=ce(l.paddingTopLeft||l.padding||[0,0]),v=ce(l.paddingBottomRight||l.padding||[0,0]),x=this.getBoundsZoom(a,!1,d.add(v));if(x=typeof l.maxZoom=="number"?Math.min(l.maxZoom,x):x,x===1/0)return{center:a.getCenter(),zoom:x};var E=v.subtract(d).divideBy(2),R=this.project(a.getSouthWest(),x),H=this.project(a.getNorthEast(),x),q=this.unproject(R.add(H).divideBy(2).add(E),x);return{center:q,zoom:x}},fitBounds:function(a,l){if(a=oe(a),!a.isValid())throw new Error("Bounds are not valid.");var d=this._getBoundsCenterZoom(a,l);return this.setView(d.center,d.zoom,l)},fitWorld:function(a){return this.fitBounds([[-90,-180],[90,180]],a)},panTo:function(a,l){return this.setView(a,this._zoom,{pan:l})},panBy:function(a,l){if(a=ce(a).round(),l=l||{},!a.x&&!a.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(a))return this._resetView(this.unproject(this.project(this.getCenter()).add(a)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Za,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){Me(this._mapPane,"leaflet-pan-anim");var d=this._getMapPanePos().subtract(a).round();this._panAnim.run(this._mapPane,d,l.duration||.25,l.easeLinearity)}else this._rawPanBy(a),this.fire("move").fire("moveend");return this},flyTo:function(a,l,d){if(d=d||{},d.animate===!1||!xe.any3d)return this.setView(a,l,d);this._stop();var v=this.project(this.getCenter()),x=this.project(a),E=this.getSize(),R=this._zoom;a=pe(a),l=l===void 0?R:l;var H=Math.max(E.x,E.y),q=H*this.getZoomScale(R,l),te=x.distanceTo(v)||1,me=1.42,Se=me*me;function De(_t){var si=_t?-1:1,na=_t?q:H,Ol=q*q-H*H+si*Se*Se*te*te,go=2*na*Se*te,vo=Ol/go,Ii=Math.sqrt(vo*vo+1)-vo,li=Ii<1e-9?-18:Math.log(Ii);return li}function Dt(_t){return(Math.exp(_t)-Math.exp(-_t))/2}function wt(_t){return(Math.exp(_t)+Math.exp(-_t))/2}function cn(_t){return Dt(_t)/wt(_t)}var We=De(0);function Ke(_t){return H*(wt(We)/wt(We+me*_t))}function $e(_t){return H*(wt(We)*cn(We+me*_t)-Dt(We))/Se}function Pi(_t){return 1-Math.pow(1-_t,1.5)}var yn=Date.now(),is=(De(1)-We)/me,Mi=d.duration?1e3*d.duration:1e3*is*.8;function kl(){var _t=(Date.now()-yn)/Mi,si=Pi(_t)*is;_t<=1?(this._flyToFrame=ve(kl,this),this._move(this.unproject(v.add(x.subtract(v).multiplyBy($e(si)/te)),R),this.getScaleZoom(H/Ke(si),R),{flyTo:!0})):this._move(a,l)._moveEnd(!0)}return this._moveStart(!0,d.noMoveStart),kl.call(this),this},flyToBounds:function(a,l){var d=this._getBoundsCenterZoom(a,l);return this.flyTo(d.center,d.zoom,l)},setMaxBounds:function(a){return a=oe(a),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),a.isValid()?(this.options.maxBounds=a,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(a){var l=this.options.minZoom;return this.options.minZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(a):this},setMaxZoom:function(a){var l=this.options.maxZoom;return this.options.maxZoom=a,this._loaded&&l!==a&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(a):this},panInsideBounds:function(a,l){this._enforcingBounds=!0;var d=this.getCenter(),v=this._limitCenter(d,this._zoom,oe(a));return d.equals(v)||this.panTo(v,l),this._enforcingBounds=!1,this},panInside:function(a,l){l=l||{};var d=ce(l.paddingTopLeft||l.padding||[0,0]),v=ce(l.paddingBottomRight||l.padding||[0,0]),x=this.project(this.getCenter()),E=this.project(a),R=this.getPixelBounds(),H=Y([R.min.add(d),R.max.subtract(v)]),q=H.getSize();if(!H.contains(E)){this._enforcingBounds=!0;var te=E.subtract(H.getCenter()),me=H.extend(E).getSize().subtract(q);x.x+=te.x<0?-me.x:me.x,x.y+=te.y<0?-me.y:me.y,this.panTo(this.unproject(x),l),this._enforcingBounds=!1}return this},invalidateSize:function(a){if(!this._loaded)return this;a=u({animate:!1,pan:!0},a===!0?{animate:!0}:a);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var d=this.getSize(),v=l.divideBy(2).round(),x=d.divideBy(2).round(),E=v.subtract(x);return!E.x&&!E.y?this:(a.animate&&a.pan?this.panBy(E):(a.pan&&this._rawPanBy(E),this.fire("move"),a.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(g(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:d}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(a){if(a=this._locateOptions=u({timeout:1e4,watch:!1},a),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=g(this._handleGeolocationResponse,this),d=g(this._handleGeolocationError,this);return a.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,d,a):navigator.geolocation.getCurrentPosition(l,d,a),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(a){if(this._container._leaflet_id){var l=a.code,d=a.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+d+"."})}},_handleGeolocationResponse:function(a){if(this._container._leaflet_id){var l=a.coords.latitude,d=a.coords.longitude,v=new fe(l,d),x=v.toBounds(a.coords.accuracy*2),E=this._locateOptions;if(E.setView){var R=this.getBoundsZoom(x);this.setView(v,E.maxZoom?Math.min(R,E.maxZoom):R)}var H={latlng:v,bounds:x,timestamp:a.timestamp};for(var q in a.coords)typeof a.coords[q]=="number"&&(H[q]=a.coords[q]);this.fire("locationfound",H)}},addHandler:function(a,l){if(!l)return this;var d=this[a]=new l(this);return this._handlers.push(d),this.options[a]&&d.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ot(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ke(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var a;for(a in this._layers)this._layers[a].remove();for(a in this._panes)ot(this._panes[a]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(a,l){var d="leaflet-pane"+(a?" leaflet-"+a.replace("Pane","")+"-pane":""),v=He("div",d,l||this._mapPane);return a&&(this._panes[a]=v),v},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var a=this.getPixelBounds(),l=this.unproject(a.getBottomLeft()),d=this.unproject(a.getTopRight());return new ie(l,d)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(a,l,d){a=oe(a),d=ce(d||[0,0]);var v=this.getZoom()||0,x=this.getMinZoom(),E=this.getMaxZoom(),R=a.getNorthWest(),H=a.getSouthEast(),q=this.getSize().subtract(d),te=Y(this.project(H,v),this.project(R,v)).getSize(),me=xe.any3d?this.options.zoomSnap:1,Se=q.x/te.x,De=q.y/te.y,Dt=l?Math.max(Se,De):Math.min(Se,De);return v=this.getScaleZoom(Dt,v),me&&(v=Math.round(v/(me/100))*(me/100),v=l?Math.ceil(v/me)*me:Math.floor(v/me)*me),Math.max(x,Math.min(E,v))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new re(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(a,l){var d=this._getTopLeftPoint(a,l);return new j(d,d.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(a){return this.options.crs.getProjectedBounds(a===void 0?this.getZoom():a)},getPane:function(a){return typeof a=="string"?this._panes[a]:a},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(a,l){var d=this.options.crs;return l=l===void 0?this._zoom:l,d.scale(a)/d.scale(l)},getScaleZoom:function(a,l){var d=this.options.crs;l=l===void 0?this._zoom:l;var v=d.zoom(a*d.scale(l));return isNaN(v)?1/0:v},project:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(pe(a),l)},unproject:function(a,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(ce(a),l)},layerPointToLatLng:function(a){var l=ce(a).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(a){var l=this.project(pe(a))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(a){return this.options.crs.wrapLatLng(pe(a))},wrapLatLngBounds:function(a){return this.options.crs.wrapLatLngBounds(oe(a))},distance:function(a,l){return this.options.crs.distance(pe(a),pe(l))},containerPointToLayerPoint:function(a){return ce(a).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(a){return ce(a).add(this._getMapPanePos())},containerPointToLatLng:function(a){var l=this.containerPointToLayerPoint(ce(a));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(a){return this.layerPointToContainerPoint(this.latLngToLayerPoint(pe(a)))},mouseEventToContainerPoint:function(a){return Qr(a,this._container)},mouseEventToLayerPoint:function(a){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))},mouseEventToLatLng:function(a){return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))},_initContainer:function(a){var l=this._container=cl(a);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Le(l,"scroll",this._onScroll,this),this._containerId=y(l)},_initLayout:function(){var a=this._container;this._fadeAnimated=this.options.fadeAnimation&&xe.any3d,Me(a,"leaflet-container"+(xe.touch?" leaflet-touch":"")+(xe.retina?" leaflet-retina":"")+(xe.ielt9?" leaflet-oldie":"")+(xe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=Gr(a,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(a.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var a=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ut(this._mapPane,new re(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Me(a.markerPane,"leaflet-zoom-hide"),Me(a.shadowPane,"leaflet-zoom-hide"))},_resetView:function(a,l,d){ut(this._mapPane,new re(0,0));var v=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var x=this._zoom!==l;this._moveStart(x,d)._move(a,l)._moveEnd(x),this.fire("viewreset"),v&&this.fire("load")},_moveStart:function(a,l){return a&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(a,l,d,v){l===void 0&&(l=this._zoom);var x=this._zoom!==l;return this._zoom=l,this._lastCenter=a,this._pixelOrigin=this._getNewPixelOrigin(a),v?d&&d.pinch&&this.fire("zoom",d):((x||d&&d.pinch)&&this.fire("zoom",d),this.fire("move",d)),this},_moveEnd:function(a){return a&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ke(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(a){ut(this._mapPane,this._getMapPanePos().subtract(a))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(a){this._targets={},this._targets[y(this._container)]=this;var l=a?it:Le;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),xe.any3d&&this.options.transform3DLimit&&(a?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ke(this._resizeRequest),this._resizeRequest=ve(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var a=this._getMapPanePos();Math.max(Math.abs(a.x),Math.abs(a.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(a,l){for(var d=[],v,x=l==="mouseout"||l==="mouseover",E=a.target||a.srcElement,R=!1;E;){if(v=this._targets[y(E)],v&&(l==="click"||l==="preclick")&&this._draggableMoved(v)){R=!0;break}if(v&&v.listens(l,!0)&&(x&&!ii(E,a)||(d.push(v),x))||E===this._container)break;E=E.parentNode}return!d.length&&!R&&!x&&this.listens(l,!0)&&(d=[this]),d},_isClickDisabled:function(a){for(;a&&a!==this._container;){if(a._leaflet_disable_click)return!0;a=a.parentNode}},_handleDOMEvent:function(a){var l=a.target||a.srcElement;if(!(!this._loaded||l._leaflet_disable_events||a.type==="click"&&this._isClickDisabled(l))){var d=a.type;d==="mousedown"&&$a(l),this._fireDOMEvent(a,d)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(a,l,d){if(a.type==="click"){var v=u({},a);v.type="preclick",this._fireDOMEvent(v,v.type,d)}var x=this._findEventTargets(a,l);if(d){for(var E=[],R=0;R<d.length;R++)d[R].listens(l,!0)&&E.push(d[R]);x=E.concat(x)}if(x.length){l==="contextmenu"&&xt(a);var H=x[0],q={originalEvent:a};if(a.type!=="keypress"&&a.type!=="keydown"&&a.type!=="keyup"){var te=H.getLatLng&&(!H._radius||H._radius<=10);q.containerPoint=te?this.latLngToContainerPoint(H.getLatLng()):this.mouseEventToContainerPoint(a),q.layerPoint=this.containerPointToLayerPoint(q.containerPoint),q.latlng=te?H.getLatLng():this.layerPointToLatLng(q.layerPoint)}for(R=0;R<x.length;R++)if(x[R].fire(l,q,!0),q.originalEvent._stopped||x[R].options.bubblingMouseEvents===!1&&ue(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(a){return a=a.dragging&&a.dragging.enabled()?a:this,a.dragging&&a.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var a=0,l=this._handlers.length;a<l;a++)this._handlers[a].disable()},whenReady:function(a,l){return this._loaded?a.call(l||this,{target:this}):this.on("load",a,l),this},_getMapPanePos:function(){return Ci(this._mapPane)||new re(0,0)},_moved:function(){var a=this._getMapPanePos();return a&&!a.equals([0,0])},_getTopLeftPoint:function(a,l){var d=a&&l!==void 0?this._getNewPixelOrigin(a,l):this.getPixelOrigin();return d.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(a,l){var d=this.getSize()._divideBy(2);return this.project(a,l)._subtract(d)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(a,l,d){var v=this._getNewPixelOrigin(d,l);return this.project(a,l)._subtract(v)},_latLngBoundsToNewLayerBounds:function(a,l,d){var v=this._getNewPixelOrigin(d,l);return Y([this.project(a.getSouthWest(),l)._subtract(v),this.project(a.getNorthWest(),l)._subtract(v),this.project(a.getSouthEast(),l)._subtract(v),this.project(a.getNorthEast(),l)._subtract(v)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(a){return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())},_limitCenter:function(a,l,d){if(!d)return a;var v=this.project(a,l),x=this.getSize().divideBy(2),E=new j(v.subtract(x),v.add(x)),R=this._getBoundsOffset(E,d,l);return Math.abs(R.x)<=1&&Math.abs(R.y)<=1?a:this.unproject(v.add(R),l)},_limitOffset:function(a,l){if(!l)return a;var d=this.getPixelBounds(),v=new j(d.min.add(a),d.max.add(a));return a.add(this._getBoundsOffset(v,l))},_getBoundsOffset:function(a,l,d){var v=Y(this.project(l.getNorthEast(),d),this.project(l.getSouthWest(),d)),x=v.min.subtract(a.min),E=v.max.subtract(a.max),R=this._rebound(x.x,-E.x),H=this._rebound(x.y,-E.y);return new re(R,H)},_rebound:function(a,l){return a+l>0?Math.round(a-l)/2:Math.max(0,Math.ceil(a))-Math.max(0,Math.floor(l))},_limitZoom:function(a){var l=this.getMinZoom(),d=this.getMaxZoom(),v=xe.any3d?this.options.zoomSnap:1;return v&&(a=Math.round(a/v)*v),Math.max(l,Math.min(d,a))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){vt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(a,l){var d=this._getCenterOffset(a)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(d)?!1:(this.panBy(d,l),!0)},_createAnimProxy:function(){var a=this._proxy=He("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(a),this.on("zoomanim",function(l){var d=Ei,v=this._proxy.style[d];ni(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),v===this._proxy.style[d]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ot(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var a=this.getCenter(),l=this.getZoom();ni(this._proxy,this.project(a,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(a){this._animatingZoom&&a.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(a,l,d){if(this._animatingZoom)return!0;if(d=d||{},!this._zoomAnimated||d.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var v=this.getZoomScale(l),x=this._getCenterOffset(a)._divideBy(1-1/v);return d.animate!==!0&&!this.getSize().contains(x)?!1:(ve(function(){this._moveStart(!0,d.noMoveStart||!1)._animateZoom(a,l,!0)},this),!0)},_animateZoom:function(a,l,d,v){this._mapPane&&(d&&(this._animatingZoom=!0,this._animateToCenter=a,this._animateToZoom=l,Me(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:a,zoom:l,noUpdate:v}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(g(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&vt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function pl(a,l){return new qe(a,l)}var ln=ae.extend({options:{position:"topright"},initialize:function(a){P(this,a)},getPosition:function(){return this.options.position},setPosition:function(a){var l=this._map;return l&&l.removeControl(this),this.options.position=a,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(a){this.remove(),this._map=a;var l=this._container=this.onAdd(a),d=this.getPosition(),v=a._controlCorners[d];return Me(l,"leaflet-control"),d.indexOf("bottom")!==-1?v.insertBefore(l,v.firstChild):v.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ot(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(a){this._map&&a&&a.screenX>0&&a.screenY>0&&this._map.getContainer().focus()}}),ai=function(a){return new ln(a)};qe.include({addControl:function(a){return a.addTo(this),this},removeControl:function(a){return a.remove(),this},_initControlPos:function(){var a=this._controlCorners={},l="leaflet-",d=this._controlContainer=He("div",l+"control-container",this._container);function v(x,E){var R=l+x+" "+l+E;a[x+E]=He("div",R,d)}v("top","left"),v("top","right"),v("bottom","left"),v("bottom","right")},_clearControlPos:function(){for(var a in this._controlCorners)ot(this._controlCorners[a]);ot(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var eo=ln.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(a,l,d,v){return d<v?-1:v<d?1:0}},initialize:function(a,l,d){P(this,d),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var v in a)this._addLayer(a[v],v);for(v in l)this._addLayer(l[v],v,!0)},onAdd:function(a){this._initLayout(),this._update(),this._map=a,a.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(a){return ln.prototype.addTo.call(this,a),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(a,l){return this._addLayer(a,l),this._map?this._update():this},addOverlay:function(a,l){return this._addLayer(a,l,!0),this._map?this._update():this},removeLayer:function(a){a.off("add remove",this._onLayerChange,this);var l=this._getLayer(y(a));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){Me(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var a=this._map.getSize().y-(this._container.offsetTop+50);return a<this._section.clientHeight?(Me(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=a+"px"):vt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return vt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var a="leaflet-control-layers",l=this._container=He("div",a),d=this.options.collapsed;l.setAttribute("aria-haspopup",!0),Ji(l),Bn(l);var v=this._section=He("section",a+"-list");d&&(this._map.on("click",this.collapse,this),Le(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var x=this._layersLink=He("a",a+"-toggle",l);x.href="#",x.title="Layers",x.setAttribute("role","button"),Le(x,{keydown:function(E){E.keyCode===13&&this._expandSafely()},click:function(E){xt(E),this._expandSafely()}},this),d||this.expand(),this._baseLayersList=He("div",a+"-base",v),this._separator=He("div",a+"-separator",v),this._overlaysList=He("div",a+"-overlays",v),l.appendChild(v)},_getLayer:function(a){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&y(this._layers[l].layer)===a)return this._layers[l]},_addLayer:function(a,l,d){this._map&&a.on("add remove",this._onLayerChange,this),this._layers.push({layer:a,name:l,overlay:d}),this.options.sortLayers&&this._layers.sort(g(function(v,x){return this.options.sortFunction(v.layer,x.layer,v.name,x.name)},this)),this.options.autoZIndex&&a.setZIndex&&(this._lastZIndex++,a.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;hn(this._baseLayersList),hn(this._overlaysList),this._layerControlInputs=[];var a,l,d,v,x=0;for(d=0;d<this._layers.length;d++)v=this._layers[d],this._addItem(v),l=l||v.overlay,a=a||!v.overlay,x+=v.overlay?0:1;return this.options.hideSingleBase&&(a=a&&x>1,this._baseLayersList.style.display=a?"":"none"),this._separator.style.display=l&&a?"":"none",this},_onLayerChange:function(a){this._handlingClick||this._update();var l=this._getLayer(y(a.target)),d=l.overlay?a.type==="add"?"overlayadd":"overlayremove":a.type==="add"?"baselayerchange":null;d&&this._map.fire(d,l)},_createRadioElement:function(a,l){var d='<input type="radio" class="leaflet-control-layers-selector" name="'+a+'"'+(l?' checked="checked"':"")+"/>",v=document.createElement("div");return v.innerHTML=d,v.firstChild},_addItem:function(a){var l=document.createElement("label"),d=this._map.hasLayer(a.layer),v;a.overlay?(v=document.createElement("input"),v.type="checkbox",v.className="leaflet-control-layers-selector",v.defaultChecked=d):v=this._createRadioElement("leaflet-base-layers_"+y(this),d),this._layerControlInputs.push(v),v.layerId=y(a.layer),Le(v,"click",this._onInputClick,this);var x=document.createElement("span");x.innerHTML=" "+a.name;var E=document.createElement("span");l.appendChild(E),E.appendChild(v),E.appendChild(x);var R=a.overlay?this._overlaysList:this._baseLayersList;return R.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){if(!this._preventClick){var a=this._layerControlInputs,l,d,v=[],x=[];this._handlingClick=!0;for(var E=a.length-1;E>=0;E--)l=a[E],d=this._getLayer(l.layerId).layer,l.checked?v.push(d):l.checked||x.push(d);for(E=0;E<x.length;E++)this._map.hasLayer(x[E])&&this._map.removeLayer(x[E]);for(E=0;E<v.length;E++)this._map.hasLayer(v[E])||this._map.addLayer(v[E]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var a=this._layerControlInputs,l,d,v=this._map.getZoom(),x=a.length-1;x>=0;x--)l=a[x],d=this._getLayer(l.layerId).layer,l.disabled=d.options.minZoom!==void 0&&v<d.options.minZoom||d.options.maxZoom!==void 0&&v>d.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var a=this._section;this._preventClick=!0,Le(a,"click",xt),this.expand();var l=this;setTimeout(function(){it(a,"click",xt),l._preventClick=!1})}}),gu=function(a,l,d){return new eo(a,l,d)},gl=ln.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(a){var l="leaflet-control-zoom",d=He("div",l+" leaflet-bar"),v=this.options;return this._zoomInButton=this._createButton(v.zoomInText,v.zoomInTitle,l+"-in",d,this._zoomIn),this._zoomOutButton=this._createButton(v.zoomOutText,v.zoomOutTitle,l+"-out",d,this._zoomOut),this._updateDisabled(),a.on("zoomend zoomlevelschange",this._updateDisabled,this),d},onRemove:function(a){a.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(a){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(a.shiftKey?3:1))},_zoomOut:function(a){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(a.shiftKey?3:1))},_createButton:function(a,l,d,v,x){var E=He("a",d,v);return E.innerHTML=a,E.href="#",E.title=l,E.setAttribute("role","button"),E.setAttribute("aria-label",l),Ji(E),Le(E,"click",Ai),Le(E,"click",x,this),Le(E,"click",this._refocusOnMap,this),E},_updateDisabled:function(){var a=this._map,l="leaflet-disabled";vt(this._zoomInButton,l),vt(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||a._zoom===a.getMinZoom())&&(Me(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||a._zoom===a.getMaxZoom())&&(Me(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});qe.mergeOptions({zoomControl:!0}),qe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new gl,this.addControl(this.zoomControl))});var nh=function(a){return new gl(a)},vu=ln.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(a){var l="leaflet-control-scale",d=He("div",l),v=this.options;return this._addScales(v,l+"-line",d),a.on(v.updateWhenIdle?"moveend":"move",this._update,this),a.whenReady(this._update,this),d},onRemove:function(a){a.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(a,l,d){a.metric&&(this._mScale=He("div",l,d)),a.imperial&&(this._iScale=He("div",l,d))},_update:function(){var a=this._map,l=a.getSize().y/2,d=a.distance(a.containerPointToLatLng([0,l]),a.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(d)},_updateScales:function(a){this.options.metric&&a&&this._updateMetric(a),this.options.imperial&&a&&this._updateImperial(a)},_updateMetric:function(a){var l=this._getRoundNum(a),d=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,d,l/a)},_updateImperial:function(a){var l=a*3.2808399,d,v,x;l>5280?(d=l/5280,v=this._getRoundNum(d),this._updateScale(this._iScale,v+" mi",v/d)):(x=this._getRoundNum(l),this._updateScale(this._iScale,x+" ft",x/l))},_updateScale:function(a,l,d){a.style.width=Math.round(this.options.maxWidth*d)+"px",a.innerHTML=l},_getRoundNum:function(a){var l=Math.pow(10,(Math.floor(a)+"").length-1),d=a/l;return d=d>=10?10:d>=5?5:d>=3?3:d>=2?2:1,l*d}}),vl=function(a){return new vu(a)},ih='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',yl=ln.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(xe.inlineSvg?ih+" ":"")+"Leaflet</a>"},initialize:function(a){P(this,a),this._attributions={}},onAdd:function(a){a.attributionControl=this,this._container=He("div","leaflet-control-attribution"),Ji(this._container);for(var l in a._layers)a._layers[l].getAttribution&&this.addAttribution(a._layers[l].getAttribution());return this._update(),a.on("layeradd",this._addAttribution,this),this._container},onRemove:function(a){a.off("layeradd",this._addAttribution,this)},_addAttribution:function(a){a.layer.getAttribution&&(this.addAttribution(a.layer.getAttribution()),a.layer.once("remove",function(){this.removeAttribution(a.layer.getAttribution())},this))},setPrefix:function(a){return this.options.prefix=a,this._update(),this},addAttribution:function(a){return a?(this._attributions[a]||(this._attributions[a]=0),this._attributions[a]++,this._update(),this):this},removeAttribution:function(a){return a?(this._attributions[a]&&(this._attributions[a]--,this._update()),this):this},_update:function(){if(this._map){var a=[];for(var l in this._attributions)this._attributions[l]&&a.push(l);var d=[];this.options.prefix&&d.push(this.options.prefix),a.length&&d.push(a.join(", ")),this._container.innerHTML=d.join(' <span aria-hidden="true">|</span> ')}}});qe.mergeOptions({attributionControl:!0}),qe.addInitHook(function(){this.options.attributionControl&&new yl().addTo(this)});var ah=function(a){return new yl(a)};ln.Layers=eo,ln.Zoom=gl,ln.Scale=vu,ln.Attribution=yl,ai.layers=gu,ai.zoom=nh,ai.scale=vl,ai.attribution=ah;var Un=ae.extend({initialize:function(a){this._map=a},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Un.addTo=function(a,l){return a.addHandler(l,this),this};var rh={Events:D},bl=xe.touch?"touchstart mousedown":"mousedown",ki=le.extend({options:{clickTolerance:3},initialize:function(a,l,d,v){P(this,v),this._element=a,this._dragStartTarget=l||a,this._preventOutline=d},enable:function(){this._enabled||(Le(this._dragStartTarget,bl,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ki._dragging===this&&this.finishDrag(!0),it(this._dragStartTarget,bl,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(a){if(this._enabled&&(this._moved=!1,!ul(this._element,"leaflet-zoom-anim"))){if(a.touches&&a.touches.length!==1){ki._dragging===this&&this.finishDrag();return}if(!(ki._dragging||a.shiftKey||a.which!==1&&a.button!==1&&!a.touches)&&(ki._dragging=this,this._preventOutline&&$a(this._element),Uo(),Fa(),!this._moving)){this.fire("down");var l=a.touches?a.touches[0]:a,d=Ho(this._element);this._startPoint=new re(l.clientX,l.clientY),this._startPos=Ci(this._element),this._parentScale=Kr(d);var v=a.type==="mousedown";Le(document,v?"mousemove":"touchmove",this._onMove,this),Le(document,v?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(a){if(this._enabled){if(a.touches&&a.touches.length>1){this._moved=!0;return}var l=a.touches&&a.touches.length===1?a.touches[0]:a,d=new re(l.clientX,l.clientY)._subtract(this._startPoint);!d.x&&!d.y||Math.abs(d.x)+Math.abs(d.y)<this.options.clickTolerance||(d.x/=this._parentScale.x,d.y/=this._parentScale.y,xt(a),this._moved||(this.fire("dragstart"),this._moved=!0,Me(document.body,"leaflet-dragging"),this._lastTarget=a.target||a.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Me(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(d),this._moving=!0,this._lastEvent=a,this._updatePosition())}},_updatePosition:function(){var a={originalEvent:this._lastEvent};this.fire("predrag",a),ut(this._element,this._newPos),this.fire("drag",a)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(a){vt(document.body,"leaflet-dragging"),this._lastTarget&&(vt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),it(document,"mousemove touchmove",this._onMove,this),it(document,"mouseup touchend touchcancel",this._onUp,this),Wr(),Dn();var l=this._moved&&this._moving;this._moving=!1,ki._dragging=!1,l&&this.fire("dragend",{noInertia:a,distance:this._newPos.distanceTo(this._startPos)})}});function yu(a,l,d){var v,x=[1,4,2,8],E,R,H,q,te,me,Se,De;for(E=0,me=a.length;E<me;E++)a[E]._code=Qi(a[E],l);for(H=0;H<4;H++){for(Se=x[H],v=[],E=0,me=a.length,R=me-1;E<me;R=E++)q=a[E],te=a[R],q._code&Se?te._code&Se||(De=Vo(te,q,Se,l,d),De._code=Qi(De,l),v.push(De)):(te._code&Se&&(De=Vo(te,q,Se,l,d),De._code=Qi(De,l),v.push(De)),v.push(q));a=v}return a}function bu(a,l){var d,v,x,E,R,H,q,te,me;if(!a||a.length===0)throw new Error("latlngs not passed");pn(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var Se=pe([0,0]),De=oe(a),Dt=De.getNorthWest().distanceTo(De.getSouthWest())*De.getNorthEast().distanceTo(De.getNorthWest());Dt<1700&&(Se=_l(a));var wt=a.length,cn=[];for(d=0;d<wt;d++){var We=pe(a[d]);cn.push(l.project(pe([We.lat-Se.lat,We.lng-Se.lng])))}for(H=q=te=0,d=0,v=wt-1;d<wt;v=d++)x=cn[d],E=cn[v],R=x.y*E.x-E.y*x.x,q+=(x.x+E.x)*R,te+=(x.y+E.y)*R,H+=R*3;H===0?me=cn[0]:me=[q/H,te/H];var Ke=l.unproject(ce(me));return pe([Ke.lat+Se.lat,Ke.lng+Se.lng])}function _l(a){for(var l=0,d=0,v=0,x=0;x<a.length;x++){var E=pe(a[x]);l+=E.lat,d+=E.lng,v++}return pe([l/v,d/v])}var xl={__proto__:null,clipPolygon:yu,polygonCenter:bu,centroid:_l};function _u(a,l){if(!l||!a.length)return a.slice();var d=l*l;return a=sh(a,d),a=wu(a,d),a}function xu(a,l,d){return Math.sqrt(to(a,l,d,!0))}function oh(a,l,d){return to(a,l,d)}function wu(a,l){var d=a.length,v=typeof Uint8Array<"u"?Uint8Array:Array,x=new v(d);x[0]=x[d-1]=1,wl(a,x,l,0,d-1);var E,R=[];for(E=0;E<d;E++)x[E]&&R.push(a[E]);return R}function wl(a,l,d,v,x){var E=0,R,H,q;for(H=v+1;H<=x-1;H++)q=to(a[H],a[v],a[x],!0),q>E&&(R=H,E=q);E>d&&(l[R]=1,wl(a,l,d,v,R),wl(a,l,d,R,x))}function sh(a,l){for(var d=[a[0]],v=1,x=0,E=a.length;v<E;v++)lh(a[v],a[x])>l&&(d.push(a[v]),x=v);return x<E-1&&d.push(a[E-1]),d}var Su;function Tu(a,l,d,v,x){var E=v?Su:Qi(a,d),R=Qi(l,d),H,q,te;for(Su=R;;){if(!(E|R))return[a,l];if(E&R)return!1;H=E||R,q=Vo(a,l,H,d,x),te=Qi(q,d),H===E?(a=q,E=te):(l=q,R=te)}}function Vo(a,l,d,v,x){var E=l.x-a.x,R=l.y-a.y,H=v.min,q=v.max,te,me;return d&8?(te=a.x+E*(q.y-a.y)/R,me=q.y):d&4?(te=a.x+E*(H.y-a.y)/R,me=H.y):d&2?(te=q.x,me=a.y+R*(q.x-a.x)/E):d&1&&(te=H.x,me=a.y+R*(H.x-a.x)/E),new re(te,me,x)}function Qi(a,l){var d=0;return a.x<l.min.x?d|=1:a.x>l.max.x&&(d|=2),a.y<l.min.y?d|=4:a.y>l.max.y&&(d|=8),d}function lh(a,l){var d=l.x-a.x,v=l.y-a.y;return d*d+v*v}function to(a,l,d,v){var x=l.x,E=l.y,R=d.x-x,H=d.y-E,q=R*R+H*H,te;return q>0&&(te=((a.x-x)*R+(a.y-E)*H)/q,te>1?(x=d.x,E=d.y):te>0&&(x+=R*te,E+=H*te)),R=a.x-x,H=a.y-E,v?R*R+H*H:new re(x,E)}function pn(a){return!K(a[0])||typeof a[0][0]!="object"&&typeof a[0][0]<"u"}function Zo(a){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pn(a)}function qa(a,l){var d,v,x,E,R,H,q,te;if(!a||a.length===0)throw new Error("latlngs not passed");pn(a)||(console.warn("latlngs are not flat! Only the first ring will be used"),a=a[0]);var me=pe([0,0]),Se=oe(a),De=Se.getNorthWest().distanceTo(Se.getSouthWest())*Se.getNorthEast().distanceTo(Se.getNorthWest());De<1700&&(me=_l(a));var Dt=a.length,wt=[];for(d=0;d<Dt;d++){var cn=pe(a[d]);wt.push(l.project(pe([cn.lat-me.lat,cn.lng-me.lng])))}for(d=0,v=0;d<Dt-1;d++)v+=wt[d].distanceTo(wt[d+1])/2;if(v===0)te=wt[0];else for(d=0,E=0;d<Dt-1;d++)if(R=wt[d],H=wt[d+1],x=R.distanceTo(H),E+=x,E>v){q=(E-v)/x,te=[H.x-q*(H.x-R.x),H.y-q*(H.y-R.y)];break}var We=l.unproject(ce(te));return pe([We.lat+me.lat,We.lng+me.lng])}var ch={__proto__:null,simplify:_u,pointToSegmentDistance:xu,closestPointOnSegment:oh,clipSegment:Tu,_getEdgeIntersection:Vo,_getBitCode:Qi,_sqClosestPointOnSegment:to,isFlat:pn,_flat:Zo,polylineCenter:qa},qo={project:function(a){return new re(a.lng,a.lat)},unproject:function(a){return new fe(a.y,a.x)},bounds:new j([-180,-90],[180,90])},Go={R:6378137,R_MINOR:6356752314245179e-9,bounds:new j([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(a){var l=Math.PI/180,d=this.R,v=a.lat*l,x=this.R_MINOR/d,E=Math.sqrt(1-x*x),R=E*Math.sin(v),H=Math.tan(Math.PI/4-v/2)/Math.pow((1-R)/(1+R),E/2);return v=-d*Math.log(Math.max(H,1e-10)),new re(a.lng*l*d,v)},unproject:function(a){for(var l=180/Math.PI,d=this.R,v=this.R_MINOR/d,x=Math.sqrt(1-v*v),E=Math.exp(-a.y/d),R=Math.PI/2-2*Math.atan(E),H=0,q=.1,te;H<15&&Math.abs(q)>1e-7;H++)te=x*Math.sin(R),te=Math.pow((1-te)/(1+te),x/2),q=Math.PI/2-2*Math.atan(E*te)-R,R+=q;return new fe(R*l,a.x*l/d)}},Eu={__proto__:null,LonLat:qo,Mercator:Go,SphericalMercator:kt},Cu=u({},nt,{code:"EPSG:3395",projection:Go,transformation:(function(){var a=.5/(Math.PI*Go.R);return we(a,.5,-a,.5)})()}),Sl=u({},nt,{code:"EPSG:4326",projection:qo,transformation:we(1/180,1,-1/180,.5)}),Ga=u({},ze,{projection:qo,transformation:we(1,0,-1,0),scale:function(a){return Math.pow(2,a)},zoom:function(a){return Math.log(a)/Math.LN2},distance:function(a,l){var d=l.lng-a.lng,v=l.lat-a.lat;return Math.sqrt(d*d+v*v)},infinite:!0});ze.Earth=nt,ze.EPSG3395=Cu,ze.EPSG3857=Et,ze.EPSG900913=Nn,ze.EPSG4326=Sl,ze.Simple=Ga;var kn=le.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(a){return a.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(a){return a&&a.removeLayer(this),this},getPane:function(a){return this._map.getPane(a?this.options[a]||a:this.options.pane)},addInteractiveTarget:function(a){return this._map._targets[y(a)]=this,this},removeInteractiveTarget:function(a){return delete this._map._targets[y(a)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(a){var l=a.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var d=this.getEvents();l.on(d,this),this.once("remove",function(){l.off(d,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});qe.include({addLayer:function(a){if(!a._layerAdd)throw new Error("The provided object is not a Layer.");var l=y(a);return this._layers[l]?this:(this._layers[l]=a,a._mapToAdd=this,a.beforeAdd&&a.beforeAdd(this),this.whenReady(a._layerAdd,a),this)},removeLayer:function(a){var l=y(a);return this._layers[l]?(this._loaded&&a.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:a}),a.fire("remove")),a._map=a._mapToAdd=null,this):this},hasLayer:function(a){return y(a)in this._layers},eachLayer:function(a,l){for(var d in this._layers)a.call(l,this._layers[d]);return this},_addLayers:function(a){a=a?K(a)?a:[a]:[];for(var l=0,d=a.length;l<d;l++)this.addLayer(a[l])},_addZoomLimit:function(a){(!isNaN(a.options.maxZoom)||!isNaN(a.options.minZoom))&&(this._zoomBoundLayers[y(a)]=a,this._updateZoomLevels())},_removeZoomLimit:function(a){var l=y(a);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var a=1/0,l=-1/0,d=this._getZoomSpan();for(var v in this._zoomBoundLayers){var x=this._zoomBoundLayers[v].options;a=x.minZoom===void 0?a:Math.min(a,x.minZoom),l=x.maxZoom===void 0?l:Math.max(l,x.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=a===1/0?void 0:a,d!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ya=kn.extend({initialize:function(a,l){P(this,l),this._layers={};var d,v;if(a)for(d=0,v=a.length;d<v;d++)this.addLayer(a[d])},addLayer:function(a){var l=this.getLayerId(a);return this._layers[l]=a,this._map&&this._map.addLayer(a),this},removeLayer:function(a){var l=a in this._layers?a:this.getLayerId(a);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(a){var l=typeof a=="number"?a:this.getLayerId(a);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(a){var l=Array.prototype.slice.call(arguments,1),d,v;for(d in this._layers)v=this._layers[d],v[a]&&v[a].apply(v,l);return this},onAdd:function(a){this.eachLayer(a.addLayer,a)},onRemove:function(a){this.eachLayer(a.removeLayer,a)},eachLayer:function(a,l){for(var d in this._layers)a.call(l,this._layers[d]);return this},getLayer:function(a){return this._layers[a]},getLayers:function(){var a=[];return this.eachLayer(a.push,a),a},setZIndex:function(a){return this.invoke("setZIndex",a)},getLayerId:function(a){return y(a)}}),uh=function(a,l){return new Ya(a,l)},Fn=Ya.extend({addLayer:function(a){return this.hasLayer(a)?this:(a.addEventParent(this),Ya.prototype.addLayer.call(this,a),this.fire("layeradd",{layer:a}))},removeLayer:function(a){return this.hasLayer(a)?(a in this._layers&&(a=this._layers[a]),a.removeEventParent(this),Ya.prototype.removeLayer.call(this,a),this.fire("layerremove",{layer:a})):this},setStyle:function(a){return this.invoke("setStyle",a)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var a=new ie;for(var l in this._layers){var d=this._layers[l];a.extend(d.getBounds?d.getBounds():d.getLatLng())}return a}}),Au=function(a,l){return new Fn(a,l)},Hn=ae.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(a){P(this,a)},createIcon:function(a){return this._createIcon("icon",a)},createShadow:function(a){return this._createIcon("shadow",a)},_createIcon:function(a,l){var d=this._getIconUrl(a);if(!d){if(a==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var v=this._createImg(d,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(v,a),(this.options.crossOrigin||this.options.crossOrigin==="")&&(v.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),v},_setIconStyles:function(a,l){var d=this.options,v=d[l+"Size"];typeof v=="number"&&(v=[v,v]);var x=ce(v),E=ce(l==="shadow"&&d.shadowAnchor||d.iconAnchor||x&&x.divideBy(2,!0));a.className="leaflet-marker-"+l+" "+(d.className||""),E&&(a.style.marginLeft=-E.x+"px",a.style.marginTop=-E.y+"px"),x&&(a.style.width=x.x+"px",a.style.height=x.y+"px")},_createImg:function(a,l){return l=l||document.createElement("img"),l.src=a,l},_getIconUrl:function(a){return xe.retina&&this.options[a+"RetinaUrl"]||this.options[a+"Url"]}});function no(a){return new Hn(a)}var io=Hn.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(a){return typeof io.imagePath!="string"&&(io.imagePath=this._detectIconPath()),(this.options.imagePath||io.imagePath)+Hn.prototype._getIconUrl.call(this,a)},_stripUrl:function(a){var l=function(d,v,x){var E=v.exec(d);return E&&E[x]};return a=l(a,/^url\((['"])?(.+)\1\)$/,2),a&&l(a,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var a=He("div","leaflet-default-icon-path",document.body),l=Gr(a,"background-image")||Gr(a,"backgroundImage");if(document.body.removeChild(a),l=this._stripUrl(l),l)return l;var d=document.querySelector('link[href$="leaflet.css"]');return d?d.href.substring(0,d.href.length-11-1):""}}),ao=Un.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new ki(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Me(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&vt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(a){var l=this._marker,d=l._map,v=this._marker.options.autoPanSpeed,x=this._marker.options.autoPanPadding,E=Ci(l._icon),R=d.getPixelBounds(),H=d.getPixelOrigin(),q=Y(R.min._subtract(H).add(x),R.max._subtract(H).subtract(x));if(!q.contains(E)){var te=ce((Math.max(q.max.x,E.x)-q.max.x)/(R.max.x-q.max.x)-(Math.min(q.min.x,E.x)-q.min.x)/(R.min.x-q.min.x),(Math.max(q.max.y,E.y)-q.max.y)/(R.max.y-q.max.y)-(Math.min(q.min.y,E.y)-q.min.y)/(R.min.y-q.min.y)).multiplyBy(v);d.panBy(te,{animate:!1}),this._draggable._newPos._add(te),this._draggable._startPos._add(te),ut(l._icon,this._draggable._newPos),this._onDrag(a),this._panRequest=ve(this._adjustPan.bind(this,a))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(a){this._marker.options.autoPan&&(ke(this._panRequest),this._panRequest=ve(this._adjustPan.bind(this,a)))},_onDrag:function(a){var l=this._marker,d=l._shadow,v=Ci(l._icon),x=l._map.layerPointToLatLng(v);d&&ut(d,v),l._latlng=x,a.latlng=x,a.oldLatLng=this._oldLatLng,l.fire("move",a).fire("drag",a)},_onDragEnd:function(a){ke(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}}),ro=kn.extend({options:{icon:new io,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(a,l){P(this,l),this._latlng=pe(a)},onAdd:function(a){this._zoomAnimated=this._zoomAnimated&&a.options.markerZoomAnimation,this._zoomAnimated&&a.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(a){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&a.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(a){var l=this._latlng;return this._latlng=pe(a),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(a){return this.options.zIndexOffset=a,this.update()},getIcon:function(){return this.options.icon},setIcon:function(a){return this.options.icon=a,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var a=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(a)}return this},_initIcon:function(){var a=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),d=a.icon.createIcon(this._icon),v=!1;d!==this._icon&&(this._icon&&this._removeIcon(),v=!0,a.title&&(d.title=a.title),d.tagName==="IMG"&&(d.alt=a.alt||"")),Me(d,l),a.keyboard&&(d.tabIndex="0",d.setAttribute("role","button")),this._icon=d,a.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Le(d,"focus",this._panOnFocus,this);var x=a.icon.createShadow(this._shadow),E=!1;x!==this._shadow&&(this._removeShadow(),E=!0),x&&(Me(x,l),x.alt=""),this._shadow=x,a.opacity<1&&this._updateOpacity(),v&&this.getPane().appendChild(this._icon),this._initInteraction(),x&&E&&this.getPane(a.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&it(this._icon,"focus",this._panOnFocus,this),ot(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ot(this._shadow),this._shadow=null},_setPos:function(a){this._icon&&ut(this._icon,a),this._shadow&&ut(this._shadow,a),this._zIndex=a.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(a){this._icon&&(this._icon.style.zIndex=this._zIndex+a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&(Me(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ao)){var a=this.options.draggable;this.dragging&&(a=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ao(this),a&&this.dragging.enable()}},setOpacity:function(a){return this.options.opacity=a,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var a=this.options.opacity;this._icon&&ht(this._icon,a),this._shadow&&ht(this._shadow,a)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var a=this._map;if(a){var l=this.options.icon.options,d=l.iconSize?ce(l.iconSize):ce(0,0),v=l.iconAnchor?ce(l.iconAnchor):ce(0,0);a.panInside(this._latlng,{paddingTopLeft:v,paddingBottomRight:d.subtract(v)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ku(a,l){return new ro(a,l)}var $n=kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(a){this._renderer=a.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(a){return P(this,a),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&a&&Object.prototype.hasOwnProperty.call(a,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Wa=$n.extend({options:{fill:!0,radius:10},initialize:function(a,l){P(this,l),this._latlng=pe(a),this._radius=this.options.radius},setLatLng:function(a){var l=this._latlng;return this._latlng=pe(a),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(a){return this.options.radius=this._radius=a,this.redraw()},getRadius:function(){return this._radius},setStyle:function(a){var l=a&&a.radius||this._radius;return $n.prototype.setStyle.call(this,a),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var a=this._radius,l=this._radiusY||a,d=this._clickTolerance(),v=[a+d,l+d];this._pxBounds=new j(this._point.subtract(v),this._point.add(v))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(a){return a.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ou(a,l){return new Wa(a,l)}var Yo=Wa.extend({initialize:function(a,l,d){if(typeof l=="number"&&(l=u({},d,{radius:l})),P(this,l),this._latlng=pe(a),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(a){return this._mRadius=a,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var a=[this._radius,this._radiusY||this._radius];return new ie(this._map.layerPointToLatLng(this._point.subtract(a)),this._map.layerPointToLatLng(this._point.add(a)))},setStyle:$n.prototype.setStyle,_project:function(){var a=this._latlng.lng,l=this._latlng.lat,d=this._map,v=d.options.crs;if(v.distance===nt.distance){var x=Math.PI/180,E=this._mRadius/nt.R/x,R=d.project([l+E,a]),H=d.project([l-E,a]),q=R.add(H).divideBy(2),te=d.unproject(q).lat,me=Math.acos((Math.cos(E*x)-Math.sin(l*x)*Math.sin(te*x))/(Math.cos(l*x)*Math.cos(te*x)))/x;(isNaN(me)||me===0)&&(me=E/Math.cos(Math.PI/180*l)),this._point=q.subtract(d.getPixelOrigin()),this._radius=isNaN(me)?0:q.x-d.project([te,a-me]).x,this._radiusY=q.y-R.y}else{var Se=v.unproject(v.project(this._latlng).subtract([this._mRadius,0]));this._point=d.latLngToLayerPoint(this._latlng),this._radius=this._point.x-d.latLngToLayerPoint(Se).x}this._updateBounds()}});function ju(a,l,d){return new Yo(a,l,d)}var ri=$n.extend({options:{smoothFactor:1,noClip:!1},initialize:function(a,l){P(this,l),this._setLatLngs(a)},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){return this._setLatLngs(a),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(a){for(var l=1/0,d=null,v=to,x,E,R=0,H=this._parts.length;R<H;R++)for(var q=this._parts[R],te=1,me=q.length;te<me;te++){x=q[te-1],E=q[te];var Se=v(a,x,E,!0);Se<l&&(l=Se,d=v(a,x,E))}return d&&(d.distance=Math.sqrt(l)),d},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return qa(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(a,l){return l=l||this._defaultShape(),a=pe(a),l.push(a),this._bounds.extend(a),this.redraw()},_setLatLngs:function(a){this._bounds=new ie,this._latlngs=this._convertLatLngs(a)},_defaultShape:function(){return pn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(a){for(var l=[],d=pn(a),v=0,x=a.length;v<x;v++)d?(l[v]=pe(a[v]),this._bounds.extend(l[v])):l[v]=this._convertLatLngs(a[v]);return l},_project:function(){var a=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,a),this._bounds.isValid()&&a.isValid()&&(this._rawPxBounds=a,this._updateBounds())},_updateBounds:function(){var a=this._clickTolerance(),l=new re(a,a);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(a,l,d){var v=a[0]instanceof fe,x=a.length,E,R;if(v){for(R=[],E=0;E<x;E++)R[E]=this._map.latLngToLayerPoint(a[E]),d.extend(R[E]);l.push(R)}else for(E=0;E<x;E++)this._projectLatlngs(a[E],l,d)},_clipPoints:function(){var a=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,d,v,x,E,R,H,q;for(d=0,x=0,E=this._rings.length;d<E;d++)for(q=this._rings[d],v=0,R=q.length;v<R-1;v++)H=Tu(q[v],q[v+1],a,v,!0),H&&(l[x]=l[x]||[],l[x].push(H[0]),(H[1]!==q[v+1]||v===R-2)&&(l[x].push(H[1]),x++))}},_simplifyPoints:function(){for(var a=this._parts,l=this.options.smoothFactor,d=0,v=a.length;d<v;d++)a[d]=_u(a[d],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(a,l){var d,v,x,E,R,H,q=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(d=0,E=this._parts.length;d<E;d++)for(H=this._parts[d],v=0,R=H.length,x=R-1;v<R;x=v++)if(!(!l&&v===0)&&xu(a,H[x],H[v])<=q)return!0;return!1}});function dh(a,l){return new ri(a,l)}ri._flat=Zo;var Ka=ri.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return bu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(a){var l=ri.prototype._convertLatLngs.call(this,a),d=l.length;return d>=2&&l[0]instanceof fe&&l[0].equals(l[d-1])&&l.pop(),l},_setLatLngs:function(a){ri.prototype._setLatLngs.call(this,a),pn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var a=this._renderer._bounds,l=this.options.weight,d=new re(l,l);if(a=new j(a.min.subtract(d),a.max.add(d)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}for(var v=0,x=this._rings.length,E;v<x;v++)E=yu(this._rings[v],a,!0),E.length&&this._parts.push(E)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(a){var l=!1,d,v,x,E,R,H,q,te;if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(E=0,q=this._parts.length;E<q;E++)for(d=this._parts[E],R=0,te=d.length,H=te-1;R<te;H=R++)v=d[R],x=d[H],v.y>a.y!=x.y>a.y&&a.x<(x.x-v.x)*(a.y-v.y)/(x.y-v.y)+v.x&&(l=!l);return l||ri.prototype._containsPoint.call(this,a,!0)}});function fh(a,l){return new Ka(a,l)}var oi=Fn.extend({initialize:function(a,l){P(this,l),this._layers={},a&&this.addData(a)},addData:function(a){var l=K(a)?a:a.features,d,v,x;if(l){for(d=0,v=l.length;d<v;d++)x=l[d],(x.geometries||x.geometry||x.features||x.coordinates)&&this.addData(x);return this}var E=this.options;if(E.filter&&!E.filter(a))return this;var R=Ht(a,E);return R?(R.feature=Xo(a),R.defaultOptions=R.options,this.resetStyle(R),E.onEachFeature&&E.onEachFeature(a,R),this.addLayer(R)):this},resetStyle:function(a){return a===void 0?this.eachLayer(this.resetStyle,this):(a.options=u({},a.defaultOptions),this._setLayerStyle(a,this.options.style),this)},setStyle:function(a){return this.eachLayer(function(l){this._setLayerStyle(l,a)},this)},_setLayerStyle:function(a,l){a.setStyle&&(typeof l=="function"&&(l=l(a.feature)),a.setStyle(l))}});function Ht(a,l){var d=a.type==="Feature"?a.geometry:a,v=d?d.coordinates:null,x=[],E=l&&l.pointToLayer,R=l&&l.coordsToLatLng||Wo,H,q,te,me;if(!v&&!d)return null;switch(d.type){case"Point":return H=R(v),Xa(E,a,H,l);case"MultiPoint":for(te=0,me=v.length;te<me;te++)H=R(v[te]),x.push(Xa(E,a,H,l));return new Fn(x);case"LineString":case"MultiLineString":return q=oo(v,d.type==="LineString"?0:1,R),new ri(q,l);case"Polygon":case"MultiPolygon":return q=oo(v,d.type==="Polygon"?1:2,R),new Ka(q,l);case"GeometryCollection":for(te=0,me=d.geometries.length;te<me;te++){var Se=Ht({geometry:d.geometries[te],type:"Feature",properties:a.properties},l);Se&&x.push(Se)}return new Fn(x);case"FeatureCollection":for(te=0,me=d.features.length;te<me;te++){var De=Ht(d.features[te],l);De&&x.push(De)}return new Fn(x);default:throw new Error("Invalid GeoJSON object.")}}function Xa(a,l,d,v){return a?a(l,d):new ro(d,v&&v.markersInheritOptions&&v)}function Wo(a){return new fe(a[1],a[0],a[2])}function oo(a,l,d){for(var v=[],x=0,E=a.length,R;x<E;x++)R=l?oo(a[x],l-1,d):(d||Wo)(a[x]),v.push(R);return v}function Ko(a,l){return a=pe(a),a.alt!==void 0?[O(a.lng,l),O(a.lat,l),O(a.alt,l)]:[O(a.lng,l),O(a.lat,l)]}function so(a,l,d,v){for(var x=[],E=0,R=a.length;E<R;E++)x.push(l?so(a[E],pn(a[E])?0:l-1,d,v):Ko(a[E],v));return!l&&d&&x.length>0&&x.push(x[0].slice()),x}function Oi(a,l){return a.feature?u({},a.feature,{geometry:l}):Xo(l)}function Xo(a){return a.type==="Feature"||a.type==="FeatureCollection"?a:{type:"Feature",properties:{},geometry:a}}var ji={toGeoJSON:function(a){return Oi(this,{type:"Point",coordinates:Ko(this.getLatLng(),a)})}};ro.include(ji),Yo.include(ji),Wa.include(ji),ri.include({toGeoJSON:function(a){var l=!pn(this._latlngs),d=so(this._latlngs,l?1:0,!1,a);return Oi(this,{type:(l?"Multi":"")+"LineString",coordinates:d})}}),Ka.include({toGeoJSON:function(a){var l=!pn(this._latlngs),d=l&&!pn(this._latlngs[0]),v=so(this._latlngs,d?2:l?1:0,!0,a);return l||(v=[v]),Oi(this,{type:(d?"Multi":"")+"Polygon",coordinates:v})}}),Ya.include({toMultiPoint:function(a){var l=[];return this.eachLayer(function(d){l.push(d.toGeoJSON(a).geometry.coordinates)}),Oi(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(a){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(a);var d=l==="GeometryCollection",v=[];return this.eachLayer(function(x){if(x.toGeoJSON){var E=x.toGeoJSON(a);if(d)v.push(E.geometry);else{var R=Xo(E);R.type==="FeatureCollection"?v.push.apply(v,R.features):v.push(R)}}}),d?Oi(this,{geometries:v,type:"GeometryCollection"}):{type:"FeatureCollection",features:v}}});function Jo(a,l){return new oi(a,l)}var lo=Jo,Ja=kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(a,l,d){this._url=a,this._bounds=oe(l),P(this,d)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Me(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ot(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(a){return this.options.opacity=a,this._image&&this._updateOpacity(),this},setStyle:function(a){return a.opacity&&this.setOpacity(a.opacity),this},bringToFront:function(){return this._map&&Nt(this._image),this},bringToBack:function(){return this._map&&Ki(this._image),this},setUrl:function(a){return this._url=a,this._image&&(this._image.src=a),this},setBounds:function(a){return this._bounds=oe(a),this._map&&this._reset(),this},getEvents:function(){var a={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var a=this._url.tagName==="IMG",l=this._image=a?this._url:He("img");if(Me(l,"leaflet-image-layer"),this._zoomAnimated&&Me(l,"leaflet-zoom-animated"),this.options.className&&Me(l,this.options.className),l.onselectstart=T,l.onmousemove=T,l.onload=g(this.fire,this,"load"),l.onerror=g(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),a){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(a){var l=this._map.getZoomScale(a.zoom),d=this._map._latLngBoundsToNewLayerBounds(this._bounds,a.zoom,a.center).min;ni(this._image,d,l)},_reset:function(){var a=this._image,l=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),d=l.getSize();ut(a,l.min),a.style.width=d.x+"px",a.style.height=d.y+"px"},_updateOpacity:function(){ht(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var a=this.options.errorOverlayUrl;a&&this._url!==a&&(this._url=a,this._image.src=a)},getCenter:function(){return this._bounds.getCenter()}}),zu=function(a,l,d){return new Ja(a,l,d)},zi=Ja.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var a=this._url.tagName==="VIDEO",l=this._image=a?this._url:He("video");if(Me(l,"leaflet-image-layer"),this._zoomAnimated&&Me(l,"leaflet-zoom-animated"),this.options.className&&Me(l,this.options.className),l.onselectstart=T,l.onmousemove=T,l.onloadeddata=g(this.fire,this,"load"),a){for(var d=l.getElementsByTagName("source"),v=[],x=0;x<d.length;x++)v.push(d[x].src);this._url=d.length>0?v:[l.src];return}K(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var E=0;E<this._url.length;E++){var R=He("source");R.src=this._url[E],l.appendChild(R)}}});function Qa(a,l,d){return new zi(a,l,d)}var Qo=Ja.extend({_initImage:function(){var a=this._image=this._url;Me(a,"leaflet-image-layer"),this._zoomAnimated&&Me(a,"leaflet-zoom-animated"),this.options.className&&Me(a,this.options.className),a.onselectstart=T,a.onmousemove=T}});function Lu(a,l,d){return new Qo(a,l,d)}var $t=kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(a,l){a&&(a instanceof fe||K(a))?(this._latlng=pe(a),P(this,l)):(P(this,a),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(a){return a=arguments.length?a:this._source._map,a.hasLayer(this)||a.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(a){return this._map?this.close():(arguments.length?this._source=a:a=this._source,this._prepareOpen(),this.openOn(a._map)),this},onAdd:function(a){this._zoomAnimated=a._zoomAnimated,this._container||this._initLayout(),a._fadeAnimated&&ht(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),a._fadeAnimated&&ht(this._container,1),this.bringToFront(),this.options.interactive&&(Me(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(a){a._fadeAnimated?(ht(this._container,0),this._removeTimeout=setTimeout(g(ot,void 0,this._container),200)):ot(this._container),this.options.interactive&&(vt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(a){return this._latlng=pe(a),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(a){return this._content=a,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var a={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Nt(this._container),this},bringToBack:function(){return this._map&&Ki(this._container),this},_prepareOpen:function(a){var l=this._source;if(!l._map)return!1;if(l instanceof Fn){l=null;var d=this._source._layers;for(var v in d)if(d[v]._map){l=d[v];break}if(!l)return!1;this._source=l}if(!a)if(l.getCenter)a=l.getCenter();else if(l.getLatLng)a=l.getLatLng();else if(l.getBounds)a=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(a),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var a=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")a.innerHTML=l;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var a=this._map.latLngToLayerPoint(this._latlng),l=ce(this.options.offset),d=this._getAnchor();this._zoomAnimated?ut(this._container,a.add(d)):l=l.add(a).add(d);var v=this._containerBottom=-l.y,x=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=v+"px",this._container.style.left=x+"px"}},_getAnchor:function(){return[0,0]}});qe.include({_initOverlay:function(a,l,d,v){var x=l;return x instanceof a||(x=new a(v).setContent(l)),d&&x.setLatLng(d),x}}),kn.include({_initOverlay:function(a,l,d,v){var x=d;return x instanceof a?(P(x,v),x._source=this):(x=l&&!v?l:new a(v,this),x.setContent(d)),x}});var co=$t.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(a){return a=arguments.length?a:this._source._map,!a.hasLayer(this)&&a._popup&&a._popup.options.autoClose&&a.removeLayer(a._popup),a._popup=this,$t.prototype.openOn.call(this,a)},onAdd:function(a){$t.prototype.onAdd.call(this,a),a.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof $n||this._source.on("preclick",An))},onRemove:function(a){$t.prototype.onRemove.call(this,a),a.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof $n||this._source.off("preclick",An))},getEvents:function(){var a=$t.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(a.preclick=this.close),this.options.keepInView&&(a.moveend=this._adjustPan),a},_initLayout:function(){var a="leaflet-popup",l=this._container=He("div",a+" "+(this.options.className||"")+" leaflet-zoom-animated"),d=this._wrapper=He("div",a+"-content-wrapper",l);if(this._contentNode=He("div",a+"-content",d),Ji(l),Bn(this._contentNode),Le(l,"contextmenu",An),this._tipContainer=He("div",a+"-tip-container",l),this._tip=He("div",a+"-tip",this._tipContainer),this.options.closeButton){var v=this._closeButton=He("a",a+"-close-button",l);v.setAttribute("role","button"),v.setAttribute("aria-label","Close popup"),v.href="#close",v.innerHTML='<span aria-hidden="true">&#215;</span>',Le(v,"click",function(x){xt(x),this.close()},this)}},_updateLayout:function(){var a=this._contentNode,l=a.style;l.width="",l.whiteSpace="nowrap";var d=a.offsetWidth;d=Math.min(d,this.options.maxWidth),d=Math.max(d,this.options.minWidth),l.width=d+1+"px",l.whiteSpace="",l.height="";var v=a.offsetHeight,x=this.options.maxHeight,E="leaflet-popup-scrolled";x&&v>x?(l.height=x+"px",Me(a,E)):vt(a,E),this._containerWidth=this._container.offsetWidth},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center),d=this._getAnchor();ut(this._container,l.add(d))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var a=this._map,l=parseInt(Gr(this._container,"marginBottom"),10)||0,d=this._container.offsetHeight+l,v=this._containerWidth,x=new re(this._containerLeft,-d-this._containerBottom);x._add(Ci(this._container));var E=a.layerPointToContainerPoint(x),R=ce(this.options.autoPanPadding),H=ce(this.options.autoPanPaddingTopLeft||R),q=ce(this.options.autoPanPaddingBottomRight||R),te=a.getSize(),me=0,Se=0;E.x+v+q.x>te.x&&(me=E.x+v-te.x+q.x),E.x-me-H.x<0&&(me=E.x-H.x),E.y+d+q.y>te.y&&(Se=E.y+d-te.y+q.y),E.y-Se-H.y<0&&(Se=E.y-H.y),(me||Se)&&(this.options.keepInView&&(this._autopanning=!0),a.fire("autopanstart").panBy([me,Se]))}},_getAnchor:function(){return ce(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ru=function(a,l){return new co(a,l)};qe.mergeOptions({closePopupOnClick:!0}),qe.include({openPopup:function(a,l,d){return this._initOverlay(co,a,l,d).openOn(this),this},closePopup:function(a){return a=arguments.length?a:this._popup,a&&a.close(),this}}),kn.include({bindPopup:function(a,l){return this._popup=this._initOverlay(co,this._popup,a,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(a){return this._popup&&(this instanceof Fn||(this._popup._source=this),this._popup._prepareOpen(a||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(a){return this._popup&&this._popup.setContent(a),this},getPopup:function(){return this._popup},_openPopup:function(a){if(!(!this._popup||!this._map)){Ai(a);var l=a.layer||a.target;if(this._popup._source===l&&!(l instanceof $n)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(a.latlng);return}this._popup._source=l,this.openPopup(a.latlng)}},_movePopup:function(a){this._popup.setLatLng(a.latlng)},_onKeyPress:function(a){a.originalEvent.keyCode===13&&this._openPopup(a)}});var uo=$t.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(a){$t.prototype.onAdd.call(this,a),this.setOpacity(this.options.opacity),a.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(a){$t.prototype.onRemove.call(this,a),a.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var a=$t.prototype.getEvents.call(this);return this.options.permanent||(a.preclick=this.close),a},_initLayout:function(){var a="leaflet-tooltip",l=a+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=He("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+y(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(a){var l,d,v=this._map,x=this._container,E=v.latLngToContainerPoint(v.getCenter()),R=v.layerPointToContainerPoint(a),H=this.options.direction,q=x.offsetWidth,te=x.offsetHeight,me=ce(this.options.offset),Se=this._getAnchor();H==="top"?(l=q/2,d=te):H==="bottom"?(l=q/2,d=0):H==="center"?(l=q/2,d=te/2):H==="right"?(l=0,d=te/2):H==="left"?(l=q,d=te/2):R.x<E.x?(H="right",l=0,d=te/2):(H="left",l=q+(me.x+Se.x)*2,d=te/2),a=a.subtract(ce(l,d,!0)).add(me).add(Se),vt(x,"leaflet-tooltip-right"),vt(x,"leaflet-tooltip-left"),vt(x,"leaflet-tooltip-top"),vt(x,"leaflet-tooltip-bottom"),Me(x,"leaflet-tooltip-"+H),ut(x,a)},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._setPosition(a)},setOpacity:function(a){this.options.opacity=a,this._container&&ht(this._container,a)},_animateZoom:function(a){var l=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center);this._setPosition(l)},_getAnchor:function(){return ce(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),hh=function(a,l){return new uo(a,l)};qe.include({openTooltip:function(a,l,d){return this._initOverlay(uo,a,l,d).openOn(this),this},closeTooltip:function(a){return a.close(),this}}),kn.include({bindTooltip:function(a,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(uo,this._tooltip,a,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(a){if(!(!a&&this._tooltipHandlersAdded)){var l=a?"off":"on",d={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?d.add=this._openTooltip:(d.mouseover=this._openTooltip,d.mouseout=this.closeTooltip,d.click=this._openTooltip,this._map?this._addFocusListeners():d.add=this._addFocusListeners),this._tooltip.options.sticky&&(d.mousemove=this._moveTooltip),this[l](d),this._tooltipHandlersAdded=!a}},openTooltip:function(a){return this._tooltip&&(this instanceof Fn||(this._tooltip._source=this),this._tooltip._prepareOpen(a)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(a){return this._tooltip&&this._tooltip.setContent(a),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&(Le(l,"focus",function(){this._tooltip._source=a,this.openTooltip()},this),Le(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(a){var l=typeof a.getElement=="function"&&a.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(a){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var l=this;this._map.once("moveend",function(){l._openOnceFlag=!1,l._openTooltip(a)});return}this._tooltip._source=a.layer||a.target,this.openTooltip(this._tooltip.options.sticky?a.latlng:void 0)}},_moveTooltip:function(a){var l=a.latlng,d,v;this._tooltip.options.sticky&&a.originalEvent&&(d=this._map.mouseEventToContainerPoint(a.originalEvent),v=this._map.containerPointToLayerPoint(d),l=this._map.layerPointToLatLng(v)),this._tooltip.setLatLng(l)}});var Pu=Hn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(a){var l=a&&a.tagName==="DIV"?a:document.createElement("div"),d=this.options;if(d.html instanceof Element?(hn(l),l.appendChild(d.html)):l.innerHTML=d.html!==!1?d.html:"",d.bgPos){var v=ce(d.bgPos);l.style.backgroundPosition=-v.x+"px "+-v.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function mh(a){return new Pu(a)}Hn.Default=io;var er=kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(a){P(this,a)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(a){a._addZoomLimit(this)},onRemove:function(a){this._removeAllTiles(),ot(this._container),a._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Nt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ki(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(a){return this.options.opacity=a,this._updateOpacity(),this},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var a=this._clampZoom(this._map.getZoom());a!==this._tileZoom&&(this._tileZoom=a,this._updateLevels()),this._update()}return this},getEvents:function(){var a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var a=this.options.tileSize;return a instanceof re?a:new re(a,a)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(a){for(var l=this.getPane().children,d=-a(-1/0,1/0),v=0,x=l.length,E;v<x;v++)E=l[v].style.zIndex,l[v]!==this._container&&E&&(d=a(d,+E));isFinite(d)&&(this.options.zIndex=d+a(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!xe.ielt9){ht(this._container,this.options.opacity);var a=+new Date,l=!1,d=!1;for(var v in this._tiles){var x=this._tiles[v];if(!(!x.current||!x.loaded)){var E=Math.min(1,(a-x.loaded)/200);ht(x.el,E),E<1?l=!0:(x.active?d=!0:this._onOpaqueTile(x),x.active=!0)}}d&&!this._noPrune&&this._pruneTiles(),l&&(ke(this._fadeFrame),this._fadeFrame=ve(this._updateOpacity,this))}},_onOpaqueTile:T,_initContainer:function(){this._container||(this._container=He("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var a=this._tileZoom,l=this.options.maxZoom;if(a!==void 0){for(var d in this._levels)d=Number(d),this._levels[d].el.children.length||d===a?(this._levels[d].el.style.zIndex=l-Math.abs(a-d),this._onUpdateLevel(d)):(ot(this._levels[d].el),this._removeTilesAtZoom(d),this._onRemoveLevel(d),delete this._levels[d]);var v=this._levels[a],x=this._map;return v||(v=this._levels[a]={},v.el=He("div","leaflet-tile-container leaflet-zoom-animated",this._container),v.el.style.zIndex=l,v.origin=x.project(x.unproject(x.getPixelOrigin()),a).round(),v.zoom=a,this._setZoomTransform(v,x.getCenter(),x.getZoom()),T(v.el.offsetWidth),this._onCreateLevel(v)),this._level=v,v}},_onUpdateLevel:T,_onRemoveLevel:T,_onCreateLevel:T,_pruneTiles:function(){if(this._map){var a,l,d=this._map.getZoom();if(d>this.options.maxZoom||d<this.options.minZoom){this._removeAllTiles();return}for(a in this._tiles)l=this._tiles[a],l.retain=l.current;for(a in this._tiles)if(l=this._tiles[a],l.current&&!l.active){var v=l.coords;this._retainParent(v.x,v.y,v.z,v.z-5)||this._retainChildren(v.x,v.y,v.z,v.z+2)}for(a in this._tiles)this._tiles[a].retain||this._removeTile(a)}},_removeTilesAtZoom:function(a){for(var l in this._tiles)this._tiles[l].coords.z===a&&this._removeTile(l)},_removeAllTiles:function(){for(var a in this._tiles)this._removeTile(a)},_invalidateAll:function(){for(var a in this._levels)ot(this._levels[a].el),this._onRemoveLevel(Number(a)),delete this._levels[a];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(a,l,d,v){var x=Math.floor(a/2),E=Math.floor(l/2),R=d-1,H=new re(+x,+E);H.z=+R;var q=this._tileCoordsToKey(H),te=this._tiles[q];return te&&te.active?(te.retain=!0,!0):(te&&te.loaded&&(te.retain=!0),R>v?this._retainParent(x,E,R,v):!1)},_retainChildren:function(a,l,d,v){for(var x=2*a;x<2*a+2;x++)for(var E=2*l;E<2*l+2;E++){var R=new re(x,E);R.z=d+1;var H=this._tileCoordsToKey(R),q=this._tiles[H];if(q&&q.active){q.retain=!0;continue}else q&&q.loaded&&(q.retain=!0);d+1<v&&this._retainChildren(x,E,d+1,v)}},_resetView:function(a){var l=a&&(a.pinch||a.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(a){this._setView(a.center,a.zoom,!0,a.noUpdate)},_clampZoom:function(a){var l=this.options;return l.minNativeZoom!==void 0&&a<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<a?l.maxNativeZoom:a},_setView:function(a,l,d,v){var x=Math.round(l);this.options.maxZoom!==void 0&&x>this.options.maxZoom||this.options.minZoom!==void 0&&x<this.options.minZoom?x=void 0:x=this._clampZoom(x);var E=this.options.updateWhenZooming&&x!==this._tileZoom;(!v||E)&&(this._tileZoom=x,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),x!==void 0&&this._update(a),d||this._pruneTiles(),this._noPrune=!!d),this._setZoomTransforms(a,l)},_setZoomTransforms:function(a,l){for(var d in this._levels)this._setZoomTransform(this._levels[d],a,l)},_setZoomTransform:function(a,l,d){var v=this._map.getZoomScale(d,a.zoom),x=a.origin.multiplyBy(v).subtract(this._map._getNewPixelOrigin(l,d)).round();xe.any3d?ni(a.el,x,v):ut(a.el,x)},_resetGrid:function(){var a=this._map,l=a.options.crs,d=this._tileSize=this.getTileSize(),v=this._tileZoom,x=this._map.getPixelWorldBounds(this._tileZoom);x&&(this._globalTileRange=this._pxBoundsToTileRange(x)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(a.project([0,l.wrapLng[0]],v).x/d.x),Math.ceil(a.project([0,l.wrapLng[1]],v).x/d.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(a.project([l.wrapLat[0],0],v).y/d.x),Math.ceil(a.project([l.wrapLat[1],0],v).y/d.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(a){var l=this._map,d=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),v=l.getZoomScale(d,this._tileZoom),x=l.project(a,this._tileZoom).floor(),E=l.getSize().divideBy(v*2);return new j(x.subtract(E),x.add(E))},_update:function(a){var l=this._map;if(l){var d=this._clampZoom(l.getZoom());if(a===void 0&&(a=l.getCenter()),this._tileZoom!==void 0){var v=this._getTiledPixelBounds(a),x=this._pxBoundsToTileRange(v),E=x.getCenter(),R=[],H=this.options.keepBuffer,q=new j(x.getBottomLeft().subtract([H,-H]),x.getTopRight().add([H,-H]));if(!(isFinite(x.min.x)&&isFinite(x.min.y)&&isFinite(x.max.x)&&isFinite(x.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var te in this._tiles){var me=this._tiles[te].coords;(me.z!==this._tileZoom||!q.contains(new re(me.x,me.y)))&&(this._tiles[te].current=!1)}if(Math.abs(d-this._tileZoom)>1){this._setView(a,d);return}for(var Se=x.min.y;Se<=x.max.y;Se++)for(var De=x.min.x;De<=x.max.x;De++){var Dt=new re(De,Se);if(Dt.z=this._tileZoom,!!this._isValidTile(Dt)){var wt=this._tiles[this._tileCoordsToKey(Dt)];wt?wt.current=!0:R.push(Dt)}}if(R.sort(function(We,Ke){return We.distanceTo(E)-Ke.distanceTo(E)}),R.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var cn=document.createDocumentFragment();for(De=0;De<R.length;De++)this._addTile(R[De],cn);this._level.el.appendChild(cn)}}}},_isValidTile:function(a){var l=this._map.options.crs;if(!l.infinite){var d=this._globalTileRange;if(!l.wrapLng&&(a.x<d.min.x||a.x>d.max.x)||!l.wrapLat&&(a.y<d.min.y||a.y>d.max.y))return!1}if(!this.options.bounds)return!0;var v=this._tileCoordsToBounds(a);return oe(this.options.bounds).overlaps(v)},_keyToBounds:function(a){return this._tileCoordsToBounds(this._keyToTileCoords(a))},_tileCoordsToNwSe:function(a){var l=this._map,d=this.getTileSize(),v=a.scaleBy(d),x=v.add(d),E=l.unproject(v,a.z),R=l.unproject(x,a.z);return[E,R]},_tileCoordsToBounds:function(a){var l=this._tileCoordsToNwSe(a),d=new ie(l[0],l[1]);return this.options.noWrap||(d=this._map.wrapLatLngBounds(d)),d},_tileCoordsToKey:function(a){return a.x+":"+a.y+":"+a.z},_keyToTileCoords:function(a){var l=a.split(":"),d=new re(+l[0],+l[1]);return d.z=+l[2],d},_removeTile:function(a){var l=this._tiles[a];l&&(ot(l.el),delete this._tiles[a],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(a)}))},_initTile:function(a){Me(a,"leaflet-tile");var l=this.getTileSize();a.style.width=l.x+"px",a.style.height=l.y+"px",a.onselectstart=T,a.onmousemove=T,xe.ielt9&&this.options.opacity<1&&ht(a,this.options.opacity)},_addTile:function(a,l){var d=this._getTilePos(a),v=this._tileCoordsToKey(a),x=this.createTile(this._wrapCoords(a),g(this._tileReady,this,a));this._initTile(x),this.createTile.length<2&&ve(g(this._tileReady,this,a,null,x)),ut(x,d),this._tiles[v]={el:x,coords:a,current:!0},l.appendChild(x),this.fire("tileloadstart",{tile:x,coords:a})},_tileReady:function(a,l,d){l&&this.fire("tileerror",{error:l,tile:d,coords:a});var v=this._tileCoordsToKey(a);d=this._tiles[v],d&&(d.loaded=+new Date,this._map._fadeAnimated?(ht(d.el,0),ke(this._fadeFrame),this._fadeFrame=ve(this._updateOpacity,this)):(d.active=!0,this._pruneTiles()),l||(Me(d.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:d.el,coords:a})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),xe.ielt9||!this._map._fadeAnimated?ve(this._pruneTiles,this):setTimeout(g(this._pruneTiles,this),250)))},_getTilePos:function(a){return a.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(a){var l=new re(this._wrapX?C(a.x,this._wrapX):a.x,this._wrapY?C(a.y,this._wrapY):a.y);return l.z=a.z,l},_pxBoundsToTileRange:function(a){var l=this.getTileSize();return new j(a.min.unscaleBy(l).floor(),a.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var a in this._tiles)if(!this._tiles[a].loaded)return!1;return!0}});function Mu(a){return new er(a)}var Li=er.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(a,l){this._url=a,l=P(this,l),l.detectRetina&&xe.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(a,l){return this._url===a&&l===void 0&&(l=!0),this._url=a,l||this.redraw(),this},createTile:function(a,l){var d=document.createElement("img");return Le(d,"load",g(this._tileOnLoad,this,l,d)),Le(d,"error",g(this._tileOnError,this,l,d)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(d.referrerPolicy=this.options.referrerPolicy),d.alt="",d.src=this.getTileUrl(a),d},getTileUrl:function(a){var l={r:xe.retina?"@2x":"",s:this._getSubdomain(a),x:a.x,y:a.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var d=this._globalTileRange.max.y-a.y;this.options.tms&&(l.y=d),l["-y"]=d}return $(this._url,u(l,this.options))},_tileOnLoad:function(a,l){xe.ielt9?setTimeout(g(a,this,null,l),0):a(null,l)},_tileOnError:function(a,l,d){var v=this.options.errorTileUrl;v&&l.getAttribute("src")!==v&&(l.src=v),a(d,l)},_onTileRemove:function(a){a.tile.onload=null},_getZoomForUrl:function(){var a=this._tileZoom,l=this.options.maxZoom,d=this.options.zoomReverse,v=this.options.zoomOffset;return d&&(a=l-a),a+v},_getSubdomain:function(a){var l=Math.abs(a.x+a.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var a,l;for(a in this._tiles)if(this._tiles[a].coords.z!==this._tileZoom&&(l=this._tiles[a].el,l.onload=T,l.onerror=T,!l.complete)){l.src=J;var d=this._tiles[a].coords;ot(l),delete this._tiles[a],this.fire("tileabort",{tile:l,coords:d})}},_removeTile:function(a){var l=this._tiles[a];if(l)return l.el.setAttribute("src",J),er.prototype._removeTile.call(this,a)},_tileReady:function(a,l,d){if(!(!this._map||d&&d.getAttribute("src")===J))return er.prototype._tileReady.call(this,a,l,d)}});function gn(a,l){return new Li(a,l)}var fo=Li.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(a,l){this._url=a;var d=u({},this.defaultWmsParams);for(var v in l)v in this.options||(d[v]=l[v]);l=P(this,l);var x=l.detectRetina&&xe.retina?2:1,E=this.getTileSize();d.width=E.x*x,d.height=E.y*x,this.wmsParams=d},onAdd:function(a){this._crs=this.options.crs||a.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,Li.prototype.onAdd.call(this,a)},getTileUrl:function(a){var l=this._tileCoordsToNwSe(a),d=this._crs,v=Y(d.project(l[0]),d.project(l[1])),x=v.min,E=v.max,R=(this._wmsVersion>=1.3&&this._crs===Sl?[x.y,x.x,E.y,E.x]:[x.x,x.y,E.x,E.y]).join(","),H=Li.prototype.getTileUrl.call(this,a);return H+U(this.wmsParams,H,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+R},setParams:function(a,l){return u(this.wmsParams,a),l||this.redraw(),this}});function vn(a,l){return new fo(a,l)}Li.WMS=fo,gn.wms=vn;var en=kn.extend({options:{padding:.1},initialize:function(a){P(this,a),y(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Me(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var a={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(a.zoomanim=this._onAnimZoom),a},_onAnimZoom:function(a){this._updateTransform(a.center,a.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(a,l){var d=this._map.getZoomScale(l,this._zoom),v=this._map.getSize().multiplyBy(.5+this.options.padding),x=this._map.project(this._center,l),E=v.multiplyBy(-d).add(x).subtract(this._map._getNewPixelOrigin(a,l));xe.any3d?ni(this._container,E,d):ut(this._container,E)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var a in this._layers)this._layers[a]._reset()},_onZoomEnd:function(){for(var a in this._layers)this._layers[a]._project()},_updatePaths:function(){for(var a in this._layers)this._layers[a]._update()},_update:function(){var a=this.options.padding,l=this._map.getSize(),d=this._map.containerPointToLayerPoint(l.multiplyBy(-a)).round();this._bounds=new j(d,d.add(l.multiplyBy(1+a*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),es=en.extend({options:{tolerance:0},getEvents:function(){var a=en.prototype.getEvents.call(this);return a.viewprereset=this._onViewPreReset,a},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){en.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var a=this._container=document.createElement("canvas");Le(a,"mousemove",this._onMouseMove,this),Le(a,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Le(a,"mouseout",this._handleMouseOut,this),a._leaflet_disable_events=!0,this._ctx=a.getContext("2d")},_destroyContainer:function(){ke(this._redrawRequest),delete this._ctx,ot(this._container),it(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var a;this._redrawBounds=null;for(var l in this._layers)a=this._layers[l],a._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){en.prototype._update.call(this);var a=this._bounds,l=this._container,d=a.getSize(),v=xe.retina?2:1;ut(l,a.min),l.width=v*d.x,l.height=v*d.y,l.style.width=d.x+"px",l.style.height=d.y+"px",xe.retina&&this._ctx.scale(2,2),this._ctx.translate(-a.min.x,-a.min.y),this.fire("update")}},_reset:function(){en.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(a){this._updateDashArray(a),this._layers[y(a)]=a;var l=a._order={layer:a,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(a){this._requestRedraw(a)},_removePath:function(a){var l=a._order,d=l.next,v=l.prev;d?d.prev=v:this._drawLast=v,v?v.next=d:this._drawFirst=d,delete a._order,delete this._layers[y(a)],this._requestRedraw(a)},_updatePath:function(a){this._extendRedrawBounds(a),a._project(),a._update(),this._requestRedraw(a)},_updateStyle:function(a){this._updateDashArray(a),this._requestRedraw(a)},_updateDashArray:function(a){if(typeof a.options.dashArray=="string"){var l=a.options.dashArray.split(/[, ]+/),d=[],v,x;for(x=0;x<l.length;x++){if(v=Number(l[x]),isNaN(v))return;d.push(v)}a.options._dashArray=d}else a.options._dashArray=a.options.dashArray},_requestRedraw:function(a){this._map&&(this._extendRedrawBounds(a),this._redrawRequest=this._redrawRequest||ve(this._redraw,this))},_extendRedrawBounds:function(a){if(a._pxBounds){var l=(a.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(a._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(a._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var a=this._redrawBounds;if(a){var l=a.getSize();this._ctx.clearRect(a.min.x,a.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var a,l=this._redrawBounds;if(this._ctx.save(),l){var d=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,d.x,d.y),this._ctx.clip()}this._drawing=!0;for(var v=this._drawFirst;v;v=v.next)a=v.layer,(!l||a._pxBounds&&a._pxBounds.intersects(l))&&a._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(a,l){if(this._drawing){var d,v,x,E,R=a._parts,H=R.length,q=this._ctx;if(H){for(q.beginPath(),d=0;d<H;d++){for(v=0,x=R[d].length;v<x;v++)E=R[d][v],q[v?"lineTo":"moveTo"](E.x,E.y);l&&q.closePath()}this._fillStroke(q,a)}}},_updateCircle:function(a){if(!(!this._drawing||a._empty())){var l=a._point,d=this._ctx,v=Math.max(Math.round(a._radius),1),x=(Math.max(Math.round(a._radiusY),1)||v)/v;x!==1&&(d.save(),d.scale(1,x)),d.beginPath(),d.arc(l.x,l.y/x,v,0,Math.PI*2,!1),x!==1&&d.restore(),this._fillStroke(d,a)}},_fillStroke:function(a,l){var d=l.options;d.fill&&(a.globalAlpha=d.fillOpacity,a.fillStyle=d.fillColor||d.color,a.fill(d.fillRule||"evenodd")),d.stroke&&d.weight!==0&&(a.setLineDash&&a.setLineDash(l.options&&l.options._dashArray||[]),a.globalAlpha=d.opacity,a.lineWidth=d.weight,a.strokeStyle=d.color,a.lineCap=d.lineCap,a.lineJoin=d.lineJoin,a.stroke())},_onClick:function(a){for(var l=this._map.mouseEventToLayerPoint(a),d,v,x=this._drawFirst;x;x=x.next)d=x.layer,d.options.interactive&&d._containsPoint(l)&&(!(a.type==="click"||a.type==="preclick")||!this._map._draggableMoved(d))&&(v=d);this._fireEvent(v?[v]:!1,a)},_onMouseMove:function(a){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(a);this._handleMouseHover(a,l)}},_handleMouseOut:function(a){var l=this._hoveredLayer;l&&(vt(this._container,"leaflet-interactive"),this._fireEvent([l],a,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(a,l){if(!this._mouseHoverThrottled){for(var d,v,x=this._drawFirst;x;x=x.next)d=x.layer,d.options.interactive&&d._containsPoint(l)&&(v=d);v!==this._hoveredLayer&&(this._handleMouseOut(a),v&&(Me(this._container,"leaflet-interactive"),this._fireEvent([v],a,"mouseover"),this._hoveredLayer=v)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,a),this._mouseHoverThrottled=!0,setTimeout(g(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(a,l,d){this._map._fireDOMEvent(l,d||l.type,a)},_bringToFront:function(a){var l=a._order;if(l){var d=l.next,v=l.prev;if(d)d.prev=v;else return;v?v.next=d:d&&(this._drawFirst=d),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(a)}},_bringToBack:function(a){var l=a._order;if(l){var d=l.next,v=l.prev;if(v)v.next=d;else return;d?d.prev=v:v&&(this._drawLast=v),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(a)}}});function ho(a){return xe.canvas?new es(a):null}var Ri=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch{}return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Tl={_initContainer:function(){this._container=He("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(en.prototype._update.call(this),this.fire("update"))},_initPath:function(a){var l=a._container=Ri("shape");Me(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",a._path=Ri("path"),l.appendChild(a._path),this._updateStyle(a),this._layers[y(a)]=a},_addPath:function(a){var l=a._container;this._container.appendChild(l),a.options.interactive&&a.addInteractiveTarget(l)},_removePath:function(a){var l=a._container;ot(l),a.removeInteractiveTarget(l),delete this._layers[y(a)]},_updateStyle:function(a){var l=a._stroke,d=a._fill,v=a.options,x=a._container;x.stroked=!!v.stroke,x.filled=!!v.fill,v.stroke?(l||(l=a._stroke=Ri("stroke")),x.appendChild(l),l.weight=v.weight+"px",l.color=v.color,l.opacity=v.opacity,v.dashArray?l.dashStyle=K(v.dashArray)?v.dashArray.join(" "):v.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=v.lineCap.replace("butt","flat"),l.joinstyle=v.lineJoin):l&&(x.removeChild(l),a._stroke=null),v.fill?(d||(d=a._fill=Ri("fill")),x.appendChild(d),d.color=v.fillColor||v.color,d.opacity=v.fillOpacity):d&&(x.removeChild(d),a._fill=null)},_updateCircle:function(a){var l=a._point.round(),d=Math.round(a._radius),v=Math.round(a._radiusY||d);this._setPath(a,a._empty()?"M0 0":"AL "+l.x+","+l.y+" "+d+","+v+" 0,"+65535*360)},_setPath:function(a,l){a._path.v=l},_bringToFront:function(a){Nt(a._container)},_bringToBack:function(a){Ki(a._container)}},Vn=xe.vml?Ri:Pa,tr=en.extend({_initContainer:function(){this._container=Vn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Vn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ot(this._container),it(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){en.prototype._update.call(this);var a=this._bounds,l=a.getSize(),d=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,d.setAttribute("width",l.x),d.setAttribute("height",l.y)),ut(d,a.min),d.setAttribute("viewBox",[a.min.x,a.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(a){var l=a._path=Vn("path");a.options.className&&Me(l,a.options.className),a.options.interactive&&Me(l,"leaflet-interactive"),this._updateStyle(a),this._layers[y(a)]=a},_addPath:function(a){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(a._path),a.addInteractiveTarget(a._path)},_removePath:function(a){ot(a._path),a.removeInteractiveTarget(a._path),delete this._layers[y(a)]},_updatePath:function(a){a._project(),a._update()},_updateStyle:function(a){var l=a._path,d=a.options;l&&(d.stroke?(l.setAttribute("stroke",d.color),l.setAttribute("stroke-opacity",d.opacity),l.setAttribute("stroke-width",d.weight),l.setAttribute("stroke-linecap",d.lineCap),l.setAttribute("stroke-linejoin",d.lineJoin),d.dashArray?l.setAttribute("stroke-dasharray",d.dashArray):l.removeAttribute("stroke-dasharray"),d.dashOffset?l.setAttribute("stroke-dashoffset",d.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),d.fill?(l.setAttribute("fill",d.fillColor||d.color),l.setAttribute("fill-opacity",d.fillOpacity),l.setAttribute("fill-rule",d.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(a,l){this._setPath(a,Ma(a._parts,l))},_updateCircle:function(a){var l=a._point,d=Math.max(Math.round(a._radius),1),v=Math.max(Math.round(a._radiusY),1)||d,x="a"+d+","+v+" 0 1,0 ",E=a._empty()?"M0 0":"M"+(l.x-d)+","+l.y+x+d*2+",0 "+x+-d*2+",0 ";this._setPath(a,E)},_setPath:function(a,l){a._path.setAttribute("d",l)},_bringToFront:function(a){Nt(a._path)},_bringToBack:function(a){Ki(a._path)}});xe.vml&&tr.include(Tl);function mo(a){return xe.svg||xe.vml?new tr(a):null}qe.include({getRenderer:function(a){var l=a.options.renderer||this._getPaneRenderer(a.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(a){if(a==="overlayPane"||a===void 0)return!1;var l=this._paneRenderers[a];return l===void 0&&(l=this._createRenderer({pane:a}),this._paneRenderers[a]=l),l},_createRenderer:function(a){return this.options.preferCanvas&&ho(a)||mo(a)}});var ea=Ka.extend({initialize:function(a,l){Ka.prototype.initialize.call(this,this._boundsToLatLngs(a),l)},setBounds:function(a){return this.setLatLngs(this._boundsToLatLngs(a))},_boundsToLatLngs:function(a){return a=oe(a),[a.getSouthWest(),a.getNorthWest(),a.getNorthEast(),a.getSouthEast()]}});function ph(a,l){return new ea(a,l)}tr.create=Vn,tr.pointsToPath=Ma,oi.geometryToLayer=Ht,oi.coordsToLatLng=Wo,oi.coordsToLatLngs=oo,oi.latLngToCoords=Ko,oi.latLngsToCoords=so,oi.getFeature=Oi,oi.asFeature=Xo,qe.mergeOptions({boxZoom:!0});var tn=Un.extend({initialize:function(a){this._map=a,this._container=a._container,this._pane=a._panes.overlayPane,this._resetStateTimeout=0,a.on("unload",this._destroy,this)},addHooks:function(){Le(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){it(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ot(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(a){if(!a.shiftKey||a.which!==1&&a.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Fa(),Uo(),this._startPoint=this._map.mouseEventToContainerPoint(a),Le(document,{contextmenu:Ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(a){this._moved||(this._moved=!0,this._box=He("div","leaflet-zoom-box",this._container),Me(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(a);var l=new j(this._point,this._startPoint),d=l.getSize();ut(this._box,l.min),this._box.style.width=d.x+"px",this._box.style.height=d.y+"px"},_finish:function(){this._moved&&(ot(this._box),vt(this._container,"leaflet-crosshair")),Dn(),Wr(),it(document,{contextmenu:Ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(a){if(!(a.which!==1&&a.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(g(this._resetState,this),0);var l=new ie(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(a){a.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});qe.addInitHook("addHandler","boxZoom",tn),qe.mergeOptions({doubleClickZoom:!0});var ts=Un.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(a){var l=this._map,d=l.getZoom(),v=l.options.zoomDelta,x=a.originalEvent.shiftKey?d-v:d+v;l.options.doubleClickZoom==="center"?l.setZoom(x):l.setZoomAround(a.containerPoint,x)}});qe.addInitHook("addHandler","doubleClickZoom",ts),qe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Zn=Un.extend({addHooks:function(){if(!this._draggable){var a=this._map;this._draggable=new ki(a._mapPane,a._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),a.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),a.on("zoomend",this._onZoomEnd,this),a.whenReady(this._onZoomEnd,this))}Me(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){vt(this._map._container,"leaflet-grab"),vt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var a=this._map;if(a._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=oe(this._map.options.maxBounds);this._offsetLimit=Y(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;a.fire("movestart").fire("dragstart"),a.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(a){if(this._map.options.inertia){var l=this._lastTime=+new Date,d=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(d),this._times.push(l),this._prunePositions(l)}this._map.fire("move",a).fire("drag",a)},_prunePositions:function(a){for(;this._positions.length>1&&a-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var a=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(a).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(a,l){return a-(a-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var a=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;a.x<l.min.x&&(a.x=this._viscousLimit(a.x,l.min.x)),a.y<l.min.y&&(a.y=this._viscousLimit(a.y,l.min.y)),a.x>l.max.x&&(a.x=this._viscousLimit(a.x,l.max.x)),a.y>l.max.y&&(a.y=this._viscousLimit(a.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(a)}},_onPreDragWrap:function(){var a=this._worldWidth,l=Math.round(a/2),d=this._initialWorldOffset,v=this._draggable._newPos.x,x=(v-l+d)%a+l-d,E=(v+l+d)%a-l-d,R=Math.abs(x+d)<Math.abs(E+d)?x:E;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=R},_onDragEnd:function(a){var l=this._map,d=l.options,v=!d.inertia||a.noInertia||this._times.length<2;if(l.fire("dragend",a),v)l.fire("moveend");else{this._prunePositions(+new Date);var x=this._lastPos.subtract(this._positions[0]),E=(this._lastTime-this._times[0])/1e3,R=d.easeLinearity,H=x.multiplyBy(R/E),q=H.distanceTo([0,0]),te=Math.min(d.inertiaMaxSpeed,q),me=H.multiplyBy(te/q),Se=te/(d.inertiaDeceleration*R),De=me.multiplyBy(-Se/2).round();!De.x&&!De.y?l.fire("moveend"):(De=l._limitOffset(De,l.options.maxBounds),ve(function(){l.panBy(De,{duration:Se,easeLinearity:R,noMoveStart:!0,animate:!0})}))}}});qe.addInitHook("addHandler","dragging",Zn),qe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var El=Un.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(a){this._map=a,this._setPanDelta(a.options.keyboardPanDelta),this._setZoomDelta(a.options.zoomDelta)},addHooks:function(){var a=this._map._container;a.tabIndex<=0&&(a.tabIndex="0"),Le(a,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),it(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var a=document.body,l=document.documentElement,d=a.scrollTop||l.scrollTop,v=a.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(v,d)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(a){var l=this._panKeys={},d=this.keyCodes,v,x;for(v=0,x=d.left.length;v<x;v++)l[d.left[v]]=[-1*a,0];for(v=0,x=d.right.length;v<x;v++)l[d.right[v]]=[a,0];for(v=0,x=d.down.length;v<x;v++)l[d.down[v]]=[0,a];for(v=0,x=d.up.length;v<x;v++)l[d.up[v]]=[0,-1*a]},_setZoomDelta:function(a){var l=this._zoomKeys={},d=this.keyCodes,v,x;for(v=0,x=d.zoomIn.length;v<x;v++)l[d.zoomIn[v]]=a;for(v=0,x=d.zoomOut.length;v<x;v++)l[d.zoomOut[v]]=-a},_addHooks:function(){Le(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){it(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(a){if(!(a.altKey||a.ctrlKey||a.metaKey)){var l=a.keyCode,d=this._map,v;if(l in this._panKeys){if(!d._panAnim||!d._panAnim._inProgress)if(v=this._panKeys[l],a.shiftKey&&(v=ce(v).multiplyBy(3)),d.options.maxBounds&&(v=d._limitOffset(ce(v),d.options.maxBounds)),d.options.worldCopyJump){var x=d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(v)));d.panTo(x)}else d.panBy(v)}else if(l in this._zoomKeys)d.setZoom(d.getZoom()+(a.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&d._popup&&d._popup.options.closeOnEscapeKey)d.closePopup();else return;Ai(a)}}});qe.addInitHook("addHandler","keyboard",El),qe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var po=Un.extend({addHooks:function(){Le(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){it(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(a){var l=Yt(a),d=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(a),this._startTime||(this._startTime=+new Date);var v=Math.max(d-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(g(this._performZoom,this),v),Ai(a)},_performZoom:function(){var a=this._map,l=a.getZoom(),d=this._map.options.zoomSnap||0;a._stop();var v=this._delta/(this._map.options.wheelPxPerZoomLevel*4),x=4*Math.log(2/(1+Math.exp(-Math.abs(v))))/Math.LN2,E=d?Math.ceil(x/d)*d:x,R=a._limitZoom(l+(this._delta>0?E:-E))-l;this._delta=0,this._startTime=null,R&&(a.options.scrollWheelZoom==="center"?a.setZoom(l+R):a.setZoomAround(this._lastMousePos,l+R))}});qe.addInitHook("addHandler","scrollWheelZoom",po);var ta=600;qe.mergeOptions({tapHold:xe.touchNative&&xe.safari&&xe.mobile,tapTolerance:15});var ns=Un.extend({addHooks:function(){Le(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){it(this._map._container,"touchstart",this._onDown,this)},_onDown:function(a){if(clearTimeout(this._holdTimeout),a.touches.length===1){var l=a.touches[0];this._startPos=this._newPos=new re(l.clientX,l.clientY),this._holdTimeout=setTimeout(g(function(){this._cancel(),this._isTapValid()&&(Le(document,"touchend",xt),Le(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),ta),Le(document,"touchend touchcancel contextmenu",this._cancel,this),Le(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function a(){it(document,"touchend",xt),it(document,"touchend touchcancel",a)},_cancel:function(){clearTimeout(this._holdTimeout),it(document,"touchend touchcancel contextmenu",this._cancel,this),it(document,"touchmove",this._onMove,this)},_onMove:function(a){var l=a.touches[0];this._newPos=new re(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(a,l){var d=new MouseEvent(a,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});d._simulated=!0,l.target.dispatchEvent(d)}});qe.addInitHook("addHandler","tapHold",ns),qe.mergeOptions({touchZoom:xe.touch,bounceAtZoomLimits:!0});var Cl=Un.extend({addHooks:function(){Me(this._map._container,"leaflet-touch-zoom"),Le(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){vt(this._map._container,"leaflet-touch-zoom"),it(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(a){var l=this._map;if(!(!a.touches||a.touches.length!==2||l._animatingZoom||this._zooming)){var d=l.mouseEventToContainerPoint(a.touches[0]),v=l.mouseEventToContainerPoint(a.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(d.add(v)._divideBy(2))),this._startDist=d.distanceTo(v),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Le(document,"touchmove",this._onTouchMove,this),Le(document,"touchend touchcancel",this._onTouchEnd,this),xt(a)}},_onTouchMove:function(a){if(!(!a.touches||a.touches.length!==2||!this._zooming)){var l=this._map,d=l.mouseEventToContainerPoint(a.touches[0]),v=l.mouseEventToContainerPoint(a.touches[1]),x=d.distanceTo(v)/this._startDist;if(this._zoom=l.getScaleZoom(x,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&x<1||this._zoom>l.getMaxZoom()&&x>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,x===1)return}else{var E=d._add(v)._divideBy(2)._subtract(this._centerPoint);if(x===1&&E.x===0&&E.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(E),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),ke(this._animRequest);var R=g(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=ve(R,this,!0),xt(a)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ke(this._animRequest),it(document,"touchmove",this._onTouchMove,this),it(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});qe.addInitHook("addHandler","touchZoom",Cl),qe.BoxZoom=tn,qe.DoubleClickZoom=ts,qe.Drag=Zn,qe.Keyboard=El,qe.ScrollWheelZoom=po,qe.TapHold=ns,qe.TouchZoom=Cl,r.Bounds=j,r.Browser=xe,r.CRS=ze,r.Canvas=es,r.Circle=Yo,r.CircleMarker=Wa,r.Class=ae,r.Control=ln,r.DivIcon=Pu,r.DivOverlay=$t,r.DomEvent=$o,r.DomUtil=Va,r.Draggable=ki,r.Evented=le,r.FeatureGroup=Fn,r.GeoJSON=oi,r.GridLayer=er,r.Handler=Un,r.Icon=Hn,r.ImageOverlay=Ja,r.LatLng=fe,r.LatLngBounds=ie,r.Layer=kn,r.LayerGroup=Ya,r.LineUtil=ch,r.Map=qe,r.Marker=ro,r.Mixin=rh,r.Path=$n,r.Point=re,r.PolyUtil=xl,r.Polygon=Ka,r.Polyline=ri,r.Popup=co,r.PosAnimation=Za,r.Projection=Eu,r.Rectangle=ea,r.Renderer=en,r.SVG=tr,r.SVGOverlay=Qo,r.TileLayer=Li,r.Tooltip=uo,r.Transformation=xi,r.Util=ge,r.VideoOverlay=zi,r.bind=g,r.bounds=Y,r.canvas=ho,r.circle=ju,r.circleMarker=Ou,r.control=ai,r.divIcon=mh,r.extend=u,r.featureGroup=Au,r.geoJSON=Jo,r.geoJson=lo,r.gridLayer=Mu,r.icon=no,r.imageOverlay=zu,r.latLng=pe,r.latLngBounds=oe,r.layerGroup=uh,r.map=pl,r.marker=ku,r.point=ce,r.polygon=fh,r.polyline=dh,r.popup=Ru,r.rectangle=ph,r.setOptions=P,r.stamp=y,r.svg=mo,r.svgOverlay=Lu,r.tileLayer=gn,r.tooltip=hh,r.transformation=we,r.version=s,r.videoOverlay=Qa;var Al=window.L;r.noConflict=function(){return window.L=Al,this},window.L=r}))})(bc,bc.exports)),bc.exports}var Df=iO();const g0=Pw(Df);function aO(t,i){const r=k.useRef(i);k.useEffect(function(){i!==r.current&&t.attributionControl!=null&&(r.current!=null&&t.attributionControl.removeAttribution(r.current),i!=null&&t.attributionControl.addAttribution(i)),r.current=i},[t,i])}const rO=1;function oO(t){return Object.freeze({__version:rO,map:t})}function sO(t,i){return Object.freeze({...t,...i})}const v0=k.createContext(null);function R1(){const t=k.use(v0);if(t==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function lO(t){function i(r,s){const{instance:u,context:m}=t(r).current;k.useImperativeHandle(s,()=>u);const{children:g}=r;return g==null?null:Wn.createElement(v0,{value:m},g)}return k.forwardRef(i)}function cO(t){function i(r,s){const{instance:u}=t(r).current;return k.useImperativeHandle(s,()=>u),null}return k.forwardRef(i)}function uO(t,i){const r=k.useRef(void 0);k.useEffect(function(){return i!=null&&t.instance.on(i),r.current=i,function(){r.current!=null&&t.instance.off(r.current),r.current=null}},[t,i])}function P1(t,i){const r=t.pane??i.pane;return r?{...t,pane:r}:t}function M1(t,i,r){return Object.freeze({instance:t,context:i,container:r})}function I1(t,i){return i==null?function(s,u){const m=k.useRef(void 0);return m.current||(m.current=t(s,u)),m}:function(s,u){const m=k.useRef(void 0);m.current||(m.current=t(s,u));const g=k.useRef(s),{instance:b}=m.current;return k.useEffect(function(){g.current!==s&&(i(b,s,g.current),g.current=s)},[b,s,i]),m}}function dO(t,i){k.useEffect(function(){return(i.layerContainer??i.map).addLayer(t.instance),function(){i.layerContainer?.removeLayer(t.instance),i.map.removeLayer(t.instance)}},[i,t])}function N1(t){return function(r){const s=R1(),u=t(P1(r,s),s);return aO(s.map,r.attribution),uO(u.current,r.eventHandlers),dO(u.current,s),u}}function fO(t,i){const r=I1(t,i),s=N1(r);return lO(s)}function hO(t,i){const r=I1(t,i),s=N1(r);return cO(s)}function mO(t,i,r){const{opacity:s,zIndex:u}=i;s!=null&&s!==r.opacity&&t.setOpacity(s),u!=null&&u!==r.zIndex&&t.setZIndex(u)}function pO(){return R1().map}function gO({bounds:t,boundsOptions:i,center:r,children:s,className:u,id:m,placeholder:g,style:b,whenReady:y,zoom:_,...C},T){const[O]=k.useState({className:u,id:m,style:b}),[I,z]=k.useState(null),P=k.useRef(void 0);k.useImperativeHandle(T,()=>I?.map??null,[I]);const U=k.useCallback($=>{if($!==null&&!P.current){const K=new Df.Map($,C);P.current=K,r!=null&&_!=null?K.setView(r,_):t!=null&&K.fitBounds(t,i),y!=null&&K.whenReady(y),z(oO(K))}},[]);k.useEffect(()=>()=>{I?.map.remove()},[I]);const B=I?Wn.createElement(v0,{value:I},s):g??null;return Wn.createElement("div",{...O,ref:U},B)}const vO=k.forwardRef(gO),D1=fO(function({position:i,...r},s){const u=new Df.Marker(i,r);return M1(u,sO(s,{overlayContainer:u}))},function(i,r,s){r.position!==s.position&&i.setLatLng(r.position),r.icon!=null&&r.icon!==s.icon&&i.setIcon(r.icon),r.zIndexOffset!=null&&r.zIndexOffset!==s.zIndexOffset&&i.setZIndexOffset(r.zIndexOffset),r.opacity!=null&&r.opacity!==s.opacity&&i.setOpacity(r.opacity),i.dragging!=null&&r.draggable!==s.draggable&&(r.draggable===!0?i.dragging.enable():i.dragging.disable())}),yO=hO(function({url:i,...r},s){const u=new Df.TileLayer(i,P1(r,s));return M1(u,s)},function(i,r,s){mO(i,r,s);const{url:u}=r;u!=null&&u!==s.url&&i.setUrl(u)}),bO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",_O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",xO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete g0.Icon.Default.prototype._getIconUrl;g0.Icon.Default.mergeOptions({iconRetinaUrl:bO,iconUrl:_O,shadowUrl:xO});function wO({onSelectStore:t,selectedCategory:i=[],selectedStore:r,stores:s=[],favoriteIds:u=[],favoritesOnly:m=!1}){const g=k.useRef(t);k.useEffect(()=>{g.current=t},[t]);const b=k.useMemo(()=>{const y=m?s.filter(_=>u.includes(_._id)):s;return r?y.filter(_=>_._id===r._id):i.length===0?y:y.filter(_=>i.includes(String(_.category.kor)))},[s,i,r,u,m]);return h.jsx(h.Fragment,{children:b.map(y=>h.jsx(D1,{position:[y.lat,y.lon],eventHandlers:{click:()=>{g.current?.(y)}}},y._id))})}const SO=w.div`
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
`,mg=[37.379995,126.66281],Kd=16,TO=18;function EO({selectedStore:t,userLocation:i,onUserMoveEnd:r}){const s=pO(),u=k.useRef(!0),m=k.useRef(!0);return k.useEffect(()=>{if(t){u.current=!1,s.setView([t.lat,t.lon],TO,{animate:!0});return}if(u.current){u.current=!1;return}s.setView(mg,Kd,{animate:!0})},[s,t]),k.useEffect(()=>{if(!i){if(m.current){m.current=!1;return}if(t)return;s.setView(mg,Kd,{animate:!0});return}s.setView(i,Kd,{animate:!0});let g=!1;const b=()=>{g||(g=!0,r?.())},y=()=>{window.clearTimeout(_),b()},_=window.setTimeout(b,1500);return s.once("moveend",y),()=>{window.clearTimeout(_),s.off("moveend",y)}},[s,i,t,r]),null}function CO({className:t,onSelectStore:i,selectedCategory:r,selectedStore:s,stores:u,userLocation:m,language:g,showSchoolReturn:b,onUserMoveEnd:y,favoriteIds:_,favoritesOnly:C}){const T=k.useMemo(()=>g0.divIcon({className:"user-location-icon",html:`
            <div class="user-location">
                <span class="user-location-label"> ${g==="eng"?"My location":"내 위치"} </span>
                <span class="user-location-stem"></span>
                <span class="user-location-dot"></span>
            </div>
        `,iconSize:[0,0],iconAnchor:[0,0]}),[g]);return h.jsx(SO,{className:t,children:h.jsxs(vO,{center:mg,zoom:Kd,scrollWheelZoom:!0,style:{width:"100%",height:"100%"},children:[h.jsx(EO,{selectedStore:s,userLocation:m,onUserMoveEnd:y}),h.jsx(yO,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),h.jsx(wO,{onSelectStore:i,selectedCategory:r,selectedStore:s,stores:u,favoriteIds:_,favoritesOnly:C}),b&&m&&h.jsx(D1,{position:m,icon:T,zIndexOffset:1e3})]})})}async function Ui(t,i={}){try{const r=await fetch(t,i);if(!r.ok)throw new Error(`HTTP 에러: ${r.status}`);return r.json()}catch(r){throw r instanceof DOMException&&r.name==="AbortError"?r:new Error(`데이터 파싱 에러: ${r instanceof Error?r.message:"알 수 없는 에러"}`)}}const Js="http://localhost:8080";function Ea(t){return t?t.startsWith("http://")||t.startsWith("https://")?t:`${Js.replace(/\/$/,"")}${t.startsWith("/")?t:`/${t}`}`:""}async function y_(t){const{photo:i}=await Ui(`${Js}/photos`,{method:"POST",headers:{"Content-Type":t.type||"image/png"},body:t});return i}async function AO(){return Ui(`${Js}/stores`)}async function kO(t){return Ui(`${Js}/stores`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function OO(t,i){return Ui(`${Js}/stores/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}async function jO(t){return Ui(`${Js}/stores/${t}`,{method:"DELETE"})}const zO=w.div`
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
`,LO=w.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;function RO({photoSrc:t,storeAltName:i}){return h.jsx(zO,{children:h.jsx(LO,{src:Ea(t),alt:i})})}const PO=w.button`
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
`;function B1({storeNaverMap:t}){return h.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:h.jsx(PO,{children:" N "})})}const MO=w.p`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,IO=w.p`
    font-weight: bold;
    color: #EE6969;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;function b_(t){const[i,r]=t.split(":").map(Number);return Number.isNaN(i)||Number.isNaN(r)?null:i*60+r}function NO(t=new Date){const i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Seoul",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(t),r=Number(i.find(u=>u.type==="hour")?.value??0),s=Number(i.find(u=>u.type==="minute")?.value??0);return r*60+s}function DO(t,i){const r=b_(t),s=b_(i);if(r===null||s===null)return!1;if(r===s)return!0;const u=NO();return s>r?u>=r&&u<=s:u>=r||u<=s}function U1({openTime:t,closeTime:i,language:r}){const s=DO(t,i);return h.jsx(h.Fragment,{children:s?h.jsxs(MO,{children:[" ",r==="eng"?"Open":"영업 중"," "]}):h.jsxs(IO,{children:[" ",r==="eng"?"Closed":"영업 마감"," "]})})}const Pr="http://localhost:8080";async function F1(t,i){const r=await fetch(`${Pr}/students/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:i})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}async function BO(t){const i=await fetch(`${Pr}/students`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error(typeof r.error=="string"?r.error:`HTTP ${i.status}`);return r}async function Qs(t,i){const r=await fetch(t,i),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}const UO=7;function FO(t,i){return[i,...t.filter(r=>r!==i)].slice(0,UO)}async function HO(t,i){return Qs(`${Pr}/students/${t}/recent-views`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:i})})}async function $O(t,i){return Qs(`${Pr}/students/${t}/favorites`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:i})})}async function H1(t,i){return Qs(`${Pr}/students/${t}/favorites/${i}`,{method:"DELETE"})}async function VO(t,i){return Qs(`${Pr}/students/${t}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:i})})}async function ZO(t,i,r){const s=await Qs(`${Pr}/students/${t}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:i,newPassword:r})});if(!s.ok)throw new Error(typeof s.error=="string"?s.error:"비밀번호 변경에 실패했습니다.");return s}async function qO(t){return Qs(`${Pr}/students/${t}`,{method:"DELETE"})}const pg="os-student";function GO(t,i){return t.length===0?!1:i.length===0?!0:t[0]===i[0]?!1:t.indexOf(i[0])>0}function Xd(t){return{...t,favorites:Array.isArray(t.favorites)?t.favorites:[],recentViews:Array.isArray(t.recentViews)?t.recentViews:[]}}function YO(){try{const t=sessionStorage.getItem(pg);return t?Xd(JSON.parse(t)):null}catch{return null}}function Rd(t){if(t){sessionStorage.setItem(pg,JSON.stringify(t));return}sessionStorage.removeItem(pg)}const $1=k.createContext(null);function WO({children:t}){const[i,r]=k.useState(YO),s=b=>{const y=Xd(b);Rd(y),r(y)},u=b=>{r(y=>{const _=Xd(b),C=y?{..._,recentViews:GO(y.recentViews,_.recentViews)?y.recentViews:_.recentViews}:_;return Rd(C),C})},m=b=>{let y=!1;return r(_=>{if(!_||_.recentViews[0]===b)return _;y=!0;const C=Xd({..._,recentViews:FO(_.recentViews,b)});return Rd(C),C}),y},g=()=>{Rd(null),r(null)};return h.jsx($1.Provider,{value:{student:i,isStudent:i!==null,loginStudent:s,updateStudent:u,prependRecentView:m,logoutStudent:g},children:t})}function bi(){const t=k.useContext($1);if(!t)throw new Error("useStudentAuth는 StudentAuthProvider 안에서만 사용할 수 있습니다.");return t}const KO=w.div`
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
`,XO=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`,JO=w.p`
    color: black;
    font-weight: bolder;
    display: inline;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.3;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`,QO=w.p`
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
`,ej=w.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0.6rem;
`,tj=w.div`
    display: flex;
    align-items: center;
`,nj=w.button`
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
`,__=w.div`
    display: flex;
    align-items: center;
    padding: 0;
`,ij=w.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,aj=w.p`
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
`,x_=w.div`
    width: 100%;
    height: 0.25vh;
    border-bottom: 0.5px solid black;
    margin-top: 0.4rem;
`,lp=w.h5`
    font-weight: bold;
    color: black;
    margin: 0.3rem 0;

    @media (max-width: 767px) {
        font-size: 0.85rem;
    }
`,w_=w.div`
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
`,gg=w.p`
    font-size: 0.85rem;
    color: black;
    margin: 0;
    color: gray;

    @media (max-width: 767px) {
        font-size: 0.75rem;
    }
`,rj=w(gg)`
    font-size: 0.6rem;
    color: black;
`,oj=w.p`
    color: #8F8F8F;
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 1rem;
`;function sj({store:t,language:i}){const{student:r,isStudent:s,updateStudent:u}=bi(),m=!!r?.favorites?.includes(t._id);async function g(){if(!s||!r?._id){alert(i==="eng"?"Please log in as a student to use favorites.":"즐겨찾기는 학생 로그인 후 이용할 수 있습니다.");return}try{const b=m?await H1(r._id,t._id):await $O(r._id,t._id);u(b)}catch(b){console.error(b);const y=b instanceof Error?b.message:"";if(y==="HTTP 404"||y.includes("Cannot POST")||y.includes("Cannot DELETE")){alert(i==="eng"?"The favorites API is missing. Restart the API server in the server folder.":"즐겨찾기 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.");return}if(y==="Failed to fetch"||y.includes("NetworkError")||y.includes("fetch")){alert(i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.");return}alert(i==="eng"?"Failed to update favorites.":"즐겨찾기 변경에 실패했습니다.")}}return h.jsxs(KO,{children:[h.jsx(RO,{photoSrc:t.photo,storeAltName:i==="eng"?t.name.eng:t.name.kor}),h.jsxs(XO,{children:[h.jsxs(ej,{children:[h.jsx(tj,{children:h.jsxs(JO,{children:[i==="eng"?t.name.eng:t.name.kor,h.jsx(B1,{storeNaverMap:t.naverMap})]})}),h.jsx(nj,{type:"button",$favorited:m,onClick:()=>{g()}})]}),h.jsxs(__,{children:[h.jsx(QO,{children:i==="eng"?t.branch.eng:t.branch.kor}),h.jsx(ij,{children:i==="eng"?t.theme?.eng:t.theme?.kor})]}),h.jsxs(__,{children:[h.jsx(U1,{openTime:t.openTime,closeTime:t.closeTime,language:i}),h.jsxs(aj,{children:[" ",t.openTime," - ",t.closeTime," "]})]}),h.jsx(x_,{}),h.jsxs(lp,{children:[" 🎓 ",i==="eng"?"SUNY Benefit":"SUNY 혜택"]}),h.jsxs(w_,{children:[h.jsx(gg,{children:i==="eng"?t.discount.eng:t.discount.kor}),h.jsx(rj,{children:i==="eng"?"*You must bring your SUNY student ID card to receive the discount.":"할인을 받기 위해서는 학생증을 필수 지참해야합니다."})]}),h.jsxs(lp,{children:[" ✅ ",i==="eng"?"Additional precautions":"추가 유의사항"," "]}),h.jsx(w_,{children:h.jsx(gg,{children:i==="eng"?t.description.eng:t.description.kor})}),h.jsx(x_,{}),h.jsxs(lp,{children:[" 🚡",i==="eng"?"Address":"주소"," "]}),h.jsxs(oj,{children:[" ",i==="eng"?t.address?.eng:t.address?.kor," "]})]})]})}const lj=w.div`
    position: relative;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    height: 98%;
    justify-content: flex-end;
    width: 100%;
`,cj=w(Nf)`
    z-index: 4;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;

    @media (max-width: 767px) {
        width: 1.3rem;
        height: 1.3rem;
    }
`;function V1({onClose:t}){return h.jsx(lj,{children:h.jsx(cj,{onClick:t})})}const uj=w.div`
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
`,dj=w.div`
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    align-items: center;
`;function fj({className:t,onClose:i,store:r,language:s}){return h.jsx(uj,{className:t,children:h.jsxs(dj,{children:[h.jsx(sj,{store:r,language:s}),h.jsx(V1,{onClose:i??(()=>{})})]})})}const hj=w.img`
    margin-top: 3vh;

    @media (max-width: 767px) {
        margin-top: 2vh;
        max-width: 70%;
    }
`,mj=w.div`
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
`,pj=w.p`
    font-weight: bolder;
    padding: 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`,gj=w.p`
    font-size: 0.8rem;
    text-align: center;
    padding: 0.4rem 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 0.75rem;
        padding: 0.25rem 0;
    }
`,vj=w.div`
    padding: 0.3rem 1rem 0 1rem;
    margin: 0;
    font-size: 0.85rem;

    @media (max-width: 767px) {
        padding: 0.2rem 0.7rem 0 0.7rem;
        font-size: 0.75rem;
    }
`,Pd=w.a`
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
`;function yj({language:t}){return h.jsxs(mj,{children:[h.jsx(hj,{src:"outstanding_logo.jpg",alt:"outstanding logo"}),h.jsx(pj,{children:t==="eng"?"What is 'Outstanding Spots'?":"Outstanding Spots란?"}),h.jsx(gj,{children:h.jsx(vj,{children:t==="eng"?h.jsxs(h.Fragment,{children:["Outstanding Spots is a web service for SUNY Korea students to find out the affiliate stores near SUNY Korea.",h.jsx("br",{}),"You can easily find out the store information and benefits through Outstanding Spots!"]}):h.jsxs(h.Fragment,{children:["Outstanding Spots는 한국뉴욕주립대학교 학생분들을 위한 제휴 매장 안내 웹서비스입니다.",h.jsx("br",{}),"학교와 제휴된 다양한 매장을 한눈에 확인하고, 학생들에게 제공되는 할인과 특별 혜택을 간편하게 찾아보세요!"]})})}),h.jsx(Pd,{href:"https://form.naver.com/response/6ZkQLf7FKUMSGLv4rgprCw",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Apply for Affiliate Store":"제휴 매장 신청하기"}),h.jsx(Pd,{href:"https://www.instagram.com/sunykorea_partnerships?igsh=MXdqZGJyZnRwMTMydg==",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Instagram":"인스타그램"}),h.jsx(Pd,{href:"https://pf.kakao.com/_EyprG",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"KakaoTalk":"카카오톡"}),h.jsx(Pd,{href:"https://docs.google.com/forms/d/e/1FAIpQLSesVboW69zSeb3O8Q1ZJwTF46rFmDj7v-SyL5S7NbLpj0Ql5Q/viewform",target:"_blank",rel:"noopener noreferrer",children:t==="eng"?"Contract the developer":"개발자에게 문의하기"})]})}const bj=w.div`
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
`,_j=w.div`
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    align-items: center;
`;function xj({className:t,onClose:i,language:r}){return h.jsx(bj,{className:t,children:h.jsxs(_j,{children:[h.jsx(yj,{language:r}),h.jsx(V1,{onClose:i??(()=>{})})]})})}const wj=w.div`
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
`,Sj=w.p`
    font-weight: bolder;
    margin-bottom: 1vh;
    margin-top: 3vh;
`,Tj=w.p`
    font-size: 0.8rem;
    margin-top: 1vh;
    text-align: center;
    margin-bottom: 3vh;
`,Ej=w.button`
    width: 100%;
    font-size: 0.8rem;
    background-color: #EFEEEF;
    border-radius: 0;
    border: 0.3px solid black;
    padding: 3vh;
`;function Cj({onOpen:t,language:i,stores:r}){const s=k.useMemo(()=>[...r].sort((u,m)=>{const g=i==="eng"?`${u.name.eng} ${u.branch.eng}`:`${u.name.kor} ${u.branch.kor}`,b=i==="eng"?`${m.name.eng} ${m.branch.eng}`:`${m.name.kor} ${m.branch.kor}`;return i==="eng"?g.localeCompare(b,"en"):g.localeCompare(b,"ko")}),[r,i]);return h.jsxs(wj,{children:[h.jsx(Sj,{children:i==="eng"?"View all stores":"전체 매장 확인하기"}),h.jsxs(Tj,{children:[i==="eng"?"It is arranged in alphabetical order.":"가나다 순으로 정렬되어 있습니다."," ",h.jsx("br",{})," ",i==="eng"?"Scroll through to find out more!":"스크롤을 통해 더 확인하세요!"]}),s.map(u=>h.jsxs(Ej,{onClick:()=>{t?.(u)},children:[i==="eng"?u.name.eng:u.name.kor," ",i==="eng"?u.branch.eng:u.branch.kor]},u._id))]})}const Aj=w.div`
    position: relative;
    width: 100%;
    height: 84vh;
    pointer-events: none;
`,kj=w(Nf)`
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
`;function Oj({onOpen:t,onClose:i,language:r,stores:s}){return h.jsxs(Aj,{children:[h.jsx(Cj,{onOpen:t,language:r,stores:s}),h.jsx(kj,{onClick:i})]})}const jj=w.div`
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
`;function zj({language:t,matchDataList:i,nowIndex:r,onSelectStore:s}){return h.jsx(jj,{id:"autocomplete",children:i.map((u,m)=>h.jsx("div",{className:m===r?"active":"",onMouseDown:g=>{g.preventDefault(),s(u)},children:t==="eng"?u.name.eng:u.name.kor},u._id))})}const Lj=w.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    pointer-events: none;

    @media (max-width: 767px) {
        order: -1;
        width: 100%;
        flex: 1 0 100%;
    }
`,Rj=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 2rem;
    padding: 0.25rem;
    pointer-events: auto;
`,Pj=w.span`
    font-size: 1rem;
    color: #333;
`,Mj=w.input`
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
`;function Ij({language:t,stores:i,onSelectStore:r,onQueryChange:s,persistSelectedName:u,engPlaceholder:m,korPlaceholder:g,className:b}){const[y,_]=k.useState([]),[C,T]=k.useState(0),[O,I]=k.useState(""),z=k.useRef(null),P=k.useRef(!1),U=()=>{P.current=!0,I(""),z.current&&(z.current.value=""),requestAnimationFrame(()=>{P.current=!1,I(""),z.current&&(z.current.value="")})},B=se=>{const Q=se.trim(),he=Q.toLowerCase();return Q?i.filter(Ce=>{const Ue=(t==="eng"?Ce.name.eng:Ce.name.kor).toLowerCase(),ve=Ce.theme?.kor??"",ke=Ce.theme?.eng?.toLowerCase()??"";return Ue.includes(he)||ve.includes(he)||ke.includes(he)}):[]},$=se=>{if(P.current=!0,u){const Q=t==="eng"?se.name.eng:se.name.kor;I(Q),z.current&&(z.current.value=Q),s?.(Q)}else U();_([]),T(0),z.current?.blur(),r?.(se),requestAnimationFrame(()=>{P.current=!1})},K=se=>{if(P.current)return;const Q=se.target.value;I(Q),T(0),_(B(Q)),s?.(Q)},ue=()=>{if(P.current)return;const se=z.current?.value??O;_(B(se)),s?.(se)},J=se=>{const Q=B(se.currentTarget.value);switch(se.keyCode){case 38:T(he=>Math.max(he-1,0)),_(Q);break;case 40:T(he=>Math.min(he+1,Math.max(Q.length-1,0))),_(Q);break;case 13:{const he=Q[C]??Q[0];he&&$(he);break}default:T(0),_(Q);break}};return h.jsxs(Lj,{className:b,children:[h.jsxs(Rj,{children:[h.jsx(Pj,{children:" 🔍 "}),h.jsx(Mj,{type:"text",id:"searchBar",ref:z,value:O,placeholder:t==="eng"?m:g,onChange:K,onCompositionEnd:ue,onKeyUp:J})]}),h.jsx(zj,{language:t,matchDataList:y,nowIndex:C,onSelectStore:$})]})}const Nj=w.button`
    font-weight: bold;
    background-color: ${({$selected:t})=>t?"#E3E6FF":"white"};
    border: 0px solid black;
    border-radius: 0;
    padding: 0.5rem 0.6rem;
`;function S_({languageName:t,selected:i,onClick:r}){return h.jsx(Nj,{$selected:i,onClick:r,children:t})}const y0=k.createContext(null);function Dj({language:t,setLanguage:i,children:r}){return h.jsx(y0.Provider,{value:{language:t,setLanguage:i},children:r})}function Pe(){const t=k.useContext(y0);if(!t)throw new Error("useLanguage는 LanguageProvider 안에서만 사용할 수 있습니다.");return t}const Bj=w.div`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;function Z1({className:t,language:i,onChangeLanguage:r}){const s=k.useContext(y0),u=i??s?.language??"kor",m=g=>{s?.setLanguage(g),r?.(g)};return h.jsxs(Bj,{className:t,children:[h.jsx(S_,{languageName:"KOR",selected:u==="kor",onClick:()=>m("kor")}),h.jsx(S_,{languageName:"ENG",selected:u==="eng",onClick:()=>m("eng")})]})}const b0=`즐거운 이용 되세요!
Enjoy the service!`,q1=k.createContext(null),Uj="http://localhost:8080";function Fj({children:t}){const[i,r]=k.useState([]),[s,u]=k.useState(`매장 정보를 불러오는 중입니다
Loading store information`);k.useEffect(()=>{const y=new AbortController;return Ui(`${Uj}/stores`,{signal:y.signal}).then(_=>{r(_),u(b0)}).catch(_=>{y.signal.aborted||(console.error(_),u(`다시 시도해주세요
Try again`))}),()=>y.abort()},[]);const m=y=>{r(_=>[..._,y])},g=y=>{r(_=>_.map(C=>C._id===y._id?y:C))},b=async y=>{await jO(y._id),r(_=>_.filter(C=>C._id!==y._id))};return h.jsx(q1.Provider,{value:{stores:i,loadingState:s,addStore:m,updateStore:g,deleteStore:b},children:t})}function Fi(){const t=k.useContext(q1);if(!t)throw new Error("useStores는 StoresProvider 안에서만 사용할 수 있습니다.");return t}const G1=k.createContext(null),Hj="http://localhost:8080";function $j({children:t}){const[i,r]=k.useState([]);return k.useEffect(()=>{const s=new AbortController;return Ui(`${Hj}/categories`,{signal:s.signal}).then(u=>{r(u)}).catch(u=>{s.signal.aborted||console.error(u)}),()=>s.abort()},[]),h.jsx(G1.Provider,{value:{categories:i},children:t})}function qc(){const t=k.useContext(G1);if(!t)throw new Error("useCategories는 CategoryProvider 안에서만 사용할 수 있습니다.");return t}const Vj=w.div`
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 0;
`,Zj=w(CO)`
    position: absolute;
    inset: 0;
    z-index: 1;
`,qj=w(tO)`
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
`,Gj=w(fj)`
    position: absolute;
    z-index: 4;
`,Yj=w(xj)`
    position: absolute;
    z-index: 3;
`,Wj=w.div`
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
`,Kj=w(Z1)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    display: none;

    @media (max-width: 767px) {
        scale: 0.8;
        display: block;
    }
`,Xj=w.div`
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
`,Jj=Hk`
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
`,Qj=w.div`
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
`,ez=w.button`
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
`,tz=w.div`
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
    ${({$animate:t})=>t&&p0`
            animation: ${Jj} 3s ease-out forwards;
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
`;function nz({className:t,language:i,onChangeLanguage:r}){const{stores:s,loadingState:u}=Fi(),{categories:m}=qc(),{student:g,isStudent:b,updateStudent:y,prependRecentView:_}=bi(),C=k.useRef(Promise.resolve()),[T]=k2(),O=T.get("store"),[I,z]=k.useState(null),[P,U]=k.useState([]),[B,$]=k.useState(!1),[K,ue]=k.useState(!1),[J,se]=k.useState(!1),[Q,he]=k.useState(!0),[Ce,Ue]=k.useState(null),[ve,ke]=k.useState(!1),ge=k.useCallback(j=>{if(!b||!g?._id||!_(j._id))return;const ie=g._id;C.current=C.current.catch(()=>{}).then(()=>HO(ie,j._id)).then(y).catch(oe=>{console.error(oe)})},[b,g?._id,_,y]),ae=k.useRef(ge);ae.current=ge;const Oe=k.useCallback(j=>{z(j),se(!1),ge(j)},[ge]);k.useEffect(()=>{if(!O||s.length===0)return;const j=s.find(Y=>Y._id===O);j&&(z(j),se(!1),ae.current(j))},[O,s]);const D=k.useCallback(()=>{if(!B&&!b){alert(i==="eng"?"Please log in as a student to see favorite stores.":"즐겨찾기한 매장은 학생 로그인 후 볼 수 있습니다.");return}$(j=>!j),z(j=>!j||B||(g?.favorites??[]).includes(j._id)?j:null)},[B,b,i,g?.favorites]),le=k.useCallback(()=>{ke(!0),navigator.geolocation.getCurrentPosition(j=>{Ue([j.coords.latitude,j.coords.longitude])},j=>{console.error(j),ke(!1)})},[]),re=k.useCallback(()=>{ke(!1)},[]),Re=k.useCallback(()=>{Ue(null),ke(!1)},[]),ce=u===b0;return h.jsxs(Vj,{className:t,children:[I&&h.jsx(Gj,{store:I,onClose:()=>z(null),language:i}),K&&h.jsx(Yj,{onClose:()=>ue(!1),language:i}),h.jsx(Zj,{onSelectStore:Oe,selectedCategory:P,selectedStore:I,stores:s,userLocation:Ce,language:i,onUserMoveEnd:re,showSchoolReturn:!!Ce&&!ve,favoriteIds:g?.favorites??[],favoritesOnly:B}),h.jsxs(Wj,{children:[h.jsx(qj,{onOpenWebsiteInfo:()=>ue(!0),onMyLocation:le,onToggleFavorites:D,favoritesOnly:B}),h.jsx(Ij,{language:i,stores:s,onSelectStore:Oe,engPlaceholder:"Search by store name or theme.",korPlaceholder:"매장 이름 혹은 테마로 검색해보세요."}),h.jsx(Kj,{language:i,onChangeLanguage:r})]}),J&&h.jsx(Oj,{onOpen:Oe,onClose:()=>se(!1),language:i,stores:s}),h.jsxs(Xj,{children:[ve&&h.jsx(Qj,{children:i==="eng"?"Moving to your location":"내 위치로 이동 중입니다"}),Ce&&!ve&&h.jsx(ez,{type:"button",onClick:Re,children:i==="eng"?"Return to school":"학교 위치로 이동"}),Q&&h.jsx(tz,{$animate:ce,onAnimationEnd:()=>{ce&&he(!1)},children:u}),h.jsx(Jk,{selectedCategory:P,onSelectCategory:j=>{U(Y=>[...Y,j])},onRemoveCategory:j=>{U(Y=>Y.filter(ie=>ie!==j))},language:i,categories:m})]})]})}const iz=w.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
`;function az(){const{language:t,setLanguage:i}=Pe();return h.jsx(iz,{children:h.jsx(nz,{language:t,onChangeLanguage:i})})}const rz=w.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
    padding: 0.8rem 0 0.8rem 0;
    cursor: pointer;
`,oz=w.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    object-fit: contain;
`,sz=w.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,lz=w.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;
`,cz=w.p`
    color: gray;
    margin: 0;
    font-size: 0.75rem;
    text-align: left;
`,uz=w.br`
    display: none;

    @media (max-width: 767px) {
        display: ${({$show:t})=>t?"block":"none"};
    }
`;function dz({language:t,breakSubtitleOnMobile:i=!1}){return h.jsxs(rz,{onClick:()=>window.location.reload(),children:[h.jsx(oz,{src:"/headerIcon.png",alt:"Header icon"}),h.jsxs(sz,{children:[h.jsx(lz,{children:" Outstanding Spots "}),h.jsxs(cz,{children:[t==="eng"?"SUNY Korea Nearby Partner Stores":"SUNY Korea 주변 제휴 매장"," ",h.jsx(uz,{$show:i}),t==="eng"?"Info":"안내 서비스"]})]})]})}const fz=w(wa)`
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
`,hz=w.p`
    font-weight: bold;
    margin: 0;
    color: ${({$clicked:t})=>t?"#7965EA":"black"};
`;function cp({navName:t,clicked:i,link:r,onClick:s}){return h.jsx(fz,{to:r,onClick:s,children:h.jsxs(hz,{$clicked:i,children:[" ",t," "]})})}const Y1=k.createContext(null);function mz({children:t}){const[i,r]=k.useState(!1),s=()=>{r(!0)},u=()=>{r(!1)};return h.jsx(Y1.Provider,{value:{isAdmin:i,loginAdmin:s,logoutAdmin:u},children:t})}function Gc(){const t=k.useContext(Y1);if(!t)throw new Error("useAdminAuth는 AdminAuthProvider 안에서만 사용할 수 있습니다.");return t}const vg="os-owner";function pz(){try{const t=sessionStorage.getItem(vg);return t?JSON.parse(t):null}catch{return null}}function up(t){if(t){sessionStorage.setItem(vg,JSON.stringify(t));return}sessionStorage.removeItem(vg)}const W1=k.createContext(null);function gz({children:t}){const[i,r]=k.useState(pz),s=g=>{up(g),r(g)},u=g=>{up(g),r(g)},m=()=>{up(null),r(null)};return h.jsx(W1.Provider,{value:{owner:i,isOwner:i!==null,loginOwner:s,updateOwner:u,logoutOwner:m},children:t})}function Mr(){const t=k.useContext(W1);if(!t)throw new Error("useOwnerAuth는 OwnerAuthProvider 안에서만 사용할 수 있습니다.");return t}const vz=w.div`
    width: 100%;
    flex-shrink: 0;
    min-height: 8svh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: visible;
    border-bottom: 4px solid #A79AF5;
    padding: 0 0.8rem;
`,yz=w.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`,bz=w.div`
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    align-items: stretch;

    @media (max-width: 767px) {
        display: none;
    }
`,_z=w.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
        gap: 0.4rem;
        display: ${({$hideOnMobileMap:t})=>t?"none":"flex"};
    }
`,xz=w(Z1)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    scale: 0.7;

    @media (max-width: 767px) {
        scale: 0.8;
    }
`;function wz({language:t,onChangeLanguage:i}){const{pathname:r}=rn(),{isAdmin:s}=Gc(),{isOwner:u}=Mr(),{isStudent:m}=bi(),g=s?"/admin":u?"/owner":m?"/student":"/login",b=r==="/login"||r.startsWith("/signup")||r.startsWith("/admin")||r.startsWith("/owner")||r.startsWith("/student"),y=r==="/";return h.jsxs(vz,{children:[h.jsxs(yz,{children:[h.jsx(dz,{language:t,breakSubtitleOnMobile:!y}),h.jsxs(bz,{children:[h.jsx(cp,{navName:t==="eng"?"Map":"지도",clicked:r==="/",link:"/",onClick:()=>{}}),h.jsx(cp,{navName:t==="eng"?"My page":"마이페이지",clicked:b,link:g,onClick:()=>{}}),h.jsx(cp,{navName:t==="eng"?"Stores":"전체 매장",clicked:r==="",link:"/",onClick:()=>Zc()})]})]}),h.jsx(_z,{$hideOnMobileMap:r==="/",children:h.jsx(xz,{language:t,onChangeLanguage:i})})]})}const Sz=w.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,Tz=w.img`
    width: 1.5rem;
    height: 1.5rem;
`,Ez=w.p`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`,Cz=w.span`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;function Az(){return h.jsxs(Sz,{children:[h.jsx(Tz,{src:"/mortarboardIcon.png",alt:"mortarboard icon"}),h.jsxs(Ez,{children:[" Only for ",h.jsx(Cz,{children:" SUNY Korea "})," students "]})]})}const kz=w.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 80%;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`,Oz=w.img`
    width: 1.5rem;
    height: 1.5rem;
`,jz=w.p`
    color: black;
    font-size: 0.9rem;
    margin: 0;
`;function zz({language:t}){return h.jsxs(kz,{children:[h.jsx(Oz,{src:"/fileIcon.png",alt:"file icon"}),h.jsxs(jz,{onClick:()=>Zc(),children:[" ",t==="eng"?"Web guide (PDF)":"웹 사용 설명서 (PDF)"," "]})]})}const Lz=w.div`
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
`;function Rz({language:t}){return h.jsxs(Lz,{children:[h.jsx(Az,{}),h.jsx(zz,{language:t})]})}const Pz=w.div`
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
`,Mz=w.ul`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`,dp=w.li`
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
`,fp=w.img`
    width: 1rem;
    height: 1rem;
    display: block;

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`;function Iz(){const{pathname:t}=rn(),{isAdmin:i}=Gc(),{isOwner:r}=Mr(),{isStudent:s}=bi(),u=i?"/admin":r?"/owner":s?"/student":"/login",g=t==="/login"||t.startsWith("/signup")||t.startsWith("/admin")||t.startsWith("/owner")||t.startsWith("/student")?"/coloredMyPageIcon.png":"/myPageIcon.png",b=t==="/"?"/clickedMapPageIcon.png":"/mapPageIcon.png";return h.jsx(Pz,{children:h.jsx("nav",{id:"navbar",children:h.jsxs(Mz,{children:[h.jsx(dp,{children:h.jsxs(wa,{to:u,children:[" ",h.jsx(fp,{src:g,alt:"My page icon"})," "]})}),h.jsx(dp,{children:h.jsxs(wa,{to:"/",children:[" ",h.jsx(fp,{src:b,alt:"Map page icon"})," "]})}),h.jsx(dp,{onClick:Zc,children:h.jsxs(wa,{to:"/",children:[" ",h.jsx(fp,{src:"/storePageIcon.png",alt:"Store page icon"})," "]})})]})})})}var Nz={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},Dz={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},Bz={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Uz={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Fz={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]};const Tn={fad:{user:Bz},fas:{lock:Fz,check:Dz,xmark:Uz},far:{eye:Nz}};function yg(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,s=Array(i);r<i;r++)s[r]=t[r];return s}function Hz(t){if(Array.isArray(t))return t}function $z(t){if(Array.isArray(t))return yg(t)}function Vz(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function Zz(t,i){for(var r=0;r<i.length;r++){var s=i[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,K1(s.key),s)}}function qz(t,i,r){return i&&Zz(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Jd(t,i){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_0(t))||i){r&&(t=r);var s=0,u=function(){};return{s:u,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(y){throw y},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m,g=!0,b=!1;return{s:function(){r=r.call(t)},n:function(){var y=r.next();return g=y.done,y},e:function(y){b=!0,m=y},f:function(){try{g||r.return==null||r.return()}finally{if(b)throw m}}}}function Ae(t,i,r){return(i=K1(i))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r,t}function Gz(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yz(t,i){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,u,m,g,b=[],y=!0,_=!1;try{if(m=(r=r.call(t)).next,i===0){if(Object(r)!==r)return;y=!1}else for(;!(y=(s=m.call(r)).done)&&(b.push(s.value),b.length!==i);y=!0);}catch(C){_=!0,u=C}finally{try{if(!y&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(_)throw u}}return b}}function Wz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T_(t,i){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),r.push.apply(r,s)}return r}function de(t){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?T_(Object(r),!0).forEach(function(s){Ae(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T_(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function Bf(t,i){return Hz(t)||Yz(t,i)||_0(t,i)||Wz()}function yi(t){return $z(t)||Gz(t)||_0(t)||Kz()}function Xz(t,i){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function K1(t){var i=Xz(t,"string");return typeof i=="symbol"?i:i+""}function df(t){"@babel/helpers - typeof";return df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},df(t)}function _0(t,i){if(t){if(typeof t=="string")return yg(t,i);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?yg(t,i):void 0}}var E_=function(){},x0={},X1={},J1=null,Q1={mark:E_,measure:E_};try{typeof window<"u"&&(x0=window),typeof document<"u"&&(X1=document),typeof MutationObserver<"u"&&(J1=MutationObserver),typeof performance<"u"&&(Q1=performance)}catch{}var Jz=x0.navigator||{},C_=Jz.userAgent,A_=C_===void 0?"":C_,zr=x0,gt=X1,k_=J1,Md=Q1;zr.document;var za=!!gt.documentElement&&!!gt.head&&typeof gt.addEventListener=="function"&&typeof gt.createElement=="function",eS=~A_.indexOf("MSIE")||~A_.indexOf("Trident/"),Id,Qz=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,eL=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,tS={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},tL={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},nS=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Jt="classic",Yc="duotone",iS="sharp",aS="sharp-duotone",rS="chisel",oS="etch",sS="graphite",lS="jelly",cS="jelly-duo",uS="jelly-fill",dS="mosaic",fS="notdog",hS="notdog-duo",mS="pixel",pS="slab",gS="slab-duo",vS="slab-press",yS="slab-press-duo",bS="thumbprint",_S="utility",xS="utility-duo",wS="utility-fill",SS="vellum",TS="whiteboard",nL="Classic",iL="Duotone",aL="Sharp",rL="Sharp Duotone",oL="Chisel",sL="Etch",lL="Graphite",cL="Jelly",uL="Jelly Duo",dL="Jelly Fill",fL="Mosaic",hL="Notdog",mL="Notdog Duo",pL="Pixel",gL="Slab",vL="Slab Duo",yL="Slab Press",bL="Slab Press Duo",_L="Thumbprint",xL="Utility",wL="Utility Duo",SL="Utility Fill",TL="Vellum",EL="Whiteboard",ES=[Jt,Yc,iS,aS,rS,oS,sS,lS,cS,uS,dS,fS,hS,mS,pS,gS,vS,yS,bS,_S,xS,wS,SS,TS];Id={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Id,Jt,nL),Yc,iL),iS,aL),aS,rL),rS,oL),oS,sL),sS,lL),lS,cL),cS,uL),uS,dL),Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Id,dS,fL),fS,hL),hS,mL),mS,pL),pS,gL),gS,vL),vS,yL),yS,bL),bS,_L),_S,xL),Ae(Ae(Ae(Ae(Id,xS,wL),wS,SL),SS,TL),TS,EL);var CL={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},AL={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},kL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),OL={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},CS=["fak","fa-kit","fakd","fa-kit-duotone"],O_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jL=["kit"],zL="kit",LL="kit-duotone",RL="Kit",PL="Kit Duotone";Ae(Ae({},zL,RL),LL,PL);var ML={kit:{"fa-kit":"fak"}},IL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},NL={kit:{fak:"fa-kit"}},j_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nd,Dd={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},DL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],BL="classic",UL="duotone",FL="sharp",HL="sharp-duotone",$L="chisel",VL="etch",ZL="graphite",qL="jelly",GL="jelly-duo",YL="jelly-fill",WL="mosaic",KL="notdog",XL="notdog-duo",JL="pixel",QL="slab",e5="slab-duo",t5="slab-press",n5="slab-press-duo",i5="thumbprint",a5="utility",r5="utility-duo",o5="utility-fill",s5="vellum",l5="whiteboard",c5="Classic",u5="Duotone",d5="Sharp",f5="Sharp Duotone",h5="Chisel",m5="Etch",p5="Graphite",g5="Jelly",v5="Jelly Duo",y5="Jelly Fill",b5="Mosaic",_5="Notdog",x5="Notdog Duo",w5="Pixel",S5="Slab",T5="Slab Duo",E5="Slab Press",C5="Slab Press Duo",A5="Thumbprint",k5="Utility",O5="Utility Duo",j5="Utility Fill",z5="Vellum",L5="Whiteboard";Nd={},Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Nd,BL,c5),UL,u5),FL,d5),HL,f5),$L,h5),VL,m5),ZL,p5),qL,g5),GL,v5),YL,y5),Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Nd,WL,b5),KL,_5),XL,x5),JL,w5),QL,S5),e5,T5),t5,E5),n5,C5),i5,A5),a5,k5),Ae(Ae(Ae(Ae(Nd,r5,O5),o5,j5),s5,z5),l5,L5);var R5="kit",P5="kit-duotone",M5="Kit",I5="Kit Duotone";Ae(Ae({},R5,M5),P5,I5);var N5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},D5={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},bg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},B5=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],AS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(DL,B5),U5=["solid","regular","light","thin","duotone","brands","semibold"],kS=[1,2,3,4,5,6,7,8,9,10],F5=kS.concat([11,12,13,14,15,16,17,18,19,20]),H5=["aw","fw","pull-left","pull-right"],$5=[].concat(yi(Object.keys(D5)),U5,H5,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Dd.GROUP,Dd.SWAP_OPACITY,Dd.PRIMARY,Dd.SECONDARY]).concat(kS.map(function(t){return"".concat(t,"x")})).concat(F5.map(function(t){return"w-".concat(t)})),V5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ca="___FONT_AWESOME___",_g=16,OS="fa",jS="svg-inline--fa",Po="data-fa-i2svg",xg="data-fa-pseudo-element",Z5="data-fa-pseudo-element-pending",w0="data-prefix",S0="data-icon",z_="fontawesome-i2svg",q5="async",G5=["HTML","HEAD","STYLE","SCRIPT"],zS=["::before","::after",":before",":after"],LS=(function(){try{return!0}catch{return!1}})();function Wc(t){return new Proxy(t,{get:function(r,s){return s in r?r[s]:r[Jt]}})}var RS=de({},tS);RS[Jt]=de(de(de(de({},{"fa-duotone":"duotone"}),tS[Jt]),O_.kit),O_["kit-duotone"]);var Y5=Wc(RS),wg=de({},OL);wg[Jt]=de(de(de(de({},{duotone:"fad"}),wg[Jt]),j_.kit),j_["kit-duotone"]);var L_=Wc(wg),Sg=de({},bg);Sg[Jt]=de(de({},Sg[Jt]),NL.kit);var T0=Wc(Sg),Tg=de({},N5);Tg[Jt]=de(de({},Tg[Jt]),ML.kit);Wc(Tg);var W5=Qz,PS="fa-layers-text",K5=eL,X5=de({},CL);Wc(X5);var J5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hp=tL,Q5=[].concat(yi(jL),yi($5)),Tc=zr.FontAwesomeConfig||{};function e3(t){var i=gt.querySelector("script["+t+"]");if(i)return i.getAttribute(t)}function t3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(gt&&typeof gt.querySelector=="function"){var n3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];n3.forEach(function(t){var i=Bf(t,2),r=i[0],s=i[1],u=t3(e3(r));u!=null&&(Tc[s]=u)})}var MS={styleDefault:"solid",familyDefault:Jt,cssPrefix:OS,replacementClass:jS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tc.familyPrefix&&(Tc.cssPrefix=Tc.familyPrefix);var $s=de(de({},MS),Tc);$s.autoReplaceSvg||($s.observeMutations=!1);var Ee={};Object.keys(MS).forEach(function(t){Object.defineProperty(Ee,t,{enumerable:!0,set:function(r){$s[t]=r,Ec.forEach(function(s){return s(Ee)})},get:function(){return $s[t]}})});Object.defineProperty(Ee,"familyPrefix",{enumerable:!0,set:function(i){$s.cssPrefix=i,Ec.forEach(function(r){return r(Ee)})},get:function(){return $s.cssPrefix}});zr.FontAwesomeConfig=Ee;var Ec=[];function i3(t){return Ec.push(t),function(){Ec.splice(Ec.indexOf(t),1)}}var Cs=_g,Bi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function a3(t){if(!(!t||!za)){var i=gt.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=t;for(var r=gt.head.childNodes,s=null,u=r.length-1;u>-1;u--){var m=r[u],g=(m.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(g)>-1&&(s=m)}return gt.head.insertBefore(i,s),t}}var r3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R_(){for(var t=12,i="";t-- >0;)i+=r3[Math.random()*62|0];return i}function el(t){for(var i=[],r=(t||[]).length>>>0;r--;)i[r]=t[r];return i}function E0(t){return t.classList?el(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(i){return i})}function IS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o3(t){return Object.keys(t||{}).reduce(function(i,r){return i+"".concat(r,'="').concat(IS(t[r]),'" ')},"").trim()}function Uf(t){return Object.keys(t||{}).reduce(function(i,r){return i+"".concat(r,": ").concat(t[r].trim(),";")},"")}function C0(t){return t.size!==Bi.size||t.x!==Bi.x||t.y!==Bi.y||t.rotate!==Bi.rotate||t.flipX||t.flipY}function s3(t){var i=t.transform,r=t.containerWidth,s=t.iconWidth,u={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(i.x*32,", ").concat(i.y*32,") "),g="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),b="rotate(".concat(i.rotate," 0 0)"),y={transform:"".concat(m," ").concat(g," ").concat(b)},_={transform:"translate(".concat(s/2*-1," -256)")};return{outer:u,inner:y,path:_}}function l3(t){var i=t.transform,r=t.width,s=r===void 0?_g:r,u=t.height,m=u===void 0?_g:u,g="";return eS?g+="translate(".concat(i.x/Cs-s/2,"em, ").concat(i.y/Cs-m/2,"em) "):g+="translate(calc(-50% + ".concat(i.x/Cs,"em), calc(-50% + ").concat(i.y/Cs,"em)) "),g+="scale(".concat(i.size/Cs*(i.flipX?-1:1),", ").concat(i.size/Cs*(i.flipY?-1:1),") "),g+="rotate(".concat(i.rotate,"deg) "),g}var c3=`:root, :host {
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
}`;function NS(){var t=OS,i=jS,r=Ee.cssPrefix,s=Ee.replacementClass,u=c3;if(r!==t||s!==i){var m=new RegExp("\\.".concat(t,"\\-"),"g"),g=new RegExp("\\--".concat(t,"\\-"),"g"),b=new RegExp("\\.".concat(i),"g");u=u.replace(m,".".concat(r,"-")).replace(g,"--".concat(r,"-")).replace(b,".".concat(s))}return u}var P_=!1;function mp(){Ee.autoAddCss&&!P_&&(a3(NS()),P_=!0)}var u3={mixout:function(){return{dom:{css:NS,insertCss:mp}}},hooks:function(){return{beforeDOMElementCreation:function(){mp()},beforeI2svg:function(){mp()}}}},Aa=zr||{};Aa[Ca]||(Aa[Ca]={});Aa[Ca].styles||(Aa[Ca].styles={});Aa[Ca].hooks||(Aa[Ca].hooks={});Aa[Ca].shims||(Aa[Ca].shims=[]);var mi=Aa[Ca],DS=[],BS=function(){gt.removeEventListener("DOMContentLoaded",BS),ff=1,DS.map(function(i){return i()})},ff=!1;za&&(ff=(gt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(gt.readyState),ff||gt.addEventListener("DOMContentLoaded",BS));function d3(t){za&&(ff?setTimeout(t,0):DS.push(t))}function Kc(t){var i=t.tag,r=t.attributes,s=r===void 0?{}:r,u=t.children,m=u===void 0?[]:u;return typeof t=="string"?IS(t):"<".concat(i," ").concat(o3(s),">").concat(m.map(Kc).join(""),"</").concat(i,">")}function M_(t,i,r){if(t&&t[i]&&t[i][r])return{prefix:i,iconName:r,icon:t[i][r]}}var pp=function(i,r,s,u){var m=Object.keys(i),g=m.length,b=r,y,_,C;for(s===void 0?(y=1,C=i[m[0]]):(y=0,C=s);y<g;y++)_=m[y],C=b(C,i[_],_,i);return C};function US(t){return yi(t).length!==1?null:t.codePointAt(0).toString(16)}function I_(t){return Object.keys(t).reduce(function(i,r){var s=t[r],u=!!s.icon;return u?i[s.iconName]=s.icon:i[r]=s,i},{})}function Eg(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.skipHooks,u=s===void 0?!1:s,m=I_(i);typeof mi.hooks.addPack=="function"&&!u?mi.hooks.addPack(t,I_(i)):mi.styles[t]=de(de({},mi.styles[t]||{}),m),t==="fas"&&Eg("fa",i)}var Ic=mi.styles,f3=mi.shims,FS=Object.keys(T0),h3=FS.reduce(function(t,i){return t[i]=Object.keys(T0[i]),t},{}),A0=null,HS={},$S={},VS={},ZS={},qS={};function m3(t){return~Q5.indexOf(t)}function p3(t,i){var r=i.split("-"),s=r[0],u=r.slice(1).join("-");return s===t&&u!==""&&!m3(u)?u:null}var GS=function(){var i=function(m){return pp(Ic,function(g,b,y){return g[y]=pp(b,m,{}),g},{})};HS=i(function(u,m,g){if(m[3]&&(u[m[3]]=g),m[2]){var b=m[2].filter(function(y){return typeof y=="number"});b.forEach(function(y){u[y.toString(16)]=g})}return u}),$S=i(function(u,m,g){if(u[g]=g,m[2]){var b=m[2].filter(function(y){return typeof y=="string"});b.forEach(function(y){u[y]=g})}return u}),qS=i(function(u,m,g){var b=m[2];return u[g]=g,b.forEach(function(y){u[y]=g}),u});var r="far"in Ic||Ee.autoFetchSvg,s=pp(f3,function(u,m){var g=m[0],b=m[1],y=m[2];return b==="far"&&!r&&(b="fas"),typeof g=="string"&&(u.names[g]={prefix:b,iconName:y}),typeof g=="number"&&(u.unicodes[g.toString(16)]={prefix:b,iconName:y}),u},{names:{},unicodes:{}});VS=s.names,ZS=s.unicodes,A0=Ff(Ee.styleDefault,{family:Ee.familyDefault})};i3(function(t){A0=Ff(t.styleDefault,{family:Ee.familyDefault})});GS();function k0(t,i){return(HS[t]||{})[i]}function g3(t,i){return($S[t]||{})[i]}function Oo(t,i){return(qS[t]||{})[i]}function YS(t){return VS[t]||{prefix:null,iconName:null}}function v3(t){var i=ZS[t],r=k0("fas",t);return i||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Lr(){return A0}var WS=function(){return{prefix:null,iconName:null,rest:[]}};function y3(t){var i=Jt,r=FS.reduce(function(s,u){return s[u]="".concat(Ee.cssPrefix,"-").concat(u),s},{});return ES.forEach(function(s){(t.includes(r[s])||t.some(function(u){return h3[s].includes(u)}))&&(i=s)}),i}function Ff(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.family,s=r===void 0?Jt:r,u=Y5[s][t];if(s===Yc&&!t)return"fad";var m=L_[s][t]||L_[s][u],g=t in mi.styles?t:null,b=m||g||null;return b}function b3(t){var i=[],r=null;return t.forEach(function(s){var u=p3(Ee.cssPrefix,s);u?r=u:s&&i.push(s)}),{iconName:r,rest:i}}function N_(t){return t.sort().filter(function(i,r,s){return s.indexOf(i)===r})}var D_=AS.concat(CS);function Hf(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.skipLookups,s=r===void 0?!1:r,u=null,m=N_(t.filter(function(I){return D_.includes(I)})),g=N_(t.filter(function(I){return!D_.includes(I)})),b=m.filter(function(I){return u=I,!nS.includes(I)}),y=Bf(b,1),_=y[0],C=_===void 0?null:_,T=y3(m),O=de(de({},b3(g)),{},{prefix:Ff(C,{family:T})});return de(de(de({},O),S3({values:t,family:T,styles:Ic,config:Ee,canonical:O,givenPrefix:u})),_3(s,u,O))}function _3(t,i,r){var s=r.prefix,u=r.iconName;if(t||!s||!u)return{prefix:s,iconName:u};var m=i==="fa"?YS(u):{},g=Oo(s,u);return u=m.iconName||g||u,s=m.prefix||s,s==="far"&&!Ic.far&&Ic.fas&&!Ee.autoFetchSvg&&(s="fas"),{prefix:s,iconName:u}}var x3=ES.filter(function(t){return t!==Jt||t!==Yc}),w3=Object.keys(bg).filter(function(t){return t!==Jt}).map(function(t){return Object.keys(bg[t])}).flat();function S3(t){var i=t.values,r=t.family,s=t.canonical,u=t.givenPrefix,m=u===void 0?"":u,g=t.styles,b=g===void 0?{}:g,y=t.config,_=y===void 0?{}:y,C=r===Yc,T=i.includes("fa-duotone")||i.includes("fad"),O=_.familyDefault==="duotone",I=s.prefix==="fad"||s.prefix==="fa-duotone";if(!C&&(T||O||I)&&(s.prefix="fad"),(i.includes("fa-brands")||i.includes("fab"))&&(s.prefix="fab"),!s.prefix&&x3.includes(r)){var z=Object.keys(b).find(function(U){return w3.includes(U)});if(z||_.autoFetchSvg){var P=kL.get(r).defaultShortPrefixId;s.prefix=P,s.iconName=Oo(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||m==="fa")&&(s.prefix=Lr()||"fas"),s}var T3=(function(){function t(){Vz(this,t),this.definitions={}}return qz(t,[{key:"add",value:function(){for(var r=this,s=arguments.length,u=new Array(s),m=0;m<s;m++)u[m]=arguments[m];var g=u.reduce(this._pullDefinitions,{});Object.keys(g).forEach(function(b){r.definitions[b]=de(de({},r.definitions[b]||{}),g[b]),Eg(b,g[b]);var y=T0[Jt][b];y&&Eg(y,g[b]),GS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,s){var u=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(u).map(function(m){var g=u[m],b=g.prefix,y=g.iconName,_=g.icon,C=_[2];r[b]||(r[b]={}),C.length>0&&C.forEach(function(T){typeof T=="string"&&(r[b][T]=_)}),r[b][y]=_}),r}}])})(),B_=[],zs={},Ms={},E3=Object.keys(Ms);function C3(t,i){var r=i.mixoutsTo;return B_=t,zs={},Object.keys(Ms).forEach(function(s){E3.indexOf(s)===-1&&delete Ms[s]}),B_.forEach(function(s){var u=s.mixout?s.mixout():{};if(Object.keys(u).forEach(function(g){typeof u[g]=="function"&&(r[g]=u[g]),df(u[g])==="object"&&Object.keys(u[g]).forEach(function(b){r[g]||(r[g]={}),r[g][b]=u[g][b]})}),s.hooks){var m=s.hooks();Object.keys(m).forEach(function(g){zs[g]||(zs[g]=[]),zs[g].push(m[g])})}s.provides&&s.provides(Ms)}),r}function Cg(t,i){for(var r=arguments.length,s=new Array(r>2?r-2:0),u=2;u<r;u++)s[u-2]=arguments[u];var m=zs[t]||[];return m.forEach(function(g){i=g.apply(null,[i].concat(s))}),i}function Mo(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];var u=zs[t]||[];u.forEach(function(m){m.apply(null,r)})}function Rr(){var t=arguments[0],i=Array.prototype.slice.call(arguments,1);return Ms[t]?Ms[t].apply(null,i):void 0}function Ag(t){t.prefix==="fa"&&(t.prefix="fas");var i=t.iconName,r=t.prefix||Lr();if(i)return i=Oo(r,i)||i,M_(KS.definitions,r,i)||M_(mi.styles,r,i)}var KS=new T3,A3=function(){Ee.autoReplaceSvg=!1,Ee.observeMutations=!1,Mo("noAuto")},k3={i2svg:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return za?(Mo("beforeI2svg",i),Rr("pseudoElements2svg",i),Rr("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.autoReplaceSvgRoot;Ee.autoReplaceSvg===!1&&(Ee.autoReplaceSvg=!0),Ee.observeMutations=!0,d3(function(){j3({autoReplaceSvgRoot:r}),Mo("watch",i)})}},O3={icon:function(i){if(i===null)return null;if(df(i)==="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Oo(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){var r=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],s=Ff(i[0]);return{prefix:s,iconName:Oo(s,r)||r}}if(typeof i=="string"&&(i.indexOf("".concat(Ee.cssPrefix,"-"))>-1||i.match(W5))){var u=Hf(i.split(" "),{skipLookups:!0});return{prefix:u.prefix||Lr(),iconName:Oo(u.prefix,u.iconName)||u.iconName}}if(typeof i=="string"){var m=Lr();return{prefix:m,iconName:Oo(m,i)||i}}}},In={noAuto:A3,config:Ee,dom:k3,parse:O3,library:KS,findIconDefinition:Ag,toHtml:Kc},j3=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.autoReplaceSvgRoot,s=r===void 0?gt:r;(Object.keys(mi.styles).length>0||Ee.autoFetchSvg)&&za&&Ee.autoReplaceSvg&&In.dom.i2svg({node:s})};function $f(t,i){return Object.defineProperty(t,"abstract",{get:i}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return Kc(s)})}}),Object.defineProperty(t,"node",{get:function(){if(za){var s=gt.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function z3(t){var i=t.children,r=t.main,s=t.mask,u=t.attributes,m=t.styles,g=t.transform;if(C0(g)&&r.found&&!s.found){var b=r.width,y=r.height,_={x:b/y/2,y:.5};u.style=Uf(de(de({},m),{},{"transform-origin":"".concat(_.x+g.x/16,"em ").concat(_.y+g.y/16,"em")}))}return[{tag:"svg",attributes:u,children:i}]}function L3(t){var i=t.prefix,r=t.iconName,s=t.children,u=t.attributes,m=t.symbol,g=m===!0?"".concat(i,"-").concat(Ee.cssPrefix,"-").concat(r):m;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},u),{},{id:g}),children:s}]}]}function R3(t){var i=["aria-label","aria-labelledby","title","role"];return i.some(function(r){return r in t})}function O0(t){var i=t.icons,r=i.main,s=i.mask,u=t.prefix,m=t.iconName,g=t.transform,b=t.symbol,y=t.maskId,_=t.extra,C=t.watchable,T=C===void 0?!1:C,O=s.found?s:r,I=O.width,z=O.height,P=[Ee.replacementClass,m?"".concat(Ee.cssPrefix,"-").concat(m):""].filter(function(J){return _.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(_.classes).join(" "),U={children:[],attributes:de(de({},_.attributes),{},{"data-prefix":u,"data-icon":m,class:P,role:_.attributes.role||"img",viewBox:"0 0 ".concat(I," ").concat(z)})};!R3(_.attributes)&&!_.attributes["aria-hidden"]&&(U.attributes["aria-hidden"]="true"),T&&(U.attributes[Po]="");var B=de(de({},U),{},{prefix:u,iconName:m,main:r,mask:s,maskId:y,transform:g,symbol:b,styles:de({},_.styles)}),$=s.found&&r.found?Rr("generateAbstractMask",B)||{children:[],attributes:{}}:Rr("generateAbstractIcon",B)||{children:[],attributes:{}},K=$.children,ue=$.attributes;return B.children=K,B.attributes=ue,b?L3(B):z3(B)}function U_(t){var i=t.content,r=t.width,s=t.height,u=t.transform,m=t.extra,g=t.watchable,b=g===void 0?!1:g,y=de(de({},m.attributes),{},{class:m.classes.join(" ")});b&&(y[Po]="");var _=de({},m.styles);C0(u)&&(_.transform=l3({transform:u,width:r,height:s}),_["-webkit-transform"]=_.transform);var C=Uf(_);C.length>0&&(y.style=C);var T=[];return T.push({tag:"span",attributes:y,children:[i]}),T}function P3(t){var i=t.content,r=t.extra,s=de(de({},r.attributes),{},{class:r.classes.join(" ")}),u=Uf(r.styles);u.length>0&&(s.style=u);var m=[];return m.push({tag:"span",attributes:s,children:[i]}),m}var gp=mi.styles;function kg(t){var i=t[0],r=t[1],s=t.slice(4),u=Bf(s,1),m=u[0],g=null;return Array.isArray(m)?g={tag:"g",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(hp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(hp.SECONDARY),fill:"currentColor",d:m[0]}},{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(hp.PRIMARY),fill:"currentColor",d:m[1]}}]}:g={tag:"path",attributes:{fill:"currentColor",d:m}},{found:!0,width:i,height:r,icon:g}}var M3={found:!1,width:512,height:512};function I3(t,i){!LS&&!Ee.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(i,'" is missing.'))}function Og(t,i){var r=i;return i==="fa"&&Ee.styleDefault!==null&&(i=Lr()),new Promise(function(s,u){if(r==="fa"){var m=YS(t)||{};t=m.iconName||t,i=m.prefix||i}if(t&&i&&gp[i]&&gp[i][t]){var g=gp[i][t];return s(kg(g))}I3(t,i),s(de(de({},M3),{},{icon:Ee.showMissingIcons&&t?Rr("missingIconAbstract")||{}:{}}))})}var F_=function(){},jg=Ee.measurePerformance&&Md&&Md.mark&&Md.measure?Md:{mark:F_,measure:F_},_c='FA "7.3.1"',N3=function(i){return jg.mark("".concat(_c," ").concat(i," begins")),function(){return XS(i)}},XS=function(i){jg.mark("".concat(_c," ").concat(i," ends")),jg.measure("".concat(_c," ").concat(i),"".concat(_c," ").concat(i," begins"),"".concat(_c," ").concat(i," ends"))},j0={begin:N3,end:XS},Qd=function(){};function H_(t){var i=t.getAttribute?t.getAttribute(Po):null;return typeof i=="string"}function D3(t){var i=t.getAttribute?t.getAttribute(w0):null,r=t.getAttribute?t.getAttribute(S0):null;return i&&r}function B3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ee.replacementClass)}function U3(){if(Ee.autoReplaceSvg===!0)return ef.replace;var t=ef[Ee.autoReplaceSvg];return t||ef.replace}function F3(t){return gt.createElementNS("http://www.w3.org/2000/svg",t)}function H3(t){return gt.createElement(t)}function JS(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.ceFn,s=r===void 0?t.tag==="svg"?F3:H3:r;if(typeof t=="string")return gt.createTextNode(t);var u=s(t.tag);Object.keys(t.attributes||[]).forEach(function(g){u.setAttribute(g,t.attributes[g])});var m=t.children||[];return m.forEach(function(g){u.appendChild(JS(g,{ceFn:s}))}),u}function $3(t){var i=" ".concat(t.outerHTML," ");return i="".concat(i,"Font Awesome fontawesome.com "),i}var ef={replace:function(i){var r=i[0];if(r.parentNode)if(i[1].forEach(function(u){r.parentNode.insertBefore(JS(u),r)}),r.getAttribute(Po)===null&&Ee.keepOriginalSource){var s=gt.createComment($3(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(i){var r=i[0],s=i[1];if(~E0(r).indexOf(Ee.replacementClass))return ef.replace(i);var u=new RegExp("".concat(Ee.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var m=s[0].attributes.class.split(" ").reduce(function(b,y){return y===Ee.replacementClass||y.match(u)?b.toSvg.push(y):b.toNode.push(y),b},{toNode:[],toSvg:[]});s[0].attributes.class=m.toSvg.join(" "),m.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",m.toNode.join(" "))}var g=s.map(function(b){return Kc(b)}).join(`
`);r.setAttribute(Po,""),r.innerHTML=g}};function $_(t){t()}function QS(t,i){var r=typeof i=="function"?i:Qd;if(t.length===0)r();else{var s=$_;Ee.mutateApproach===q5&&(s=zr.requestAnimationFrame||$_),s(function(){var u=U3(),m=j0.begin("mutate");t.map(u),m(),r()})}}var z0=!1;function eT(){z0=!0}function zg(){z0=!1}var hf=null;function V_(t){if(k_&&Ee.observeMutations){var i=t.treeCallback,r=i===void 0?Qd:i,s=t.nodeCallback,u=s===void 0?Qd:s,m=t.pseudoElementsCallback,g=m===void 0?Qd:m,b=t.observeMutationsRoot,y=b===void 0?gt:b;hf=new k_(function(_){if(!z0){var C=Lr();el(_).forEach(function(T){if(T.type==="childList"&&T.addedNodes.length>0&&!H_(T.addedNodes[0])&&(Ee.searchPseudoElements&&g(T.target),r(T.target)),T.type==="attributes"&&T.target.parentNode&&Ee.searchPseudoElements&&g([T.target],!0),T.type==="attributes"&&H_(T.target)&&~J5.indexOf(T.attributeName))if(T.attributeName==="class"&&D3(T.target)){var O=Hf(E0(T.target)),I=O.prefix,z=O.iconName;T.target.setAttribute(w0,I||C),z&&T.target.setAttribute(S0,z)}else B3(T.target)&&u(T.target)})}}),za&&hf.observe(y,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function V3(){hf&&hf.disconnect()}function Z3(t){var i=t.getAttribute("style"),r=[];return i&&(r=i.split(";").reduce(function(s,u){var m=u.split(":"),g=m[0],b=m.slice(1);return g&&b.length>0&&(s[g]=b.join(":").trim()),s},{})),r}function q3(t){var i=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"",u=Hf(E0(t));return u.prefix||(u.prefix=Lr()),i&&r&&(u.prefix=i,u.iconName=r),u.iconName&&u.prefix||(u.prefix&&s.length>0&&(u.iconName=g3(u.prefix,t.innerText)||k0(u.prefix,US(t.innerText))),!u.iconName&&Ee.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=t.firstChild.data)),u}function G3(t){var i=el(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{});return i}function Y3(){return{iconName:null,prefix:null,transform:Bi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z_(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=q3(t),s=r.iconName,u=r.prefix,m=r.rest,g=G3(t),b=Cg("parseNodeAttributes",{},t),y=i.styleParser?Z3(t):[];return de({iconName:s,prefix:u,transform:Bi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:m,styles:y,attributes:g}},b)}var W3=mi.styles;function tT(t){var i=Ee.autoReplaceSvg==="nest"?Z_(t,{styleParser:!1}):Z_(t);return~i.extra.classes.indexOf(PS)?Rr("generateLayersText",t,i):Rr("generateSvgReplacementMutation",t,i)}function K3(){return[].concat(yi(CS),yi(AS))}function q_(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!za)return Promise.resolve();var r=gt.documentElement.classList,s=function(T){return r.add("".concat(z_,"-").concat(T))},u=function(T){return r.remove("".concat(z_,"-").concat(T))},m=Ee.autoFetchSvg?K3():nS.concat(Object.keys(W3));m.includes("fa")||m.push("fa");var g=[".".concat(PS,":not([").concat(Po,"])")].concat(m.map(function(C){return".".concat(C,":not([").concat(Po,"])")})).join(", ");if(g.length===0)return Promise.resolve();var b=[];try{b=el(t.querySelectorAll(g))}catch{}if(b.length>0)s("pending"),u("complete");else return Promise.resolve();var y=j0.begin("onTree"),_=b.reduce(function(C,T){try{var O=tT(T);O&&C.push(O)}catch(I){LS||I.name==="MissingIcon"&&console.error(I)}return C},[]);return new Promise(function(C,T){Promise.all(_).then(function(O){QS(O,function(){s("active"),s("complete"),u("pending"),typeof i=="function"&&i(),y(),C()})}).catch(function(O){y(),T(O)})})}function X3(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tT(t).then(function(r){r&&QS([r],i)})}function J3(t){return function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(i||{}).icon?i:Ag(i||{}),u=r.mask;return u&&(u=(u||{}).icon?u:Ag(u||{})),t(s,de(de({},r),{},{mask:u}))}}var Q3=function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,u=s===void 0?Bi:s,m=r.symbol,g=m===void 0?!1:m,b=r.mask,y=b===void 0?null:b,_=r.maskId,C=_===void 0?null:_,T=r.classes,O=T===void 0?[]:T,I=r.attributes,z=I===void 0?{}:I,P=r.styles,U=P===void 0?{}:P;if(i){var B=i.prefix,$=i.iconName,K=i.icon;return $f(de({type:"icon"},i),function(){return Mo("beforeDOMElementCreation",{iconDefinition:i,params:r}),O0({icons:{main:kg(K),mask:y?kg(y.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:$,transform:de(de({},Bi),u),symbol:g,maskId:C,extra:{attributes:z,styles:U,classes:O}})})}},eR={mixout:function(){return{icon:J3(Q3)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=q_,r.nodeCallback=X3,r}}},provides:function(i){i.i2svg=function(r){var s=r.node,u=s===void 0?gt:s,m=r.callback,g=m===void 0?function(){}:m;return q_(u,g)},i.generateSvgReplacementMutation=function(r,s){var u=s.iconName,m=s.prefix,g=s.transform,b=s.symbol,y=s.mask,_=s.maskId,C=s.extra;return new Promise(function(T,O){Promise.all([Og(u,m),y.iconName?Og(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var z=Bf(I,2),P=z[0],U=z[1];T([r,O0({icons:{main:P,mask:U},prefix:m,iconName:u,transform:g,symbol:b,maskId:_,extra:C,watchable:!0})])}).catch(O)})},i.generateAbstractIcon=function(r){var s=r.children,u=r.attributes,m=r.main,g=r.transform,b=r.styles,y=Uf(b);y.length>0&&(u.style=y);var _;return C0(g)&&(_=Rr("generateAbstractTransformGrouping",{main:m,transform:g,containerWidth:m.width,iconWidth:m.width})),s.push(_||m.icon),{children:s,attributes:u}}}},tR={mixout:function(){return{layer:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=s.classes,m=u===void 0?[]:u;return $f({type:"layer"},function(){Mo("beforeDOMElementCreation",{assembler:r,params:s});var g=[];return r(function(b){Array.isArray(b)?b.map(function(y){g=g.concat(y.abstract)}):g=g.concat(b.abstract)}),[{tag:"span",attributes:{class:["".concat(Ee.cssPrefix,"-layers")].concat(yi(m)).join(" ")},children:g}]})}}}},nR={mixout:function(){return{counter:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var u=s.classes,m=u===void 0?[]:u,g=s.attributes,b=g===void 0?{}:g,y=s.styles,_=y===void 0?{}:y;return $f({type:"counter",content:r},function(){return Mo("beforeDOMElementCreation",{content:r,params:s}),P3({content:r.toString(),extra:{attributes:b,styles:_,classes:["".concat(Ee.cssPrefix,"-layers-counter")].concat(yi(m))}})})}}}},iR={mixout:function(){return{text:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=s.transform,m=u===void 0?Bi:u,g=s.classes,b=g===void 0?[]:g,y=s.attributes,_=y===void 0?{}:y,C=s.styles,T=C===void 0?{}:C;return $f({type:"text",content:r},function(){return Mo("beforeDOMElementCreation",{content:r,params:s}),U_({content:r,transform:de(de({},Bi),m),extra:{attributes:_,styles:T,classes:["".concat(Ee.cssPrefix,"-layers-text")].concat(yi(b))}})})}}},provides:function(i){i.generateLayersText=function(r,s){var u=s.transform,m=s.extra,g=null,b=null;if(eS){var y=parseInt(getComputedStyle(r).fontSize,10),_=r.getBoundingClientRect();g=_.width/y,b=_.height/y}return Promise.resolve([r,U_({content:r.innerHTML,width:g,height:b,transform:u,extra:m,watchable:!0})])}}},nT=new RegExp('"',"ug"),G_=[1105920,1112319],Y_=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),AL),V5),IL),Lg=Object.keys(Y_).reduce(function(t,i){return t[i.toLowerCase()]=Y_[i],t},{}),aR=Object.keys(Lg).reduce(function(t,i){var r=Lg[i];return t[i]=r[900]||yi(Object.entries(r))[0][1],t},{});function rR(t){var i=t.replace(nT,"");return US(yi(i)[0]||"")}function oR(t){var i=t.getPropertyValue("font-feature-settings").includes("ss01"),r=t.getPropertyValue("content"),s=r.replace(nT,""),u=s.codePointAt(0),m=u>=G_[0]&&u<=G_[1],g=s.length===2?s[0]===s[1]:!1;return m||g||i}function sR(t,i){var r=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(i),u=isNaN(s)?"normal":s;return(Lg[r]||{})[u]||aR[r]}function W_(t,i){var r="".concat(Z5).concat(i.replace(":","-"));return new Promise(function(s,u){if(t.getAttribute(r)!==null)return s();var m=el(t.children),g=m.filter(function(se){return se.getAttribute(xg)===i})[0],b=zr.getComputedStyle(t,i),y=b.getPropertyValue("font-family"),_=y.match(K5),C=b.getPropertyValue("font-weight"),T=b.getPropertyValue("content");if(g&&!_)return t.removeChild(g),s();if(_&&T!=="none"&&T!==""){var O=b.getPropertyValue("content"),I=sR(y,C),z=rR(O),P=_[0].startsWith("FontAwesome"),U=oR(b),B=k0(I,z),$=B;if(P){var K=v3(z);K.iconName&&K.prefix&&(B=K.iconName,I=K.prefix)}if(B&&!U&&(!g||g.getAttribute(w0)!==I||g.getAttribute(S0)!==$)){t.setAttribute(r,$),g&&t.removeChild(g);var ue=Y3(),J=ue.extra;J.attributes[xg]=i,Og(B,I).then(function(se){var Q=O0(de(de({},ue),{},{icons:{main:se,mask:WS()},prefix:I,iconName:$,extra:J,watchable:!0})),he=gt.createElementNS("http://www.w3.org/2000/svg","svg");i==="::before"?t.insertBefore(he,t.firstChild):t.appendChild(he),he.outerHTML=Q.map(function(Ce){return Kc(Ce)}).join(`
`),t.removeAttribute(r),s()}).catch(u)}else s()}else s()})}function lR(t){return Promise.all([W_(t,"::before"),W_(t,"::after")])}function cR(t){return t.parentNode!==document.head&&!~G5.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var uR=function(i){return!!i&&zS.some(function(r){return i.includes(r)})},dR=function(i){if(!i)return[];var r=new Set,s=i.split(/,(?![^()]*\))/).map(function(y){return y.trim()});s=s.flatMap(function(y){return y.includes("(")?y:y.split(",").map(function(_){return _.trim()})});var u=Jd(s),m;try{for(u.s();!(m=u.n()).done;){var g=m.value;if(uR(g)){var b=zS.reduce(function(y,_){return y.replace(_,"")},g);b!==""&&b!=="*"&&r.add(b)}}}catch(y){u.e(y)}finally{u.f()}return r};function K_(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(za){var r;if(i)r=t;else if(Ee.searchPseudoElementsFullScan)r=t.querySelectorAll("*");else{var s=new Set,u=Jd(document.styleSheets),m;try{for(u.s();!(m=u.n()).done;){var g=m.value;try{var b=Jd(g.cssRules),y;try{for(b.s();!(y=b.n()).done;){var _=y.value,C=dR(_.selectorText),T=Jd(C),O;try{for(T.s();!(O=T.n()).done;){var I=O.value;s.add(I)}}catch(P){T.e(P)}finally{T.f()}}}catch(P){b.e(P)}finally{b.f()}}catch(P){Ee.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(g.href," (").concat(P.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(P){u.e(P)}finally{u.f()}if(!s.size)return;var z=Array.from(s).join(", ");try{r=t.querySelectorAll(z)}catch{}}return new Promise(function(P,U){var B=el(r).filter(cR).map(lR),$=j0.begin("searchPseudoElements");eT(),Promise.all(B).then(function(){$(),zg(),P()}).catch(function(){$(),zg(),U()})})}}var fR={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=K_,r}}},provides:function(i){i.pseudoElements2svg=function(r){var s=r.node,u=s===void 0?gt:s;Ee.searchPseudoElements&&K_(u)}}},X_=!1,hR={mixout:function(){return{dom:{unwatch:function(){eT(),X_=!0}}}},hooks:function(){return{bootstrap:function(){V_(Cg("mutationObserverCallbacks",{}))},noAuto:function(){V3()},watch:function(r){var s=r.observeMutationsRoot;X_?zg():V_(Cg("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},J_=function(i){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce(function(s,u){var m=u.toLowerCase().split("-"),g=m[0],b=m.slice(1).join("-");if(g&&b==="h")return s.flipX=!0,s;if(g&&b==="v")return s.flipY=!0,s;if(b=parseFloat(b),isNaN(b))return s;switch(g){case"grow":s.size=s.size+b;break;case"shrink":s.size=s.size-b;break;case"left":s.x=s.x-b;break;case"right":s.x=s.x+b;break;case"up":s.y=s.y-b;break;case"down":s.y=s.y+b;break;case"rotate":s.rotate=s.rotate+b;break}return s},r)},mR={mixout:function(){return{parse:{transform:function(r){return J_(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-transform");return u&&(r.transform=J_(u)),r}}},provides:function(i){i.generateAbstractTransformGrouping=function(r){var s=r.main,u=r.transform,m=r.containerWidth,g=r.iconWidth,b={transform:"translate(".concat(m/2," 256)")},y="translate(".concat(u.x*32,", ").concat(u.y*32,") "),_="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),C="rotate(".concat(u.rotate," 0 0)"),T={transform:"".concat(y," ").concat(_," ").concat(C)},O={transform:"translate(".concat(g/2*-1," -256)")},I={outer:b,inner:T,path:O};return{tag:"g",attributes:de({},I.outer),children:[{tag:"g",attributes:de({},I.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:de(de({},s.icon.attributes),I.path)}]}]}}}},vp={x:0,y:0,width:"100%",height:"100%"};function Q_(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||i)&&(t.attributes.fill="black"),t}function pR(t){return t.tag==="g"?t.children:[t]}var gR={hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-mask"),m=u?Hf(u.split(" ").map(function(g){return g.trim()})):WS();return m.prefix||(m.prefix=Lr()),r.mask=m,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides:function(i){i.generateAbstractMask=function(r){var s=r.children,u=r.attributes,m=r.main,g=r.mask,b=r.maskId,y=r.transform,_=m.width,C=m.icon,T=g.width,O=g.icon,I=s3({transform:y,containerWidth:T,iconWidth:_}),z={tag:"rect",attributes:de(de({},vp),{},{fill:"white"})},P=C.children?{children:C.children.map(Q_)}:{},U={tag:"g",attributes:de({},I.inner),children:[Q_(de({tag:C.tag,attributes:de(de({},C.attributes),I.path)},P))]},B={tag:"g",attributes:de({},I.outer),children:[U]},$="mask-".concat(b||R_()),K="clip-".concat(b||R_()),ue={tag:"mask",attributes:de(de({},vp),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,B]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:K},children:pR(O)},ue]};return s.push(J,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(K,")"),mask:"url(#".concat($,")")},vp)}),{children:s,attributes:u}}}},vR={provides:function(i){var r=!1;zr.matchMedia&&(r=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){var s=[],u={fill:"currentColor"},m={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:de(de({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var g=de(de({},m),{},{attributeName:"opacity"}),b={tag:"circle",attributes:de(de({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||b.children.push({tag:"animate",attributes:de(de({},m),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},g),{},{values:"1;0;1;1;0;1;"})}),s.push(b),s.push({tag:"path",attributes:de(de({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:de(de({},g),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:de(de({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},g),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},yR={hooks:function(){return{parseNodeAttributes:function(r,s){var u=s.getAttribute("data-fa-symbol"),m=u===null?!1:u===""?!0:u;return r.symbol=m,r}}}},bR=[u3,eR,tR,nR,iR,fR,hR,mR,gR,vR,yR];C3(bR,{mixoutsTo:In});In.noAuto;var Vs=In.config;In.library;In.dom;var iT=In.parse;In.findIconDefinition;In.toHtml;var _R=In.icon;In.layer;In.text;In.counter;function xR(t){return t=t-0,t===t}function aT(t){return xR(t)?t:(t=t.replace(/[_-]+(.)?/g,(i,r)=>r?r.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var wR=(t,i)=>Wn.createElement("stop",{key:`${i}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function SR(t){return t.charAt(0).toUpperCase()+t.slice(1)}var As=new Map,TR=1e3;function ER(t){if(As.has(t))return As.get(t);const i={};let r=0;const s=t.length;for(;r<s;){const u=t.indexOf(";",r),m=u===-1?s:u,g=t.slice(r,m).trim();if(g){const b=g.indexOf(":");if(b>0){const y=g.slice(0,b).trim(),_=g.slice(b+1).trim();if(y&&_){const C=aT(y);i[C.startsWith("webkit")?SR(C):C]=_}}}r=m+1}if(As.size===TR){const u=As.keys().next().value;u&&As.delete(u)}return As.set(t,i),i}function rT(t,i,r={}){if(typeof i=="string")return i;const s=(i.children||[]).map(T=>{let O=T;return("fill"in r||r.gradientFill)&&T.tag==="path"&&"fill"in T.attributes&&(O={...T,attributes:{...T.attributes,fill:void 0}}),rT(t,O)}),u=i.attributes||{},m={};for(const[T,O]of Object.entries(u))switch(!0){case T==="class":{m.className=O;break}case T==="style":{m.style=ER(String(O));break}case T.startsWith("aria-"):case T.startsWith("data-"):{m[T.toLowerCase()]=O;break}default:m[aT(T)]=O}const{style:g,role:b,"aria-label":y,gradientFill:_,...C}=r;if(g&&(m.style=m.style?{...m.style,...g}:g),b&&(m.role=b),y&&(m["aria-label"]=y,m["aria-hidden"]="false"),_){m.fill=`url(#${_.id})`;const{type:T,stops:O=[],...I}=_;s.unshift(t(T==="linear"?"linearGradient":"radialGradient",{...I,id:_.id},O.map(wR)))}return t(i.tag,{...m,...C},...s)}var CR=rT.bind(null,Wn.createElement),ex=(t,i)=>{const r=k.useId();return t||(i?r:void 0)},AR=class{constructor(i="react-fontawesome"){this.enabled=!1;let r=!1;try{r=typeof process<"u"&&!1}catch{}this.scope=i,this.enabled=r}log(...i){this.enabled&&console.log(`[${this.scope}]`,...i)}warn(...i){this.enabled&&console.warn(`[${this.scope}]`,...i)}error(...i){this.enabled&&console.error(`[${this.scope}]`,...i)}},kR="searchPseudoElementsFullScan"in Vs&&typeof Vs.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",OR=Number.parseInt(kR)>=7,jR=()=>OR,Cc="fa",Zt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},zR={left:"fa-pull-left",right:"fa-pull-right"},LR={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},RR={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},di={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function PR(t){const i=Vs.cssPrefix||Vs.familyPrefix||Cc;return i===Cc?t:t.replace(new RegExp(String.raw`(?<=^|\s)${Cc}-`,"g"),`${i}-`)}function MR(t){const{beat:i,fade:r,beatFade:s,bounce:u,shake:m,spin:g,spinPulse:b,spinReverse:y,pulse:_,fixedWidth:C,inverse:T,border:O,flip:I,size:z,rotation:P,pull:U,swapOpacity:B,rotateBy:$,widthAuto:K,canvasSquare:ue,canvasRoomy:J,flip360:se,buzz:Q,float:he,jello:Ce,spinSnap:Ue,spinSnap4:ve,spinSnap8:ke,swing:ge,wag:ae,className:Oe}=t,D=[];return Oe&&D.push(...Oe.split(" ")),i&&D.push(Zt.beat),r&&D.push(Zt.fade),s&&D.push(Zt.beatFade),u&&D.push(Zt.bounce),m&&D.push(Zt.shake),g&&D.push(Zt.spin),y&&D.push(Zt.spinReverse),b&&D.push(Zt.spinPulse),_&&D.push(Zt.pulse),C&&D.push(di.fixedWidth),T&&D.push(di.inverse),O&&D.push(di.border),I===!0&&D.push(di.flip),(I==="horizontal"||I==="both")&&D.push(di.flipHorizontal),(I==="vertical"||I==="both")&&D.push(di.flipVertical),z!=null&&D.push(RR[z]),P!=null&&P!==0&&D.push(LR[P]),U!=null&&D.push(zR[U]),B&&D.push(di.swapOpacity),jR()?($&&D.push(di.rotateBy),K&&D.push(di.widthAuto),ue&&D.push(di.canvasSquare),J&&D.push(di.canvasRoomy),se&&D.push(Zt.flip360),Q&&D.push(Zt.buzz),he&&D.push(Zt.float),Ce&&D.push(Zt.jello),Ue&&D.push(Zt.spinSnap),ve&&D.push(Zt.spinSnap4),ke&&D.push(Zt.spinSnap8),ge&&D.push(Zt.swing),ae&&D.push(Zt.wag),(Vs.cssPrefix||Vs.familyPrefix||Cc)===Cc?D:D.map(PR)):D}var IR=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function tx(t){if(t)return IR(t)?t:iT.icon(t)}function NR(t){return Object.keys(t)}var nx=new AR("FontAwesomeIcon"),oT={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},DR=new Set(Object.keys(oT)),Kn=Wn.forwardRef((t,i)=>{const r={...oT,...t},{icon:s,mask:u,symbol:m,title:g,titleId:b,maskId:y,transform:_}=r,C=ex(y,!!u),T=ex(b,!!g),O=tx(s);if(!O)return nx.error("Icon lookup is undefined",s),null;const I=MR(r),z=typeof _=="string"?iT.transform(_):_,P=tx(u),U=_R(O,{...I.length>0&&{classes:I},...z&&{transform:z},...P&&{mask:P},symbol:m,title:g,titleId:T,maskId:C});if(!U)return nx.error("Could not find icon",O),null;const{abstract:B}=U,$={ref:i};for(const K of NR(r))DR.has(K)||($[K]=r[K]);return CR(B[0],$)});Kn.displayName="FontAwesomeIcon";const BR=w.div`
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
`,UR=w(Kn)`
    height: 2.3vh;
    color: #7A77B0;
`,FR=w.input`
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
`,HR=w.div`
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
`,sT=w(Kn)`
    height: 2.3vh;
    color: #7A77B0;
`,$R=w(sT)`
    cursor: pointer;
    flex-shrink: 0;
`,VR=w.input`
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
`;function ZR({loginRole:t,onAdminCheckChange:i,onIdChange:r,onPasswordChange:s}){const{language:u}=Pe(),[m,g]=k.useState(!1),[b,y]=k.useState([!1,!1]),_="outstandingadmin",C="forbettersunyforbetterlife",T=I=>{const z=I.target.value;r(z);const U=[t==="store"&&z===_,b[1]];y(U),i(U)},O=I=>{const z=I.target.value;s(z);const P=t==="store"&&z===C,U=[b[0],P];y(U),i(U)};return h.jsxs(h.Fragment,{children:[h.jsxs(BR,{children:[h.jsx(UR,{icon:Tn.fad.user}),h.jsx(FR,{type:"text",placeholder:u==="eng"?"Enter your ID":"ID를 입력해주세요",onChange:T})]}),h.jsxs(HR,{children:[h.jsx(sT,{icon:Tn.fas.lock}),h.jsx(VR,{type:m?"text":"password",placeholder:u==="eng"?"Enter your password":"비밀번호를 입력해주세요",onChange:O}),h.jsx($R,{icon:Tn.far.eye,onClick:()=>g(I=>!I)})]})]})}const qR=w.button`
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
`;function GR({onClick:t}){const{language:i}=Pe();return h.jsx(qR,{type:"button",onClick:t,children:i==="eng"?"Login":"로그인"})}const YR=w.button`
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
`;function WR({onClick:t}){const{language:i}=Pe();return h.jsx(YR,{type:"button",onClick:t,children:i==="eng"?"Sign Up":"회원가입"})}const Ir="http://localhost:8080";async function KR(t,i){const r=await fetch(`${Ir}/owners`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(t)}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}class Nc extends Error{status;constructor(i){super(i),this.status=i}}async function lT(t,i){const r=await fetch(`${Ir}/owners/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,password:i})}),s=await r.json().catch(()=>({}));if(r.status===403&&(s.status==="pending"||s.status==="rejected"))throw new Nc(s.status);if(!r.ok)throw new Nc("invalid");return s}async function ix(){return Ui(`${Ir}/owners`)}function cT(t){return/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(t)}async function Vf(t,i){const r=await fetch(t,i),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}async function XR(t,i){return Vf(`${Ir}/owners/${t}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})})}async function JR(t,i){return Vf(`${Ir}/owners/${t}/phone`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({})})}async function QR(t,i,r){const s=await Vf(`${Ir}/owners/${t}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:i,newPassword:r})});if(!s.ok)throw new Error(typeof s.error=="string"?s.error:"비밀번호 변경에 실패했습니다.");return s}async function eP(t){return Vf(`${Ir}/owners/${t}`,{method:"DELETE"})}async function tP(t,i){return Ui(`${Ir}/owners/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:i})})}const nP=w.div`
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
`,iP=w.img`
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
`,aP=w.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E2A63;
    margin: 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`,rP=w.div`
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
`,oP=w.p`
    font-size: 0.8rem;
    color: #2E2A63;
    margin: 0;
    padding: 0 1rem;
    text-align: center;
`,sP=w.div`
    width: 100%;
    height: 0.1rem;
    border-top: 0.5px solid black;
`;function ax({who:t,onlyForWho:i,loginRole:r}){const{loginAdmin:s}=Gc(),{loginOwner:u}=Mr(),{loginStudent:m}=bi(),{language:g}=Pe(),b=Qt(),[y,_]=k.useState([!1,!1]),[C,T]=k.useState(""),[O,I]=k.useState(""),z=async()=>{if(r==="student"){if(!C.trim()||!O){alert(g==="eng"?"Please enter your ID and password.":"아이디와 비밀번호를 입력해주세요.");return}try{const P=await F1(C.trim(),O);m(P),b("/student")}catch(P){const U=P instanceof Error?P.message:"";if(U==="HTTP 404"||U.includes("Cannot POST")){alert(g==="eng"?"The login API is missing. Restart the API server in the server folder.":"로그인 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.");return}if(U==="Failed to fetch"||U.includes("NetworkError")||U.includes("fetch")){alert(g==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.");return}alert(g==="eng"?"ID or password is incorrect.":"아이디 또는 비밀번호가 올바르지 않습니다.")}return}if(r==="store"){if(y[0]&&y[1]){s(),b("/admin");return}if(!C.trim()||!O){alert(g==="eng"?"Please enter your ID and password.":"아이디와 비밀번호를 입력해주세요.");return}try{const P=await lT(C.trim(),O);u(P),b("/owner")}catch(P){if(P instanceof Nc&&P.status==="pending"){alert(g==="eng"?"Please wait for admin approval.":"관리자의 승인을 기다려주세요.");return}if(P instanceof Nc&&P.status==="rejected"){alert(g==="eng"?"Your registration was rejected by the admin.":"관리자로부터 승인이 거절되었습니다.");return}alert(g==="eng"?"ID or password is incorrect.":"아이디 또는 비밀번호가 올바르지 않습니다.")}}};return h.jsxs(nP,{children:[h.jsx(iP,{src:"/coloredMyPageIcon.png",alt:"coloredMyPageIcon"}),h.jsxs(aP,{children:[" ",t," "]}),h.jsxs(rP,{children:[h.jsx(ZR,{loginRole:r,onAdminCheckChange:_,onIdChange:T,onPasswordChange:I}),h.jsx(GR,{onClick:()=>{z()}}),h.jsx(sP,{}),h.jsx(WR,{onClick:()=>b(r==="student"?"/signup/student":"/signup/store")})]}),h.jsxs(oP,{children:[" ",i," "]})]})}const lP=w.div`
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(#DBD8F7 0%, white 30%, white 70%, #DBD8F7 100%);
`,cP=w.div`
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
`,uP=w.img`
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
`,dP=w.div`
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
`,fP=w.div`
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
`,rx=w.button`
    position: relative;
    z-index: 1;
    border: none;
    background: transparent;
    color: ${({$active:t})=>t?"#2E2A63":"#8a84a0"};
    font-weight: ${({$active:t})=>t?700:500};
    padding: 0.55rem 0.4rem;
    font-size: 0.88rem;
    cursor: pointer;
`,ox=w.div`
    display: contents;

    @media (max-width: 1024px) {
        display: ${({$showOnNarrow:t})=>t?"flex":"none"};
        width: 100%;
        max-width: 22rem;
        justify-content: center;
    }
`;function hP(){const{language:t}=Pe(),[i,r]=k.useState("student");return h.jsx(lP,{children:h.jsxs(cP,{children:[h.jsxs(dP,{children:[h.jsx(fP,{$role:i}),h.jsx(rx,{type:"button",$active:i==="student",onClick:()=>r("student"),children:t==="eng"?"Student":"학생"}),h.jsx(rx,{type:"button",$active:i==="store",onClick:()=>r("store"),children:t==="eng"?"Owner":"사장님"})]}),h.jsx(ox,{$showOnNarrow:i==="student",children:h.jsx(ax,{who:t==="eng"?"Student Login":"학생 로그인",onlyForWho:t==="eng"?"Only for SUNY Korea students":"한국뉴욕주립대학교 학생만 가능합니다.",loginRole:"student"})}),h.jsx(uP,{src:"/loginBackgroundImage.png",alt:"loginBackgroundImage"}),h.jsx(ox,{$showOnNarrow:i==="store",children:h.jsx(ax,{who:t==="eng"?"Owner Login":"사장님 로그인",onlyForWho:t==="eng"?"Only for pre-contracted stores":"사전에 계약된 매장 직원만 가능합니다.",loginRole:"store"})})]})})}const mP=w.div`
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
`,pP=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        display: contents;
    }
`,gP=w.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,sx=w(wa)`
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
`,lx=w.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,vP=w.img`
    width: 0.9rem;
    height: 0.9rem;
`,yP=w.img`
    width: 1rem;
    height: 1rem;
`,bP=w.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        display: contents;
    }
`,_P=w.button`
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
`;function xP(){const{pathname:t}=rn(),i=Qt(),{language:r}=Pe(),{logoutAdmin:s}=Gc(),u=t==="/admin"||t==="/admin/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",g=t==="/admin/owners"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(mP,{children:[h.jsxs(pP,{children:[h.jsx(gP,{children:" 관리 "}),h.jsxs(sx,{to:"/admin/",$selected:u,children:[" ",h.jsxs(lx,{children:[" ",h.jsx(vP,{src:m,alt:"store icon"})," "]})," ",r==="eng"?"Stores Management":"매장 관리"," "]}),h.jsxs(sx,{to:"/admin/owners",$selected:t==="/admin/owners",children:[" ",h.jsxs(lx,{children:[" ",h.jsx(yP,{src:g,alt:"owner icon"})," "]})," ",r==="eng"?"Owners Management":"사장님 관리"," "]})]}),h.jsx(bP,{children:h.jsx(_P,{onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const wP=w.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,SP=w.div`
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
`;function TP(){return h.jsxs(wP,{children:[h.jsx(xP,{}),h.jsx(SP,{children:h.jsx(r0,{})})]})}const EP=w.div`
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
`,CP=w.div`
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
`,AP=w.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,yp=w(wa)`
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
`,bp=w.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,kP=w.img`
    width: 0.9rem;
    height: 0.9rem;
`,cx=w.img`
    width: 1rem;
    height: 1rem;
`,OP=w.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,jP=w.button`
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
`;function zP(){const{pathname:t}=rn(),i=Qt(),{language:r}=Pe(),{logoutOwner:s}=Mr(),u=t==="/owner"||t==="/owner/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",g=t==="/owner/edit"?"/fileIcon.png":"/blackFileIcon.png",b=t==="/owner/account"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(EP,{children:[h.jsxs(CP,{children:[h.jsx(AP,{children:" 관리 "}),h.jsxs(yp,{to:"/owner",$selected:u,children:[h.jsxs(bp,{children:[" ",h.jsx(kP,{src:m,alt:"store icon"})," "]}),r==="eng"?"Store Information":"매장 정보 조회"]}),h.jsxs(yp,{to:"/owner/edit",$selected:t==="/owner/edit",children:[h.jsxs(bp,{children:[" ",h.jsx(cx,{src:g,alt:"edit icon"})," "]}),r==="eng"?"Edit Store Information":"매장 정보 수정"]}),h.jsxs(yp,{to:"/owner/account",$selected:t==="/owner/account",children:[h.jsxs(bp,{children:[" ",h.jsx(cx,{src:b,alt:"account icon"})," "]}),r==="eng"?"Account Management":"계정 관리"]})]}),h.jsx(OP,{children:h.jsx(jP,{type:"button",onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const LP=w.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,RP=w.div`
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
`;function PP(){return h.jsxs(LP,{children:[h.jsx(zP,{}),h.jsx(RP,{children:h.jsx(r0,{})})]})}const MP=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,IP=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,NP=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,DP=w.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function ux(){const{language:t}=Pe();return h.jsx(MP,{children:h.jsxs(IP,{children:[h.jsxs(NP,{children:[" ",t==="eng"?"Store Information":"매장 정보 조회"," "]}),h.jsxs(DP,{children:[" ",t==="eng"?"You can check the store information currently shown to students.":"현재 학생들에게 보여지는 매장 정보를 확인할 수 있습니다."," "]})]})})}const dx=w.div`
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
`,BP=w.p`
    font-size: 0.9rem;
    color: #9a94b0;
    margin: 0;
`,UP=w.div`
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
`,FP=w.img`
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
`,HP=w.div`
    flex: 1;
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    text-align: left;
`,Bd=w.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: ${({$tight:t})=>t?"0.25rem":"0.4rem"};
`,$P=w.p`
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
`,VP=w.span`
    display: block;
    line-height: 1;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,ZP=w.span`
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
`,qP=w.p`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,GP=w.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,YP=w.span`
    color: #8F8F8F;
    font-size: 0.9rem;
    line-height: 1;
`,WP=w.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,KP=w.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;

    &::before {
        content: '|';
        margin-right: 0.38rem;
        margin-left: 0.08rem;
    }
`,XP=w.div`
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
`,JP=`
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
`,Rg=w.div`
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
`,_p=w.div`
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
    ${JP}
`,fx=w.p`
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0;
`,QP=w(Rg)`
    gap: 1.15rem;
    padding: 1.15rem 1.2rem;
`,hx=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.3rem;
    text-align: left;
`,mx=w.p`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0.3rem 0;
    padding: 0;
    text-align: left;
`,px=w.div`
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
    text-align: left;
`,Pg=w.p`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.85rem;
    color: gray;
    margin: 0;
    padding: 0;
    text-align: left;
`,eM=w(Pg)`
    font-size: 0.6rem;
    color: black;
`,gx=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,pa=w.div`
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
`,ga=w.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,xr=w.p`
    font-size: 0.85rem;
    color: #2E2A63;
    margin: 0;
    min-width: 0;
    text-align: right;
    word-break: break-word;
`,tM=w.a`
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
`;function nM(){const{language:t}=Pe(),{owner:i}=Mr(),{stores:r}=Fi(),s=r.find(u=>u._id===i?.storeId);return s?h.jsxs(dx,{children:[h.jsx(ux,{}),h.jsxs(UP,{children:[h.jsx(FP,{src:Ea(s.photo),alt:t==="eng"?s.name.eng:s.name.kor}),h.jsxs(HP,{children:[h.jsx(Bd,{children:h.jsxs($P,{children:[h.jsx(VP,{children:t==="eng"?s.name.eng:s.name.kor}),h.jsx(ZP,{children:h.jsx(B1,{storeNaverMap:s.naverMap})})]})}),h.jsx(Bd,{children:h.jsxs(qP,{children:[" ",t==="eng"?s.branch.eng:s.branch.kor," "]})}),h.jsxs(Bd,{$tight:!0,children:[h.jsxs(GP,{children:[" ",t==="eng"?s.category.eng:s.category.kor," "]}),h.jsx(YP,{children:"·"}),h.jsxs(WP,{children:[" ",t==="eng"?s.theme.eng:s.theme.kor," "]})]}),h.jsxs(Bd,{children:[h.jsx(U1,{openTime:s.openTime,closeTime:s.closeTime,language:t}),h.jsxs(KP,{children:[" ",s.openTime," - ",s.closeTime," "]})]})]})]}),h.jsxs(XP,{children:[h.jsx(QP,{children:h.jsxs(_p,{children:[h.jsxs(hx,{children:[h.jsxs(mx,{children:["🎓 ",t==="eng"?"SUNY Benefit":"SUNY 혜택"]}),h.jsxs(px,{children:[h.jsx(Pg,{children:t==="eng"?s.discount.eng:s.discount.kor}),h.jsx(eM,{children:t==="eng"?"*You must bring your SUNY student ID card to receive the discount.":"할인을 받기 위해서는 학생증을 필수 지참해야합니다."})]})]}),h.jsxs(hx,{children:[h.jsxs(mx,{children:["✅ ",t==="eng"?"Additional precautions":"추가 유의사항"]}),h.jsx(px,{children:h.jsx(Pg,{children:t==="eng"?s.description.eng:s.description.kor})})]})]})}),h.jsxs(Rg,{children:[h.jsxs(fx,{children:[" ℹ️ ",t==="eng"?"Store details":"매장 정보"," "]}),h.jsx(_p,{children:h.jsxs(gx,{children:[h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Store name (KOR/ENG)":"매장명 (한/영)"}),h.jsx(xr,{children:`${s.name.kor} / ${s.name.eng}`})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Category (KOR/ENG)":"카테고리 (한/영)"}),h.jsx(xr,{children:`${s.category.kor} / ${s.category.eng}`})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Theme (KOR/ENG)":"테마 (한/영)"}),h.jsx(xr,{children:`${s.theme.kor} / ${s.theme.eng}`})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Business hours":"영업 시간"}),h.jsxs(xr,{children:[s.openTime," - ",s.closeTime]})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Naver map":"네이버 지도"}),h.jsxs(tM,{href:s.naverMap,target:"_blank",rel:"noopener noreferrer",children:[t==="eng"?"View on map":"지도에서 보기"," ↗"]})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Branch (KOR/ENG)":"지점명 (한/영)"}),h.jsx(xr,{children:`${s.branch.kor} / ${s.branch.eng}`})]})]})})]}),h.jsxs(Rg,{children:[h.jsxs(fx,{children:[" 📍 ",t==="eng"?"Address":"주소"," "]}),h.jsx(_p,{children:h.jsxs(gx,{children:[h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Address (KOR/ENG)":"주소 (한/영)"}),h.jsx(xr,{children:`${s.address.kor} / ${s.address.eng}`})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Latitude":"위도"}),h.jsx(xr,{children:s.lat})]}),h.jsxs(pa,{children:[h.jsx(ga,{children:t==="eng"?"Longitude":"경도"}),h.jsx(xr,{children:s.lon})]})]})})]})]})]}):h.jsxs(dx,{children:[h.jsx(ux,{}),h.jsx(BP,{children:t==="eng"?"Store information was not found.":"매장 정보를 찾을 수 없습니다."})]})}const iM=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
`,aM=w.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`,rM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,oM=w.input`
    display: none;
`,sM=w.label`
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
`,lM=w.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`,cM=1440,uM=900,dM=.25*cM*.92*.9/(.2*uM),uT=464,fM=Math.round(uT/dM);function hM({onChangePhoto:t,initialPreviewUrl:i}){const{language:r}=Pe(),[s,u]=k.useState(i??null);k.useEffect(()=>{u(i??null)},[i]),k.useEffect(()=>()=>{s?.startsWith("blob:")&&URL.revokeObjectURL(s)},[s]);function m(b){return new Promise((y,_)=>{if(!b){y(null);return}const C=new Image;C.crossOrigin="anonymous";const T=URL.createObjectURL(b);C.src=T,C.onload=()=>{const O=uT,I=fM,z=document.createElement("canvas");z.width=O,z.height=I,z.getContext("2d")?.drawImage(C,0,0,O,I),z.toBlob(U=>{URL.revokeObjectURL(T),y(U)},"image/png")},C.onerror=O=>{URL.revokeObjectURL(T),_(O)}})}async function g(b){const y=await m(b.target.files?.[0]);if(t(y),!y)return;const _=URL.createObjectURL(y);u(C=>(C?.startsWith("blob:")&&URL.revokeObjectURL(C),_))}return h.jsxs(iM,{children:[h.jsx(aM,{children:h.jsxs(rM,{children:[" ",r==="eng"?"Store Photo":"매장 사진"," "]})}),h.jsx(oM,{type:"file",accept:"image/*",id:"imageFileInput",onChange:g}),h.jsx(sM,{htmlFor:"imageFileInput",children:s?h.jsx(lM,{src:s,alt:r==="eng"?"Store preview":"매장 미리보기"}):r==="eng"?"Upload Image":"이미지 업로드"})]})}const mM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,pM=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,gM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,vM=w.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
`,yM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,vx=w.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,yx=w.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,bx=w.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
`;function xp({engTitle:t,korTitle:i,engPlaceholder:r="",korPlaceholder:s="",engLabel:u,korLabel:m,engAutoText:g="",korAutoText:b="",korValue:y,engValue:_,onChangeKor:C,onChangeEng:T}){const{language:O}=Pe(),[I,z]=k.useState(!1),P=O==="eng"?"Ex)":"예)",U=!!(u||m);function B($){const K=$.target.checked;if(z(K),K){C(b),T(g);return}C(""),T("")}return h.jsxs(pM,{children:[h.jsxs(mM,{children:[h.jsxs(gM,{children:[" ",O==="eng"?t:i," "]}),U&&h.jsxs(vM,{children:[h.jsx("input",{type:"checkbox",checked:I,onChange:B}),O==="eng"?u:m]})]}),h.jsxs(yM,{children:[h.jsxs(vx,{children:[h.jsxs(yx,{children:[" ",O==="eng"?"Korean":"한국어"," "]}),h.jsx(bx,{type:"text",value:y,onChange:$=>C($.target.value),placeholder:`${P} ${s}`})]}),h.jsxs(vx,{children:[h.jsxs(yx,{children:[" ",O==="eng"?"English":"영어"," "]}),h.jsx(bx,{type:"text",value:_,onChange:$=>T($.target.value),placeholder:`${P} ${r}`})]})]})]})}const bM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
`,_M=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,xM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,wM=w.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
`,SM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-height: 0;
`,_x=w.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: gray;
    min-height: 0;
`,xx=w.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,wx=w.textarea`
    width: 100%;
    flex: 1;
    min-height: 2.5rem;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;function Sx({engTitle:t,korTitle:i,engPlaceholder:r="",korPlaceholder:s="",engLabel:u,korLabel:m,engAutoText:g="",korAutoText:b="",korValue:y,engValue:_,onChangeKor:C,onChangeEng:T}){const{language:O}=Pe(),[I,z]=k.useState(!1),P=O==="eng"?"Ex)":"예)",U=!!(u||m);function B($){const K=$.target.checked;if(z(K),K){C(b),T(g);return}C(""),T("")}return h.jsxs(_M,{children:[h.jsxs(bM,{children:[h.jsxs(xM,{children:[" ",O==="eng"?t:i," "]}),U&&h.jsxs(wM,{children:[h.jsx("input",{type:"checkbox",checked:I,onChange:B}),O==="eng"?u:m]})]}),h.jsxs(SM,{children:[h.jsxs(_x,{children:[h.jsxs(xx,{children:[" ",O==="eng"?"Korean":"한국어"," "]}),h.jsx(wx,{value:y,onChange:$=>C($.target.value),placeholder:`${P} ${s}`})]}),h.jsxs(_x,{children:[h.jsxs(xx,{children:[" ",O==="eng"?"English":"영어"," "]}),h.jsx(wx,{value:_,onChange:$=>T($.target.value),placeholder:`${P} ${r}`})]})]})]})}const TM=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,EM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,CM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,Tx=w.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,Ex=w.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,Cx=w.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
`;function AM({engTitle:t,korTitle:i,openTime:r,closeTime:s,onChangeOpenTime:u,onChangeCloseTime:m}){const{language:g}=Pe();return h.jsxs(TM,{children:[h.jsxs(EM,{children:[" ",g==="eng"?t:i," "]}),h.jsxs(CM,{children:[h.jsxs(Tx,{children:[h.jsxs(Ex,{children:[" ",g==="eng"?"Open time":"영업 시작 시간"," "]}),h.jsx(Cx,{type:"time",value:r,onChange:b=>u(b.target.value)})]}),h.jsxs(Tx,{children:[h.jsxs(Ex,{children:[" ",g==="eng"?"Close time":"영업 종료 시간"," "]}),h.jsx(Cx,{type:"time",value:s,onChange:b=>m(b.target.value)})]})]})]})}const kM=w.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 0;
`,OM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,jM=w.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,zM=w.select`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.2rem 0;
    font-size: 1rem;
    text-align: center;
    pointer-events: auto;
    color: gray;
`;function LM({selectedCategory:t,onChangeSelectedCategory:i}){const{categories:r}=qc(),{language:s}=Pe();return h.jsxs(kM,{children:[h.jsxs(OM,{children:[" ",s==="eng"?"Store category":"카테고리"," "]}),h.jsx(jM,{children:h.jsxs(zM,{value:t,onChange:u=>i(u.target.value),children:[h.jsxs("option",{value:"",children:[" ",s==="eng"?"Select category":"카테고리 선택"," "]}),r.map(u=>h.jsx("option",{value:u.name.kor,children:s==="eng"?u.name.eng:u.name.kor},u._id))]})})]})}const RM=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`,PM=w.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`,MM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,Ax=w.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`,kx=w.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`,Ox=w.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;function IM({engTitle:t,korTitle:i,latitudePlaceholder:r="",longitudePlaceholder:s="",lat:u,lon:m,onChangeLat:g,onChangeLon:b}){const{language:y}=Pe();return h.jsxs(RM,{children:[h.jsxs(PM,{children:[" ",y==="eng"?t:i," "]}),h.jsxs(MM,{children:[h.jsxs(Ax,{children:[h.jsxs(kx,{children:[" ",y==="eng"?"Latitude":"위도"," "]}),h.jsx(Ox,{type:"number",step:"any",value:u,onChange:_=>g(_.target.value),placeholder:r})]}),h.jsxs(Ax,{children:[h.jsxs(kx,{children:[" ",y==="eng"?"Longitude":"경도"," "]}),h.jsx(Ox,{type:"number",step:"any",value:m,onChange:_=>b(_.target.value),placeholder:s})]})]})]})}async function NM(t){const i=new URL("https://photon.komoot.io/api/");i.searchParams.set("q",t),i.searchParams.set("limit","1"),i.searchParams.set("lat","37.38"),i.searchParams.set("lon","126.66");const r=await Ui(i.toString()),[s,u]=r.features?.[0]?.geometry?.coordinates??[];if(!Number.isFinite(u)||!Number.isFinite(s))throw new Error("주소를 찾을 수 없습니다. Cannot find that address.");return{lat:u,lon:s}}const DM=w.div`
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
`,BM=w.div`
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
`,jx=w.div`
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
`,zx=w.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.45rem;
`,Lx=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex-shrink: 0;
`,Rx=w.p`
    font-weight: bold;
    margin: 0;
    text-align: left;
`,Px=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    gap: 0.5rem;
`,Mx=w.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;
    resize: none;
`,UM=w.button`
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
`,FM=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-shrink: 0;
    margin-top: auto;
    padding-top: 0.5rem;
`,dT=w.button`
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
`,HM=w(dT)``,$M=w(dT)``,VM={categoryKor:"",name:{kor:"",eng:""},branch:{kor:"",eng:""},theme:{kor:"",eng:""},discount:{kor:"",eng:""},description:{kor:"",eng:""},naverMap:"",address:"",openTime:"",closeTime:"",lat:"",lon:""};function Ls(t){return t.trim()!==""}function uc(t){return Ls(t.kor)&&Ls(t.eng)}function ks(t,i){return t.kor===i.kor&&t.eng===i.eng}function ZM(t){return{categoryKor:t.category.kor,name:{kor:t.name.kor,eng:t.name.eng},branch:{kor:t.branch.kor,eng:t.branch.eng},theme:{kor:t.theme?.kor??"",eng:t.theme?.eng??""},discount:{kor:t.discount.kor,eng:t.discount.eng},description:{kor:t.description.kor,eng:t.description.eng},naverMap:t.naverMap,address:t.address?.kor||t.address?.eng||"",openTime:t.openTime,closeTime:t.closeTime,lat:String(t.lat),lon:String(t.lon)}}function qM(t,i,r,s){const u={};s!==void 0&&(u.photo=s),ks(r,t.category)||(u.category=r),ks(i.name,t.name)||(u.name=i.name),ks(i.branch,t.branch)||(u.branch=i.branch),ks(i.theme,{kor:t.theme?.kor??"",eng:t.theme?.eng??""})||(u.theme=i.theme),ks(i.discount,t.discount)||(u.discount=i.discount),ks(i.description,t.description)||(u.description=i.description),i.naverMap.trim()!==(t.naverMap??"")&&(u.naverMap=i.naverMap.trim());const m=i.address.trim(),g=t.address?.kor||t.address?.eng||"";return m!==g&&(u.address={kor:m,eng:m}),i.openTime!==t.openTime&&(u.openTime=i.openTime),i.closeTime!==t.closeTime&&(u.closeTime=i.closeTime),i.lat.trim()!==String(t.lat)&&(u.lat=Number(i.lat)),i.lon.trim()!==String(t.lon)&&(u.lon=Number(i.lon)),u}function Mg({storeIdOverride:t,cancelTo:i="/admin",afterSaveTo:r="/admin"}={}){const s=Qt(),{storeId:u}=NA(),m=t??u,{language:g}=Pe(),{categories:b}=qc(),{stores:y,loadingState:_,addStore:C,updateStore:T}=Fi(),O=y.find(ae=>ae._id===m),I=!!m,z=k.useRef(null),[P,U]=k.useState(!1),[B,$]=k.useState(VM),[K,ue]=k.useState(!1),[J,se]=k.useState(!1);k.useEffect(()=>{if(m&&_===b0){if(!O){s(i);return}$(ZM(O)),U(!!O.photo),z.current=null}},[m,O,_,s,i]);const Q=Number(B.lat),he=Number(B.lon),Ce=!!(P&&b.find(ae=>ae.name.kor===B.categoryKor)&&uc(B.name)&&uc(B.branch)&&uc(B.theme)&&uc(B.discount)&&uc(B.description)&&Ls(B.naverMap)&&Ls(B.address)&&Ls(B.openTime)&&Ls(B.closeTime)&&Number.isFinite(Q)&&Number.isFinite(he));function Ue(ae,Oe){$(D=>({...D,[ae]:Oe}))}function ve(ae,Oe,D){$(le=>({...le,[ae]:{...le[ae],[Oe]:D}}))}async function ke(){const ae=B.address.trim();if(!ae){alert(g==="eng"?"Please enter an address.":"주소를 입력해 주세요.");return}if(!J){se(!0);try{const{lat:Oe,lon:D}=await NM(ae);$(le=>({...le,lat:String(Oe),lon:String(D)}))}catch(Oe){console.error(Oe),alert(g==="eng"?"Could not find that address.":"주소를 찾을 수 없습니다.")}finally{se(!1)}}}async function ge(){if(K||!Ce)return;const ae=b.find(Oe=>Oe.name.kor===B.categoryKor);if(ae){if(I){if(!O||!m)return}else if(!z.current)return;ue(!0);try{if(I&&O&&m){let re;z.current&&(re=await y_(z.current));const Re=qM(O,B,ae.name,re);if(Object.keys(Re).length>0){const ce=await OO(m,Re);T(ce)}alert(g==="eng"?"Successfully updated.":"성공적으로 수정되었습니다."),s(r);return}const Oe=z.current;if(!Oe)return;const D=await y_(Oe),le=await kO({photo:D,category:ae.name,name:B.name,branch:B.branch,theme:B.theme,discount:B.discount,description:B.description,naverMap:B.naverMap.trim(),address:{kor:B.address.trim(),eng:B.address.trim()},openTime:B.openTime,closeTime:B.closeTime,lat:Number(B.lat),lon:Number(B.lon)});C(le),alert(g==="eng"?"Successfully saved.":"저장이 완료되었습니다."),s(r)}catch(Oe){console.error(Oe),alert(g==="eng"?"Failed to save the store.":"매장 저장에 실패했습니다.")}finally{ue(!1)}}}return h.jsx(DM,{children:h.jsxs(BM,{children:[h.jsx(jx,{children:h.jsxs(zx,{children:[h.jsx(hM,{initialPreviewUrl:I&&O?.photo?Ea(O.photo):void 0,onChangePhoto:ae=>{z.current=ae,U(!!ae||!!(I&&O?.photo))}}),h.jsx(LM,{selectedCategory:B.categoryKor,onChangeSelectedCategory:ae=>Ue("categoryKor",ae)}),h.jsx(xp,{engTitle:"Store name",korTitle:"매장 이름",engPlaceholder:"Outstanding cafe",korPlaceholder:"아웃스탠딩 카페",korValue:B.name.kor,engValue:B.name.eng,onChangeKor:ae=>ve("name","kor",ae),onChangeEng:ae=>ve("name","eng",ae)}),h.jsx(Sx,{engTitle:"SUNY discount",korTitle:"할인 정보",engPlaceholder:"Drink 10% discount",korPlaceholder:"음료 10% 할인",korValue:B.discount.kor,engValue:B.discount.eng,onChangeKor:ae=>ve("discount","kor",ae),onChangeEng:ae=>ve("discount","eng",ae)})]})}),h.jsx(jx,{children:h.jsxs(zx,{children:[h.jsx(xp,{engTitle:"Store theme",korTitle:"매장 테마",engPlaceholder:"Korean food",korPlaceholder:"한식",korValue:B.theme.kor,engValue:B.theme.eng,onChangeKor:ae=>ve("theme","kor",ae),onChangeEng:ae=>ve("theme","eng",ae)}),h.jsx(xp,{engTitle:"Store branch",korTitle:"매장 지점명",engPlaceholder:"Songdo branch",korPlaceholder:"송도점",engAutoText:"Main branch",korAutoText:"본점",engLabel:"Main branch",korLabel:"본점",korValue:B.branch.kor,engValue:B.branch.eng,onChangeKor:ae=>ve("branch","kor",ae),onChangeEng:ae=>ve("branch","eng",ae)}),h.jsxs(Lx,{children:[h.jsxs(Rx,{children:[" ",g==="eng"?"Naver map link":"네이버지도 링크"," "]}),h.jsx(Px,{children:h.jsx(Mx,{type:"text",value:B.naverMap,onChange:ae=>Ue("naverMap",ae.target.value),placeholder:"https://map.naver.com/..."})})]}),h.jsx(AM,{engTitle:"Business hours",korTitle:"영업 시간",openTime:B.openTime,closeTime:B.closeTime,onChangeOpenTime:ae=>Ue("openTime",ae),onChangeCloseTime:ae=>Ue("closeTime",ae)}),h.jsxs(Lx,{children:[h.jsxs(Rx,{children:[" ",g==="eng"?"Store address":"매장 주소"," "]}),h.jsxs(Px,{children:[h.jsx(Mx,{type:"text",value:B.address,onChange:ae=>Ue("address",ae.target.value),onKeyDown:ae=>{ae.key==="Enter"&&(ae.preventDefault(),ke())},placeholder:g==="eng"?"Enter address, automatically calculate lat/lon":"주소를 입력하면 위도/경도가 자동으로 계산됩니다"}),h.jsx(UM,{type:"button",disabled:J,onClick:ke,children:J?g==="eng"?"Searching":"검색 중":g==="eng"?"Search":"검색"})]})]}),h.jsx(IM,{engTitle:"Store lat/lon",korTitle:"매장 위도/경도",latitudePlaceholder:"37.3751739",longitudePlaceholder:"126.6682747",lat:B.lat,lon:B.lon,onChangeLat:ae=>Ue("lat",ae),onChangeLon:ae=>Ue("lon",ae)}),h.jsx(Sx,{engTitle:"Additional precautions",korTitle:"추가 유의사항",engPlaceholder:"Lunch special starts from Oct 21",korPlaceholder:"점심특선은 10월 21일부터 시행",engAutoText:"None",korAutoText:"없음",engLabel:"None",korLabel:"없음",korValue:B.description.kor,engValue:B.description.eng,onChangeKor:ae=>ve("description","kor",ae),onChangeEng:ae=>ve("description","eng",ae)}),h.jsxs(FM,{children:[h.jsx(HM,{type:"button",disabled:K,onClick:()=>s(i),children:g==="eng"?"Cancel":"취소"}),h.jsx($M,{type:"button",disabled:K||!Ce,onClick:ge,children:g==="eng"?"Save":"저장"})]})]})})]})})}function GM(){const{owner:t}=Mr(),{language:i}=Pe();return t?.storeId?h.jsx(Mg,{storeIdOverride:t.storeId,cancelTo:"/owner",afterSaveTo:"/owner"}):h.jsx("p",{children:i==="eng"?"Store information was not found.":"매장 정보를 찾을 수 없습니다."})}const YM=()=>{};var Ix={};const fT=function(t){const i=[];let r=0;for(let s=0;s<t.length;s++){let u=t.charCodeAt(s);u<128?i[r++]=u:u<2048?(i[r++]=u>>6|192,i[r++]=u&63|128):(u&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(u=65536+((u&1023)<<10)+(t.charCodeAt(++s)&1023),i[r++]=u>>18|240,i[r++]=u>>12&63|128,i[r++]=u>>6&63|128,i[r++]=u&63|128):(i[r++]=u>>12|224,i[r++]=u>>6&63|128,i[r++]=u&63|128)}return i},WM=function(t){const i=[];let r=0,s=0;for(;r<t.length;){const u=t[r++];if(u<128)i[s++]=String.fromCharCode(u);else if(u>191&&u<224){const m=t[r++];i[s++]=String.fromCharCode((u&31)<<6|m&63)}else if(u>239&&u<365){const m=t[r++],g=t[r++],b=t[r++],y=((u&7)<<18|(m&63)<<12|(g&63)<<6|b&63)-65536;i[s++]=String.fromCharCode(55296+(y>>10)),i[s++]=String.fromCharCode(56320+(y&1023))}else{const m=t[r++],g=t[r++];i[s++]=String.fromCharCode((u&15)<<12|(m&63)<<6|g&63)}}return i.join("")},hT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,i){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let u=0;u<t.length;u+=3){const m=t[u],g=u+1<t.length,b=g?t[u+1]:0,y=u+2<t.length,_=y?t[u+2]:0,C=m>>2,T=(m&3)<<4|b>>4;let O=(b&15)<<2|_>>6,I=_&63;y||(I=64,g||(O=64)),s.push(r[C],r[T],r[O],r[I])}return s.join("")},encodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(t):this.encodeByteArray(fT(t),i)},decodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(t):WM(this.decodeStringToByteArray(t,i))},decodeStringToByteArray(t,i){this.init_();const r=i?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let u=0;u<t.length;){const m=r[t.charAt(u++)],b=u<t.length?r[t.charAt(u)]:0;++u;const _=u<t.length?r[t.charAt(u)]:64;++u;const T=u<t.length?r[t.charAt(u)]:64;if(++u,m==null||b==null||_==null||T==null)throw new KM;const O=m<<2|b>>4;if(s.push(O),_!==64){const I=b<<4&240|_>>2;if(s.push(I),T!==64){const z=_<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XM=function(t){const i=fT(t);return hT.encodeByteArray(i,!0)},mT=function(t){return XM(t).replace(/\./g,"")},pT=function(t){try{return hT.decodeString(t,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};function JM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const QM=()=>JM().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof Ix>"u")return;const t=Ix.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=t&&pT(t[1]);return i&&JSON.parse(i)},L0=()=>{try{return YM()||QM()||eI()||tI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nI=t=>L0()?.emulatorHosts?.[t],gT=()=>L0()?.config,vT=t=>L0()?.[`_${t}`];class yT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}wrapCallback(i){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(r):i(r,s))}}}function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,i)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(s);u.onsuccess=()=>{u.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},u.onupgradeneeded=()=>{r=!1},u.onerror=()=>{i(u.error?.message||"")}}catch(r){i(r)}})}const uI="FirebaseError";class Nr extends Error{constructor(i,r,s){super(r),this.code=i,this.customData=s,this.name=uI,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xc.prototype.create)}}class Xc{constructor(i,r,s){this.service=i,this.serviceName=r,this.errors=s}create(i,...r){const s=r[0]||{},u=`${this.service}/${i}`,m=this.errors[i],g=m?dI(m,s):"Error",b=`${this.serviceName}: ${g} (${u}).`;return new Nr(u,b,s)}}function dI(t,i){try{let r=0,s="";for(;r<t.length;){const u=t.indexOf("{$",r);if(u===-1){s+=t.substring(r);break}const m=t.indexOf("}",u+2);if(m===-1){s+=t.substring(r);break}const g=t.substring(u+2,m),b=i[g];s+=t.substring(r,u)+(b!=null?String(b):`<${g}?>`),r=m+1}return s}catch{return t}}function fI(t){for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i))return!1;return!0}function Zs(t,i){if(t===i)return!0;const r=Object.keys(t),s=Object.keys(i);for(const u of r){if(!s.includes(u))return!1;const m=t[u],g=i[u];if(Nx(m)&&Nx(g)){if(!Zs(m,g))return!1}else if(m!==g)return!1}for(const u of s)if(!r.includes(u))return!1;return!0}function Nx(t){return t!==null&&typeof t=="object"}function tl(t){const i=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(u=>{i.push(encodeURIComponent(r)+"="+encodeURIComponent(u))}):i.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return i.length?"&"+i.join("&"):""}function hI(t,i){const r=new mI(t,i);return r.subscribe.bind(r)}class mI{constructor(i,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{i(this)}).catch(s=>{this.error(s)})}next(i){this.forEachObserver(r=>{r.next(i)})}error(i){this.forEachObserver(r=>{r.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,r,s){let u;if(i===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");pI(i,["next","error","complete"])?u=i:u={next:i,error:r,complete:s},u.next===void 0&&(u.next=wp),u.error===void 0&&(u.error=wp),u.complete===void 0&&(u.complete=wp);const m=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),m}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,i)}sendOne(i,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{r(this.observers[i])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,i){if(typeof t!="object"||t===null)return!1;for(const r of i)if(r in t&&typeof t[r]=="function")return!0;return!1}function wp(){}function La(t){return t&&t._delegate?t._delegate:t}function R0(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gI(t){return(await fetch(t,{credentials:"include"})).ok}class qs{constructor(i,r,s){this.name=i,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}const Ao="[DEFAULT]";class vI{constructor(i,r){this.name=i,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const r=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(r)){const s=new yT;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:r});u&&s.resolve(u)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(i){const r=this.normalizeInstanceIdentifier(i?.identifier),s=i?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(s)return null;throw u}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(bI(i))try{this.getOrInitializeService({instanceIdentifier:Ao})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);try{const m=this.getOrInitializeService({instanceIdentifier:u});s.resolve(m)}catch{}}}}clearInstance(i=Ao){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...i.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=Ao){return this.instances.has(i)}getOptions(i=Ao){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:r={}}=i,s=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[m,g]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(m);s===b&&g.resolve(u)}return u}onInit(i,r){const s=this.normalizeInstanceIdentifier(r),u=this.onInitCallbacks.get(s)??new Set;u.add(i),this.onInitCallbacks.set(s,u);const m=this.instances.get(s);return m&&i(m,s),()=>{u.delete(i)}}invokeOnInitCallbacks(i,r){const s=this.onInitCallbacks.get(r);if(s)for(const u of s)try{u(i,r)}catch{}}getOrInitializeService({instanceIdentifier:i,options:r={}}){let s=this.instances.get(i);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yI(i),options:r}),this.instances.set(i,s),this.instancesOptions.set(i,r),this.invokeOnInitCallbacks(s,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,s)}catch{}return s||null}normalizeInstanceIdentifier(i=Ao){return this.component?this.component.multipleInstances?i:Ao:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===Ao?void 0:t}function bI(t){return t.instantiationMode==="EAGER"}class _I{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const r=this.getProvider(i.name);if(r.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);r.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const r=new vI(i,this);return this.providers.set(i,r),r}getProviders(){return Array.from(this.providers.values())}}var ft;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ft||(ft={}));const xI={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},wI=ft.INFO,SI={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},TI=(t,i,...r)=>{if(i<t.logLevel)return;const s=new Date().toISOString(),u=SI[i];if(u)console[u](`[${s}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class bT{constructor(i){this.name=i,this._logLevel=wI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in ft))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?xI[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...i),this._logHandler(this,ft.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...i),this._logHandler(this,ft.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...i),this._logHandler(this,ft.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...i),this._logHandler(this,ft.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...i),this._logHandler(this,ft.ERROR,...i)}}const EI=(t,i)=>i.some(r=>t instanceof r);let Dx,Bx;function CI(){return Dx||(Dx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return Bx||(Bx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _T=new WeakMap,Ig=new WeakMap,xT=new WeakMap,Sp=new WeakMap,P0=new WeakMap;function kI(t){const i=new Promise((r,s)=>{const u=()=>{t.removeEventListener("success",m),t.removeEventListener("error",g)},m=()=>{r(Or(t.result)),u()},g=()=>{s(t.error),u()};t.addEventListener("success",m),t.addEventListener("error",g)});return i.then(r=>{r instanceof IDBCursor&&_T.set(r,t)}).catch(()=>{}),P0.set(i,t),i}function OI(t){if(Ig.has(t))return;const i=new Promise((r,s)=>{const u=()=>{t.removeEventListener("complete",m),t.removeEventListener("error",g),t.removeEventListener("abort",g)},m=()=>{r(),u()},g=()=>{s(t.error||new DOMException("AbortError","AbortError")),u()};t.addEventListener("complete",m),t.addEventListener("error",g),t.addEventListener("abort",g)});Ig.set(t,i)}let Ng={get(t,i,r){if(t instanceof IDBTransaction){if(i==="done")return Ig.get(t);if(i==="objectStoreNames")return t.objectStoreNames||xT.get(t);if(i==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Or(t[i])},set(t,i,r){return t[i]=r,!0},has(t,i){return t instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in t}};function jI(t){Ng=t(Ng)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...r){const s=t.call(Tp(this),i,...r);return xT.set(s,i.sort?i.sort():[i]),Or(s)}:AI().includes(t)?function(...i){return t.apply(Tp(this),i),Or(_T.get(this))}:function(...i){return Or(t.apply(Tp(this),i))}}function LI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&OI(t),EI(t,CI())?new Proxy(t,Ng):t)}function Or(t){if(t instanceof IDBRequest)return kI(t);if(Sp.has(t))return Sp.get(t);const i=LI(t);return i!==t&&(Sp.set(t,i),P0.set(i,t)),i}const Tp=t=>P0.get(t);function RI(t,i,{blocked:r,upgrade:s,blocking:u,terminated:m}={}){const g=indexedDB.open(t,i),b=Or(g);return s&&g.addEventListener("upgradeneeded",y=>{s(Or(g.result),y.oldVersion,y.newVersion,Or(g.transaction),y)}),r&&g.addEventListener("blocked",y=>r(y.oldVersion,y.newVersion,y)),b.then(y=>{m&&y.addEventListener("close",()=>m()),u&&y.addEventListener("versionchange",_=>u(_.oldVersion,_.newVersion,_))}).catch(()=>{}),b}const PI=["get","getKey","getAll","getAllKeys","count"],MI=["put","add","delete","clear"],Ep=new Map;function Ux(t,i){if(!(t instanceof IDBDatabase&&!(i in t)&&typeof i=="string"))return;if(Ep.get(i))return Ep.get(i);const r=i.replace(/FromIndex$/,""),s=i!==r,u=MI.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(u||PI.includes(r)))return;const m=async function(g,...b){const y=this.transaction(g,u?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(b.shift())),(await Promise.all([_[r](...b),u&&y.done]))[0]};return Ep.set(i,m),m}jI(t=>({...t,get:(i,r,s)=>Ux(i,r)||t.get(i,r,s),has:(i,r)=>!!Ux(i,r)||t.has(i,r)}));class II{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(NI(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function NI(t){return t.getComponent()?.type==="VERSION"}const Dg="@firebase/app",Fx="0.16.1";const ka=new bT("@firebase/app"),DI="@firebase/app-compat",BI="@firebase/analytics-compat",UI="@firebase/analytics",FI="@firebase/app-check-compat",HI="@firebase/app-check",$I="@firebase/auth",VI="@firebase/auth-compat",ZI="@firebase/database",qI="@firebase/data-connect",GI="@firebase/database-compat",YI="@firebase/functions",WI="@firebase/functions-compat",KI="@firebase/installations",XI="@firebase/installations-compat",JI="@firebase/messaging",QI="@firebase/messaging-compat",e4="@firebase/performance",t4="@firebase/performance-compat",n4="@firebase/remote-config",i4="@firebase/remote-config-compat",a4="@firebase/storage",r4="@firebase/storage-compat",o4="@firebase/firestore",s4="@firebase/ai",l4="@firebase/firestore-compat",c4="firebase",u4="12.18.0";const Bg="[DEFAULT]",d4={[Dg]:"fire-core",[DI]:"fire-core-compat",[UI]:"fire-analytics",[BI]:"fire-analytics-compat",[HI]:"fire-app-check",[FI]:"fire-app-check-compat",[$I]:"fire-auth",[VI]:"fire-auth-compat",[ZI]:"fire-rtdb",[qI]:"fire-data-connect",[GI]:"fire-rtdb-compat",[YI]:"fire-fn",[WI]:"fire-fn-compat",[KI]:"fire-iid",[XI]:"fire-iid-compat",[JI]:"fire-fcm",[QI]:"fire-fcm-compat",[e4]:"fire-perf",[t4]:"fire-perf-compat",[n4]:"fire-rc",[i4]:"fire-rc-compat",[a4]:"fire-gcs",[r4]:"fire-gcs-compat",[o4]:"fire-fst",[l4]:"fire-fst-compat",[s4]:"fire-vertex","fire-js":"fire-js",[c4]:"fire-js-all"};const mf=new Map,f4=new Map,Ug=new Map;function Hx(t,i){try{t.container.addComponent(i)}catch(r){ka.debug(`Component ${i.name} failed to register with FirebaseApp ${t.name}`,r)}}function Dc(t){const i=t.name;if(Ug.has(i))return ka.debug(`There were multiple attempts to register component ${i}.`),!1;Ug.set(i,t);for(const r of mf.values())Hx(r,t);for(const r of f4.values())Hx(r,t);return!0}function wT(t,i){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(i)}function hi(t){return t==null?!1:t.settings!==void 0}const h4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ba=new Xc("app","Firebase",h4);class m4{constructor(i,r,s){this._isDeleted=!1,this._options={...i},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw ba.create("app-deleted",{appName:this._name})}}const Jc=u4;function ST(t,i={}){let r=t;typeof i!="object"&&(i={name:i});const s={name:Bg,automaticDataCollectionEnabled:!0,...i},u=s.name;if(typeof u!="string"||!u)throw ba.create("bad-app-name",{appName:String(u)});if(r||(r=gT()),!r)throw ba.create("no-options");const m=mf.get(u);if(m)if(Zs(r,m.options)){if(Zs(s,m.config))return m;throw ba.create("duplicate-app",{appName:u,mismatchedParam:"config",oldValue:JSON.stringify(m.config),newValue:JSON.stringify(s)})}else throw ba.create("duplicate-app",{appName:u,mismatchedParam:"options",oldValue:JSON.stringify(m.options),newValue:JSON.stringify(r)});const g=new _I(u);for(const y of Ug.values())g.addComponent(y);const b=new m4(r,s,g);return mf.set(u,b),b}function p4(t=Bg){const i=mf.get(t);if(!i&&t===Bg&&gT())return ST();if(!i)throw ba.create("no-app",{appName:t});return i}function Is(t,i,r){let s=d4[t]??t;r&&(s+=`-${r}`);const u=s.match(/\s|\//),m=i.match(/\s|\//);if(u||m){const g=[`Unable to register library "${s}" with version "${i}":`];u&&g.push(`library name "${s}" contains illegal characters (whitespace or "/")`),u&&m&&g.push("and"),m&&g.push(`version name "${i}" contains illegal characters (whitespace or "/")`),ka.warn(g.join(" "));return}Dc(new qs(`${s}-version`,()=>({library:s,version:i}),"VERSION"))}const g4="firebase-heartbeat-database",v4=1,Bc="firebase-heartbeat-store";let Cp=null;function TT(){return Cp||(Cp=RI(g4,v4,{upgrade:(t,i)=>{switch(i){case 0:try{t.createObjectStore(Bc)}catch(r){console.warn(r)}}}}).catch(t=>{throw ba.create("idb-open",{originalErrorMessage:t.message})})),Cp}async function y4(t){try{const r=(await TT()).transaction(Bc),s=await r.objectStore(Bc).get(ET(t));return await r.done,s}catch(i){if(i instanceof Nr)ka.warn(i.message);else{const r=ba.create("idb-get",{originalErrorMessage:i?.message});ka.warn(r.message)}}}async function $x(t,i){try{const s=(await TT()).transaction(Bc,"readwrite");await s.objectStore(Bc).put(i,ET(t)),await s.done}catch(r){if(r instanceof Nr)ka.warn(r.message);else{const s=ba.create("idb-set",{originalErrorMessage:r?.message});ka.warn(s.message)}}}function ET(t){return`${t.name}!${t.options.appId}`}const b4=1024,_4=30;class x4{constructor(i){this.container=i,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new S4(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vx();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(u=>u.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>_4){const u=T4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ka.warn(i)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Vx(),{heartbeatsToSend:r,unsentEntries:s}=w4(this._heartbeatsCache.heartbeats),u=mT(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return ka.warn(i),""}}}function Vx(){return new Date().toISOString().substring(0,10)}function w4(t,i=b4){const r=[];let s=t.slice();for(const u of t){const m=r.find(g=>g.agent===u.agent);if(m){if(m.dates.push(u.date),Zx(r)>i){m.dates.pop();break}}else if(r.push({agent:u.agent,dates:[u.date]}),Zx(r)>i){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class S4{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await y4(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(i){if(await this._canUseIndexedDBPromise){const s=await this.read();return $x(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){if(await this._canUseIndexedDBPromise){const s=await this.read();return $x(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...i.heartbeats]})}else return}}function Zx(t){return mT(JSON.stringify({version:2,heartbeats:t})).length}function T4(t){if(t.length===0)return-1;let i=0,r=t[0].date;for(let s=1;s<t.length;s++)t[s].date<r&&(r=t[s].date,i=s);return i}function E4(t){Dc(new qs("platform-logger",i=>new II(i),"PRIVATE")),Dc(new qs("heartbeat",i=>new x4(i),"PRIVATE")),Is(Dg,Fx,t),Is(Dg,Fx,"esm2020"),Is("fire-js","")}E4("");function CT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C4=CT,AT=new Xc("auth","Firebase",CT());const pf=new bT("@firebase/auth");function kT(t,...i){pf.logLevel<=ft.WARN&&pf.warn(`Auth (${Jc}): ${t}`,...i)}function tf(t,...i){pf.logLevel<=ft.ERROR&&pf.error(`Auth (${Jc}): ${t}`,...i)}function Oa(t,...i){throw M0(t,...i)}function Pn(t,...i){return M0(t,...i)}function OT(t,i,r){const s={...C4(),[i]:r};return new Xc("auth","Firebase",s).create(i,{appName:t.name})}function Sa(t){return OT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function M0(t,...i){if(typeof t!="string"){const r=i[0],s=[...i.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(r,...s)}return AT.create(t,...i)}function ye(t,i,...r){if(!t)throw M0(i,...r)}function _a(t){const i="INTERNAL ASSERTION FAILED: "+t;throw tf(i),new Error(i)}function ja(t,i){t||_a(i)}function Fg(){return typeof self<"u"&&self.location?.href||""}function jT(){return qx()==="http:"||qx()==="https:"}function qx(){return typeof self<"u"&&self.location?.protocol||null}function A4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jT()||rI()||"connection"in navigator)?navigator.onLine:!0}function k4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class Qc{constructor(i,r){this.shortDelay=i,this.longDelay=r,ja(r>i,"Short delay should be less than long delay!"),this.isMobile=iI()||oI()}get(){return A4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function I0(t,i){ja(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return i?`${r}${i.startsWith("/")?i.slice(1):i}`:r}class zT{static initialize(i,r,s){this.fetchImpl=i,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_a("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_a("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_a("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const O4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const j4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z4=new Qc(3e4,6e4);function Hi(t,i){return t.tenantId&&!i.tenantId?{...i,tenantId:t.tenantId}:i}async function _i(t,i,r,s,u={}){return LT(t,u,async()=>{let m={},g={};s&&(i==="GET"?g=s:m={body:JSON.stringify(s)});const b=tl({...g,key:t.config.apiKey}).slice(1),y=await t._getAdditionalHeaders();y["Content-Type"]="application/json",t.languageCode&&(y["X-Firebase-Locale"]=t.languageCode);const _={method:i,headers:y,...m};return aI()||(_.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&R0(t.emulatorConfig.host)&&(_.credentials="include"),zT.fetch()(await RT(t,t.config.apiHost,r,b),_)})}async function LT(t,i,r){t._canInitEmulator=!1;const s={...O4,...i};try{const u=new R4(t),m=await Promise.race([r(),u.promise]);u.clearNetworkTimeout();const g=await m.json();if("needConfirmation"in g)throw xc(t,"account-exists-with-different-credential",g);if(m.ok&&!("errorMessage"in g))return g;{const b=m.ok?g.errorMessage:g.error.message,[y,_]=b.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(t,"credential-already-in-use",g);if(y==="EMAIL_EXISTS")throw xc(t,"email-already-in-use",g);if(y==="USER_DISABLED")throw xc(t,"user-disabled",g);const C=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw OT(t,C,_);Oa(t,C)}}catch(u){if(u instanceof Nr)throw u;Oa(t,"network-request-failed",{message:String(u)})}}async function Zf(t,i,r,s,u={}){const m=await _i(t,i,r,s,u);return"mfaPendingCredential"in m&&Oa(t,"multi-factor-auth-required",{_serverResponse:m}),m}async function RT(t,i,r,s){const u=`${i}${r}?${s}`,m=t,g=m.config.emulator?I0(t.config,u):`${t.config.apiScheme}://${u}`;return j4.includes(r)&&(await m._persistenceManagerAvailable,m._getPersistenceType()==="COOKIE")?m._getPersistence()._getFinalTarget(g).toString():g}function L4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(Pn(this.auth,"network-request-failed")),z4.get())})}}function xc(t,i,r){const s={appName:t.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const u=Pn(t,i,s);return u.customData._tokenResponse=r,u}function Gx(t){return t!==void 0&&t.getResponse!==void 0}function Yx(t){return t!==void 0&&t.enterprise!==void 0}class PT{constructor(i){if(this.siteKey="",this.recaptchaEnforcementState=[],i.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=i.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=i.recaptchaEnforcementState}getProviderEnforcementState(i){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===i)return L4(r.enforcementState);return null}isProviderEnabled(i){return this.getProviderEnforcementState(i)==="ENFORCE"||this.getProviderEnforcementState(i)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function P4(t){return(await _i(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function MT(t,i){return _i(t,"GET","/v2/recaptchaConfig",Hi(t,i))}async function M4(t,i){return _i(t,"POST","/v1/accounts:delete",i)}async function gf(t,i){return _i(t,"POST","/v1/accounts:lookup",i)}function Ac(t){if(t)try{const i=new Date(Number(t));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function I4(t,i=!1){const r=La(t),s=await r.getIdToken(i),u=N0(s);ye(u&&u.exp&&u.auth_time&&u.iat,r.auth,"internal-error");const m=typeof u.firebase=="object"?u.firebase:void 0,g=m?.sign_in_provider;return{claims:u,token:s,authTime:Ac(Ap(u.auth_time)),issuedAtTime:Ac(Ap(u.iat)),expirationTime:Ac(Ap(u.exp)),signInProvider:g||null,signInSecondFactor:m?.sign_in_second_factor||null}}function Ap(t){return Number(t)*1e3}function N0(t){const[i,r,s]=t.split(".");if(i===void 0||r===void 0||s===void 0)return tf("JWT malformed, contained fewer than 3 sections"),null;try{const u=pT(r);return u?JSON.parse(u):(tf("Failed to decode base64 JWT payload"),null)}catch(u){return tf("Caught error parsing JWT payload as JSON",u?.toString()),null}}function Wx(t){const i=N0(t);return ye(i,"internal-error"),ye(typeof i.exp<"u","internal-error"),ye(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}async function Uc(t,i,r=!1){if(r)return i;try{return await i}catch(s){throw s instanceof Nr&&N4(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function N4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class D4{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){if(i){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(i=!1){if(!this.isRunning)return;const r=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){i?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Hg{constructor(i,r){this.createdAt=i,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ac(this.lastLoginAt),this.creationTime=Ac(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function vf(t){const i=t.auth,r=await t.getIdToken(),s=await Uc(t,gf(i,{idToken:r}));ye(s?.users.length,i,"internal-error");const u=s.users[0];t._notifyReloadListener(u);const m=u.providerUserInfo?.length?IT(u.providerUserInfo):[],g=U4(t.providerData,m),b=t.isAnonymous,y=!(t.email&&u.passwordHash)&&!g?.length,_=b?y:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:g,metadata:new Hg(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(t,C)}async function B4(t){const i=La(t);await vf(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function U4(t,i){return[...t.filter(s=>!i.some(u=>u.providerId===s.providerId)),...i]}function IT(t){return t.map(({providerId:i,...r})=>({providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function F4(t,i){const r=await LT(t,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:u,apiKey:m}=t.config,g=await RT(t,u,"/v1/token",`key=${m}`),b=await t._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:b,body:s};return t.emulatorConfig&&R0(t.emulatorConfig.host)&&(y.credentials="include"),zT.fetch()(g,y)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function H4(t,i){return _i(t,"POST","/v2/accounts:revokeToken",Hi(t,i))}class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){ye(i.idToken,"internal-error"),ye(typeof i.idToken<"u","internal-error"),ye(typeof i.refreshToken<"u","internal-error");const r="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):Wx(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,r)}updateFromIdToken(i){ye(i.length!==0,"internal-error");const r=Wx(i);this.updateTokensAndExpiration(i,null,r)}async getToken(i,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,i,"user-token-expired"),this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(i,r){const{accessToken:s,refreshToken:u,expiresIn:m}=await F4(i,r);this.updateTokensAndExpiration(s,u,Number(m))}updateTokensAndExpiration(i,r,s){this.refreshToken=r||null,this.accessToken=i||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(i,r){const{refreshToken:s,accessToken:u,expirationTime:m}=r,g=new Ns;return s&&(ye(typeof s=="string","internal-error",{appName:i}),g.refreshToken=s),u&&(ye(typeof u=="string","internal-error",{appName:i}),g.accessToken=u),m&&(ye(typeof m=="number","internal-error",{appName:i}),g.expirationTime=m),g}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return _a("not implemented")}}function wr(t,i){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:i})}class pi{constructor({uid:i,auth:r,stsTokenManager:s,...u}){this.providerId="firebase",this.proactiveRefresh=new D4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Hg(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(i){const r=await Uc(this,this.stsTokenManager.getToken(this.auth,i));return ye(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(i){return I4(this,i)}reload(){return B4(this)}_assign(i){this!==i&&(ye(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(r=>({...r})),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){const r=new pi({...this,auth:i,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(i){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,r=!1){let s=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),s=!0),r&&await vf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hi(this.auth.app))return Promise.reject(Sa(this.auth));const i=await this.getIdToken();return await Uc(this,M4(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>({...i})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,r){const s=r.displayName??void 0,u=r.email??void 0,m=r.phoneNumber??void 0,g=r.photoURL??void 0,b=r.tenantId??void 0,y=r._redirectEventId??void 0,_=r.createdAt??void 0,C=r.lastLoginAt??void 0,{uid:T,emailVerified:O,isAnonymous:I,providerData:z,stsTokenManager:P}=r;ye(T&&P,i,"internal-error");const U=Ns.fromJSON(this.name,P);ye(typeof T=="string",i,"internal-error"),wr(s,i.name),wr(u,i.name),ye(typeof O=="boolean",i,"internal-error"),ye(typeof I=="boolean",i,"internal-error"),wr(m,i.name),wr(g,i.name),wr(b,i.name),wr(y,i.name),wr(_,i.name),wr(C,i.name);const B=new pi({uid:T,auth:i,email:u,emailVerified:O,displayName:s,isAnonymous:I,photoURL:g,phoneNumber:m,tenantId:b,stsTokenManager:U,createdAt:_,lastLoginAt:C});return z&&Array.isArray(z)&&(B.providerData=z.map($=>({...$}))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(i,r,s=!1){const u=new Ns;u.updateFromServerResponse(r);const m=new pi({uid:r.localId,auth:i,stsTokenManager:u,isAnonymous:s});return await vf(m),m}static async _fromGetAccountInfoResponse(i,r,s){const u=r.users[0];ye(u.localId!==void 0,"internal-error");const m=u.providerUserInfo!==void 0?IT(u.providerUserInfo):[],g=!(u.email&&u.passwordHash)&&!m?.length,b=new Ns;b.updateFromIdToken(s);const y=new pi({uid:u.localId,auth:i,stsTokenManager:b,isAnonymous:g}),_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Hg(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!m?.length};return Object.assign(y,_),y}}const Kx=new Map;function xa(t){ja(t instanceof Function,"Expected a class definition");let i=Kx.get(t);return i?(ja(i instanceof t,"Instance stored in cache mismatched with class"),i):(i=new t,Kx.set(t,i),i)}class NT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,r){this.storage[i]=r}async _get(i){const r=this.storage[i];return r===void 0?null:r}async _remove(i){delete this.storage[i]}_addListener(i,r){}_removeListener(i,r){}}NT.type="NONE";const Xx=NT;function nf(t,i,r){return`firebase:${t}:${i}:${r}`}class Ds{constructor(i,r,s){this.persistence=i,this.auth=r,this.userKey=s;const{config:u,name:m}=this.auth;this.fullUserKey=nf(this.userKey,u.apiKey,m),this.fullPersistenceKey=nf("persistence",u.apiKey,m),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);if(!i)return null;if(typeof i=="string"){const r=await gf(this.auth,{idToken:i}).catch(()=>{});return r?pi._fromGetAccountInfoResponse(this.auth,r,i):null}return pi._fromJSON(this.auth,i)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,r,s="authUser"){if(!r.length)return new Ds(xa(Xx),i,s);const u=(await Promise.all(r.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let m=u[0]||xa(Xx);const g=nf(s,i.config.apiKey,i.name);let b=null;for(const _ of r)try{const C=await _._get(g);if(C){let T;if(typeof C=="string"){const O=await gf(i,{idToken:C}).catch(()=>{});if(!O)break;T=await pi._fromGetAccountInfoResponse(i,O,C)}else T=pi._fromJSON(i,C);_!==m&&(b=T),m=_;break}}catch{}const y=u.filter(_=>_._shouldAllowMigration);return!m._shouldAllowMigration||!y.length?new Ds(m,i,s):(m=y[0],b&&await m._set(g,b.toJSON()),await Promise.all(r.map(async _=>{if(_!==m)try{await _._remove(g)}catch{}})),new Ds(m,i,s))}}function Jx(t){const i=t.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(FT(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(DT(i))return"Firefox";if(i.includes("silk/"))return"Silk";if($T(i))return"Blackberry";if(VT(i))return"Webos";if(BT(i))return"Safari";if((i.includes("chrome/")||UT(i))&&!i.includes("edge/"))return"Chrome";if(HT(i))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(r);if(s?.length===2)return s[1]}return"Other"}function DT(t=dn()){return/firefox\//i.test(t)}function BT(t=dn()){const i=t.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function UT(t=dn()){return/crios\//i.test(t)}function FT(t=dn()){return/iemobile/i.test(t)}function HT(t=dn()){return/android/i.test(t)}function $T(t=dn()){return/blackberry/i.test(t)}function VT(t=dn()){return/webos/i.test(t)}function D0(t=dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $4(t=dn()){return D0(t)&&!!window.navigator?.standalone}function V4(){return sI()&&document.documentMode===10}function ZT(t=dn()){return D0(t)||HT(t)||VT(t)||$T(t)||/windows phone/i.test(t)||FT(t)}function qT(t,i=[]){let r;switch(t){case"Browser":r=Jx(dn());break;case"Worker":r=`${Jx(dn())}-${t}`;break;default:r=t}const s=i.length?i.join(","):"FirebaseCore-web";return`${r}/JsCore/${Jc}/${s}`}class Z4{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,r){const s=m=>new Promise((g,b)=>{try{const y=i(m);g(y)}catch(y){b(y)}});s.onAbort=r,this.queue.push(s);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;const r=[];try{for(const s of this.queue)await s(i),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const u of r)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}async function q4(t,i={}){return _i(t,"GET","/v2/passwordPolicy",Hi(t,i))}const G4=6;class Y4{constructor(i){const r=i.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??G4,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=i.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=i.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=i.forceUpgradeOnSignin??!1,this.schemaVersion=i.schemaVersion}validatePassword(i){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(i,r),this.validatePasswordCharacterOptions(i,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(i,r){const s=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=i.length>=s),u&&(r.meetsMaxPasswordLength=i.length<=u)}validatePasswordCharacterOptions(i,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let u=0;u<i.length;u++)s=i.charAt(u),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(i,r,s,u,m){this.customStrengthOptions.containsLowercaseLetter&&(i.containsLowercaseLetter||(i.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(i.containsUppercaseLetter||(i.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(i.containsNumericCharacter||(i.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(i.containsNonAlphanumericCharacter||(i.containsNonAlphanumericCharacter=m))}}class W4{constructor(i,r,s,u){this.app=i,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qx(this),this.idTokenSubscription=new Qx(this),this.beforeStateQueue=new Z4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=u.sdkClientVersion,this._persistenceManagerAvailable=new Promise(m=>this._resolvePersistenceManagerAvailable=m)}_initializeWithPersistence(i,r){return r&&(this._popupRedirectResolver=xa(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ds.create(this,i),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUserFromIdToken(i){try{const r=await gf(this,{idToken:i}),s=await pi._fromGetAccountInfoResponse(this,r,i);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(i){if(hi(this.app)){const m=this.app.settings.authIdToken;return m?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(m).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,u=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const m=this.redirectUser?._redirectEventId,g=s?._redirectEventId,b=await this.tryRedirectSignIn(i);(!m||m===g)&&b?.user&&(s=b.user,u=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(s)}catch(m){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(m))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(i){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(i){try{await vf(i)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=k4()}async _delete(){this._deleted=!0}async updateCurrentUser(i){if(hi(this.app))return Promise.reject(Sa(this));const r=i?La(i):null;return r&&ye(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(i,r=!1){if(!this._deleted)return i&&ye(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return hi(this.app)?Promise.reject(Sa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(i){return hi(this.app)?Promise.reject(Sa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xa(i))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(i){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(i)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const i=await q4(this),r=new Y4(i);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(i){this._errorFactory=new Xc("auth","Firebase",i())}onAuthStateChanged(i,r,s){return this.registerStateListener(this.authStateSubscription,i,r,s)}beforeAuthStateChanged(i,r){return this.beforeStateQueue.pushCallback(i,r)}onIdTokenChanged(i,r,s){return this.registerStateListener(this.idTokenSubscription,i,r,s)}authStateReady(){return new Promise((i,r)=>{if(this.currentUser)i();else{const s=this.onAuthStateChanged(()=>{s(),i()},r)}})}async revokeAccessToken(i){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:i,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await H4(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(i,r){const s=await this.getOrInitRedirectPersistenceManager(r);return i===null?s.removeCurrentUser():s.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const r=i&&xa(i)||this._popupRedirectResolver;ye(r,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[xa(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===i?this._currentUser:this.redirectUser?._redirectEventId===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=this.currentUser?.uid??null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,r,s,u){if(this._deleted)return()=>{};const m=typeof r=="function"?r:r.next.bind(r);let g=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(b,this,"internal-error"),b.then(()=>{g||m(this.currentUser)}),typeof r=="function"){const y=i.addObserver(r,s,u);return()=>{g=!0,y()}}else{const y=i.addObserver(r);return()=>{g=!0,y()}}}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=qT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(i["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){if(hi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return i?.error&&kT(`Error while retrieving App Check token: ${i.error}`),i?.token}}function Ra(t){return La(t)}class Qx{constructor(i){this.auth=i,this.observer=null,this.addObserver=hI(r=>this.observer=r)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K4(t){eu=t}function B0(t){return eu.loadJS(t)}function X4(){return eu.recaptchaV2Script}function J4(){return eu.recaptchaEnterpriseScript}function Q4(){return eu.gapiScript}function GT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eN=500,tN=6e4,Ud=1e12;class nN{constructor(i){this.auth=i,this.counter=Ud,this._widgets=new Map}render(i,r){const s=this.counter;return this._widgets.set(s,new rN(i,this.auth.name,r||{})),this.counter++,s}reset(i){const r=i||Ud;this._widgets.get(r)?.delete(),this._widgets.delete(r)}getResponse(i){const r=i||Ud;return this._widgets.get(r)?.getResponse()||""}async execute(i){const r=i||Ud;return this._widgets.get(r)?.execute(),""}}class iN{constructor(){this.enterprise=new aN}ready(i){i()}execute(i,r){return Promise.resolve("token")}render(i,r){return""}}class aN{ready(i){i()}execute(i,r){return Promise.resolve("token")}render(i,r){return""}}class rN{constructor(i,r,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const u=typeof i=="string"?document.getElementById(i):i;ye(u,"argument-error",{appName:r}),this.container=u,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=oN(50);const{callback:i,"expired-callback":r}=this.params;if(i)try{i(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch{}this.isVisible&&this.execute()},tN)},eN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function oN(t){const i=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<t;s++)i.push(r.charAt(Math.floor(Math.random()*r.length)));return i.join("")}const sN="recaptcha-enterprise",kc="NO_RECAPTCHA",ew="onFirebaseAuthREInstanceReady";class ya{constructor(i){this.type=sN,this.auth=Ra(i)}async verify(i="verify",r=!1){async function s(m){if(!r){if(m.tenantId==null&&m._agentRecaptchaConfig!=null)return m._agentRecaptchaConfig.siteKey;if(m.tenantId!=null&&m._tenantRecaptchaConfigs[m.tenantId]!==void 0)return m._tenantRecaptchaConfigs[m.tenantId].siteKey}return new Promise(async(g,b)=>{MT(m,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)b(new Error("recaptcha Enterprise site key undefined"));else{const _=new PT(y);return m.tenantId==null?m._agentRecaptchaConfig=_:m._tenantRecaptchaConfigs[m.tenantId]=_,g(_.siteKey)}}).catch(y=>{b(y)})})}function u(m,g,b){const y=window.grecaptcha;Yx(y)?y.enterprise.ready(()=>{y.enterprise.execute(m,{action:i}).then(_=>{g(_)}).catch(()=>{g(kc)})}):b(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iN().execute("siteKey",{action:"verify"}):new Promise((m,g)=>{s(this.auth).then(async b=>{if(!r&&Yx(window.grecaptcha)&&ya.scriptInjectionDeferred)await ya.scriptInjectionDeferred.promise,u(b,m,g);else{if(typeof window>"u"){g(new Error("RecaptchaVerifier is only supported in browser"));return}let y=J4();y.length!==0&&(y+=b+`&onload=${ew}`),ya.scriptInjectionDeferred=new yT,window[ew]=()=>{ya.scriptInjectionDeferred?.resolve()},B0(y).then(()=>ya.scriptInjectionDeferred?.promise).then(()=>{u(b,m,g)}).catch(_=>{g(_)})}}).catch(b=>{g(b)})})}}ya.scriptInjectionDeferred=null;async function kp(t,i,r,s=!1,u=!1){const m=new ya(t);let g;if(u)g=kc;else try{g=await m.verify(r)}catch{g=await m.verify(r,!0)}const b={...i};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in b){const y=b.phoneEnrollmentInfo.phoneNumber,_=b.phoneEnrollmentInfo.recaptchaToken;Object.assign(b,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:g,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in b){const y=b.phoneSignInInfo.recaptchaToken;Object.assign(b,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:g,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return b}return s?Object.assign(b,{captchaResp:g}):Object.assign(b,{captchaResponse:g}),Object.assign(b,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(b,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),b}async function Op(t,i,r,s,u){if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const m=await kp(t,i,r);return s(t,m).catch(async g=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(g.code==="auth/missing-recaptcha-token"||g.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);const b=await kp(t,i,r,!1,!0);return s(t,b)}return Promise.reject(g)})}else{const m=await kp(t,i,r,!1,!0);return s(t,m)}}async function lN(t){const i=Ra(t),r=await MT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new PT(r);i.tenantId==null?i._agentRecaptchaConfig=s:i._tenantRecaptchaConfigs[i.tenantId]=s,s.isAnyProviderEnabled()&&new ya(i).verify()}function cN(t,i){const r=wT(t,"auth");if(r.isInitialized()){const u=r.getImmediate(),m=r.getOptions();if(Zs(m,i??{}))return u;Oa(u,"already-initialized")}return r.initialize({options:i})}function uN(t,i){const r=i?.persistence||[],s=(Array.isArray(r)?r:[r]).map(xa);i?.errorMap&&t._updateErrorMap(i.errorMap),t._initializeWithPersistence(s,i?.popupRedirectResolver)}function dN(t,i,r){const s=Ra(t);ye(/^https?:\/\//.test(i),s,"invalid-emulator-scheme");const u=!1,m=YT(i),{host:g,port:b}=fN(i),y=b===null?"":`:${b}`,_={url:`${m}//${g}${y}/`},C=Object.freeze({host:g,port:b,protocol:m.replace(":",""),options:Object.freeze({disableWarnings:u})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(Zs(_,s.config.emulator)&&Zs(C,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=C,s.settings.appVerificationDisabledForTesting=!0,R0(g)?gI(`${m}//${g}${y}`):hN()}function YT(t){const i=t.indexOf(":");return i<0?"":t.substr(0,i+1)}function fN(t){const i=YT(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(i.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(s);if(u){const m=u[1];return{host:m,port:tw(s.substr(m.length+1))}}else{const[m,g]=s.split(":");return{host:m,port:tw(g)}}}function tw(t){if(!t)return null;const i=Number(t);return isNaN(i)?null:i}function hN(){function t(){const i=document.createElement("p"),r=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class U0{constructor(i,r){this.providerId=i,this.signInMethod=r}toJSON(){return _a("not implemented")}_getIdTokenResponse(i){return _a("not implemented")}_linkToIdToken(i,r){return _a("not implemented")}_getReauthenticationResolver(i){return _a("not implemented")}}async function Bs(t,i){return Zf(t,"POST","/v1/accounts:signInWithIdp",Hi(t,i))}const mN="http://localhost";class Io extends U0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const r=new Io(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(r.idToken=i.idToken),i.accessToken&&(r.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(r.nonce=i.nonce),i.pendingToken&&(r.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(r.accessToken=i.oauthToken,r.secret=i.oauthTokenSecret):Oa("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const r=typeof i=="string"?JSON.parse(i):i,{providerId:s,signInMethod:u,...m}=r;if(!s||!u)return null;const g=new Io(s,u);return g.idToken=m.idToken||void 0,g.accessToken=m.accessToken||void 0,g.secret=m.secret,g.nonce=m.nonce,g.pendingToken=m.pendingToken||null,g}_getIdTokenResponse(i){const r=this.buildRequest();return Bs(i,r)}_linkToIdToken(i,r){const s=this.buildRequest();return s.idToken=r,Bs(i,s)}_getReauthenticationResolver(i){const r=this.buildRequest();return r.autoCreate=!1,Bs(i,r)}buildRequest(){const i={requestUri:mN,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),i.postBody=tl(r)}return i}}async function nw(t,i){return _i(t,"POST","/v1/accounts:sendVerificationCode",Hi(t,i))}async function pN(t,i){return Zf(t,"POST","/v1/accounts:signInWithPhoneNumber",Hi(t,i))}async function gN(t,i){const r=await Zf(t,"POST","/v1/accounts:signInWithPhoneNumber",Hi(t,i));if(r.temporaryProof)throw xc(t,"account-exists-with-different-credential",r);return r}const vN={USER_NOT_FOUND:"user-not-found"};async function yN(t,i){const r={...i,operation:"REAUTH"};return Zf(t,"POST","/v1/accounts:signInWithPhoneNumber",Hi(t,r),vN)}class Lo extends U0{constructor(i){super("phone","phone"),this.params=i}static _fromVerification(i,r){return new Lo({verificationId:i,verificationCode:r})}static _fromTokenResponse(i,r){return new Lo({phoneNumber:i,temporaryProof:r})}_getIdTokenResponse(i){return pN(i,this._makeVerificationRequest())}_linkToIdToken(i,r){return gN(i,{idToken:r,...this._makeVerificationRequest()})}_getReauthenticationResolver(i){return yN(i,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:i,phoneNumber:r,verificationId:s,verificationCode:u}=this.params;return i&&r?{temporaryProof:i,phoneNumber:r}:{sessionInfo:s,code:u}}toJSON(){const i={providerId:this.providerId};return this.params.phoneNumber&&(i.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(i.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(i.verificationCode=this.params.verificationCode),this.params.verificationId&&(i.verificationId=this.params.verificationId),i}static fromJSON(i){typeof i=="string"&&(i=JSON.parse(i));const{verificationId:r,verificationCode:s,phoneNumber:u,temporaryProof:m}=i;return!s&&!r&&!u&&!m?null:new Lo({verificationId:r,verificationCode:s,phoneNumber:u,temporaryProof:m})}}class WT{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}class tu extends WT{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}class Tr extends tu{constructor(){super("facebook.com")}static credential(i){return Io._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Tr.credentialFromTaggedObject(i)}static credentialFromError(i){return Tr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Tr.credential(i.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";class Er extends tu{constructor(){super("google.com"),this.addScope("profile")}static credential(i,r){return Io._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:r})}static credentialFromResult(i){return Er.credentialFromTaggedObject(i)}static credentialFromError(i){return Er.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:r,oauthAccessToken:s}=i;if(!r&&!s)return null;try{return Er.credential(r,s)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";class Cr extends tu{constructor(){super("github.com")}static credential(i){return Io._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return Cr.credentialFromTaggedObject(i)}static credentialFromError(i){return Cr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return Cr.credential(i.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";class Ar extends tu{constructor(){super("twitter.com")}static credential(i,r){return Io._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:r})}static credentialFromResult(i){return Ar.credentialFromTaggedObject(i)}static credentialFromError(i){return Ar.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=i;if(!r||!s)return null;try{return Ar.credential(r,s)}catch{return null}}}Ar.TWITTER_SIGN_IN_METHOD="twitter.com";Ar.PROVIDER_ID="twitter.com";class Gs{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,r,s,u=!1){const m=await pi._fromIdTokenResponse(i,s,u),g=iw(s);return new Gs({user:m,providerId:g,_tokenResponse:s,operationType:r})}static async _forOperation(i,r,s){await i._updateTokensIfNecessary(s,!0);const u=iw(s);return new Gs({user:i,providerId:u,_tokenResponse:s,operationType:r})}}function iw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class yf extends Nr{constructor(i,r,s,u){super(r.code,r.message),this.operationType=s,this.user=u,Object.setPrototypeOf(this,yf.prototype),this.customData={appName:i.name,tenantId:i.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(i,r,s,u){return new yf(i,r,s,u)}}function KT(t,i,r,s){return(i==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(m=>{throw m.code==="auth/multi-factor-auth-required"?yf._fromErrorAndOperation(t,m,i,s):m})}async function XT(t,i,r=!1){const s=await Uc(t,i._linkToIdToken(t.auth,await t.getIdToken()),r);return Gs._forOperation(t,"link",s)}async function bN(t,i,r=!1){const{auth:s}=t;if(hi(s.app))return Promise.reject(Sa(s));const u="reauthenticate";try{const m=await Uc(t,KT(s,u,i,t),r);ye(m.idToken,s,"internal-error");const g=N0(m.idToken);ye(g,s,"internal-error");const{sub:b}=g;return ye(t.uid===b,s,"user-mismatch"),Gs._forOperation(t,u,m)}catch(m){throw m?.code==="auth/user-not-found"&&Oa(s,"user-mismatch"),m}}async function JT(t,i,r=!1){if(hi(t.app))return Promise.reject(Sa(t));const s="signIn",u=await KT(t,s,i),m=await Gs._fromIdTokenResponse(t,s,u);return r||await t._updateCurrentUser(m.user),m}async function $g(t,i){return JT(Ra(t),i)}function _N(t,i,r,s){return La(t).onIdTokenChanged(i,r,s)}function xN(t,i,r){return La(t).beforeAuthStateChanged(i,r)}function aw(t,i){return _i(t,"POST","/v2/accounts/mfaEnrollment:start",Hi(t,i))}const bf="__sak";class QT{constructor(i,r){this.storageRetriever=i,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(bf,"1"),this.storage.removeItem(bf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,r){return this.storage.setItem(i,JSON.stringify(r)),Promise.resolve()}_get(i){const r=this.storage.getItem(i);return Promise.resolve(r?JSON.parse(r):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}const wN=1e3,SN=10;class eE extends QT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,r)=>this.onStorageEvent(i,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZT(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),u=this.localCache[r];s!==u&&i(r,u,s)}}onStorageEvent(i,r=!1){if(!i.key){this.forAllChangedKeys((g,b,y)=>{this.notifyListeners(g,y)});return}const s=i.key;r?this.detachListener():this.stopPolling();const u=()=>{const g=this.storage.getItem(s);!r&&this.localCache[s]===g||this.notifyListeners(s,g)},m=this.storage.getItem(s);V4()&&m!==i.newValue&&i.newValue!==i.oldValue?setTimeout(u,SN):u()}notifyListeners(i,r){this.localCache[i]=r;const s=this.listeners[i];if(s)for(const u of Array.from(s))u(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:r,newValue:s}),!0)})},wN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,r){await super._set(i,r),this.localCache[i]=JSON.stringify(r)}async _get(i){const r=await super._get(i);return this.localCache[i]=JSON.stringify(r),r}async _remove(i){await super._remove(i),delete this.localCache[i]}}eE.type="LOCAL";const TN=eE;class tE extends QT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,r){}_removeListener(i,r){}}tE.type="SESSION";const nE=tE;function EN(t){return Promise.all(t.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(r){return{fulfilled:!1,reason:r}}}))}class qf{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const r=this.receivers.find(u=>u.isListeningto(i));if(r)return r;const s=new qf(i);return this.receivers.push(s),s}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const r=i,{eventId:s,eventType:u,data:m}=r.data,g=this.handlersMap[u];if(!g?.size)return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:u});const b=Array.from(g).map(async _=>_(r.origin,m)),y=await EN(b);r.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:y})}_subscribe(i,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(r)}_unsubscribe(i,r){this.handlersMap[i]&&r&&this.handlersMap[i].delete(r),(!r||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qf.receivers=[];function F0(t="",i=10){let r="";for(let s=0;s<i;s++)r+=Math.floor(Math.random()*10);return t+r}class CN{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,r,s=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let m,g;return new Promise((b,y)=>{const _=F0("",20);u.port1.start();const C=setTimeout(()=>{y(new Error("unsupported_event"))},s);g={messageChannel:u,onMessage(T){const O=T;if(O.data.eventId===_)switch(O.data.status){case"ack":clearTimeout(C),m=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(m),b(O.data.response);break;default:clearTimeout(C),clearTimeout(m),y(new Error("invalid_response"));break}}},this.handlers.add(g),u.port1.addEventListener("message",g.onMessage),this.target.postMessage({eventType:i,eventId:_,data:r},[u.port2])}).finally(()=>{g&&this.removeMessageHandler(g)})}}function Mt(){return window}function AN(t){Mt().location.href=t}function H0(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function kN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ON(){return navigator?.serviceWorker?.controller||null}function jN(){return H0()?self:null}const iE="firebaseLocalStorageDb",zN=1,_f="firebaseLocalStorage",aE="fbase_key";class nu{constructor(i){this.request=i}toPromise(){return new Promise((i,r)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Gf(t,i){return t.transaction([_f],i?"readwrite":"readonly").objectStore(_f)}function LN(){const t=indexedDB.deleteDatabase(iE);return new nu(t).toPromise()}function rE(){const t=indexedDB.open(iE,zN);return new Promise((i,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_f,{keyPath:aE})}catch(u){r(u)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_f)?i(s):(s.close(),await LN(),i(await rE()))})})}async function rw(t,i,r){const s=Gf(t,!0).put({[aE]:i,value:r});return new nu(s).toPromise()}async function RN(t,i){const r=Gf(t,!1).get(i),s=await new nu(r).toPromise();return s===void 0?null:s.value}function ow(t,i){const r=Gf(t,!0).delete(i);return new nu(r).toPromise()}const PN=800,MN=3;class oE{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(i=>i.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=rE(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(i){let r=0;for(;;)try{const s=await this._openDb();return await i(s)}catch(s){if(this.isClosing||r++>MN)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return H0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qf._getInstance(jN()),this.receiver._subscribe("keyChanged",async(i,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(i,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kN(),!this.activeServiceWorker)return;this.sender=new CN(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&i[0]?.fulfilled&&i[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||ON()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async i=>{await rw(i,bf,"1"),await ow(i,bf)}),!0):!1}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>rw(s,i,r)),this.localCache[i]=r,this.notifyServiceWorker(i)))}async _get(i){const r=await this._withRetries(s=>RN(s,i));return this.localCache[i]=r,r}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(r=>ow(r,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){if(this.isClosing)return[];try{const i=await this._withRetries(u=>{const m=Gf(u,!1).getAll();return new nu(m).toPromise()});if(this.isClosing)return[];if(!i)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(i.length!==0)for(const{fbase_key:u,value:m}of i)s.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(m)&&(this.notifyListeners(u,m),r.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!s.has(u)&&(this.notifyListeners(u,null),r.push(u));return r}catch(i){return this.isClosing||kT(`Firebase Auth cross-tab polling failed with error: ${i}`),[]}}notifyListeners(i,r){this.localCache[i]=r;const s=this.listeners[i];if(s)for(const u of Array.from(s))u(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,r){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(r)}_removeListener(i,r){this.listeners[i]&&(this.listeners[i].delete(r),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}oE.type="LOCAL";const IN=oE;function sw(t,i){return _i(t,"POST","/v2/accounts/mfaSignIn:start",Hi(t,i))}const jp=GT("rcb"),NN=new Qc(3e4,6e4);class DN{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Mt().grecaptcha?.render}load(i,r=""){return ye(BN(r),i,"argument-error"),this.shouldResolveImmediately(r)&&Gx(Mt().grecaptcha)?Promise.resolve(Mt().grecaptcha):new Promise((s,u)=>{const m=Mt().setTimeout(()=>{u(Pn(i,"network-request-failed"))},NN.get());Mt()[jp]=()=>{Mt().clearTimeout(m),delete Mt()[jp];const b=Mt().grecaptcha;if(!b||!Gx(b)){u(Pn(i,"internal-error"));return}const y=b.render;b.render=(_,C)=>{const T=y(_,C);return this.counter++,T},this.hostLanguage=r,s(b)};const g=`${X4()}?${tl({onload:jp,render:"explicit",hl:r})}`;B0(g).catch(()=>{clearTimeout(m),u(Pn(i,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(i){return!!Mt().grecaptcha?.render&&(i===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function BN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class UN{async load(i){return new nN(i)}clearedOneInstance(){}}const Oc="recaptcha",FN={theme:"light",type:"image"};class sE{constructor(i,r,s={...FN}){this.parameters=s,this.type=Oc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ra(i),this.isInvisible=this.parameters.size==="invisible",ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const u=typeof r=="string"?document.getElementById(r):r;ye(u,this.auth,"argument-error"),this.container=u,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new UN:new DN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const i=await this.render(),r=this.getAssertedRecaptcha(),s=r.getResponse(i);return s||new Promise(u=>{const m=g=>{g&&(this.tokenChangeListeners.delete(m),u(g))};this.tokenChangeListeners.add(m),this.isInvisible&&r.execute(i)})}render(){try{this.assertNotDestroyed()}catch(i){return Promise.reject(i)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(i=>{throw this.renderPromise=null,i}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(i=>{this.container.removeChild(i)})}validateStartingState(){ye(!this.parameters.sitekey,this.auth,"argument-error"),ye(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ye(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(i){return r=>{if(this.tokenChangeListeners.forEach(s=>s(r)),typeof i=="function")i(r);else if(typeof i=="string"){const s=Mt()[i];typeof s=="function"&&s(r)}}}assertNotDestroyed(){ye(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let i=this.container;if(!this.isInvisible){const r=document.createElement("div");i.appendChild(r),i=r}this.widgetId=this.getAssertedRecaptcha().render(i,this.parameters)}return this.widgetId}async init(){ye(jT()&&!H0(),this.auth,"internal-error"),await HN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const i=await P4(this.auth);ye(i,this.auth,"internal-error"),this.parameters.sitekey=i}getAssertedRecaptcha(){return ye(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function HN(){let t=null;return new Promise(i=>{if(document.readyState==="complete"){i();return}t=()=>i(),window.addEventListener("load",t)}).catch(i=>{throw t&&window.removeEventListener("load",t),i})}class $N{constructor(i,r){this.verificationId=i,this.onConfirmation=r}confirm(i){const r=Lo._fromVerification(this.verificationId,i);return this.onConfirmation(r)}}async function lE(t,i,r){if(hi(t.app))return Promise.reject(Sa(t));const s=Ra(t),u=await cE(s,i,La(r));return new $N(u,m=>$g(s,m))}async function cE(t,i,r){if(!t._getRecaptchaConfig())try{await lN(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof i=="string"?s={phoneNumber:i}:s=i,"session"in s){const u=s.session;if("phoneNumber"in s){ye(u.type==="enroll",t,"internal-error");const m={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Op(t,m,"mfaSmsEnrollment",async(_,C)=>{if(C.phoneEnrollmentInfo.captchaResponse===kc){ye(r?.type===Oc,_,"argument-error");const T=await zp(_,C,r);return aw(_,T)}return aw(_,C)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{ye(u.type==="signin",t,"internal-error");const m=s.multiFactorHint?.uid||s.multiFactorUid;ye(m,t,"missing-multi-factor-info");const g={mfaPendingCredential:u.credential,mfaEnrollmentId:m,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Op(t,g,"mfaSmsSignIn",async(C,T)=>{if(T.phoneSignInInfo.captchaResponse===kc){ye(r?.type===Oc,C,"argument-error");const O=await zp(C,T,r);return sw(C,O)}return sw(C,T)},"PHONE_PROVIDER").catch(C=>Promise.reject(C))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Op(t,u,"sendVerificationCode",async(y,_)=>{if(_.captchaResponse===kc){ye(r?.type===Oc,y,"argument-error");const C=await zp(y,_,r);return nw(y,C)}return nw(y,_)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{r?._reset()}}async function VN(t,i){const r=La(t);if(hi(r.auth.app))return Promise.reject(Sa(r.auth));await XT(r,i)}async function zp(t,i,r){ye(r.type===Oc,t,"argument-error");const s=await r.verify();ye(typeof s=="string",t,"argument-error");const u={...i};if("phoneEnrollmentInfo"in u){const m=u.phoneEnrollmentInfo.phoneNumber,g=u.phoneEnrollmentInfo.captchaResponse,b=u.phoneEnrollmentInfo.clientType,y=u.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:s,captchaResponse:g,clientType:b,recaptchaVersion:y}}),u}else if("phoneSignInInfo"in u){const m=u.phoneSignInInfo.captchaResponse,g=u.phoneSignInInfo.clientType,b=u.phoneSignInInfo.recaptchaVersion;return Object.assign(u,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:m,clientType:g,recaptchaVersion:b}}),u}else return Object.assign(u,{recaptchaToken:s}),u}class jr{constructor(i){this.providerId=jr.PROVIDER_ID,this.auth=Ra(i)}verifyPhoneNumber(i,r){return cE(this.auth,i,La(r))}static credential(i,r){return Lo._fromVerification(i,r)}static credentialFromResult(i){const r=i;return jr.credentialFromTaggedObject(r)}static credentialFromError(i){return jr.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{phoneNumber:r,temporaryProof:s}=i;return r&&s?Lo._fromTokenResponse(r,s):null}}jr.PROVIDER_ID="phone";jr.PHONE_SIGN_IN_METHOD="phone";function ZN(t,i){return i?xa(i):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class $0 extends U0{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return Bs(i,this._buildIdpRequest())}_linkToIdToken(i,r){return Bs(i,this._buildIdpRequest(r))}_getReauthenticationResolver(i){return Bs(i,this._buildIdpRequest())}_buildIdpRequest(i){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(r.idToken=i),r}}function qN(t){return JT(t.auth,new $0(t),t.bypassAuthState)}function GN(t){const{auth:i,user:r}=t;return ye(r,i,"internal-error"),bN(r,new $0(t),t.bypassAuthState)}async function YN(t){const{auth:i,user:r}=t;return ye(r,i,"internal-error"),XT(r,new $0(t),t.bypassAuthState)}class uE{constructor(i,r,s,u,m=!1){this.auth=i,this.resolver=s,this.user=u,this.bypassAuthState=m,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(i,r)=>{this.pendingPromise={resolve:i,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(i){const{urlResponse:r,sessionId:s,postBody:u,tenantId:m,error:g,type:b}=i;if(g){this.reject(g);return}const y={auth:this.auth,requestUri:r,sessionId:s,tenantId:m||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(b)(y))}catch(_){this.reject(_)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return qN;case"linkViaPopup":case"linkViaRedirect":return YN;case"reauthViaPopup":case"reauthViaRedirect":return GN;default:Oa(this.auth,"internal-error")}}resolve(i){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const WN=new Qc(2e3,1e4);class Rs extends uE{constructor(i,r,s,u,m){super(i,r,u,m),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return ye(i,this.auth,"internal-error"),i}async onExecution(){ja(this.filter.length===1,"Popup operations only handle one event");const i=F0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const i=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(i,WN.get())};i()}}Rs.currentPopupAction=null;const KN="pendingRedirect",af=new Map;class XN extends uE{constructor(i,r,s=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let i=af.get(this.auth._key());if(!i){try{const s=await JN(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(s)}catch(r){i=()=>Promise.reject(r)}af.set(this.auth._key(),i)}return this.bypassAuthState||af.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const r=await this.auth._redirectUserForId(i.eventId);if(r)return this.user=r,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JN(t,i){const r=tD(i),s=eD(t);if(!await s._isAvailable())return!1;const u=await s._get(r)==="true";return await s._remove(r),u}function QN(t,i){af.set(t._key(),i)}function eD(t){return xa(t._redirectPersistence)}function tD(t){return nf(KN,t.config.apiKey,t.name)}async function nD(t,i,r=!1){if(hi(t.app))return Promise.reject(Sa(t));const s=Ra(t),u=ZN(s,i),g=await new XN(s,u,r).execute();return g&&!r&&(delete g.user._redirectEventId,await s._persistUserIfCurrent(g.user),await s._setRedirectUser(null,i)),g}const iD=600*1e3;class aD{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(i,s)&&(r=!0,this.sendToConsumer(i,s),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!rD(i)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=i,r=!0)),r}sendToConsumer(i,r){if(i.error&&!dE(i)){const s=i.error.code?.split("auth/")[1]||"internal-error";r.onError(Pn(this.auth,s))}else r.onAuthEvent(i)}isEventForConsumer(i,r){const s=r.eventId===null||!!i.eventId&&i.eventId===r.eventId;return r.filter.includes(i.type)&&s}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=iD&&this.cachedEventUids.clear(),this.cachedEventUids.has(lw(i))}saveEventToCache(i){this.cachedEventUids.add(lw(i)),this.lastProcessedEventTime=Date.now()}}function lw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(i=>i).join("-")}function dE({type:t,error:i}){return t==="unknown"&&i?.code==="auth/no-auth-event"}function rD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(t);default:return!1}}async function oD(t,i={}){return _i(t,"GET","/v1/projects",i)}const sD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lD=/^https?/;async function cD(t){if(t.config.emulator)return;const{authorizedDomains:i}=await oD(t);for(const r of i)try{if(uD(r))return}catch{}Oa(t,"unauthorized-domain")}function uD(t){const i=Fg(),{protocol:r,hostname:s}=new URL(i);if(t.startsWith("chrome-extension://")){const g=new URL(t);return g.hostname===""&&s===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===i.replace("chrome-extension://",""):r==="chrome-extension:"&&g.hostname===s}if(!lD.test(r))return!1;if(sD.test(t))return s===t;const u=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(s)}const dD=new Qc(3e4,6e4);function cw(){const t=Mt().___jsl;if(t?.H){for(const i of Object.keys(t.H))if(t.H[i].r=t.H[i].r||[],t.H[i].L=t.H[i].L||[],t.H[i].r=[...t.H[i].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function fD(t){return new Promise((i,r)=>{function s(){cw(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{cw(),r(Pn(t,"network-request-failed"))},timeout:dD.get()})}if(Mt().gapi?.iframes?.Iframe)i(gapi.iframes.getContext());else if(Mt().gapi?.load)s();else{const u=GT("iframefcb");return Mt()[u]=()=>{gapi.load?s():r(Pn(t,"network-request-failed"))},B0(`${Q4()}?onload=${u}`).catch(m=>r(m))}}).catch(i=>{throw rf=null,i})}let rf=null;function hD(t){return rf=rf||fD(t),rf}const mD=new Qc(5e3,15e3),pD="__/auth/iframe",gD="emulator/auth/iframe",vD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bD(t){const i=t.config;ye(i.authDomain,t,"auth-domain-config-required");const r=i.emulator?I0(i,gD):`https://${t.config.authDomain}/${pD}`,s={apiKey:i.apiKey,appName:t.name,v:Jc},u=yD.get(t.config.apiHost);u&&(s.eid=u);const m=t._getFrameworks();return m.length&&(s.fw=m.join(",")),`${r}?${tl(s).slice(1)}`}async function _D(t){const i=await hD(t),r=Mt().gapi;return ye(r,t,"internal-error"),i.open({where:document.body,url:bD(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vD,dontclear:!0},s=>new Promise(async(u,m)=>{await s.restyle({setHideOnLeave:!1});const g=Pn(t,"network-request-failed"),b=Mt().setTimeout(()=>{m(g)},mD.get());function y(){Mt().clearTimeout(b),u(s)}s.ping(y).then(y,()=>{m(g)})}))}const xD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wD=500,SD=600,TD="_blank",ED="http://localhost";class uw{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CD(t,i,r,s=wD,u=SD){const m=Math.max((window.screen.availHeight-u)/2,0).toString(),g=Math.max((window.screen.availWidth-s)/2,0).toString();let b="";const y={...xD,width:s.toString(),height:u.toString(),top:m,left:g},_=dn().toLowerCase();r&&(b=UT(_)?TD:r),DT(_)&&(i=i||ED,y.scrollbars="yes");const C=Object.entries(y).reduce((O,[I,z])=>`${O}${I}=${z},`,"");if($4(_)&&b!=="_self")return AD(i||"",b),new uw(null);const T=window.open(i||"",b,C);ye(T,t,"popup-blocked");try{T.focus()}catch{}return new uw(T)}function AD(t,i){const r=document.createElement("a");r.href=t,r.target=i;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}const kD="__/auth/handler",OD="emulator/auth/handler",jD=encodeURIComponent("fac");async function dw(t,i,r,s,u,m){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const g={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:s,v:Jc,eventId:u};if(i instanceof WT){i.setDefaultLanguage(t.languageCode),g.providerId=i.providerId||"",fI(i.getCustomParameters())||(g.customParameters=JSON.stringify(i.getCustomParameters()));for(const[C,T]of Object.entries({}))g[C]=T}if(i instanceof tu){const C=i.getScopes().filter(T=>T!=="");C.length>0&&(g.scopes=C.join(","))}t.tenantId&&(g.tid=t.tenantId);const b=g;for(const C of Object.keys(b))b[C]===void 0&&delete b[C];const y=await t._getAppCheckToken(),_=y?`#${jD}=${encodeURIComponent(y)}`:"";return`${zD(t)}?${tl(b).slice(1)}${_}`}function zD({config:t}){return t.emulator?I0(t,OD):`https://${t.authDomain}/${kD}`}const Lp="webStorageSupport";class LD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=nD,this._overrideRedirectResult=QN}async _openPopup(i,r,s,u){ja(this.eventManagers[i._key()]?.manager,"_initialize() not called before _openPopup()");const m=await dw(i,r,s,Fg(),u);return CD(i,m,F0())}async _openRedirect(i,r,s,u){await this._originValidation(i);const m=await dw(i,r,s,Fg(),u);return AN(m),new Promise(()=>{})}_initialize(i){const r=i._key();if(this.eventManagers[r]){const{manager:u,promise:m}=this.eventManagers[r];return u?Promise.resolve(u):(ja(m,"If manager is not set, promise should be"),m)}const s=this.initAndGetManager(i);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(i){const r=await _D(i),s=new aD(i);return r.register("authEvent",u=>(ye(u?.authEvent,i,"invalid-auth-event"),{status:s.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:s},this.iframes[i._key()]=r,s}_isIframeWebStorageSupported(i,r){this.iframes[i._key()].send(Lp,{type:Lp},u=>{const m=u?.[0]?.[Lp];m!==void 0&&r(!!m),Oa(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const r=i._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=cD(i)),this.originValidationPromises[r]}get _shouldInitProactively(){return ZT()||BT()||D0()}}const RD=LD;var fw="@firebase/auth",hw="1.13.5";class PD{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const r=this.auth.onIdTokenChanged(s=>{i(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(i,r),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const r=this.internalListeners.get(i);r&&(this.internalListeners.delete(i),r(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function MD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ID(t){Dc(new qs("auth",(i,{options:r})=>{const s=i.getProvider("app").getImmediate(),u=i.getProvider("heartbeat"),m=i.getProvider("app-check-internal"),{apiKey:g,authDomain:b}=s.options;ye(g&&!g.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:g,authDomain:b,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qT(t)},_=new W4(s,u,m,y);return uN(_,r),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,r,s)=>{i.getProvider("auth-internal").initialize()})),Dc(new qs("auth-internal",i=>{const r=Ra(i.getProvider("auth").getImmediate());return(s=>new PD(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Is(fw,hw,MD(t)),Is(fw,hw,"esm2020")}const ND=300,DD=vT("authIdTokenMaxAge")||ND;let mw=null;const BD=t=>async i=>{const r=i&&await i.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>DD)return;const u=r?.token;mw!==u&&(mw=u,await fetch(t,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function UD(t=p4()){const i=wT(t,"auth");if(i.isInitialized())return i.getImmediate();const r=cN(t,{popupRedirectResolver:RD,persistence:[IN,TN,nE]}),s=vT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const m=new URL(s,location.origin);if(location.origin===m.origin){const g=BD(m.toString());xN(r,g,()=>g(r.currentUser)),_N(r,b=>g(b))}}const u=nI("auth");return u&&dN(r,`http://${u}`),r}function FD(){return document.getElementsByTagName("head")?.[0]??document}K4({loadJS(t){return new Promise((i,r)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=i,s.onerror=u=>{const m=Pn("internal-error");m.customData=u,r(m)},s.type="text/javascript",s.charset="UTF-8",FD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ID("Browser");var HD="firebase",$D="12.18.0";Is(HD,$D,"app");const VD={apiKey:"AIzaSyDhXRm1n4Bt7k8byyyaFhsAHXPoY42wNDE",authDomain:"outstandingspots.firebaseapp.com",projectId:"outstandingspots",storageBucket:"outstandingspots.firebasestorage.app",messagingSenderId:"998097994110",appId:"1:998097994110:web:19e8c4c3121ef7bc9af32f"},ZD=ST(VD),an=UD(ZD);an.languageCode="ko";const qD=w.div`
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
`,GD=w.p`
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
`,YD=w.p`
    font-size: 0.75rem;
    color: #5D53F1;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$spacer:t})=>t&&"display: none;"}
    }
`,WD=w.div`
    flex: 1;
    min-width: 0;
`,KD=w.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: ${({$inactive:t})=>t?"#EEECFA":"white"};
`,XD=w.input`
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
`,JD=w.button`
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
`;function xf({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engButtonText:u,korButtonText:m,value:g,onChange:b,onButtonClick:y,inputDisabled:_,inputReadOnly:C,buttonDisabled:T,buttonId:O,inputType:I="text",maxLength:z,inputMode:P,description:U}){const{language:B}=Pe(),$=!!(_||C),K=U===" ";return h.jsxs(qD,{children:[h.jsxs(GD,{$hasDescription:!!U&&!K,children:[" ",B==="eng"?t:i," "]}),h.jsxs(WD,{children:[h.jsxs(KD,{$inactive:$,children:[h.jsx(XD,{type:I,value:g,$inactive:$,disabled:_,readOnly:C,maxLength:z,inputMode:P,placeholder:B==="eng"?r:s,onChange:ue=>{_||C||b?.(ue.target.value)}}),h.jsx(JD,{id:O,type:"button",disabled:T,onClick:y,children:B==="eng"?u:m})]}),U&&h.jsxs(YD,{$spacer:K,children:[" ",U," "]})]})]})}function Vg(t){const i=t.replace(/\D/g,"");if(!i.startsWith("0"))throw new Error("전화번호를 다시 확인해주세요 Invalid phone number");return`+82${i.slice(1)}`}function fE(t){const i=t.replace(/\D/g,"");return/^01[016789]\d{7,8}$/.test(i)}function hE(){return window.location.hostname==="localhost"}function Zg(){return window.location.href.replace("://localhost","://127.0.0.1")}function V0(t){return t&&typeof t=="object"&&"code"in t?String(t.code):""}function QD(t,i){const r=V0(t);return r==="auth/invalid-verification-code"?i==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.":r==="auth/code-expired"||r==="auth/session-expired"?i==="eng"?"The verification code expired. Please send it again.":"인증번호가 만료되었습니다. 다시 전송해주세요.":r==="auth/credential-already-in-use"||r==="auth/account-exists-with-different-credential"?i==="eng"?"This phone number is already in use.":"이미 사용 중인 전화번호입니다.":t instanceof Error&&t.message&&!r.startsWith("auth/")?t.message:i==="eng"?`Failed to change the phone number.${r?` (${r})`:""}`:`전화번호 변경에 실패했습니다.${r?` (${r})`:""}`}function mE(t,i){const r=V0(t);return r==="auth/invalid-phone-number"?i==="eng"?"Enter a valid phone number.":"올바른 전화번호를 입력해 주세요.":r==="auth/too-many-requests"?i==="eng"?"Too many attempts. Try again later.":"시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.":r==="auth/operation-not-allowed"?i==="eng"?"Phone sign-in is not enabled in Firebase.":"Firebase에서 전화번호 로그인이 꺼져 있습니다.":r==="auth/captcha-check-failed"||r==="auth/invalid-app-credential"?i==="eng"?"reCAPTCHA failed. Use 127.0.0.1 instead of localhost, and add 127.0.0.1 in Firebase authorized domains.":"reCAPTCHA 확인에 실패했습니다. localhost 대신 127.0.0.1로 열고, Firebase 승인된 도메인에 127.0.0.1을 추가해 주세요.":i==="eng"?`Failed to send the verification code.${r?` (${r})`:""}`:`인증번호 전송에 실패했습니다.${r?` (${r})`:""}`}const e6=w.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`,t6=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,n6=w.div`
    position: absolute;
    width: 1px;
    height: 1px;
    left: -9999px;
    top: 0;
`;function i6({phone:t,onPhoneChange:i,onVerified:r}){const{language:s}=Pe(),[u,m]=k.useState(""),[g,b]=k.useState(!1),[y,_]=k.useState(!1),[C,T]=k.useState(!1),O=k.useRef(null),I=k.useRef(null),z=k.useRef(null);k.useEffect(()=>{an.languageCode=s==="eng"?"en":"ko"},[s]),k.useEffect(()=>()=>{I.current?.clear(),I.current=null},[]);const P=()=>{if(I.current)return I.current;if(!z.current)throw new Error("reCAPTCHA container is missing.");const ue=new sE(an,z.current,{size:"invisible"});return I.current=ue,ue},U=()=>{I.current?.clear(),I.current=null},B=async()=>{if(hE()){alert(s==="eng"?`Firebase phone auth does not work on localhost. Open ${Zg()}`:`Firebase 전화번호 인증은 localhost에서 동작하지 않습니다. ${Zg()} 로 열어 주세요.`);return}if(!fE(t)){alert(s==="eng"?"Enter a valid Korean number.":"올바른 전화번호를 입력해주세요.");return}try{T(!0);const ue=Vg(t),J=P(),se=await lE(an,ue,J);O.current=se,b(!0),alert(s==="eng"?"The verification code has been sent.":"인증번호가 전송되었습니다.")}catch(ue){console.error(ue),U(),alert(mE(ue,s))}finally{T(!1)}},$=async()=>{if(!O.current){alert(s==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}try{T(!0);const J=await(await O.current.confirm(u)).user.getIdToken();_(!0),r(J)}catch(ue){console.error(ue),alert(s==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.")}finally{T(!1)}},K=ue=>{y||(i(ue.replace(/\D/g,"")),_(!1),b(!1),m(""),O.current=null)};return h.jsxs(e6,{children:[h.jsxs(t6,{children:[h.jsx(xf,{engTitle:"Phone",korTitle:"전화번호",engPlaceholder:"Enter only numbers.",korPlaceholder:"- 없이 숫자만 입력해주세요.",engButtonText:g?"Resend":"Verify",korButtonText:g?"재전송":"인증하기",value:t,onChange:K,onButtonClick:B,inputReadOnly:y,buttonDisabled:C||y,inputType:"tel",description:" "}),h.jsx(xf,{engTitle:"Confirm",korTitle:"전화번호 확인",engPlaceholder:"Enter verification code.",korPlaceholder:"문자로 받은 인증번호를 입력해주세요.",engButtonText:"Submit",korButtonText:"제출하기",value:u,onChange:ue=>{y||m(ue.replace(/\D/g,""))},onButtonClick:$,inputDisabled:!g&&!y,inputReadOnly:y,buttonDisabled:C||!g||y,maxLength:6,inputMode:"numeric",description:y?s==="eng"?"Phone number verified.":"전화번호 인증이 완료되었습니다.":" "})]}),h.jsx(n6,{ref:z})]})}const a6=w.div`
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
`,r6=w.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,o6=w.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,s6=w.div`
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
`,l6=w.span`
    font-size: 1rem;
    color: #333;
`,c6=w.input`
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
`,u6=w.div`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,d6=w.button`
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
`,f6=w.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;function wf(t,i){return i==="eng"?t.storeName?.eng||t.storeName?.kor||"":t.storeName?.kor||t.storeName?.eng||""}function Sf(t,i){return`${t.name} · ${wf(t,i)} · ${t.phone}`}function h6(t,i){const r=i.trim().toLowerCase();if(!r)return!0;const s=r.replace(/\D/g,""),u=t.phone.replace(/\D/g,"");return[t.name,t.phone,t.storeName?.kor??"",t.storeName?.eng??"",Sf(t,"kor"),Sf(t,"eng")].join(" ").toLowerCase().includes(r)||s.length>0&&u.includes(s)}function m6({searchValue:t,onChangeSearchValue:i,owners:r}){const{language:s}=Pe(),[u,m]=k.useState(!1),[g,b]=k.useState(0),[y,_]=k.useState({top:0,left:0,width:0}),C=k.useRef(null),T=k.useMemo(()=>{const z=t.trim();return z?r.filter(P=>h6(P,z)).slice(0,8):[]},[r,t]),O=()=>{const z=C.current?.getBoundingClientRect();z&&_({top:z.bottom+4,left:z.left,width:z.width})},I=z=>{i(Sf(z,s)),m(!1)};return h.jsxs(a6,{children:[h.jsxs(r6,{children:[" ",s==="eng"?"Search":"검색"," "]}),h.jsx(o6,{children:h.jsxs(s6,{ref:C,children:[h.jsx(l6,{children:" 🔍 "}),h.jsx(c6,{type:"text",id:"ownerSearchBar",value:t,autoComplete:"off",onChange:z=>{i(z.target.value),m(!0),b(0),O()},onFocus:()=>{m(!0),O()},onBlur:()=>{window.setTimeout(()=>m(!1),120)},onKeyDown:z=>{if(!(!u||T.length===0)){if(z.key==="ArrowDown")z.preventDefault(),b(P=>Math.min(P+1,T.length-1));else if(z.key==="ArrowUp")z.preventDefault(),b(P=>Math.max(P-1,0));else if(z.key==="Enter"){z.preventDefault();const P=T[g]??T[0];P&&I(P)}}},placeholder:s==="kor"?"이름/매장명/전화번호 검색":"Search name/store name/phone number"})]})}),u&&t.trim()!==""&&n1.createPortal(h.jsx(u6,{style:{top:y.top,left:y.left,width:y.width},children:T.length===0?h.jsx(f6,{children:s==="eng"?"No matching owner.":"일치하는 사장님이 없습니다."}):T.map((z,P)=>h.jsx(d6,{type:"button",className:P===g?"active":"",onMouseDown:U=>{U.preventDefault(),I(z)},children:Sf(z,s)},z._id))}),document.body)]})}const p6=w.div`
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
`,g6=w.div`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,v6=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,y6=w.p`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,b6=w.div`
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
`,_6=w.div`
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
`,Z0=w.div`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,x6=w(Z0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,w6=w.div`
    min-height: 0;
`,S6=w(Z0)`
    flex-shrink: 0;
`,T6=w(Z0)`
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;
`,qg=w.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,E6=w(qg)`
    margin-bottom: 0.9rem;
`,pw=w.p`
    font-size: 0.8rem;
    color: ${({$success:t})=>t?"#22a06b":"#8a84a0"};
    margin: 0 0 0.55rem 0;
`,dc=w.div`
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
`,C6=w.div`
    min-width: 0;
    flex: 1;
`,A6=w.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,Os=w.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,Fd=w.p`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,pE=w.button`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,of=w.button`
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
`,k6=w(pE)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,O6=w(of)`
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
`,j6=w.input`
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
`,z6=w.span`
    display: inline-flex;
    align-items: center;
    background: #e8f8ef;
    color: #1f9d57;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 600;
`,L6=w.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0 0 0.7rem 0;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`,Rp=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 4.5rem;
`,Pp=w.span`
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
`,Mp=w.span`
    font-size: 0.7rem;
    color: ${({$active:t})=>t?"#7965EA":"#8a84a0"};
    text-align: center;
`,gw=w.div`
    flex: 1;
    height: 2px;
    margin-bottom: 1.1rem;
    background: ${({$done:t})=>t?"#7965EA":"#e4e0f2"};
`,vw=w.div`
    display: flex;
    align-items: flex-end;
    gap: 0.6rem;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: stretch;
    }
`,Gg=w.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,fc=w.p`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,Yg=w.input`
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
`,R6=w.div`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,P6=w(Yg)`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,Ip=w.button`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,M6=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,Np=w(Gg)`
    gap: 0.2rem;
`,Dp=w(R6)`
    min-height: 2rem;
`,Bp=w(P6)`
    padding: 0.35rem 0.6rem;
`,I6=w.p`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,N6=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
`,D6=w.div`
    flex-shrink: 0;
    margin-top: 0.65rem;
    padding: 0.65rem 0.8rem 0.6rem;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.45rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`,B6=w.p`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,U6=w.p`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,F6=w.button`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,H6=w.div`
    display: flex;
    justify-content: flex-end;
`;function $6(){const{language:t}=Pe(),{owner:i,updateOwner:r,logoutOwner:s}=Mr(),{stores:u}=Fi(),m=Qt(),g=u.find(we=>we._id===i?.storeId),b=i?g?t==="eng"?`${g.name.eng} ${g.branch.eng}`.trim():`${g.name.kor} ${g.branch.kor}`.trim():wf(i,t):"",[y,_]=k.useState(!1),[C,T]=k.useState(i?.name??""),[O,I]=k.useState(!1),[z,P]=k.useState(1),[U,B]=k.useState(""),[$,K]=k.useState(""),[ue,J]=k.useState(!1),se=k.useRef(null),Q=k.useRef(null),he=k.useRef(null),[Ce,Ue]=k.useState(""),[ve,ke]=k.useState(""),[ge,ae]=k.useState(""),[Oe,D]=k.useState(!1),[le,re]=k.useState(!1),[Re,ce]=k.useState(!1),[j,Y]=k.useState(!1);if(k.useEffect(()=>{const we=sessionStorage.getItem("os-pending-phone");we&&(B(we),sessionStorage.removeItem("os-pending-phone"))},[]),k.useEffect(()=>{an.languageCode=t==="eng"?"en":"ko"},[t]),k.useEffect(()=>()=>{Q.current?.clear(),Q.current=null},[]),!i)return null;const ie=i,oe=()=>{if(Q.current)return Q.current;if(!he.current)throw new Error("reCAPTCHA container is missing.");const we=new sE(an,he.current,{size:"invisible"});return Q.current=we,we},fe=()=>{Q.current?.clear(),Q.current=null};async function pe(){const we=C.trim();if(!we){alert(t==="eng"?"Please enter your name.":"이름을 입력해주세요.");return}I(!0);try{const Et=await XR(ie._id,we);r(Et),_(!1)}catch(Et){console.error(Et),alert(t==="eng"?"Failed to update the name.":"이름 수정에 실패했습니다.")}finally{I(!1)}}async function ze(){if(hE()){sessionStorage.setItem("os-pending-phone",U);const we=Zg();alert(t==="eng"?`Firebase phone auth does not work on localhost. Open ${we}`:`Firebase 전화번호 인증은 localhost에서 동작하지 않습니다. ${we} 로 열어 주세요.`),window.location.replace(we);return}if(!fE(U)){alert(t==="eng"?"Enter a valid Korean number.":"올바른 전화번호를 입력해주세요.");return}try{J(!0);const we=await lE(an,Vg(U),oe());se.current=we,P(2),alert(t==="eng"?"The verification code has been sent.":"인증번호가 전송되었습니다.")}catch(we){console.error(we),fe(),alert(mE(we,t))}finally{J(!1)}}async function nt(){const we=$.trim();if(!we){alert(t==="eng"?"Please enter the verification code.":"인증번호를 입력해주세요.");return}try{J(!0);const Et=Vg(U);if(an.currentUser?.phoneNumber!==Et){const $i=se.current;if(!$i){alert(t==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}const wi=jr.credential($i.verificationId,we);if(an.currentUser)try{await VN(an.currentUser,wi)}catch(Ia){const Vi=V0(Ia);if(Vi!=="auth/credential-already-in-use"&&Vi!=="auth/account-exists-with-different-credential")throw Ia;await an.signOut(),await $g(an,jr.credential($i.verificationId,we))}else await $g(an,wi)}const Nn=an.currentUser;if(!Nn)throw new Error(t==="eng"?"Phone verification failed.":"전화번호 인증에 실패했습니다.");const Pa=await Nn.getIdToken(!0),Ma=await JR(ie._id,Pa);r(Ma),P(3)}catch(Et){console.error(Et),alert(QD(Et,t))}finally{J(!1)}}async function Qe(){if(!Ce||!ve||!ge){alert(t==="eng"?"Please fill in all password fields.":"비밀번호를 모두 입력해주세요.");return}if(!cT(ve)){alert(t==="eng"?"Use 8-20 characters including letters and numbers.":"영문자, 숫자를 포함한 8-20자로 입력해주세요.");return}if(ve!==ge){alert(t==="eng"?"The new passwords do not match.":"새 비밀번호가 일치하지 않습니다.");return}Y(!0);try{try{await lT(ie.id,Ce)}catch(we){if(we instanceof Nc){alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다.");return}throw we}await QR(ie._id,Ce,ve),Ue(""),ke(""),ae(""),alert(t==="eng"?"Password has been changed.":"비밀번호가 변경되었습니다.")}catch(we){console.error(we);const Et=we instanceof Error?we.message:"";Et.includes("현재 비밀번호")||Et.toLowerCase().includes("current password")?alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다."):alert(Et||(t==="eng"?"Failed to change the password.":"비밀번호 변경에 실패했습니다."))}finally{Y(!1)}}async function kt(){if(window.confirm(t==="eng"?"Are you sure you want to delete this account? This cannot be undone.":"정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다."))try{await eP(ie._id),s(),m("/login")}catch(Et){console.error(Et),alert(t==="eng"?"Failed to delete the account.":"계정 탈퇴에 실패했습니다.")}}const xi=i.status==="approved"?t==="eng"?"Approved":"승인 완료":i.status==="rejected"?t==="eng"?"Rejected":"거절됨":t==="eng"?"Pending":"승인 대기";return h.jsxs(p6,{children:[h.jsxs(g6,{children:[h.jsxs(v6,{children:[" ",t==="eng"?"Account Management":"계정 관리"," "]}),h.jsxs(y6,{children:[" ",t==="eng"?"You can manage your account and security information.":"내 계정과 보안 정보를 관리할 수 있습니다."," "]})]}),h.jsxs(b6,{children:[h.jsxs(x6,{children:[h.jsxs(qg,{children:[" ",t==="eng"?"Basic information":"기본 정보"," "]}),h.jsxs(w6,{children:[h.jsx(dc,{$stack:y,children:y?h.jsxs(C6,{children:[h.jsxs(Os,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(A6,{children:[h.jsx(j6,{value:C,onChange:we=>T(we.target.value)}),h.jsxs(k6,{type:"button",onClick:()=>{_(!1),T(i.name)},children:[" ",t==="eng"?"Cancel":"취소"," "]}),h.jsx(O6,{type:"button",disabled:O,onClick:()=>{pe()},children:t==="eng"?"Save":"저장"})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{children:[h.jsxs(Os,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(Fd,{children:[" ",i.name," "]})]}),h.jsxs(pE,{type:"button",onClick:()=>{T(i.name),_(!0)},children:[" ",t==="eng"?"Edit":"수정"," "]})]})}),h.jsx(dc,{children:h.jsxs("div",{children:[h.jsxs(Os,{children:[" ",t==="eng"?"ID":"아이디"," "]}),h.jsxs(Fd,{children:[" ",i.id," "]})]})}),h.jsx(dc,{children:h.jsxs("div",{children:[h.jsxs(Os,{children:[" ",t==="eng"?"Phone number":"전화번호"," "]}),h.jsxs(Fd,{children:[" ",i.phone," "]})]})}),h.jsx(dc,{children:h.jsxs("div",{children:[h.jsxs(Os,{children:[" ",t==="eng"?"Assigned store":"담당 매장"," "]}),h.jsxs(Fd,{children:[" ",b," "]})]})}),h.jsx(dc,{children:h.jsxs("div",{children:[h.jsxs(Os,{children:[" ",t==="eng"?"Account status":"계정 상태"," "]}),h.jsxs(z6,{children:[" ",xi," "]})]})}),h.jsxs(D6,{children:[h.jsxs("div",{children:[h.jsxs(B6,{children:[" ",t==="eng"?"Delete account":"계정 탈퇴"," "]}),h.jsx(U6,{children:t==="eng"?"If you delete your account, your owner information will be removed and cannot be restored. Store information will be kept.":"탈퇴하면 사장님 계정 정보가 삭제되며 다시 복구할 수 없습니다. 담당 매장 정보는 유지됩니다."})]}),h.jsx(H6,{children:h.jsx(F6,{type:"button",onClick:()=>{kt()},children:t==="eng"?"Delete account":"계정 탈퇴"})})]})]})]}),h.jsxs(_6,{children:[h.jsxs(S6,{children:[h.jsxs(E6,{children:[" ",t==="eng"?"Change phone number":"전화번호 변경"," "]}),z===3&&h.jsx(pw,{$success:!0,children:t==="eng"?"Phone number has been changed.":"전화번호가 변경되었습니다."}),h.jsxs(L6,{children:[h.jsxs(Rp,{$active:z===1,$done:z>1,children:[h.jsx(Pp,{$active:z===1,$done:z>1,children:"1"}),h.jsx(Mp,{$active:z===1,children:t==="eng"?"New number":"새 번호 입력"})]}),h.jsx(gw,{$done:z>1}),h.jsxs(Rp,{$active:z===2,$done:z>2,children:[h.jsx(Pp,{$active:z===2,$done:z>2,children:"2"}),h.jsx(Mp,{$active:z===2,children:t==="eng"?"Verify code":"인증번호 확인"})]}),h.jsx(gw,{$done:z>2}),h.jsxs(Rp,{$active:z===3,$done:z===3,children:[h.jsx(Pp,{$active:z===3,$done:z===3,children:"✓"}),h.jsx(Mp,{$active:z===3,children:t==="eng"?"Done":"변경 완료"})]})]}),z===1&&h.jsxs(vw,{children:[h.jsxs(Gg,{children:[h.jsxs(fc,{children:[" ",t==="eng"?"New phone number":"새 전화번호"," "]}),h.jsx(Yg,{type:"tel",value:U,placeholder:t==="eng"?"Enter only numbers.":"'-' 없이 숫자만 입력해주세요",onChange:we=>B(we.target.value.replace(/\D/g,""))})]}),h.jsx(of,{type:"button",disabled:ue,onClick:()=>{ze()},children:t==="eng"?"Send code":"인증번호 전송"})]}),z===2&&h.jsxs(vw,{children:[h.jsxs(Gg,{children:[h.jsxs(fc,{children:[" ",t==="eng"?"Verification code":"인증번호 확인"," "]}),h.jsx(Yg,{type:"text",inputMode:"numeric",maxLength:6,value:$,placeholder:t==="eng"?"Enter the code":"인증번호를 입력해주세요",onChange:we=>K(we.target.value.replace(/\D/g,""))})]}),h.jsx(of,{type:"button",disabled:ue,onClick:()=>{nt()},children:t==="eng"?"Confirm":"확인"})]}),h.jsx("div",{ref:he,style:{position:"absolute",width:1,height:1,left:-9999}})]}),h.jsxs(T6,{children:[h.jsxs(qg,{children:[" ",t==="eng"?"Change password":"비밀번호 변경"," "]}),h.jsx(pw,{children:t==="eng"?"8-20 characters including letters and numbers":"영문자, 숫자 포함 8-20자"}),h.jsxs(M6,{children:[h.jsxs(Np,{children:[h.jsxs(fc,{children:[" ",t==="eng"?"Current password":"현재 비밀번호"," "]}),h.jsxs(Dp,{children:[h.jsx(Bp,{type:Oe?"text":"password",value:Ce,onChange:we=>Ue(we.target.value)}),h.jsx(Ip,{type:"button",onClick:()=>D(we=>!we),children:h.jsx(Kn,{icon:Tn.far.eye})})]})]}),h.jsxs(Np,{children:[h.jsxs(fc,{children:[" ",t==="eng"?"New password":"새 비밀번호"," "]}),h.jsxs(Dp,{children:[h.jsx(Bp,{type:le?"text":"password",value:ve,onChange:we=>ke(we.target.value)}),h.jsx(Ip,{type:"button",onClick:()=>re(we=>!we),children:h.jsx(Kn,{icon:Tn.far.eye})})]})]}),h.jsxs(Np,{children:[h.jsxs(fc,{children:[" ",t==="eng"?"Confirm new password":"새 비밀번호 확인"," "]}),h.jsxs(Dp,{children:[h.jsx(Bp,{type:Re?"text":"password",value:ge,onChange:we=>ae(we.target.value)}),h.jsx(Ip,{type:"button",onClick:()=>ce(we=>!we),children:h.jsx(Kn,{icon:Tn.far.eye})})]}),ge.length>0&&h.jsx(I6,{$valid:ge===ve,children:ge===ve?t==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":t==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다."})]})]}),h.jsx(N6,{children:h.jsx(of,{type:"button",disabled:j,onClick:()=>{Qe()},children:t==="eng"?"Change password":"비밀번호 변경"})})]})]})]})]})}function V6({children:t}){const{isAdmin:i}=Gc();return i?t:h.jsx(a0,{to:"/login",replace:!0})}function Z6({children:t}){const{isOwner:i}=Mr();return i?t:h.jsx(a0,{to:"/login",replace:!0})}function q6({children:t}){const{isStudent:i}=bi();return i?t:h.jsx(a0,{to:"/login",replace:!0})}const G6=w.div`
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
`,Y6=w.div`
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
`,W6=w.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,Up=w(wa)`
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
`,Fp=w.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,K6=w.img`
    width: 0.9rem;
    height: 0.9rem;
`,yw=w.img`
    width: 1rem;
    height: 1rem;
`,X6=w.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,J6=w.button`
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
`;function Q6(){const{pathname:t}=rn(),i=Qt(),{language:r}=Pe(),{logoutStudent:s}=bi(),u=t==="/student"||t==="/student/",m=u?"/coloredStoreIcon.png":"/storePageIcon.png",g=t==="/student/recent"?"/fileIcon.png":"/blackFileIcon.png",b=t==="/student/account"?"/coloredMyPageIcon.png":"/myPageIcon.png";return h.jsxs(G6,{children:[h.jsxs(Y6,{children:[h.jsxs(W6,{children:[" ",r==="eng"?"My page":"마이페이지"," "]}),h.jsxs(Up,{to:"/student",$selected:u,children:[h.jsxs(Fp,{children:[" ",h.jsx(K6,{src:m,alt:"favorites icon"})," "]}),r==="eng"?"Favorite stores":"즐겨찾기한 매장"]}),h.jsxs(Up,{to:"/student/recent",$selected:t==="/student/recent",children:[h.jsxs(Fp,{children:[" ",h.jsx(yw,{src:g,alt:"recent icon"})," "]}),r==="eng"?"Recently viewed":"최근 본 매장"]}),h.jsxs(Up,{to:"/student/account",$selected:t==="/student/account",children:[h.jsxs(Fp,{children:[" ",h.jsx(yw,{src:b,alt:"account icon"})," "]}),r==="eng"?"Account Management":"계정 관리"]})]}),h.jsx(X6,{children:h.jsx(J6,{onClick:()=>{s(),i("/login")},children:r==="eng"?"Logout":"로그아웃"})})]})}const e7=w.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,t7=w.div`
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
`;function n7(){return h.jsxs(e7,{children:[h.jsx(Q6,{}),h.jsx(t7,{children:h.jsx(r0,{})})]})}const i7=w.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,a7=w.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,jc=w.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,hc=w.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,r7=w.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,o7=w(jc)`
    width: 4.5rem;
`,s7=w(jc)`
    width: 10rem;
`,Wg=w.button`
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
`,l7=w.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,c7=w.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,u7=w.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,d7=w.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,f7=w.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,h7=w.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,bw=w.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,m7=w.div`
    display: flex;
    gap: 0.45rem;
`,_w=w(Wg)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function p7({stores:t}){const{language:i}=Pe(),r=Qt(),{student:s,updateStudent:u}=bi();async function m(g){if(s?._id)try{const b=await H1(s._id,g._id);u(b),alert(i==="eng"?"Removed from favorites.":"즐겨찾기에서 해제되었습니다.")}catch(b){console.error(b),alert(i==="eng"?"Failed to remove the favorite.":"즐겨찾기 해제에 실패했습니다.")}}return h.jsxs(h.Fragment,{children:[h.jsx(i7,{children:h.jsxs(a7,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(o7,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(jc,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(jc,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs(jc,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(s7,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(g=>h.jsxs("tr",{children:[h.jsx(hc,{children:h.jsx(r7,{src:Ea(g.photo),alt:i==="eng"?g.name.eng:g.name.kor})}),h.jsxs(hc,{children:[" ",i==="eng"?`${g.name.eng} ${g.branch.eng}`:`${g.name.kor} ${g.branch.kor}`," "]}),h.jsxs(hc,{children:[" ",i==="eng"?g.theme?.eng:g.theme?.kor," "]}),h.jsxs(hc,{children:[" ",i==="eng"?g.discount.eng:g.discount.kor," "]}),h.jsxs(hc,{children:[h.jsx(Wg,{type:"button",onClick:()=>r(`/?store=${g._id}`),children:i==="eng"?"View":"보기"}),h.jsx(Wg,{type:"button",onClick:()=>{m(g)},children:i==="eng"?"Delete":"삭제"})]})]},g._id))})]})}),h.jsx(l7,{children:t.map(g=>h.jsxs(c7,{children:[h.jsxs(u7,{children:[h.jsx(d7,{src:Ea(g.photo),alt:i==="eng"?g.name.eng:g.name.kor}),h.jsxs(f7,{children:[h.jsxs(h7,{children:[" ",i==="eng"?`${g.name.eng} ${g.branch.eng}`:`${g.name.kor} ${g.branch.kor}`," "]}),h.jsxs(bw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?g.theme?.eng:g.theme?.kor," "]}),h.jsxs(bw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?g.discount.eng:g.discount.kor," "]})]})]}),h.jsxs(m7,{children:[h.jsx(_w,{type:"button",onClick:()=>r(`/?store=${g._id}`),children:i==="eng"?"View":"보기"}),h.jsx(_w,{type:"button",onClick:()=>{m(g)},children:i==="eng"?"Delete":"삭제"})]})]},g._id))})]})}const g7=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,v7=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,y7=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,b7=w.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function _7(){const{language:t}=Pe();return h.jsx(g7,{children:h.jsxs(v7,{children:[h.jsxs(y7,{children:[" ",t==="eng"?"Favorite stores":"즐겨찾기한 매장"," "]}),h.jsxs(b7,{children:[" ",t==="eng"?"Shows the stores you favorited on the map page.":"지도 페이지에서 즐겨찾기를 누른 매장들을 보여줍니다."," "]})]})})}const x7=w.div`
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
`,w7=w.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,S7=w.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,T7=w.div`
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
`,E7=w.span`
    font-size: 1rem;
    color: #333;
`,C7=w.input`
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
`;function gE({searchValue:t,onChangeSearchValue:i}){const{language:r}=Pe();return h.jsxs(x7,{children:[h.jsxs(w7,{children:[" ",r==="eng"?"Search":"검색"," "]}),h.jsx(S7,{children:h.jsxs(T7,{children:[h.jsx(E7,{children:" 🔍 "}),h.jsx(C7,{type:"text",id:"searchBar",value:t,onChange:s=>i(s.target.value),placeholder:r==="kor"?"매장 이름 혹은 테마로 검색해보세요.":"Search by store name or theme."})]})})]})}const A7=w.div`
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
`,k7=w.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
    box-sizing: border-box;
    padding-right: 0.7rem;

    @media (max-width: 1024px) {
        display: none;
    }
`,O7=w.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`,j7=w.button`
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
`,z7=w.ul`
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
`,xw=w.li`
    padding: 0.45rem 0.7rem;
    font-size: 0.85rem;
    text-align: center;
    cursor: pointer;
    color: #2E2A63;
    background: ${({$selected:t})=>t?"#F1EDFC":"white"};

    &:hover {
        background: #F1EDFC;
    }
`;function vE({selectedCategory:t,onChangeSelectedCategory:i}){const{categories:r}=qc(),{language:s}=Pe(),[u,m]=k.useState(!1),g=k.useRef(null),b=s==="eng"?"All":"전체",y=t==="all"?b:r.find(_=>_.name.kor===t)?.name[s]??b;return k.useEffect(()=>{function _(C){g.current&&!g.current.contains(C.target)&&m(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),h.jsxs(A7,{children:[h.jsxs(k7,{children:[" ",s==="eng"?"Filter":"필터"," "]}),h.jsxs(O7,{ref:g,children:[h.jsx(j7,{type:"button",onClick:()=>m(_=>!_),children:y}),u&&h.jsxs(z7,{children:[h.jsx(xw,{$selected:t==="all",onClick:()=>{i("all"),m(!1)},children:b}),r.map(_=>h.jsx(xw,{$selected:t===_.name.kor,onClick:()=>{i(_.name.kor),m(!1)},children:s==="eng"?_.name.eng:_.name.kor},_._id))]})]})]})}const L7=w.div`
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
`,R7=w.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`,P7=w.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;function M7({count:t}){const{language:i}=Pe();return h.jsxs(L7,{children:[h.jsxs(R7,{children:[" ",i==="eng"?"Favorite stores number":"즐겨찾기한 매장 개수"," "]}),h.jsxs(P7,{children:[" ",t," "]})]})}const I7=w.div`
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
`;function N7({searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,favoriteCount:u}){return h.jsxs(I7,{children:[h.jsx(gE,{searchValue:t,onChangeSearchValue:i}),h.jsx(M7,{count:u}),h.jsx(vE,{selectedCategory:r,onChangeSelectedCategory:s})]})}const D7=w.div`
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
`,ww=w.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: center;
    font-size: 0.95rem;
    color: #6b6580;
`;function B7(){const[t,i]=k.useState(""),[r,s]=k.useState("all"),{stores:u}=Fi(),{student:m}=bi(),{language:g}=Pe(),b=m?.favorites??[],y=u.filter(T=>b.includes(T._id)),_=t.trim().toLowerCase(),C=y.filter(T=>{const O=r==="all"||T.category.kor===r;if(!_)return O;const I=T.name[g].toLowerCase(),z=T.theme[g].toLowerCase();return O&&(I.includes(_)||z.includes(_))});return h.jsxs(D7,{children:[h.jsx(_7,{}),h.jsx(N7,{searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s,favoriteCount:y.length}),y.length===0?h.jsxs(ww,{children:[" ",g==="eng"?"There are no favorite stores.":"즐겨찾기한 매장이 없습니다"," "]}):C.length===0?h.jsxs(ww,{children:[" ",g==="eng"?"There are no stores matching this filter.":"해당 필터링에 맞는 매장이 없습니다."," "]}):h.jsx(p7,{stores:C})]})}const U7=w.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,F7=w.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,zc=w.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,mc=w.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,H7=w.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,$7=w(zc)`
    width: 4.5rem;
`,V7=w(zc)`
    width: 6rem;
`,yE=w.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,Z7=w.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,q7=w.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,G7=w.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,Y7=w.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,W7=w.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,K7=w.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Sw=w.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,X7=w.div`
    display: flex;
    gap: 0.45rem;
`,J7=w(yE)`
    flex: 1;
    padding: 0.45rem 0.7rem;
`;function Q7({stores:t}){const{language:i}=Pe(),r=Qt();return h.jsxs(h.Fragment,{children:[h.jsx(U7,{children:h.jsxs(F7,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs($7,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(zc,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(zc,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs(zc,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(V7,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(s=>h.jsxs("tr",{children:[h.jsx(mc,{children:h.jsx(H7,{src:Ea(s.photo),alt:i==="eng"?s.name.eng:s.name.kor})}),h.jsxs(mc,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(mc,{children:[" ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(mc,{children:[" ",i==="eng"?s.discount.eng:s.discount.kor," "]}),h.jsx(mc,{children:h.jsx(yE,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}),h.jsx(Z7,{children:t.map(s=>h.jsxs(q7,{children:[h.jsxs(G7,{children:[h.jsx(Y7,{src:Ea(s.photo),alt:i==="eng"?s.name.eng:s.name.kor}),h.jsxs(W7,{children:[h.jsxs(K7,{children:[" ",i==="eng"?`${s.name.eng} ${s.branch.eng}`:`${s.name.kor} ${s.branch.kor}`," "]}),h.jsxs(Sw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?s.theme?.eng:s.theme?.kor," "]}),h.jsxs(Sw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?s.discount.eng:s.discount.kor," "]})]})]}),h.jsx(X7,{children:h.jsx(J7,{type:"button",onClick:()=>r(`/?store=${s._id}`),children:i==="eng"?"View":"보기"})})]},s._id))})]})}const e8=w.div`
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
`,t8=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,n8=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,i8=w.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`,a8=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
`,r8=w.p`
    font-size: 0.75rem;
    color: #6b6580;
    margin: 0;
`,o8=w.select`
    width: 12rem;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.85rem;
`,s8=w.p`
    display: none;
    font-size: 0.8rem;
    color: black;
    margin: 0;
    text-align: left;

    @media (max-width: 1024px) {
        display: block;
    }
`,Tw=w.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: left;
    font-size: 0.95rem;
    color: #6b6580;
`;function l8(){const{language:t}=Pe(),{stores:i}=Fi(),{student:r}=bi(),{categories:s}=qc(),[u,m]=k.useState("all"),b=(r?.recentViews??[]).slice(0,7).map(_=>i.find(C=>String(C._id)===String(_))).filter(_=>!!_),y=b.filter(_=>u==="all"||_.category.kor===u);return h.jsxs(e8,{children:[h.jsxs(t8,{children:[h.jsxs(n8,{children:[" ",t==="eng"?"Recently viewed stores":"최근 본 매장"," "]}),h.jsxs(i8,{children:[" ",t==="eng"?"Shows the 7 most recently viewed stores.":"최근 본 매장 7개를 보여줍니다."," "]})]}),h.jsxs(a8,{children:[h.jsxs(r8,{children:[" ",t==="eng"?"Filter":"필터"," "]}),h.jsxs(o8,{value:u,onChange:_=>m(_.target.value),children:[h.jsxs("option",{value:"all",children:[" ",t==="eng"?"All":"전체"," "]}),s.map(_=>h.jsx("option",{value:_.name.kor,children:t==="eng"?_.name.eng:_.name.kor},_._id))]}),h.jsxs(s8,{children:[" ",t==="eng"?"Shows the 7 most recently viewed stores.":"최근 본 매장 7개를 보여줍니다."," "]})]}),b.length===0?h.jsxs(Tw,{children:[" ",t==="eng"?"There are no recently viewed stores.":"최근 본 매장이 없습니다."," "]}):y.length===0?h.jsxs(Tw,{children:[" ",t==="eng"?"There are no stores matching this filter.":"해당 필터링에 맞는 매장이 없습니다."," "]}):h.jsx(Q7,{stores:y})]})}const c8=w.div`
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
`,u8=w.div`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,d8=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,f8=w.p`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,h8=w.div`
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
`,q0=w.div`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,m8=w(q0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,p8=w.div`
    flex: 1;
    min-height: 0;
`,g8=w(q0)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,v8=w(q0)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,Hp=w.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,y8=w.p`
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.55rem 0;
`,b8=w.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    line-height: 1.45;
`,$p=w.div`
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
`,_8=w.div`
    min-width: 0;
    flex: 1;
`,x8=w.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,Hd=w.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,Vp=w.p`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,bE=w.button`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,Kg=w.button`
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
`,w8=w(bE)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,S8=w(Kg)`
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
`,T8=w.input`
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
`,E8=w.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,Zp=w.p`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,C8=w.input`
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
`,A8=w.div`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,k8=w(C8)`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,qp=w.button`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,O8=w.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,Gp=w(E8)`
    gap: 0.2rem;
`,Yp=w(A8)`
    min-height: 2rem;
`,Wp=w(k8)`
    padding: 0.35rem 0.6rem;
`,j8=w.p`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,Ew=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`,z8=w.div`
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
`,L8=w.p`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,R8=w.p`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,P8=w.button`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,M8=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`;function I8(){const{language:t}=Pe(),{student:i,updateStudent:r,logoutStudent:s}=bi(),u=Qt(),[m,g]=k.useState(!1),[b,y]=k.useState(i?.nickname??""),[_,C]=k.useState(!1),[T,O]=k.useState(""),[I,z]=k.useState(""),[P,U]=k.useState(""),[B,$]=k.useState(!1),[K,ue]=k.useState(!1),[J,se]=k.useState(!1),[Q,he]=k.useState(!1);if(!i)return null;const Ce=i;async function Ue(){const ge=b.trim();if(!ge){alert(t==="eng"?"Please enter your name.":"이름을 입력해주세요.");return}C(!0);try{const ae=await VO(Ce._id,ge);r(ae),g(!1)}catch(ae){console.error(ae),alert(t==="eng"?"Failed to update the name.":"이름 수정에 실패했습니다.")}finally{C(!1)}}async function ve(){if(!T||!I||!P){alert(t==="eng"?"Please fill in all password fields.":"비밀번호를 모두 입력해주세요.");return}if(!cT(I)){alert(t==="eng"?"Use 8-20 characters including letters and numbers.":"영문자, 숫자를 포함한 8-20자로 입력해주세요.");return}if(I!==P){alert(t==="eng"?"The new passwords do not match.":"새 비밀번호가 일치하지 않습니다.");return}he(!0);try{try{await F1(Ce.id,T)}catch(ge){const ae=ge instanceof Error?ge.message:"";if(ae==="INVALID_CREDENTIALS"||ae.includes("올바르지")){alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다.");return}throw ge}await ZO(Ce._id,T,I),O(""),z(""),U(""),alert(t==="eng"?"Password has been changed.":"비밀번호가 변경되었습니다.")}catch(ge){console.error(ge);const ae=ge instanceof Error?ge.message:"";ae.includes("현재 비밀번호")||ae.toLowerCase().includes("current password")?alert(t==="eng"?"The current password is incorrect.":"현재 비밀번호가 올바르지 않습니다."):alert(ae||(t==="eng"?"Failed to change the password.":"비밀번호 변경에 실패했습니다."))}finally{he(!1)}}async function ke(){if(window.confirm(t==="eng"?"Are you sure you want to delete this account? This cannot be undone.":"정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다."))try{await qO(Ce._id),s(),u("/login")}catch(ae){console.error(ae),alert(t==="eng"?"Failed to delete the account.":"계정 탈퇴에 실패했습니다.")}}return h.jsxs(c8,{children:[h.jsxs(u8,{children:[h.jsxs(d8,{children:[" ",t==="eng"?"Account Management":"계정 관리"," "]}),h.jsxs(f8,{children:[" ",t==="eng"?"You can manage your account and security information.":"내 계정과 보안 정보를 관리할 수 있습니다."," "]})]}),h.jsxs(h8,{children:[h.jsxs(m8,{children:[h.jsxs(Hp,{children:[" ",t==="eng"?"Basic information":"기본 정보"," "]}),h.jsxs(p8,{children:[h.jsx($p,{$stack:m,children:m?h.jsxs(_8,{children:[h.jsxs(Hd,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(x8,{children:[h.jsx(T8,{value:b,onChange:ge=>y(ge.target.value)}),h.jsxs(w8,{type:"button",onClick:()=>{g(!1),y(i.nickname)},children:[" ",t==="eng"?"Cancel":"취소"," "]}),h.jsx(S8,{type:"button",disabled:_,onClick:()=>{Ue()},children:t==="eng"?"Save":"저장"})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{children:[h.jsxs(Hd,{children:[" ",t==="eng"?"Name":"이름"," "]}),h.jsxs(Vp,{children:[" ",i.nickname," "]})]}),h.jsxs(bE,{type:"button",onClick:()=>{y(i.nickname),g(!0)},children:[" ",t==="eng"?"Edit":"수정"," "]})]})}),h.jsx($p,{children:h.jsxs("div",{children:[h.jsxs(Hd,{children:[" ",t==="eng"?"ID":"아이디"," "]}),h.jsxs(Vp,{children:[" ",i.id," "]})]})}),h.jsx($p,{children:h.jsxs("div",{children:[h.jsxs(Hd,{children:[" ",t==="eng"?"Email":"이메일"," "]}),h.jsxs(Vp,{children:[" ",i.email," "]})]})})]})]}),h.jsxs(g8,{children:[h.jsxs(Hp,{children:[" ",t==="eng"?"Change password":"비밀번호 변경"," "]}),h.jsx(y8,{children:t==="eng"?"8-20 characters including letters and numbers":"영문자, 숫자 포함 8-20자"}),h.jsxs(O8,{children:[h.jsxs(Gp,{children:[h.jsxs(Zp,{children:[" ",t==="eng"?"Current password":"현재 비밀번호"," "]}),h.jsxs(Yp,{children:[h.jsx(Wp,{type:B?"text":"password",value:T,onChange:ge=>O(ge.target.value)}),h.jsx(qp,{type:"button",onClick:()=>$(ge=>!ge),children:h.jsx(Kn,{icon:Tn.far.eye})})]})]}),h.jsxs(Gp,{children:[h.jsxs(Zp,{children:[" ",t==="eng"?"New password":"새 비밀번호"," "]}),h.jsxs(Yp,{children:[h.jsx(Wp,{type:K?"text":"password",value:I,onChange:ge=>z(ge.target.value)}),h.jsx(qp,{type:"button",onClick:()=>ue(ge=>!ge),children:h.jsx(Kn,{icon:Tn.far.eye})})]})]}),h.jsxs(Gp,{children:[h.jsxs(Zp,{children:[" ",t==="eng"?"Confirm new password":"새 비밀번호 확인"," "]}),h.jsxs(Yp,{children:[h.jsx(Wp,{type:J?"text":"password",value:P,onChange:ge=>U(ge.target.value)}),h.jsx(qp,{type:"button",onClick:()=>se(ge=>!ge),children:h.jsx(Kn,{icon:Tn.far.eye})})]}),P.length>0&&h.jsx(j8,{$valid:P===I,children:P===I?t==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":t==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다."})]})]}),h.jsx(Ew,{children:h.jsx(Kg,{type:"button",disabled:Q,onClick:()=>{ve()},children:t==="eng"?"Change password":"비밀번호 변경"})})]}),h.jsxs(z8,{children:[h.jsxs("div",{children:[h.jsxs(L8,{children:[" ",t==="eng"?"Delete account":"계정 탈퇴"," "]}),h.jsx(R8,{children:t==="eng"?"If you delete your account, your student information will be removed and cannot be restored.":"탈퇴하면 학생 계정 정보가 삭제되며 다시 복구할 수 없습니다."})]}),h.jsx(M8,{children:h.jsx(P8,{type:"button",onClick:()=>{ke()},children:t==="eng"?"Delete account":"계정 탈퇴"})})]}),h.jsxs(v8,{children:[h.jsxs(Hp,{children:[" ",t==="eng"?"Web guide (PDF)":"웹 사용 설명서(PDF)"," "]}),h.jsx(b8,{children:t==="eng"?"Open the user guide PDF.":"웹 사용 설명서 PDF를 확인할 수 있습니다."}),h.jsx(Ew,{children:h.jsx(Kg,{type:"button",onClick:()=>Zc(),children:t==="eng"?"Open":"열기"})})]})]})]})}const N8=w.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,D8=w.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,iu=w.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,pc=w.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow-wrap: anywhere;
    word-break: break-word;
`,B8=w.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,U8=w(iu)`
    width: 4.5rem;
`,F8=w(iu)`
    width: 24%;
`,H8=w(iu)`
    width: 18%;
`,$8=w(iu)`
    width: 34%;
`,V8=w(iu)`
    width: 9.5rem;
`,Xg=w.button`
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
`,Z8=w.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 3.5rem;
        box-sizing: border-box;
    }
`,q8=w.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,G8=w.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,Y8=w.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,W8=w.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,K8=w.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Cw=w.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,X8=w.div`
    display: flex;
    gap: 0.45rem;
`,Aw=w(Xg)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function J8({stores:t}){const{language:i}=Pe(),r=Qt(),{deleteStore:s}=Fi();async function u(m){try{await s(m),alert(i==="eng"?"Successfully deleted.":"매장이 삭제되었습니다.")}catch(g){console.error(g),alert(i==="eng"?"Failed to delete the store.":"매장 삭제에 실패했습니다.")}}return h.jsxs(h.Fragment,{children:[h.jsx(N8,{children:h.jsxs(D8,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(U8,{children:[" ",i==="eng"?"Photo":"사진"," "]}),h.jsxs(F8,{children:[" ",i==="eng"?"Name":"이름"," "]}),h.jsxs(H8,{children:[" ",i==="eng"?"Theme":"테마"," "]}),h.jsxs($8,{children:[" ",i==="eng"?"Discount":"할인"," "]}),h.jsxs(V8,{children:[" ",i==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.map(m=>h.jsxs("tr",{children:[h.jsx(pc,{children:h.jsx(B8,{src:Ea(m.photo),alt:i==="eng"?m.name.eng:m.name.kor})}),h.jsxs(pc,{children:[" ",i==="eng"?`${m.name.eng} ${m.branch.eng}`:`${m.name.kor} ${m.branch.kor}`," "]}),h.jsxs(pc,{children:[" ",i==="eng"?m.theme?.eng:m.theme?.kor," "]}),h.jsxs(pc,{children:[" ",i==="eng"?m.discount.eng:m.discount.kor," "]}),h.jsxs(pc,{children:[h.jsx(Xg,{type:"button",onClick:()=>r(`/admin/store/edit/${m._id}`),children:i==="eng"?"Edit":"수정"}),h.jsx(Xg,{type:"button",onClick:()=>{u(m)},children:i==="eng"?"Delete":"삭제"})]})]},m._id))})]})}),h.jsx(Z8,{children:t.map(m=>h.jsxs(q8,{children:[h.jsxs(G8,{children:[h.jsx(Y8,{src:Ea(m.photo),alt:i==="eng"?m.name.eng:m.name.kor}),h.jsxs(W8,{children:[h.jsxs(K8,{children:[" ",i==="eng"?`${m.name.eng} ${m.branch.eng}`:`${m.name.kor} ${m.branch.kor}`," "]}),h.jsxs(Cw,{children:[" ",i==="eng"?"Theme":"테마",": ",i==="eng"?m.theme?.eng:m.theme?.kor," "]}),h.jsxs(Cw,{children:[" ",i==="eng"?"Discount":"할인",": ",i==="eng"?m.discount.eng:m.discount.kor," "]})]})]}),h.jsxs(X8,{children:[h.jsx(Aw,{type:"button",onClick:()=>r(`/admin/store/edit/${m._id}`),children:i==="eng"?"Edit":"수정"}),h.jsx(Aw,{type:"button",onClick:()=>{u(m)},children:i==="eng"?"Delete":"삭제"})]})]},m._id))})]})}const Q8=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,eB=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,tB=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,nB=w.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`,iB=w.div`
    display: flex;
    align-items: flex-end;
`,aB=w.button`
    background-color: #A79CEE;
    scale: 0.75;
`;function rB(){const{language:t}=Pe(),i=Qt();return h.jsxs(Q8,{children:[h.jsxs(eB,{children:[h.jsxs(tB,{children:[" ",t==="eng"?"Stores Management":"매장 관리"," "]}),h.jsxs(nB,{children:[" ",t==="eng"?"Manage all stores and add, edit, delete them.":"전체 매장을 관리하고 추가, 수정, 삭제할 수 있습니다."," "]})]}),h.jsx(iB,{children:h.jsxs(aB,{onClick:()=>i("/admin/store/add"),children:[" + ",t==="eng"?"Add Store":"매장 추가"," "]})})]})}const oB=w.div`
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
`,sB=w.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`,lB=w.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;function cB(){const{language:t}=Pe(),{stores:i}=Fi();return h.jsxs(oB,{children:[h.jsxs(sB,{children:[" ",t==="eng"?"Total stores number":"전체 매장 개수"," "]}),h.jsxs(lB,{children:[" ",i.length," "]})]})}const uB=w.div`
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
`,dB=w.div`
    display: contents;

    @media (max-width: 1024px) {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
        min-width: 0;
    }
`,fB=w.button`
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
`;function hB({searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s}){const{language:u}=Pe(),m=Qt();return h.jsxs(uB,{children:[h.jsx(gE,{searchValue:t,onChangeSearchValue:i}),h.jsx(cB,{}),h.jsxs(dB,{children:[h.jsx(vE,{selectedCategory:r,onChangeSelectedCategory:s}),h.jsxs(fB,{type:"button",onClick:()=>m("/admin/store/add"),children:["+ ",u==="eng"?"Add Store":"매장 추가"]})]})]})}const mB=w.div`
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
`;function pB(){const[t,i]=k.useState(""),[r,s]=k.useState("all"),{stores:u}=Fi(),{language:m}=Pe(),g=t.trim().toLowerCase(),b=u.filter(y=>{const _=r==="all"||y.category.kor===r;if(!g)return _;const C=y.name[m].toLowerCase(),T=y.theme[m].toLowerCase();return _&&(C.includes(g)||T.includes(g))});return h.jsxs(mB,{children:[h.jsx(rB,{}),h.jsx(hB,{searchValue:t,onChangeSearchValue:i,selectedCategory:r,onChangeSelectedCategory:s}),h.jsx(J8,{stores:b})]})}const gB=w.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,vB=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,yB=w.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,bB=w.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function _B(){const{language:t}=Pe();return h.jsx(gB,{children:h.jsxs(vB,{children:[h.jsxs(yB,{children:[" ",t==="eng"?"Owners Management":"사장님 관리"," "]}),h.jsxs(bB,{children:[" ",t==="eng"?"You can allow or manage owner registration.":"사장님 가입 신청을 승인하거나 관리할 수 있습니다."," "]})]})})}const xB=w.div`
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
`;function wB({searchValue:t,onChangeSearchValue:i,owners:r}){return h.jsx(xB,{children:h.jsx(m6,{searchValue:t,onChangeSearchValue:i,owners:r})})}const SB=w.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,TB=w.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,Lc=w.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,js=w.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,EB=w(Lc)`
    width: 10rem;
`,CB=w(Lc)`
    width: 7.5rem;
`,AB=w(js)`
    color: #9a94b0;
`,Tf=w.button`
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
`,_E=w(Tf)`
    background-color: #7965EA;
    color: white;
`,kB=w.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1rem;
        box-sizing: border-box;
    }
`,OB=w.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,jB=w.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,zB=w.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,Kp=w.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,LB=w.div`
    display: flex;
    gap: 0.45rem;
`,kw=w(Tf)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,RB=w(_E)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,PB=w.p`
    margin: 0;
    padding: 0.9rem 0.2rem;
    font-size: 0.85rem;
    color: #9a94b0;
    text-align: left;
`;function Ow(t){if(!t)return"";const i=new Date(t);if(Number.isNaN(i.getTime()))return t.slice(0,10);const r=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0");return`${r}-${s}-${u}`}function Xp({owners:t,variant:i,onApprove:r,onReject:s,onPending:u}){const{language:m}=Pe(),g=i==="pending",b=g?5:4;return h.jsxs(h.Fragment,{children:[h.jsx(SB,{children:h.jsxs(TB,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsxs(Lc,{children:[" ",m==="eng"?g?"Applicant":"Owner":g?"신청자 정보":"사장님"," "]}),h.jsxs(Lc,{children:[" ",m==="eng"?"Contact":"연락처"," "]}),h.jsxs(Lc,{children:[" ",m==="eng"?"Linked store":"연결 매장"," "]}),g&&h.jsxs(CB,{children:[" ",m==="eng"?"Applied date":"신청일"," "]}),h.jsxs(EB,{children:[" ",m==="eng"?"Actions":"관리"," "]})]})}),h.jsx("tbody",{children:t.length===0?h.jsx("tr",{children:h.jsx(AB,{colSpan:b,children:m==="eng"?"No owners in this list.":"해당하는 사장님이 없습니다."})}):t.map(y=>h.jsxs("tr",{children:[h.jsxs(js,{children:[" ",y.name," "]}),h.jsxs(js,{children:[" ",y.phone," "]}),h.jsxs(js,{children:[" ",wf(y,m)," "]}),g&&h.jsxs(js,{children:[" ",Ow(y.createdAt)," "]}),h.jsx(js,{children:g?h.jsxs(h.Fragment,{children:[h.jsx(Tf,{type:"button",onClick:()=>s?.(y),children:m==="eng"?"Reject":"거절"}),h.jsx(_E,{type:"button",onClick:()=>r?.(y),children:m==="eng"?"Approve":"승인"})]}):h.jsx(Tf,{type:"button",onClick:()=>u?.(y),children:m==="eng"?"Pending":"대기"})})]},y._id))})]})}),h.jsx(kB,{children:t.length===0?h.jsx(PB,{children:m==="eng"?"No owners in this list.":"해당하는 사장님이 없습니다."}):t.map(y=>h.jsxs(OB,{children:[h.jsxs(jB,{children:[h.jsxs(zB,{children:[" ",y.name," "]}),h.jsxs(Kp,{children:[" ",m==="eng"?"Contact":"연락처",": ",y.phone," "]}),h.jsxs(Kp,{children:[" ",m==="eng"?"Linked store":"연결 매장",": ",wf(y,m)," "]}),g&&h.jsxs(Kp,{children:[m==="eng"?"Applied date":"신청일",": ",Ow(y.createdAt)]})]}),h.jsx(LB,{children:g?h.jsxs(h.Fragment,{children:[h.jsx(kw,{type:"button",onClick:()=>s?.(y),children:m==="eng"?"Reject":"거절"}),h.jsx(RB,{type:"button",onClick:()=>r?.(y),children:m==="eng"?"Approve":"승인"})]}):h.jsx(kw,{type:"button",onClick:()=>u?.(y),children:m==="eng"?"Pending":"대기"})})]},y._id))})]})}const MB=w.div`
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
`,Jp=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,Qp=w.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,eg=w.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
`,tg=w.span`
    font-weight: bold;
    font-size: 1rem;
    color: #7965EA;
`;function IB(){const{language:t}=Pe(),[i,r]=k.useState(""),[s,u]=k.useState([]),[m,g]=k.useState(!0),b=k.useCallback(async()=>{const O=await ix();u(O)},[]);k.useEffect(()=>{let O=!1;return g(!0),ix().then(I=>{O||u(I)}).catch(I=>{console.error(I),O||alert(t==="eng"?"Failed to load owners.":"사장님 목록을 불러오지 못했습니다.")}).finally(()=>{O||g(!1)}),()=>{O=!0}},[]);const y=s.filter(O=>O.status==="pending"),_=s.filter(O=>O.status==="approved"),C=s.filter(O=>O.status==="rejected");async function T(O,I){try{await tP(O._id,I),await b()}catch(z){console.error(z),alert(t==="eng"?"Failed to update the owner.":"사장님 상태 변경에 실패했습니다.")}}return h.jsxs(MB,{children:[h.jsx(_B,{}),h.jsx(wB,{searchValue:i,onChangeSearchValue:r,owners:s}),h.jsxs(Jp,{children:[h.jsxs(Qp,{children:[h.jsxs(eg,{children:[" ",t==="eng"?"Pending applications":"가입 신청 대기"," "]}),h.jsxs(tg,{children:[" ",m?"-":y.length," "]})]}),h.jsx(Xp,{variant:"pending",owners:y,onApprove:O=>{T(O,"approved")},onReject:O=>{T(O,"rejected")}})]}),h.jsxs(Jp,{children:[h.jsxs(Qp,{children:[h.jsxs(eg,{children:[" ",t==="eng"?"Approved owners":"승인된 사장님"," "]}),h.jsxs(tg,{children:[" ",m?"-":_.length," "]})]}),h.jsx(Xp,{variant:"approved",owners:_,onPending:O=>{T(O,"pending")}})]}),h.jsxs(Jp,{children:[h.jsxs(Qp,{children:[h.jsxs(eg,{children:[" ",t==="eng"?"Rejected owners":"거절된 사장님"," "]}),h.jsxs(tg,{children:[" ",m?"-":C.length," "]})]}),h.jsx(Xp,{variant:"rejected",owners:C,onPending:O=>{T(O,"pending")}})]})]})}const NB=w.div`
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
`,DB=w.p`
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
`,BB=w.div`
    flex: 1;
    min-width: 0;
`,UB=w.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,FB=w.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;function xE({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,value:u,onChange:m}){const{language:g}=Pe();return h.jsxs(NB,{children:[h.jsxs(DB,{children:[" ",g==="eng"?t:i," "]}),h.jsxs(BB,{children:[h.jsx(UB,{type:"text",value:u,placeholder:g==="eng"?r:s,onChange:b=>m?.(b.target.value)}),h.jsx(FB,{children:" "})]})]})}function HB(t){return t.trim().replace(/\s+/g," ").toLowerCase().normalize("NFC")}function wE(t){return HB(t).replace(/\s/g,"")}function Fc(t,i){const r=((i==="eng"?t.name?.eng:t.name?.kor)??"").trim(),s=((i==="eng"?t.branch?.eng:t.branch?.kor)??"").trim();return!s||r.endsWith(s)?r:`${r} ${s}`}function $B(t){return[Fc(t,"kor"),Fc(t,"eng"),`${t.name?.kor??""} ${t.branch?.kor??""}`,`${t.name?.eng??""} ${t.branch?.eng??""}`,`${t.name?.kor??""}${t.branch?.kor??""}`,`${t.name?.eng??""}${t.branch?.eng??""}`].map(wE).filter(Boolean)}function VB(t,i){const r=wE(t);return r?i.filter(u=>$B(u).includes(r))[0]?._id??"":""}const ZB=w.div`
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
`,qB=w.p`
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
`,GB=w.div`
    flex: 1;
    min-width: 0;
`,YB=w.div`
    position: relative;
    width: 100%;
`,WB=w.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
`,KB=w.input`
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
`,XB=w.div`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,JB=w.button`
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
`,QB=w.p`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`,eU=w.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;function tU(t,i){const r=i.trim().toLowerCase();if(!r)return!0;const s=Fc(t,"kor").toLowerCase(),u=Fc(t,"eng").toLowerCase();return s.includes(r)||u.includes(r)||(t.name?.kor??"").includes(r)||(t.name?.eng??"").toLowerCase().includes(r)||(t.branch?.kor??"").includes(r)||(t.branch?.eng??"").toLowerCase().includes(r)}function nU({storeInputRef:t,onQueryChange:i}){const{language:r}=Pe(),{stores:s}=Fi(),[u,m]=k.useState(""),[g,b]=k.useState(!1),[y,_]=k.useState(0),[C,T]=k.useState({top:0,left:0,width:0}),O=k.useRef(null),I=k.useRef(null),z=k.useMemo(()=>s.filter(J=>tU(J,u)),[s,u]),P=J=>Fc(J,r),U=J=>{I.current=J,t&&(t.current=J)},B=J=>{m(J),i?.(J)},$=()=>{const J=O.current?.getBoundingClientRect();J&&T({top:J.bottom+4,left:J.left,width:J.width})},K=J=>{B(J),b(!0),_(0),$()},ue=J=>{const se=P(J);I.current&&(I.current.value=se),B(se),b(!1)};return h.jsxs(ZB,{children:[h.jsxs(qB,{children:[" ",r==="eng"?"Store":"가게 선택"," "]}),h.jsxs(GB,{children:[h.jsxs(YB,{children:[h.jsx(WB,{ref:O,children:h.jsx(KB,{name:"storeQuery",type:"text",defaultValue:"",autoComplete:"off",ref:U,placeholder:r==="eng"?"Enter the store name and branch.":"매장명과 지점명을 입력해주세요.",onInput:J=>K(J.currentTarget.value),onChange:J=>K(J.currentTarget.value),onCompositionEnd:J=>K(J.currentTarget.value),onFocus:()=>{b(!0),$()},onBlur:J=>{B(J.currentTarget.value),window.setTimeout(()=>b(!1),120)},onKeyDown:J=>{if(!(!g||z.length===0)){if(J.key==="ArrowDown")J.preventDefault(),_(se=>Math.min(se+1,z.length-1));else if(J.key==="ArrowUp")J.preventDefault(),_(se=>Math.max(se-1,0));else if(J.key==="Enter"){J.preventDefault();const se=z[y]??z[0];se&&ue(se)}}}})}),g&&n1.createPortal(h.jsx(XB,{style:{top:C.top,left:C.left,width:C.width},children:z.length===0?h.jsx(QB,{children:s.length===0?r==="eng"?"No stores loaded.":"가게 목록을 불러오지 못했습니다.":r==="eng"?"No matching store.":"일치하는 가게가 없습니다."}):z.map(J=>h.jsx(JB,{type:"button",onMouseDown:se=>{se.preventDefault(),ue(J)},children:P(J)},J._id))}),document.body)]}),h.jsx(eU,{children:" "})]})]})}const iU=w.div`
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
`,aU=w.p`
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
`,rU=w.div`
    flex: 1;
    min-width: 0;
`,oU=w.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,sU=w.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,lU=w.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,cU=w(Kn)`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
`;function uU(t){return/^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(t)}function SE({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engDescription:u,korDescription:m,value:g,onChange:b,hideHintOnNarrow:y}){const{language:_}=Pe(),C=(g??"").length>0,T=uU(g??"");return h.jsxs(iU,{children:[h.jsxs(aU,{children:[" ",_==="eng"?t:i," "]}),h.jsxs(rU,{children:[h.jsx(oU,{type:"text",value:g,placeholder:_==="eng"?r:s,onChange:O=>b?.(O.target.value)}),h.jsxs(sU,{$hideOnNarrow:y,children:[h.jsxs(lU,{children:[" ",_==="eng"?u:m," "]}),C&&h.jsx(cU,{icon:T?Tn.fas.check:Tn.fas.xmark,$valid:T})]})]})]})}const dU=w.div`
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
`,fU=w.p`
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
`,hU=w.div`
    flex: 1;
    min-width: 0;
`,mU=w.input`
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
`,pU=w.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,jw=w.p`
    font-size: 0.75rem;
    color: ${({$tone:t})=>t==="valid"?"#22c55e":t==="invalid"?"#ef4444":"gray"};
    margin: 0;
    margin-left: 0.2rem;
    flex-shrink: 0;
    text-align: left;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:t})=>t&&"display: none;"}
    }
`,gU=w(Kn)`
    font-size: 0.75rem;
    color: ${({$valid:t})=>t?"#22c55e":"#ef4444"};
`,vU=w.div`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0.15rem;
`,yU=w(Kn)`
    height: 1.5vh;
    color: #7A77B0;
`,bU=w(yU)`
    cursor: pointer;
    flex-shrink: 0;
`;function _U(t){return/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(t)}function Ef({engTitle:t,korTitle:i,engPlaceholder:r,korPlaceholder:s,engDescription:u,korDescription:m,value:g,onChange:b,matchWith:y,hideHintOnNarrow:_}){const{language:C}=Pe(),[T,O]=k.useState(!1),I=y!==void 0,z=(g??"").length>0,P=_U(g??""),U=z&&g===y;let B;I&&z&&(B=U?C==="eng"?"The passwords you entered match.":"입력한 비밀번호가 일치합니다.":C==="eng"?"The passwords you entered do not match.":"입력한 비밀번호가 일치하지 않습니다.");const $=I?!!B:!0;return h.jsxs(dU,{children:[h.jsxs(fU,{$hasDescription:$,children:[" ",C==="eng"?t:i," "]}),h.jsxs(hU,{children:[h.jsxs(vU,{children:[h.jsx(mU,{type:T?"text":"password",value:g,placeholder:C==="eng"?r:s,onChange:K=>b?.(K.target.value)}),h.jsx(bU,{icon:Tn.far.eye,onClick:()=>O(K=>!K)})]}),I?B&&h.jsxs(jw,{$hideOnNarrow:_,$tone:U?"valid":"invalid",children:[" ",B," "]}):h.jsxs(pU,{$hideOnNarrow:_,children:[h.jsxs(jw,{$tone:"gray",children:[" ",C==="eng"?u:m," "]}),z&&h.jsx(gU,{icon:P?Tn.fas.check:Tn.fas.xmark,$valid:P})]})]})]})}const xU=w.div`
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
`,wU=w.div`
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
`,SU=w.div`
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
`,TU=w.div`
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
`,EU=w.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,CU=w.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,zw=w.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,AU=w.form`
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
        overflow: hidden;
        justify-content: flex-start;
        gap: 0.12rem;
        padding: 0.4rem 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`,kU=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,OU=w.div`
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
`,jU=w.button`
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
`,zU=w.button`
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
`;function LU(t,i){const r=t instanceof Error?t.message:"";return r.includes("이미 가입")?i==="eng"?"This account is already registered.":"이미 가입된 계정입니다.":r.includes("서버")&&r.includes("Firebase")?i==="eng"?"Server Firebase settings are invalid. Check FIREBASE_PRIVATE_KEY in server/.env.":"서버 Firebase 설정이 올바르지 않습니다. server/.env의 FIREBASE_PRIVATE_KEY를 확인해 주세요.":r.includes("전화번호 인증")?i==="eng"?"Please verify your phone number again.":"전화번호 인증을 다시 완료해 주세요.":r.includes("일치하지")?i==="eng"?"The phone number does not match the verified number.":"전화번호가 인증 정보와 일치하지 않습니다.":r.includes("매장")?i==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.":i==="eng"?"Failed to sign up.":"회원가입에 실패했습니다."}function RU(){const{language:t}=Pe(),i=Qt(),[r,s]=k.useState(""),[u,m]=k.useState(""),[g,b]=k.useState(""),y=k.useRef(null),[_,C]=k.useState(""),[T,O]=k.useState(""),[I,z]=k.useState(""),[P,U]=k.useState(!1);async function B($){if(P)return;const K=String(new FormData($).get("storeQuery")??y.current?.value??"");if(!r.trim()||!u.trim()||!_.trim()||!T){alert(t==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.");return}if(!K.trim()){alert(t==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.");return}if(!g){alert(t==="eng"?"Please verify your phone number.":"전화번호 인증을 완료해 주세요.");return}if(T!==I){alert(t==="eng"?"Passwords do not match.":"비밀번호가 일치하지 않습니다.");return}U(!0);try{const ue=await AO(),J=VB(K,ue);if(!J){alert(t==="eng"?"Please enter both the store name and the branch name.":"매장과 지점명을 같이 입력하세요.");return}let se=g;try{an.currentUser&&(se=await an.currentUser.getIdToken(!0))}catch(Q){console.error(Q)}if(!se){alert(t==="eng"?"Please verify your phone number again.":"전화번호 인증을 다시 완료해 주세요.");return}await KR({name:r.trim(),phone:u.replace(/\D/g,""),id:_.trim(),password:T,storeId:J},se),alert(t==="eng"?"Sign up completed.":"회원가입이 완료되었습니다."),i("/login")}catch(ue){console.error(ue),alert(LU(ue,t))}finally{U(!1)}}return h.jsx(xU,{children:h.jsxs(wU,{children:[h.jsxs(SU,{children:[h.jsx(TU,{children:h.jsx(EU,{src:"/coloredStoreIcon.png",alt:"store icon"})}),h.jsxs(CU,{children:[" ",t==="eng"?"Store owner sign up":"매장 사장님 회원가입"," "]}),h.jsxs(zw,{children:[" ",t==="eng"?"Only the owner of the":"사전 계약된 매장의 사장님만"," "]}),h.jsxs(zw,{children:[" ",t==="eng"?"pre-contracted store can sign up.":"회원가입 가능합니다."," "]})]}),h.jsxs(AU,{onSubmit:$=>{$.preventDefault(),B($.currentTarget)},children:[h.jsx(xE,{engTitle:"Name",korTitle:"성함",engPlaceholder:"Enter your full name.",korPlaceholder:"사장님 실명을 입력해주세요.",value:r,onChange:s}),h.jsx(i6,{phone:u,onPhoneChange:$=>{m($),b("")},onVerified:b}),h.jsx(nU,{storeInputRef:y}),h.jsxs(kU,{children:[h.jsx(SE,{engTitle:"ID",korTitle:"아이디",engPlaceholder:"Enter your id.",korPlaceholder:"아이디를 입력해주세요.",engDescription:"4-20 characters including number, lowercase eng letter",korDescription:"영문 소문자, 숫자 포함 4-20자",value:_,onChange:C}),h.jsx(Ef,{engTitle:"Password",korTitle:"비밀번호",engPlaceholder:"Enter your password.",korPlaceholder:"비밀번호를 입력해주세요.",engDescription:"8-20 characters including number, eng letter",korDescription:"영문자, 숫자 포함 8-20자",value:T,onChange:O}),h.jsx(Ef,{engTitle:"Check",korTitle:"비밀번호 확인",engPlaceholder:"Enter your password again.",korPlaceholder:"비밀번호를 다시 입력해주세요.",value:I,onChange:z,matchWith:T})]}),h.jsxs(OU,{children:[h.jsx(jU,{type:"button",onClick:()=>i("/login"),children:t==="eng"?"Cancel":"취소"}),h.jsx(zU,{type:"submit",disabled:P,children:t==="eng"?"Submit":"제출"})]})]})]})})}const TE="http://localhost:8080";async function EE(t,i){const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(typeof s.error=="string"?s.error:`HTTP ${r.status}`);return s}async function PU(t){return EE(`${TE}/students/email/code`,{email:t})}async function MU(t,i){return EE(`${TE}/students/email/verify`,{email:t,code:i})}const IU=["stonybrook.edu","fitnyc.edu"];function NU(t){const i=t.trim().toLowerCase(),r=i.lastIndexOf("@");if(r<=0||r===i.length-1)return!1;const s=i.slice(r+1);return IU.includes(s)}function Lw(t,i){const r=t instanceof Error?t.message:"";return r==="INVALID_SCHOOL_EMAIL"?i==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.":r==="TOO_MANY_REQUESTS"?i==="eng"?"Too many attempts. Try again later.":"시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.":r==="SMTP_NOT_CONFIGURED"?i==="eng"?"Email sending is not configured on the server. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in server/.env, then restart the API.":"서버에 메일 발송 설정이 없습니다. server/.env에 SMTP_HOST, SMTP_USER, SMTP_PASS를 넣고 API를 재시작해 주세요.":r==="SMTP_SEND_FAILED"?i==="eng"?"Could not send the email. Check the SMTP username and app password.":"메일을 보내지 못했습니다. SMTP 계정과 앱 비밀번호를 확인해 주세요.":r==="HTTP 404"||r.includes("Cannot POST")?i==="eng"?"The email API is missing. Restart the API server in the server folder.":"이메일 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.":r==="Failed to fetch"||r.includes("NetworkError")||r.includes("fetch")?i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.":r==="CODE_NOT_SENT"?i==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.":r==="CODE_EXPIRED"?i==="eng"?"The verification code expired. Please send it again.":"인증번호가 만료되었습니다. 다시 전송해주세요.":r==="TOO_MANY_ATTEMPTS"||r==="INVALID_CODE"?i==="eng"?"The verification code is invalid.":"인증번호가 올바르지 않습니다.":i==="eng"?"Failed to send the verification email.":"인증 메일 전송에 실패했습니다."}const DU=w.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`,BU=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;function UU({email:t,onEmailChange:i,onVerified:r}){const{language:s}=Pe(),[u,m]=k.useState(""),[g,b]=k.useState(!1),[y,_]=k.useState(!1),[C,T]=k.useState(!1),O=async()=>{if(!NU(t)){alert(s==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.");return}try{T(!0),await PU(t.trim()),b(!0),alert(s==="eng"?"The verification code has been sent. If you do not see it, please check your spam folder.":"인증번호가 전송되었습니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.")}catch(P){console.error(P),alert(Lw(P,s))}finally{T(!1)}},I=async()=>{if(!g){alert(s==="eng"?"Please request a verification code first.":"먼저 인증번호를 받아 주세요.");return}try{T(!0),await MU(t.trim(),u),_(!0),r?.()}catch(P){console.error(P),alert(Lw(P,s))}finally{T(!1)}},z=P=>{y||(i(P),_(!1),b(!1),m(""))};return h.jsx(DU,{children:h.jsxs(BU,{children:[h.jsx(xf,{engTitle:"School email",korTitle:"학교 이메일 인증",engPlaceholder:"Enter your school email.",korPlaceholder:"학교 이메일을 입력해주세요.",engButtonText:g?"Resend":"Verify",korButtonText:g?"재전송":"인증하기",value:t,onChange:z,onButtonClick:O,inputReadOnly:y,buttonDisabled:C||y,inputType:"email",description:s==="eng"?"Only school emails can be verified.":"학교 이메일만 인증 가능합니다"}),h.jsx(xf,{engTitle:"Confirm",korTitle:"이메일 확인",engPlaceholder:"Enter verification code.",korPlaceholder:"이메일로 받은 인증번호를 입력해주세요.",engButtonText:"Submit",korButtonText:"제출하기",value:u,onChange:P=>{y||m(P.replace(/\D/g,""))},onButtonClick:I,inputDisabled:!g&&!y,inputReadOnly:y,buttonDisabled:C||!g||y,maxLength:6,inputMode:"numeric",description:y?s==="eng"?"Email verified.":"이메일 인증이 완료되었습니다.":g?s==="eng"?"If you do not see the email, please check your spam folder.":"메일이 보이지 않으면 스팸함을 확인해 주세요.":" "})]})})}const FU=w.div`
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
`,HU=w.div`
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
`,$U=w.div`
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
`,VU=w.div`
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
`,ZU=w.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,qU=w.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,Rw=w.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,GU=w.form`
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
`,YU=w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,WU=w.div`
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
`,KU=w.button`
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
`,XU=w.button`
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
`;function JU(t,i){const r=t instanceof Error?t.message:"";return r==="DUPLICATE_ID"?i==="eng"?"It is already a duplicate ID.":"이미 있는 아이디입니다.":r==="DUPLICATE_EMAIL"?i==="eng"?"This email is already registered.":"이미 가입된 이메일입니다.":r==="EMAIL_NOT_VERIFIED"?i==="eng"?"Please verify your school email.":"학교 이메일 인증을 완료해 주세요.":r==="MISSING_FIELDS"?i==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.":r==="INVALID_SCHOOL_EMAIL"?i==="eng"?"Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.":"@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.":r==="INVALID_ID"?i==="eng"?"ID must be 4-20 characters including a number and a lowercase letter.":"아이디는 영문 소문자, 숫자를 포함해 4-20자여야 합니다.":r==="INVALID_PASSWORD"?i==="eng"?"Password must be 8-20 characters including a letter and a number.":"비밀번호는 영문자, 숫자를 포함해 8-20자여야 합니다.":r==="HTTP 404"||r.includes("Cannot POST")?i==="eng"?"The signup API is missing. Restart the API server in the server folder.":"회원가입 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.":r==="Failed to fetch"||r.includes("NetworkError")||r.includes("fetch")?i==="eng"?"The API server is not running. Start it with npm run dev in the server folder.":"API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.":i==="eng"?"Failed to sign up.":"회원가입에 실패했습니다."}function QU(){const{language:t}=Pe(),i=Qt(),[r,s]=k.useState(""),[u,m]=k.useState(""),[g,b]=k.useState(!1),[y,_]=k.useState(""),[C,T]=k.useState(""),[O,I]=k.useState(""),[z,P]=k.useState(!1);async function U(){if(!z){if(!r.trim()||!u.trim()||!y.trim()||!C||!O){alert(t==="eng"?"Please fill in all fields.":"모든 항목을 입력해 주세요.");return}if(!g){alert(t==="eng"?"Please verify your school email.":"학교 이메일 인증을 완료해 주세요.");return}if(C!==O){alert(t==="eng"?"Passwords do not match.":"비밀번호가 일치하지 않습니다.");return}P(!0);try{await BO({nickname:r.trim(),email:u.trim(),id:y.trim(),password:C}),alert(t==="eng"?"Sign up completed.":"회원가입이 완료되었습니다."),i("/login")}catch(B){console.error(B),alert(JU(B,t))}finally{P(!1)}}}return h.jsx(FU,{children:h.jsxs(HU,{children:[h.jsxs($U,{children:[h.jsx(VU,{children:h.jsx(ZU,{src:"/mortarboardIcon.png",alt:"student icon"})}),h.jsxs(qU,{children:[" ",t==="eng"?"Student sign up":"학생 회원가입"," "]}),h.jsxs(Rw,{children:[" ",t==="eng"?"Only SUNY Korea students":"SUNY Korea 학생만"," "]}),h.jsxs(Rw,{children:[" ",t==="eng"?"can sign up.":"회원가입 가능합니다."," "]})]}),h.jsxs(GU,{onSubmit:B=>{B.preventDefault(),U()},children:[h.jsx(xE,{engTitle:"Nickname",korTitle:"닉네임",engPlaceholder:"Enter your nickname.",korPlaceholder:"닉네임을 입력해주세요.",value:r,onChange:s}),h.jsx(UU,{email:u,onEmailChange:B=>{m(B),b(!1)},onVerified:()=>b(!0)}),h.jsxs(YU,{children:[h.jsx(SE,{engTitle:"Set ID",korTitle:"아이디 설정",engPlaceholder:"Enter your id.",korPlaceholder:"아이디를 입력해주세요.",engDescription:"4-20 characters including number, lowercase eng letter",korDescription:"영문 소문자, 숫자 포함 4-20자",value:y,onChange:_}),h.jsx(Ef,{engTitle:"Set password",korTitle:"비밀번호 설정",engPlaceholder:"Enter your password.",korPlaceholder:"비밀번호를 입력해주세요.",engDescription:"8-20 characters including number, eng letter",korDescription:"영문자, 숫자 포함 8-20자",value:C,onChange:T}),h.jsx(Ef,{engTitle:"Check",korTitle:"비밀번호 확인",engPlaceholder:"Enter your password again.",korPlaceholder:"비밀번호를 다시 입력해주세요.",value:O,onChange:I,matchWith:C})]}),h.jsxs(WU,{children:[h.jsx(KU,{type:"button",onClick:()=>i("/login"),children:t==="eng"?"Cancel":"취소"}),h.jsx(XU,{type:"submit",disabled:z,children:t==="eng"?"Submit":"제출"})]})]})]})})}const e9=w.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,t9=w.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;function n9(){const[t,i]=k.useState("kor");return h.jsx(S2,{children:h.jsx(Dj,{language:t,setLanguage:i,children:h.jsx(mz,{children:h.jsx(gz,{children:h.jsx(WO,{children:h.jsx(Fj,{children:h.jsx($j,{children:h.jsxs(e9,{children:[h.jsx(wz,{language:t,onChangeLanguage:i}),h.jsx(t9,{children:h.jsxs(JA,{children:[h.jsx(qt,{path:"/",element:h.jsx(az,{})}),h.jsx(qt,{path:"/login",element:h.jsx(hP,{})}),h.jsx(qt,{path:"/signup/store",element:h.jsx(RU,{})}),h.jsx(qt,{path:"/signup/student",element:h.jsx(QU,{})}),h.jsxs(qt,{path:"/student",element:h.jsx(q6,{children:h.jsx(n7,{})}),children:[h.jsx(qt,{index:!0,element:h.jsx(B7,{})}),h.jsx(qt,{path:"recent",element:h.jsx(l8,{})}),h.jsx(qt,{path:"account",element:h.jsx(I8,{})})]}),h.jsxs(qt,{path:"/owner",element:h.jsx(Z6,{children:h.jsx(PP,{})}),children:[h.jsx(qt,{index:!0,element:h.jsx(nM,{})}),h.jsx(qt,{path:"edit",element:h.jsx(GM,{})}),h.jsx(qt,{path:"account",element:h.jsx($6,{})})]}),h.jsxs(qt,{path:"/admin",element:h.jsx(V6,{children:h.jsx(TP,{})}),children:[h.jsx(qt,{index:!0,element:h.jsx(pB,{})}),h.jsx(qt,{path:"store/add",element:h.jsx(Mg,{})}),h.jsx(qt,{path:"store/edit/:storeId",element:h.jsx(Mg,{})}),h.jsx(qt,{path:"owners",element:h.jsx(IB,{})})]})]})}),h.jsx(Iz,{}),h.jsx(Rz,{language:t})]})})})})})})})})}KC.createRoot(document.getElementById("root")).render(h.jsx(k.StrictMode,{children:h.jsx(n9,{})}));
