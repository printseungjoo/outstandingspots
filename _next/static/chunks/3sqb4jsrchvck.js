(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53029,e=>{function n(e){let[n,t]=e.split(":").map(Number);return Number.isNaN(n)||Number.isNaN(t)?null:60*n+t}e.s(["f",0,"📢영업중","d",0,function(e,t){let i=n(e),r=n(t);if(null===i||null===r)return!1;if(i===r)return!0;let o=function(e=new Date){let n=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Seoul",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(e);return 60*Number(n.find(e=>"hour"===e.type)?.value??0)+Number(n.find(e=>"minute"===e.type)?.value??0)}();return r>i?o>=i&&o<=r:o>=i||o<=r}])},26496,e=>{var n=e.i(43476),t=e.i(97053);let i=t.U.button.withConfig({displayName:"NaverMaps__NaverMap",componentId:"sc-59ffb2e5-0"})`
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
`;e.s(["f",0,function({storeNaverMap:e}){return(0,n.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i,{children:" N "})})}])},59393,e=>{var n=e.i(43476),t=e.i(2389),i=e.i(97053),r=e.i(53029);let o=i.U.p.withConfig({displayName:"OpenOrNot__Open",componentId:"sc-8f5d25e8-0"})`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,l=i.U.p.withConfig({displayName:"OpenOrNot__Closed",componentId:"sc-8f5d25e8-1"})`
    font-weight: bold;
    color: #EE6969;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;e.s(["f",0,function({openTime:e,closeTime:i,language:a}){let m=(0,t.f)(a),s=(0,r.d)(e,i);return(0,n.jsx)(n.Fragment,{children:s?(0,n.jsxs)(o,{children:[" ",m("open")," "]}):(0,n.jsxs)(l,{children:[" ",m("closed")," "]})})}])}])})();