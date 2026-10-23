(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[96659,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(18566),o=e.i(97053);e.s(["default",0,function({children:e}){let[i]=(0,n.useState)(()=>new o.R);return(0,r.useServerInsertedHTML)(()=>{let e=i.getStyleElement();return i.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},22016,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return y},useLinkStatus:function(){return b}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(90809),a=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),f=e.r(5550),p=e.r(88540),h=e.r(91949),g=e.r(73668),m=e.r(9396);function y(t){var n;let r,o,i,[y,b]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),x=(0,s.useRef)(null),{href:v,as:j,children:S,prefetch:_=null,passHref:C,replace:T,shallow:$,scroll:E,onClick:O,onMouseEnter:k,onTouchStart:P,legacyBehavior:I=!1,onNavigate:N,transitionTypes:A,ref:L,unstable_dynamicOnHover:M,...U}=t;r=S,I&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let J=s.default.useContext(c.AppRouterContext),H=!1!==_,R=!1===_?"none":!0===_?"full":"auto",B="none"!==R?"auto"===R?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,F="string"==typeof(n=j||v)?n:(0,l.formatUrl)(n);if(I){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=s.default.Children.only(r)}let W=I?o&&"object"==typeof o&&o.ref:L,z,D=s.default.useCallback(e=>(null!==J&&(x.current=(0,h.mountLinkInstance)(e,F,J,B,H,b,z)),()=>{x.current&&((0,h.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,h.unmountPrefetchableInstance)(e)}),[H,F,J,B,b,z]),V={ref:(0,u.useMergedRef)(D,W),onClick(t){I||"function"!=typeof O||O(t),I&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!J||t.defaultPrevented||function(t,n,r,o,i,a,s,l="none"){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{navigate:d}=e.r(32916);d(n,o?"replace":"push",!1===i?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,s,l)}}(t,F,x,T,E,N,A,R)},onMouseEnter(e){I||"function"!=typeof k||k(e),I&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),J&&H&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){I||"function"!=typeof P||P(e),I&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),J&&H&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,d.isAbsoluteUrl)(F)?V.href=F:I&&!C&&("a"!==o.type||"href"in o.props)||(V.href=(0,f.addBasePath)(F)),i=I?s.default.cloneElement(o,V):(0,a.jsx)("a",{...U,...V,children:r}),(0,a.jsx)(w.Provider,{value:y,children:i})}let w=(0,s.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(w);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},8341,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0});var r={cancelIdleCallback:function(){return a},requestIdleCallback:function(){return i}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},79520,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return x},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return w}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(55682),a=e.r(90809),s=e.r(43476),l=i._(e.r(74080)),c=a._(e.r(71645)),u=e.r(42732),d=e.r(22737),f=e.r(8341),p=e.r(19083),h=new Map,g=new Set,m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:s="afterInteractive",onError:c,stylesheets:u}=e,f=n||t;if(f&&g.has(f))return;if(h.has(t)){g.add(f),h.get(t).then(r,c);return}let p=()=>{o&&o(),g.add(f)},m=document.createElement("script"),y=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),p()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});i?(m.innerHTML=i.__html||"",p()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",p()):t&&(m.src=t,h.set(t,y)),(0,d.setAttributesFromProps)(m,e),"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),u&&(e=>{if(l.default.preinit)return e.forEach(e=>{l.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}})(u),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>m(e))}):m(e)}function w(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");g.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:i="afterInteractive",onError:a,stylesheets:d,...h}=e,{updateScripts:y,scripts:w,getIsSsr:b,appDir:x,nonce:v}=(0,c.useContext)(u.HeadManagerContext);v=h.nonce||v;let j=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||n;j.current||(o&&e&&g.has(e)&&o(),j.current=!0)},[o,t,n]);let S=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!S.current){if("afterInteractive"===i)m(e);else"lazyOnload"===i&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>m(e))}));S.current=!0}},[e,i]),("beforeInteractive"===i||"worker"===i)&&(y?(w[i]=(w[i]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:a,...h,nonce:v}]),y(w)):b&&b()?g.add(t||n):b&&!b()&&m({...e,nonce:v})),x){if(d&&d.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===i)if(!n)return h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([0,{...h,id:t}]))})`}});else return l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin}),(0,s.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([n,{...h,id:t}]))})`}});"afterInteractive"===i&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:v,crossOrigin:h.crossOrigin}:{as:"script",nonce:v,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let x=b;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18581,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},19083,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0});var r={ESCAPE_REGEX:function(){return a},htmlEscapeAttributeString:function(){return u},htmlEscapeJsonString:function(){return c}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},a=/[&><\u2028\u2029]/g,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},l=/[&"'<>]/g;function c(e){return e.replace(a,e=>i[e])}function u(e){return e.replace(l,e=>s[e])}},95057,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${r}${c}${o}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},73668,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=e.r(18967),o=e.r(52817);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},18967,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return x},NormalizeError:function(){return w},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class w extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},90888,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(97053),o=e.i(2389),i=e.i(18566);let a=r.U.div.withConfig({displayName:"HeaderTitle__HeaderTitleStyled",componentId:"sc-fbbabc6-0"})`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
    padding: 0.8rem 0 0.8rem 0;
    cursor: pointer;

    @media (max-width: 767px) {
        ${({$compactOnMobile:e})=>e&&`
            padding: 0.45rem 0;
        `}
    }
`,s=r.U.img.withConfig({displayName:"HeaderTitle__HeaderIcon",componentId:"sc-fbbabc6-1"})`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    object-fit: contain;

    @media (max-width: 767px) {
        ${({$compactOnMobile:e})=>e&&`
            width: 2.1rem;
            height: 2.1rem;
        `}
    }
`,l=r.U.div.withConfig({displayName:"HeaderTitle__HeaderTitleDiv",componentId:"sc-fbbabc6-2"})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,c=r.U.h1.withConfig({displayName:"HeaderTitle__BoldText",componentId:"sc-fbbabc6-3"})`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;

    @media (max-width: 767px) {
        ${({$compactOnMobile:e})=>e&&`
            font-size: 1.05rem;
            line-height: 1.2;
        `}
    }
`,u=r.U.p.withConfig({displayName:"HeaderTitle__SubText",componentId:"sc-fbbabc6-4"})`
    color: gray;
    margin: 0;
    font-size: 0.75rem;
    text-align: left;

    @media (max-width: 767px) {
        ${({$compactOnMobile:e})=>e&&`
            font-size: 0.68rem;
            line-height: 1.25;
            white-space: nowrap;
        `}
    }
`,d=r.U.br.withConfig({displayName:"HeaderTitle__MobileBreak",componentId:"sc-fbbabc6-5"})`
    display: none;

    @media (max-width: 767px) {
        display: ${({$show:e})=>e?"block":"none"};
    }
`;function f({language:e,breakSubtitleOnMobile:n=!1,compactOnMobile:r=!1}){let i=(0,o.f)(e);return(0,t.jsxs)(a,{$compactOnMobile:r,onClick:()=>window.location.reload(),children:[(0,t.jsx)(s,{$compactOnMobile:r,src:"/headerIcon.png",alt:"Outstanding Spots"}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{$compactOnMobile:r,children:" Outstanding Spots "}),(0,t.jsxs)(u,{$compactOnMobile:r,children:[i("sunyKoreaNearbyPartnerStores")," ",(0,t.jsx)(d,{$show:n}),i("info")]})]})]})}var p=e.i(22016);let h=(0,r.U)(p.default).withConfig({displayName:"NavBar__NavBarStyled",componentId:"sc-10c27023-0"})`
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
`,g=r.U.p.withConfig({displayName:"NavBar__NavBarText",componentId:"sc-10c27023-1"})`
    font-weight: bold;
    margin: 0;
    color: ${({$clicked:e})=>e?"#7965EA":"black"};
`;function m({navName:e,clicked:n,link:r,onClick:o}){return(0,t.jsx)(h,{href:r,onClick:o,children:(0,t.jsxs)(g,{$clicked:n,children:[" ",e," "]})})}var y=e.i(9319),w=e.i(41513),b=e.i(30490),x=e.i(1834);let v=r.U.div.withConfig({displayName:"Header__HeaderStyled",componentId:"sc-917b0196-0"})`
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
        ${({$innerMobile:e})=>e&&`
            align-items: center;
            min-height: 0;
        `}
    }
