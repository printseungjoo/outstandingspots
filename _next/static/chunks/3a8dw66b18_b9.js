(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91208,e=>{"use strict";var t=e.i(43476),i=e.i(65607),n=e.i(97053),o=e.i(71645),d=e.i(11110),r=e.i(38313),l=e.i(1834),a=e.i(90261),s=e.i(18566),c=e.i(83721);let m=n.U.div.withConfig({displayName:"StudentRecentTable__TableWrap",componentId:"sc-f6c63b88-0"})`
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,h=n.U.table.withConfig({displayName:"StudentRecentTable__Table",componentId:"sc-f6c63b88-1"})`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,p=n.U.th.withConfig({displayName:"StudentRecentTable__Th",componentId:"sc-f6c63b88-2"})`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,f=n.U.td.withConfig({displayName:"StudentRecentTable__Td",componentId:"sc-f6c63b88-3"})`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,b=n.U.img.withConfig({displayName:"StudentRecentTable__StorePhoto",componentId:"sc-f6c63b88-4"})`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,x=(0,n.U)(p).withConfig({displayName:"StudentRecentTable__PhotoTh",componentId:"sc-f6c63b88-5"})`
    width: 4.5rem;
`,g=(0,n.U)(p).withConfig({displayName:"StudentRecentTable__ActionTh",componentId:"sc-f6c63b88-6"})`
    width: 6rem;
`,u=n.U.button.withConfig({displayName:"StudentRecentTable__ActionButton",componentId:"sc-f6c63b88-7"})`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,w=n.U.div.withConfig({displayName:"StudentRecentTable__CardList",componentId:"sc-f6c63b88-8"})`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,_=n.U.div.withConfig({displayName:"StudentRecentTable__StoreCard",componentId:"sc-f6c63b88-9"})`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,y=n.U.div.withConfig({displayName:"StudentRecentTable__CardTop",componentId:"sc-f6c63b88-10"})`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,j=n.U.img.withConfig({displayName:"StudentRecentTable__CardPhoto",componentId:"sc-f6c63b88-11"})`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,T=n.U.div.withConfig({displayName:"StudentRecentTable__CardInfo",componentId:"sc-f6c63b88-12"})`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,S=n.U.p.withConfig({displayName:"StudentRecentTable__CardName",componentId:"sc-f6c63b88-13"})`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,C=n.U.p.withConfig({displayName:"StudentRecentTable__CardMeta",componentId:"sc-f6c63b88-14"})`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,R=n.U.div.withConfig({displayName:"StudentRecentTable__CardActions",componentId:"sc-f6c63b88-15"})`
    display: flex;
    gap: 0.45rem;
`,N=(0,n.U)(u).withConfig({displayName:"StudentRecentTable__CardActionButton",componentId:"sc-f6c63b88-16"})`
    flex: 1;
    padding: 0.45rem 0.7rem;
`;function v({stores:e}){let{language:n,t:o}=(0,d.b)(),r=(0,s.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)(x,{children:[" ",o("photo")," "]}),(0,t.jsxs)(p,{children:[" ",o("name")," "]}),(0,t.jsxs)(p,{children:[" ",o("theme")," "]}),(0,t.jsxs)(p,{children:[" ",o("discount")," "]}),(0,t.jsxs)(g,{children:[" ",o("actions")," "]})]})}),(0,t.jsx)("tbody",{children:e.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(f,{children:(0,t.jsx)(b,{src:(0,c.C)(e.photo),alt:(0,i.O)(e.name,n)})}),(0,t.jsxs)(f,{children:[" ",(0,i.S)(e,n)," "]}),(0,t.jsxs)(f,{children:[" ",(0,i.O)(e.theme,n)," "]}),(0,t.jsxs)(f,{children:[" ",(0,i.O)(e.discount,n)," "]}),(0,t.jsx)(f,{children:(0,t.jsx)(u,{type:"button",onClick:()=>r.push(`/?store=${e._id}`),children:o("view")})})]},e._id))})]})}),(0,t.jsx)(w,{children:e.map(e=>(0,t.jsxs)(_,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(j,{src:(0,c.C)(e.photo),alt:(0,i.O)(e.name,n)}),(0,t.jsxs)(T,{children:[(0,t.jsxs)(S,{children:[" ",(0,i.S)(e,n)," "]}),(0,t.jsxs)(C,{children:[" ",o("theme"),": ",(0,i.O)(e.theme,n)," "]}),(0,t.jsxs)(C,{children:[" ",o("discount"),": ",(0,i.O)(e.discount,n)," "]})]})]}),(0,t.jsx)(R,{children:(0,t.jsx)(N,{type:"button",onClick:()=>r.push(`/?store=${e._id}`),children:o("view")})})]},e._id))})]})}let U=n.U.div.withConfig({displayName:"StudentRecentTab__StudentRecentTabStyled",componentId:"sc-36f1eb57-0"})`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    overflow: hidden;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`,I=n.U.div.withConfig({displayName:"StudentRecentTab__TitleDiv",componentId:"sc-36f1eb57-1"})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,k=n.U.p.withConfig({displayName:"StudentRecentTab__BoldText",componentId:"sc-36f1eb57-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,z=n.U.p.withConfig({displayName:"StudentRecentTab__SubText",componentId:"sc-36f1eb57-3"})`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`,A=n.U.div.withConfig({displayName:"StudentRecentTab__FilterBlock",componentId:"sc-36f1eb57-4"})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
`,F=n.U.p.withConfig({displayName:"StudentRecentTab__FilterLabel",componentId:"sc-36f1eb57-5"})`
    font-size: 0.75rem;
    color: #6b6580;
    margin: 0;
`,O=n.U.select.withConfig({displayName:"StudentRecentTab__Select",componentId:"sc-36f1eb57-6"})`
    width: 12rem;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.85rem;
`,B=n.U.p.withConfig({displayName:"StudentRecentTab__FilterHint",componentId:"sc-36f1eb57-7"})`
    display: none;
    font-size: 0.8rem;
    color: black;
    margin: 0;
    text-align: left;

    @media (max-width: 1024px) {
        display: block;
    }
`,E=n.U.p.withConfig({displayName:"StudentRecentTab__EmptyMessage",componentId:"sc-36f1eb57-8"})`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: left;
    font-size: 0.95rem;
    color: #6b6580;
`;e.s(["StudentRecentTab",0,function(){let{language:e,t:n}=(0,d.b)(),{stores:s}=(0,r.g)(),{student:c}=(0,l.W)(),{categories:m}=(0,a.i)(),[h,p]=(0,o.useState)("all"),f=(c?.recentViews??[]).slice(0,7).map(e=>s.find(t=>String(t._id)===String(e))).filter(e=>!!e),b=f.filter(e=>"all"===h||e.category.kor===h);return(0,t.jsxs)(U,{children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(k,{children:[" ",n("recentlyViewedStores")," "]}),(0,t.jsxs)(z,{children:[" ",n("showsThe7MostRecentlyViewedStores")," "]})]}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(F,{children:[" ",n("filter")," "]}),(0,t.jsxs)(O,{value:h,onChange:e=>p(e.target.value),children:[(0,t.jsxs)("option",{value:"all",children:[" ",n("all")," "]}),m.map(n=>(0,t.jsx)("option",{value:n.name.kor,children:(0,i.O)(n.name,e)},n._id))]}),(0,t.jsxs)(B,{children:[" ",n("showsThe7MostRecentlyViewedStores")," "]})]}),0===f.length?(0,t.jsxs)(E,{children:[" ",n("thereAreNoRecentlyViewedStores")," "]}):0===b.length?(0,t.jsxs)(E,{children:[" ",n("thereAreNoStoresMatchingThisFilter")," "]}):(0,t.jsx)(v,{stores:b})]})}],91208)}]);