(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53029,e=>{function i(e){let[i,r]=e.split(":").map(Number);return Number.isNaN(i)||Number.isNaN(r)?null:60*i+r}e.s(["f",0,"📢영업중","d",0,function(e,r){let n=i(e),t=i(r);if(null===n||null===t)return!1;if(n===t)return!0;let o=function(e=new Date){let i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Seoul",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(e);return 60*Number(i.find(e=>"hour"===e.type)?.value??0)+Number(i.find(e=>"minute"===e.type)?.value??0)}();return t>n?o>=n&&o<=t:o>=n||o<=t}])},26496,e=>{var i=e.i(43476),r=e.i(97053);let n=r.U.button.withConfig({displayName:"NaverMaps__NaverMap",componentId:"sc-59ffb2e5-0"})`
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
`;e.s(["f",0,function({storeNaverMap:e}){return(0,i.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n,{children:" N "})})}])},59393,e=>{var i=e.i(43476),r=e.i(2389),n=e.i(97053),t=e.i(53029);let o=n.U.p.withConfig({displayName:"OpenOrNot__Open",componentId:"sc-8f5d25e8-0"})`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`,a=n.U.p.withConfig({displayName:"OpenOrNot__Closed",componentId:"sc-8f5d25e8-1"})`
    font-weight: bold;
    color: #EE6969;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;e.s(["f",0,function({openTime:e,closeTime:n,language:d}){let l=(0,r.f)(d),s=(0,t.d)(e,n);return(0,i.jsx)(i.Fragment,{children:s?(0,i.jsxs)(o,{children:[" ",l("open")," "]}):(0,i.jsxs)(a,{children:[" ",l("closed")," "]})})}])},73704,e=>{var i=e.i(43476),r=e.i(65607),n=e.i(97053),t=e.i(11110);let o=n.U.div.withConfig({displayName:"OwnerStoreViewTop__OwnerStoreViewTopStyled",componentId:"sc-3f10e47c-0"})`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,a=n.U.div.withConfig({displayName:"OwnerStoreViewTop__TitleDiv",componentId:"sc-3f10e47c-1"})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,d=n.U.p.withConfig({displayName:"OwnerStoreViewTop__BoldText",componentId:"sc-3f10e47c-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,l=n.U.p.withConfig({displayName:"OwnerStoreViewTop__SubText",componentId:"sc-3f10e47c-3"})`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function s(){let{t:e}=(0,t.b)();return(0,i.jsx)(o,{children:(0,i.jsxs)(a,{children:[(0,i.jsxs)(d,{children:[" ",e("storeInformation")," "]}),(0,i.jsxs)(l,{children:[" ",e("youCanCheckTheStoreInformationCurrentlyShownToStudents")," "]})]})})}var m=e.i(59393),c=e.i(26496),h=e.i(30490),f=e.i(38313),p=e.i(83721);let w=n.U.div.withConfig({displayName:"OwnerStoreViewTab__OwnerStoreViewTabStyled",componentId:"sc-5272f133-0"})`
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
`,g=n.U.p.withConfig({displayName:"OwnerStoreViewTab__EmptyText",componentId:"sc-5272f133-1"})`
    font-size: 0.9rem;
    color: #9a94b0;
    margin: 0;
`,x=n.U.div.withConfig({displayName:"OwnerStoreViewTab__SummaryCard",componentId:"sc-5272f133-2"})`
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
`,b=n.U.img.withConfig({displayName:"OwnerStoreViewTab__StorePhoto",componentId:"sc-5272f133-3"})`
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
`,u=n.U.div.withConfig({displayName:"OwnerStoreViewTab__SummaryInfo",componentId:"sc-5272f133-4"})`
    flex: 1;
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    text-align: left;
`,y=n.U.div.withConfig({displayName:"OwnerStoreViewTab__SummaryRow",componentId:"sc-5272f133-5"})`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: ${({$tight:e})=>e?"0.25rem":"0.4rem"};
`,j=n.U.p.withConfig({displayName:"OwnerStoreViewTab__StoreName",componentId:"sc-5272f133-6"})`
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
`,_=n.U.span.withConfig({displayName:"OwnerStoreViewTab__StoreNameText",componentId:"sc-5272f133-7"})`
    display: block;
    line-height: 1;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,T=n.U.span.withConfig({displayName:"OwnerStoreViewTab__NaverMapSlot",componentId:"sc-5272f133-8"})`
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
`,N=n.U.p.withConfig({displayName:"OwnerStoreViewTab__BranchName",componentId:"sc-5272f133-9"})`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,S=n.U.p.withConfig({displayName:"OwnerStoreViewTab__CategoryName",componentId:"sc-5272f133-10"})`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,C=n.U.span.withConfig({displayName:"OwnerStoreViewTab__MetaDot",componentId:"sc-5272f133-11"})`
    color: #8F8F8F;
    font-size: 0.9rem;
    line-height: 1;
`,O=n.U.p.withConfig({displayName:"OwnerStoreViewTab__ThemeName",componentId:"sc-5272f133-12"})`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`,k=n.U.p.withConfig({displayName:"OwnerStoreViewTab__OpeningHours",componentId:"sc-5272f133-13"})`
    margin: 0;
    font-size: 0.9rem;
    color: black;

    &::before {
        content: '|';
        margin-right: 0.38rem;
        margin-left: 0.08rem;
    }
`,I=n.U.div.withConfig({displayName:"OwnerStoreViewTab__CardsRow",componentId:"sc-5272f133-14"})`
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
`,v=`
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
`,U=n.U.div.withConfig({displayName:"OwnerStoreViewTab__InfoCard",componentId:"sc-5272f133-15"})`
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
`,V=n.U.div.withConfig({displayName:"OwnerStoreViewTab__CardScroll",componentId:"sc-5272f133-16"})`
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
    ${v}
`,z=n.U.p.withConfig({displayName:"OwnerStoreViewTab__CardTitle",componentId:"sc-5272f133-17"})`
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0;
`,F=(0,n.U)(U).withConfig({displayName:"OwnerStoreViewTab__BenefitCard",componentId:"sc-5272f133-18"})`
    gap: 1.15rem;
    padding: 1.15rem 1.2rem;
`,B=n.U.div.withConfig({displayName:"OwnerStoreViewTab__BenefitSection",componentId:"sc-5272f133-19"})`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.3rem;
    text-align: left;
`,E=n.U.p.withConfig({displayName:"OwnerStoreViewTab__BenefitTitle",componentId:"sc-5272f133-20"})`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0.3rem 0;
    padding: 0;
    text-align: left;
`,M=n.U.div.withConfig({displayName:"OwnerStoreViewTab__BenefitBox",componentId:"sc-5272f133-21"})`
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
    text-align: left;
`,$=n.U.p.withConfig({displayName:"OwnerStoreViewTab__BenefitText",componentId:"sc-5272f133-22"})`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.85rem;
    color: gray;
    margin: 0;
    padding: 0;
    text-align: left;
`,A=(0,n.U)($).withConfig({displayName:"OwnerStoreViewTab__BenefitNote",componentId:"sc-5272f133-23"})`
    font-size: 0.6rem;
    color: black;
`,D=n.U.div.withConfig({displayName:"OwnerStoreViewTab__FieldList",componentId:"sc-5272f133-24"})`
    width: 100%;
    display: flex;
    flex-direction: column;
`,K=n.U.div.withConfig({displayName:"OwnerStoreViewTab__FieldRow",componentId:"sc-5272f133-25"})`
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
`,R=n.U.p.withConfig({displayName:"OwnerStoreViewTab__FieldLabel",componentId:"sc-5272f133-26"})`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,P=n.U.p.withConfig({displayName:"OwnerStoreViewTab__FieldValue",componentId:"sc-5272f133-27"})`
    font-size: 0.85rem;
    color: #2E2A63;
    margin: 0;
    min-width: 0;
    text-align: right;
    word-break: break-word;
`,L=n.U.a.withConfig({displayName:"OwnerStoreViewTab__MapLink",componentId:"sc-5272f133-28"})`
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
`;e.s(["OwnerStoreViewTab",0,function(){let{language:e,t:n}=(0,t.b)(),{owner:o}=(0,h.V)(),{stores:a}=(0,f.g)(),d=a.find(e=>e._id===o?.storeId);return d?(0,i.jsxs)(w,{children:[(0,i.jsx)(s,{}),(0,i.jsxs)(x,{children:[(0,i.jsx)(b,{src:(0,p.C)(d.photo),alt:(0,r.O)(d.name,e)}),(0,i.jsxs)(u,{children:[(0,i.jsx)(y,{children:(0,i.jsxs)(j,{children:[(0,i.jsx)(_,{children:(0,r.O)(d.name,e)}),(0,i.jsx)(T,{children:(0,i.jsx)(c.f,{storeNaverMap:d.naverMap})})]})}),(0,i.jsx)(y,{children:(0,i.jsxs)(N,{children:[" ",(0,r.O)(d.branch,e)," "]})}),(0,i.jsxs)(y,{$tight:!0,children:[(0,i.jsxs)(S,{children:[" ",(0,r.O)(d.category,e)," "]}),(0,i.jsx)(C,{children:"·"}),(0,i.jsxs)(O,{children:[" ",(0,r.O)(d.theme,e)," "]})]}),(0,i.jsxs)(y,{children:[(0,i.jsx)(m.f,{openTime:d.openTime,closeTime:d.closeTime,language:e}),(0,i.jsxs)(k,{children:[" ",d.openTime," - ",d.closeTime," "]})]})]})]}),(0,i.jsxs)(I,{children:[(0,i.jsx)(F,{children:(0,i.jsxs)(V,{children:[(0,i.jsxs)(B,{children:[(0,i.jsxs)(E,{children:["🎓 ",n("sunyBenefit")]}),(0,i.jsxs)(M,{children:[(0,i.jsx)($,{children:(0,r.O)(d.discount,e)}),(0,i.jsx)(A,{children:n("youMustBringYourSunyStudentIdCardToReceive")})]})]}),(0,i.jsxs)(B,{children:[(0,i.jsxs)(E,{children:["✅ ",n("additionalPrecautions")]}),(0,i.jsx)(M,{children:(0,i.jsx)($,{children:(0,r.O)(d.description,e)})})]})]})}),(0,i.jsxs)(U,{children:[(0,i.jsxs)(z,{children:[" ℹ️ ",n("storeDetails")," "]}),(0,i.jsx)(V,{children:(0,i.jsxs)(D,{children:[(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("storeNameKorEng")}),(0,i.jsx)(P,{children:`${d.name.kor} / ${d.name.eng}`})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("categoryKorEng")}),(0,i.jsx)(P,{children:`${d.category.kor} / ${d.category.eng}`})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("themeKorEng")}),(0,i.jsx)(P,{children:`${d.theme.kor} / ${d.theme.eng}`})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("businessHours")}),(0,i.jsxs)(P,{children:[d.openTime," - ",d.closeTime]})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("naverMap")}),(0,i.jsxs)(L,{href:d.naverMap,target:"_blank",rel:"noopener noreferrer",children:[n("viewOnMap")," ↗"]})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("branchKorEng")}),(0,i.jsx)(P,{children:`${d.branch.kor} / ${d.branch.eng}`})]})]})})]}),(0,i.jsxs)(U,{children:[(0,i.jsxs)(z,{children:[" 📍 ",n("address")," "]}),(0,i.jsx)(V,{children:(0,i.jsxs)(D,{children:[(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("latitude")}),(0,i.jsx)(P,{children:d.lat})]}),(0,i.jsxs)(K,{children:[(0,i.jsx)(R,{children:n("longitude")}),(0,i.jsx)(P,{children:d.lon})]})]})})]})]})]}):(0,i.jsxs)(w,{children:[(0,i.jsx)(s,{}),(0,i.jsx)(g,{children:n("storeInformationWasNotFound")})]})}],73704)}])})();