`,j=r.U.div.withConfig({displayName:"Header__HeaderLeftDiv",componentId:"sc-917b0196-1"})`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-width: 0;

    @media (max-width: 767px) {
        ${({$innerMobile:e})=>e&&"flex: 1;"}
    }
`,S=r.U.div.withConfig({displayName:"Header__NavBars",componentId:"sc-917b0196-2"})`
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    align-items: stretch;

    @media (max-width: 767px) {
        display: none;
    }
`,_=r.U.div.withConfig({displayName:"Header__HeaderRightDiv",componentId:"sc-917b0196-3"})`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
        gap: 0.4rem;
        display: ${({$hideOnMobileMap:e})=>e?"none":"flex"};
    }
`,C=(0,r.U)(y.f).withConfig({displayName:"Header__LanguageButtonsPlus",componentId:"sc-917b0196-4"})`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    scale: 0.7;

    @media (max-width: 767px) {
        ${({$innerMobile:e})=>e?`
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
`;function T({language:e,onChangeLanguage:n}){let r=(0,o.f)(e),a=(0,i.usePathname)(),{isAdmin:s}=(0,w.A)(),{isOwner:l}=(0,b.V)(),{isStudent:c}=(0,x.W)(),u="/login"===a||a.startsWith("/signup")||a.startsWith("/admin")||a.startsWith("/owner")||a.startsWith("/student"),d="/"!==a;return(0,t.jsxs)(v,{$innerMobile:d,children:[(0,t.jsxs)(j,{$innerMobile:d,children:[(0,t.jsx)(f,{language:e,compactOnMobile:d}),(0,t.jsxs)(S,{children:[(0,t.jsx)(m,{navName:r("map"),clicked:"/"===a,link:"/",onClick:()=>{}}),(0,t.jsx)(m,{navName:r("myPage"),clicked:u,link:s?"/admin":l?"/owner":c?"/student":"/login",onClick:()=>{}}),(0,t.jsx)(m,{navName:r("stores"),clicked:a.startsWith("/stores"),link:"/stores",onClick:()=>{}})]})]}),(0,t.jsx)(_,{$hideOnMobileMap:"/"===a,children:(0,t.jsx)(C,{$innerMobile:d,language:e,onChangeLanguage:n})})]})}let $=r.U.div.withConfig({displayName:"FooterLeftText__FooterLeftTextStyled",componentId:"sc-e7f7693c-0"})`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,E=r.U.img.withConfig({displayName:"FooterLeftText__MortarboardIcon",componentId:"sc-e7f7693c-1"})`
    width: 1.5rem;
    height: 1.5rem;
`,O=r.U.p.withConfig({displayName:"FooterLeftText__BlackText",componentId:"sc-e7f7693c-2"})`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`,k=r.U.span.withConfig({displayName:"FooterLeftText__PurpleText",componentId:"sc-e7f7693c-3"})`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;function P(){return(0,t.jsxs)($,{children:[(0,t.jsx)(E,{src:"/mortarboardIcon.png",alt:"mortarboard icon"}),(0,t.jsxs)(O,{children:[" Only for ",(0,t.jsx)(k,{children:" SUNY Korea "})," students "]})]})}var I=e.i(11110);let N=e.i(85149).Y,A=r.U.div.withConfig({displayName:"FooterRightText__FooterRightTextStyled",componentId:"sc-958484a0-0"})`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`,L=r.U.a.withConfig({displayName:"FooterRightText__GuideLink",componentId:"sc-958484a0-1"})`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
`,M=r.U.img.withConfig({displayName:"FooterRightText__FileIcon",componentId:"sc-958484a0-2"})`
    width: 1.5rem;
    height: 1.5rem;
`,U=r.U.p.withConfig({displayName:"FooterRightText__BlackText",componentId:"sc-958484a0-3"})`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`,J=r.U.span.withConfig({displayName:"FooterRightText__PurpleText",componentId:"sc-958484a0-4"})`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;function H(){let{t:e}=(0,I.b)();return(0,t.jsx)(A,{children:(0,t.jsxs)(L,{href:N,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(M,{src:"/fileIcon.png",alt:e("koreanWebUserGuide")}),(0,t.jsxs)(U,{children:[e("koreanWeb"),(0,t.jsxs)(J,{children:[" ",e("userGuide")," "]})]})]})})}let R=r.U.div.withConfig({displayName:"Footer__FooterStyled",componentId:"sc-f3f0ee67-0"})`
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
`;function B(){return(0,t.jsxs)(R,{children:[(0,t.jsx)(P,{}),(0,t.jsx)(H,{})]})}let F=r.U.div.withConfig({displayName:"MobileNavBar__MobileNavBarDiv",componentId:"sc-a3edef16-0"})`
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
`,W=r.U.ul.withConfig({displayName:"MobileNavBar__NavUl",componentId:"sc-a3edef16-1"})`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`,z=r.U.li.withConfig({displayName:"MobileNavBar__NavLi",componentId:"sc-a3edef16-2"})`
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
`,D=r.U.img.withConfig({displayName:"MobileNavBar__Icon",componentId:"sc-a3edef16-3"})`
    width: 1rem;
    height: 1rem;
    display: block;

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`;function V(){let e=(0,i.usePathname)(),{isAdmin:n}=(0,w.A)(),{isOwner:r}=(0,b.V)(),{isStudent:o}=(0,x.W)(),a="/login"===e||e.startsWith("/signup")||e.startsWith("/admin")||e.startsWith("/owner")||e.startsWith("/student"),s="/"===e?"/clickedMapPageIcon.png":"/mapPageIcon.png",l=e.startsWith("/stores");return(0,t.jsx)(F,{children:(0,t.jsx)("nav",{id:"navbar",children:(0,t.jsxs)(W,{children:[(0,t.jsx)(z,{children:(0,t.jsxs)(p.default,{href:n?"/admin":r?"/owner":o?"/student":"/login",children:[" ",(0,t.jsx)(D,{src:a?"/coloredMyPageIcon.png":"/myPageIcon.png",alt:"My page icon"})," "]})}),(0,t.jsx)(z,{children:(0,t.jsxs)(p.default,{href:"/",children:[" ",(0,t.jsx)(D,{src:s,alt:"Map page icon"})," "]})}),(0,t.jsx)(z,{children:(0,t.jsxs)(p.default,{href:"/stores",children:[" ",(0,t.jsx)(D,{src:l?"/coloredStoreIcon.png":"/storePageIcon.png",alt:"Store page icon"})," "]})})]})})})}var q=e.i(38313),K=e.i(90261),G=e.i(65607);let Z="https://outstandingspots.com";function Y(e,t){let n=document.head.querySelector(e);for(let[e,r]of(n||(n=document.createElement("meta"),document.head.appendChild(n)),Object.entries(t)))n.setAttribute(e,r)}function Q(){let e=(0,i.usePathname)(),{language:t}=(0,I.b)();return(0,n.useEffect)(()=>{let n,r,i=(n=(0,o.f)(t),"/stores"===e?{title:n("storesSeoTitle"),description:n("storesSeoDescription"),robots:"index,follow",path:"/stores"}:"/"===e?{title:n("homeSeoTitle"),description:n("homeSeoDescription"),robots:"index,follow",path:"/"}:{title:"Outstanding Spots",description:n("defaultSeoDescription"),robots:"noindex,nofollow",path:e}),a=`${Z}${"/"===i.path?"/":i.path}`,s=`${Z}/loginBackgroundImage.png`;document.title=i.title,document.documentElement.lang=(0,G.T)(t),Y('meta[name="description"]',{name:"description",content:i.description}),Y('meta[name="robots"]',{name:"robots",content:i.robots}),Y('meta[property="og:title"]',{property:"og:title",content:i.title}),Y('meta[property="og:description"]',{property:"og:description",content:i.description}),Y('meta[property="og:url"]',{property:"og:url",content:a}),Y('meta[property="og:image"]',{property:"og:image",content:s}),Y('meta[property="og:locale"]',{property:"og:locale",content:(0,G.i)(t)}),Y('meta[name="twitter:title"]',{name:"twitter:title",content:i.title}),Y('meta[name="twitter:description"]',{name:"twitter:description",content:i.description}),(r=document.head.querySelector('link[rel="canonical"]'))||((r=document.createElement("link")).setAttribute("rel","canonical"),document.head.appendChild(r)),r.setAttribute("href",a)},[e,t]),null}let X="os-language",ee=r.U.div.withConfig({displayName:"AppShell__AppLayout",componentId:"sc-ee478180-0"})`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`,et=r.U.div.withConfig({displayName:"AppShell__RoutesArea",componentId:"sc-ee478180-1"})`
    flex: 1;
    min-height: 0;
    overflow: hidden;
`;e.s(["AppShell",0,function({children:e}){let[r,o]=(0,n.useState)("kor"),i=e=>{!function(e){try{sessionStorage.setItem(X,e)}catch{return}}(e),o(e)};return(0,n.useEffect)(()=>{o(function(){try{let e=sessionStorage.getItem(X);if("eng"===e||"kor"===e)return e;return"kor"}catch{return"kor"}}())},[]),(0,t.jsx)(ee,{children:(0,t.jsx)(I.w,{language:r,setLanguage:i,children:(0,t.jsx)(w.t,{children:(0,t.jsx)(b._,{children:(0,t.jsx)(x.$,{children:(0,t.jsx)(q.b,{children:(0,t.jsxs)(K.h,{children:[(0,t.jsx)(Q,{}),(0,t.jsx)(T,{language:r,onChangeLanguage:i}),(0,t.jsx)(et,{children:e}),(0,t.jsx)(V,{}),(0,t.jsx)(B,{})]})})})})})})})}],90888)},41513,17053,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(45502);let o=e.i(85149).L;async function i(e,t){let n=await fetch(`${o}/admin/login`,(0,r.J)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,password:t})})),i=await n.json().catch(()=>({}));if(!n.ok)throw Error("string"==typeof i.error?i.error:"INVALID_ADMIN");(0,r.g)("admin",i)}async function a(){let e=await fetch(`${o}/admin/session`,(0,r.J)()),t=await e.json().catch(()=>({}));return e.ok?((0,r.g)("admin",t),!0):((0,r.d)("admin"),!1)}async function s(){await fetch(`${o}/admin/logout`,(0,r.J)({method:"POST"})),(0,r.d)("admin")}e.s(["y",0,a,"f",0,i,"p",0,s],17053);let l=(0,n.createContext)(null);e.s(["t",0,function({children:e}){let[r,o]=(0,n.useState)(!1),[i,c]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=!1;return a().then(t=>{e||(o(t),c(!1))}).catch(()=>{e||(o(!1),c(!1))}),()=>{e=!0}},[]),(0,t.jsx)(l.Provider,{value:{isAdmin:r,isCheckingAdmin:i,loginAdmin:()=>{o(!0),c(!1)},logoutAdmin:()=>{s(),o(!1),c(!1)}},children:e})},"A",0,function(){let e=(0,n.useContext)(l);if(!e)throw Error("useAdminAuth는 AdminAuthProvider 안에서만 사용할 수 있습니다.");return e}],41513)},90261,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(31381),o=e.i(85149);let i=(0,n.createContext)(null),a=o.L;e.s(["h",0,function({children:e}){let[o,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=new AbortController;return(0,r.f)(`${a}/categories`,{signal:e.signal}).then(e=>{s(e)}).catch(t=>{e.signal.aborted||console.error(t)}),()=>e.abort()},[]),(0,t.jsx)(i.Provider,{value:{categories:o},children:e})},"i",0,function(){let e=(0,n.useContext)(i);if(!e)throw Error("useCategories는 CategoryProvider 안에서만 사용할 수 있습니다.");return e}])},30490,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(2974);let o="os-owner";function i(e){e?sessionStorage.setItem(o,JSON.stringify(e)):sessionStorage.removeItem(o)}let a=(0,n.createContext)(null);e.s(["_",0,function({children:e}){let[s,l]=(0,n.useState)(null),[c,u]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=!1,t=function(){try{let e=sessionStorage.getItem(o);return e?JSON.parse(e):null}catch{return null}}();return t&&l(t),(0,r.Z)().then(t=>{e||(i(t),l(t),u(!1))}).catch(()=>{e||(i(null),l(null),u(!1))}),()=>{e=!0}},[]),(0,t.jsx)(a.Provider,{value:{owner:s,isOwner:null!==s,isCheckingOwner:c,loginOwner:e=>{i(e),l(e),u(!1)},updateOwner:e=>{i(e),l(e)},logoutOwner:()=>{(0,r.W)(),i(null),l(null)}},children:e})},"V",0,function(){let e=(0,n.useContext)(a);if(!e)throw Error("useOwnerAuth는 OwnerAuthProvider 안에서만 사용할 수 있습니다.");return e}])},38313,83721,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(31381),o=e.i(85149);let i=o.L;async function a(e){let{photo:t}=await (0,r.f)(`${i}/photos`,{method:"POST",headers:{"Content-Type":e.type||"image/png"},body:e});return t}async function s(){return(0,r.f)(`${i}/stores`)}async function l(e){return(0,r.f)(`${i}/stores`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}async function c(e,t){return(0,r.f)(`${i}/stores/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function u(e){return(0,r.f)(`${i}/stores/${e}`,{method:"DELETE"})}e.s(["s",0,l,"L",0,u,"m",0,s,"c",0,c,"C",0,function(e){if(!e)return"";if(e.startsWith("data:")||e.startsWith("blob:"))return e;let t=i.replace(/\/$/,"");if(e.startsWith("http://")||e.startsWith("https://")){try{let n=new URL(e);if(n.pathname.startsWith("/photos/"))return`${t}${n.pathname}`}catch{}return e}return`${t}${e.startsWith("/")?e:`/${e}`}`},"G",0,a],83721);let d="즐거운 이용 되세요!\nEnjoy the service!",f=(0,n.createContext)(null),p=o.L;e.s(["d",0,d,"b",0,function({children:e}){let[o,i]=(0,n.useState)([]),[a,s]=(0,n.useState)("매장 정보를 불러오는 중입니다\nLoading store information");(0,n.useEffect)(()=>{let e=new AbortController;return(0,r.f)(`${p}/stores`,{signal:e.signal}).then(e=>{i(e),s(d)}).catch(t=>{e.signal.aborted||(console.error(t),s("다시 시도해주세요\nTry again"))}),()=>e.abort()},[]);let l=async e=>{await u(e._id),i(t=>t.filter(t=>t._id!==e._id))};return(0,t.jsx)(f.Provider,{value:{stores:o,loadingState:a,addStore:e=>{i(t=>[...t,e])},updateStore:e=>{i(t=>t.map(t=>t._id===e._id?e:t))},deleteStore:l},children:e})},"g",0,function(){let e=(0,n.useContext)(f);if(!e)throw Error("useStores는 StoresProvider 안에서만 사용할 수 있습니다.");return e}],38313)},1834,e=>{var t=e.i(43476),n=e.i(71645),r=e.i(95751);let o="os-student";function i(e,t){return 0!==e.length&&(0===t.length||e[0]!==t[0]&&e.indexOf(t[0])>0)}function a(e){return{...e,favorites:Array.isArray(e.favorites)?e.favorites:[],recentViews:Array.isArray(e.recentViews)?e.recentViews:[]}}function s(e){e?sessionStorage.setItem(o,JSON.stringify(e)):sessionStorage.removeItem(o)}let l=(0,n.createContext)(null);e.s(["$",0,function({children:e}){let[c,u]=(0,n.useState)(null),[d,f]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=!1,t=function(){try{let e=sessionStorage.getItem(o);return e?a(JSON.parse(e)):null}catch{return null}}();return t&&u(t),(0,r.A)().then(t=>{if(!e){if(!t){s(null),u(null),f(!1);return}u(e=>{let n=a(t),r=e?{...n,recentViews:i(e.recentViews,n.recentViews)?e.recentViews:n.recentViews}:n;return s(r),r}),f(!1)}}).catch(()=>{e||(s(null),u(null),f(!1))}),()=>{e=!0}},[]),(0,t.jsx)(l.Provider,{value:{student:c,isStudent:null!==c,isCheckingStudent:d,loginStudent:e=>{let t=a(e);s(t),u(t),f(!1)},updateStudent:e=>{u(t=>{let n=a(e),r=t?{...n,recentViews:i(t.recentViews,n.recentViews)?t.recentViews:n.recentViews}:n;return s(r),r})},prependRecentView:e=>{let t=!1;return u(n=>{if(!n||n.recentViews[0]===e)return n;t=!0;let o=a({...n,recentViews:(0,r.r)(n.recentViews,e)});return s(o),o}),t},logoutStudent:()=>{(0,r.C)(),s(null),u(null)}},children:e})},"W",0,function(){let e=(0,n.useContext)(l);if(!e)throw Error("useStudentAuth는 StudentAuthProvider 안에서만 사용할 수 있습니다.");return e}])},31381,e=>{var t=e.i(45502);async function n(e,r={}){try{let n=await fetch(e,(0,t.J)(r));if(!n.ok)throw Error(`HTTP 에러: ${n.status}`);return n.json()}catch(e){if(e instanceof DOMException&&"AbortError"===e.name)throw e;throw Error(`데이터 파싱 에러: ${e instanceof Error?e.message:"알 수 없는 에러"}`)}}e.s(["f",0,n])},65607,e=>{function t(e,t){if(!e)return"";let n="eng"===t?e.eng:e.kor,r="eng"===t?e.kor:e.eng;return(n||r||"").trim()}e.s(["T",0,function(e){return"eng"===e?"en":"ko"},"O",0,t,"S",0,function(e,n){let r=t(e.name,n),o=t(e.branch,n);return!o||r.endsWith(o)?r:`${r} ${o}`.trim()},"i",0,function(e){return"eng"===e?"en_US":"ko_KR"}])},2974,e=>{var t=e.i(31381),n=e.i(45502);let r=e.i(85149).L;async function o(e,t){let o=await fetch(`${r}/owners`,(0,n.J)({method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})),i=await o.json().catch(()=>({}));if(!o.ok)throw Error("string"==typeof i.error?i.error:`HTTP ${o.status}`);return i}class i extends Error{status;constructor(e){super(e),this.status=e}}async function a(e,t){let o=await fetch(`${r}/owners/login`,(0,n.J)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,password:t})})),a=await o.json().catch(()=>({}));if(403===o.status&&("pending"===a.status||"rejected"===a.status))throw new i(a.status);if(!o.ok)throw new i("invalid");return(0,n.g)("owner",a)}async function s(){await fetch(`${r}/owners/logout`,(0,n.J)({method:"POST"})),(0,n.d)("owner")}async function l(){let e=await fetch(`${r}/owners/session`,(0,n.J)());if(!e.ok)return(0,n.d)("owner"),null;let t=await e.json().catch(()=>null);return t?(0,n.g)("owner",t):((0,n.d)("owner"),null)}async function c(){return(0,t.f)(`${r}/owners`)}async function u(e,t){let r=await fetch(e,(0,n.J)(t)),o=await r.json().catch(()=>({}));if(!r.ok)throw Error("string"==typeof o.error?o.error:`HTTP ${r.status}`);return o}async function d(e,t){return u(`${r}/owners/${e}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})})}async function f(e,t){return u(`${r}/owners/${e}/phone`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({})})}async function p(e,t,n){let o=await u(`${r}/owners/${e}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:t,newPassword:n})});if(!o.ok)throw Error("string"==typeof o.error?o.error:"비밀번호 변경에 실패했습니다.");return o}async function h(e){return u(`${r}/owners/${e}`,{method:"DELETE"})}async function g(e,n){return(0,t.f)(`${r}/owners/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:n})})}e.s(["t",0,i,"Y",0,h,"Z",0,l,"c",0,c,"n",0,function(e){return/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(e)},"g",0,a,"W",0,s,"T",0,d,"s",0,p,"P",0,f,"Q",0,g,"G",0,o])},95751,e=>{var t=e.i(45502);let n=e.i(85149).L;async function r(e,r){let o=await fetch(`${n}/students/login`,(0,t.J)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,password:r})})),i=await o.json().catch(()=>({}));if(!o.ok)throw Error("string"==typeof i.error?i.error:`HTTP ${o.status}`);return(0,t.g)("student",i)}async function o(){await fetch(`${n}/students/logout`,(0,t.J)({method:"POST"})),(0,t.d)("student")}async function i(){let e=await fetch(`${n}/students/session`,(0,t.J)());if(!e.ok)return(0,t.d)("student"),null;let r=await e.json().catch(()=>null);return r?(0,t.g)("student",r):((0,t.d)("student"),null)}async function a(e){let r=await fetch(`${n}/students`,(0,t.J)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})),o=await r.json().catch(()=>({}));if(!r.ok)throw Error("string"==typeof o.error?o.error:`HTTP ${r.status}`);return o}async function s(e,n){let r=await fetch(e,(0,t.J)(n)),o=await r.json().catch(()=>({}));if(!r.ok)throw Error("string"==typeof o.error?o.error:`HTTP ${r.status}`);return o}async function l(e,t){return s(`${n}/students/${e}/recent-views`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:t})})}async function c(e,t){return s(`${n}/students/${e}/favorites`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storeId:t})})}async function u(e,t){return s(`${n}/students/${e}/favorites/${t}`,{method:"DELETE"})}async function d(e,t){return s(`${n}/students/${e}/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:t})})}async function f(e,t,r){let o=await s(`${n}/students/${e}/password`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:t,newPassword:r})});if(!o.ok)throw Error("string"==typeof o.error?o.error:"비밀번호 변경에 실패했습니다.");return o}async function p(e){return s(`${n}/students/${e}`,{method:"DELETE"})}e.s(["S",0,c,"o",0,l,"w",0,p,"A",0,i,"Y",0,r,"C",0,o,"D",0,d,"Z",0,f,"r",0,function(e,t){return[t,...e.filter(e=>e!==t)].slice(0,7)},"s",0,u,"i",0,a])},9319,e=>{var t=e.i(43476),n=e.i(97053),r=e.i(71645);let o=n.U.button.withConfig({displayName:"Languages__Language",componentId:"sc-5325c235-0"})`
    font-weight: bold;
    background-color: ${({$selected:e})=>e?"#E3E6FF":"white"};
    border: 0px solid black;
    border-radius: 0;
    padding: 0.5rem 0.6rem;
`;function i({languageName:e,selected:n,onClick:r}){return(0,t.jsx)(o,{$selected:n,onClick:r,children:e})}var a=e.i(11110);let s=n.U.div.withConfig({displayName:"LanguageButtons__LanguageButton",componentId:"sc-b0c032a-0"})`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;e.s(["f",0,function({className:e,language:n,onChangeLanguage:o}){let l=(0,r.useContext)(a.d),c=n??l?.language??"kor",u=e=>{l?.setLanguage(e),o?.(e)};return(0,t.jsxs)(s,{className:e,children:[(0,t.jsx)(i,{languageName:"KOR",selected:"kor"===c,onClick:()=>u("kor")}),(0,t.jsx)(i,{languageName:"ENG",selected:"eng"===c,onClick:()=>u("eng")})]})}],9319)}],18566,(e,t,n)=>{t.exports=e.r(76562)}]);