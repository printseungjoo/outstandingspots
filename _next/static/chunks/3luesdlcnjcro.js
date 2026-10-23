(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67618,96236,e=>{var i=e.i(43476),t=e.i(97053),o=e.i(11110);let r=t.U.div.withConfig({displayName:"AdminStoreSearch__AdminStoreSearchStyled",componentId:"sc-a0c7e3ac-0"})`
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
`,n=t.U.p.withConfig({displayName:"AdminStoreSearch__Text",componentId:"sc-a0c7e3ac-1"})`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,a=t.U.div.withConfig({displayName:"AdminStoreSearch__SearchDiv",componentId:"sc-a0c7e3ac-2"})`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,d=t.U.div.withConfig({displayName:"AdminStoreSearch__SearchBarDiv",componentId:"sc-a0c7e3ac-3"})`
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
`,s=t.U.span.withConfig({displayName:"AdminStoreSearch__SearchIcon",componentId:"sc-a0c7e3ac-4"})`
    font-size: 1rem;
    color: #333;
`,l=t.U.input.withConfig({displayName:"AdminStoreSearch__SearchInput",componentId:"sc-a0c7e3ac-5"})`
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
`;e.s(["f",0,function({searchValue:e,onChangeSearchValue:t}){let{language:c,t:m}=(0,o.b)();return(0,i.jsxs)(r,{children:[(0,i.jsxs)(n,{children:[" ",m("search")," "]}),(0,i.jsx)(a,{children:(0,i.jsxs)(d,{children:[(0,i.jsx)(s,{children:" 🔍 "}),(0,i.jsx)(l,{type:"text",id:"searchBar",value:e,onChange:e=>t(e.target.value),placeholder:"kor"===c?"매장 이름 혹은 테마로 검색해보세요.":"Search by store name or theme."})]})})]})}],67618);var c=e.i(65607),m=e.i(71645),h=e.i(90261);let p=t.U.div.withConfig({displayName:"AdminStoreSearchByCategory__AdminStoreSearchByCategoryStyled",componentId:"sc-5757a23-0"})`
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
`,g=t.U.p.withConfig({displayName:"AdminStoreSearchByCategory__Text",componentId:"sc-5757a23-1"})`
    color: black;
    font-size: 0.8rem;
    margin: 0;
    box-sizing: border-box;
    padding-right: 0.7rem;

    @media (max-width: 1024px) {
        display: none;
    }
`,f=t.U.div.withConfig({displayName:"AdminStoreSearchByCategory__SearchDiv",componentId:"sc-5757a23-2"})`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`,x=t.U.button.withConfig({displayName:"AdminStoreSearchByCategory__SelectButton",componentId:"sc-5757a23-3"})`
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
`,u=t.U.ul.withConfig({displayName:"AdminStoreSearchByCategory__OptionsList",componentId:"sc-5757a23-4"})`
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
`,b=t.U.li.withConfig({displayName:"AdminStoreSearchByCategory__OptionItem",componentId:"sc-5757a23-5"})`
    padding: 0.45rem 0.7rem;
    font-size: 0.85rem;
    text-align: center;
    cursor: pointer;
    color: #2E2A63;
    background: ${({$selected:e})=>e?"#F1EDFC":"white"};

    &:hover {
        background: #F1EDFC;
    }
`;e.s(["f",0,function({selectedCategory:e,onChangeSelectedCategory:t}){let{categories:r}=(0,h.i)(),{language:n,t:a}=(0,o.b)(),[d,s]=(0,m.useState)(!1),l=(0,m.useRef)(null),w=a("all"),y="all"===e?w:r.find(i=>i.name.kor===e)?.name[n]??w;return(0,m.useEffect)(()=>{function e(e){l.current&&!l.current.contains(e.target)&&s(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,i.jsxs)(p,{children:[(0,i.jsxs)(g,{children:[" ",a("filter")," "]}),(0,i.jsxs)(f,{ref:l,children:[(0,i.jsx)(x,{type:"button",onClick:()=>s(e=>!e),children:y}),d&&(0,i.jsxs)(u,{children:[(0,i.jsx)(b,{$selected:"all"===e,onClick:()=>{t("all"),s(!1)},children:w}),r.map(o=>(0,i.jsx)(b,{$selected:e===o.name.kor,onClick:()=>{t(o.name.kor),s(!1)},children:(0,c.O)(o.name,n)},o._id))]})]})]})}],96236)},15753,e=>{var i=e.i(43476),t=e.i(97053),o=e.i(71645),r=e.i(65607),n=e.i(18566),a=e.i(11110),d=e.i(1834),s=e.i(95751),l=e.i(83721);let c=t.U.div.withConfig({displayName:"StudentFavoritesTable__TableWrap",componentId:"sc-6b0029f3-0"})`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,m=t.U.table.withConfig({displayName:"StudentFavoritesTable__Table",componentId:"sc-6b0029f3-1"})`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,h=t.U.th.withConfig({displayName:"StudentFavoritesTable__Th",componentId:"sc-6b0029f3-2"})`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,p=t.U.td.withConfig({displayName:"StudentFavoritesTable__Td",componentId:"sc-6b0029f3-3"})`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,g=t.U.img.withConfig({displayName:"StudentFavoritesTable__StorePhoto",componentId:"sc-6b0029f3-4"})`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`,f=(0,t.U)(h).withConfig({displayName:"StudentFavoritesTable__PhotoTh",componentId:"sc-6b0029f3-5"})`
    width: 4.5rem;
`,x=(0,t.U)(h).withConfig({displayName:"StudentFavoritesTable__ActionTh",componentId:"sc-6b0029f3-6"})`
    width: 10rem;
`,u=t.U.button.withConfig({displayName:"StudentFavoritesTable__ActionButton",componentId:"sc-6b0029f3-7"})`
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
`,b=t.U.div.withConfig({displayName:"StudentFavoritesTable__CardList",componentId:"sc-6b0029f3-8"})`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
        box-sizing: border-box;
    }
`,w=t.U.div.withConfig({displayName:"StudentFavoritesTable__StoreCard",componentId:"sc-6b0029f3-9"})`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,y=t.U.div.withConfig({displayName:"StudentFavoritesTable__CardTop",componentId:"sc-6b0029f3-10"})`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`,S=t.U.img.withConfig({displayName:"StudentFavoritesTable__CardPhoto",componentId:"sc-6b0029f3-11"})`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`,v=t.U.div.withConfig({displayName:"StudentFavoritesTable__CardInfo",componentId:"sc-6b0029f3-12"})`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,_=t.U.p.withConfig({displayName:"StudentFavoritesTable__CardName",componentId:"sc-6b0029f3-13"})`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,C=t.U.p.withConfig({displayName:"StudentFavoritesTable__CardMeta",componentId:"sc-6b0029f3-14"})`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,j=t.U.div.withConfig({displayName:"StudentFavoritesTable__CardActions",componentId:"sc-6b0029f3-15"})`
    display: flex;
    gap: 0.45rem;
`,F=(0,t.U)(u).withConfig({displayName:"StudentFavoritesTable__CardActionButton",componentId:"sc-6b0029f3-16"})`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;function T({stores:e}){let{language:t,t:o}=(0,a.b)(),N=(0,n.useRouter)(),{student:I,updateStudent:U}=(0,d.W)();async function k(e){if(I?._id)try{let i=await (0,s.s)(I._id,e._id);U(i),alert(o("removedFromFavorites"))}catch(e){console.error(e),alert(o("failedToRemoveTheFavorite"))}}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{children:(0,i.jsxs)(m,{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsxs)(f,{children:[" ",o("photo")," "]}),(0,i.jsxs)(h,{children:[" ",o("name")," "]}),(0,i.jsxs)(h,{children:[" ",o("theme")," "]}),(0,i.jsxs)(h,{children:[" ",o("discount")," "]}),(0,i.jsxs)(x,{children:[" ",o("actions")," "]})]})}),(0,i.jsx)("tbody",{children:e.map(e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)(p,{children:(0,i.jsx)(g,{src:(0,l.C)(e.photo),alt:(0,r.O)(e.name,t)})}),(0,i.jsxs)(p,{children:[" ",(0,r.S)(e,t)," "]}),(0,i.jsxs)(p,{children:[" ",(0,r.O)(e.theme,t)," "]}),(0,i.jsxs)(p,{children:[" ",(0,r.O)(e.discount,t)," "]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(u,{type:"button",onClick:()=>N.push(`/?store=${e._id}`),children:o("view")}),(0,i.jsx)(u,{type:"button",onClick:()=>{k(e)},children:o("delete")})]})]},e._id))})]})}),(0,i.jsx)(b,{children:e.map(e=>(0,i.jsxs)(w,{children:[(0,i.jsxs)(y,{children:[(0,i.jsx)(S,{src:(0,l.C)(e.photo),alt:(0,r.O)(e.name,t)}),(0,i.jsxs)(v,{children:[(0,i.jsxs)(_,{children:[" ",(0,r.S)(e,t)," "]}),(0,i.jsxs)(C,{children:[" ",o("theme"),": ",(0,r.O)(e.theme,t)," "]}),(0,i.jsxs)(C,{children:[" ",o("discount"),": ",(0,r.O)(e.discount,t)," "]})]})]}),(0,i.jsxs)(j,{children:[(0,i.jsx)(F,{type:"button",onClick:()=>N.push(`/?store=${e._id}`),children:o("view")}),(0,i.jsx)(F,{type:"button",onClick:()=>{k(e)},children:o("delete")})]})]},e._id))})]})}let N=t.U.div.withConfig({displayName:"StudentFavoritesTop__StudentFavoritesTopStyled",componentId:"sc-cd963daf-0"})`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,I=t.U.div.withConfig({displayName:"StudentFavoritesTop__TitleDiv",componentId:"sc-cd963daf-1"})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,U=t.U.p.withConfig({displayName:"StudentFavoritesTop__BoldText",componentId:"sc-cd963daf-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,k=t.U.p.withConfig({displayName:"StudentFavoritesTop__SubText",componentId:"sc-cd963daf-3"})`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function z(){let{t:e}=(0,a.b)();return(0,i.jsx)(N,{children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(U,{children:[" ",e("favoriteStores")," "]}),(0,i.jsxs)(k,{children:[" ",e("showsTheStoresYouFavoritedOnTheMapPage")," "]})]})})}var A=e.i(67618),B=e.i(96236);let E=t.U.div.withConfig({displayName:"StudentFavoritesNumber__StudentFavoritesNumberStyled",componentId:"sc-47363339-0"})`
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
`,O=t.U.p.withConfig({displayName:"StudentFavoritesNumber__Text",componentId:"sc-47363339-1"})`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`,L=t.U.p.withConfig({displayName:"StudentFavoritesNumber__NumberText",componentId:"sc-47363339-2"})`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;function D({count:e}){let{t}=(0,a.b)();return(0,i.jsxs)(E,{children:[(0,i.jsxs)(O,{children:[" ",t("favoriteStoresNumber")," "]}),(0,i.jsxs)(L,{children:[" ",e," "]})]})}let P=t.U.div.withConfig({displayName:"StudentFavoritesFilterBar__StudentFavoritesFilterBarStyled",componentId:"sc-78f6e056-0"})`
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
`;function R({searchValue:e,onChangeSearchValue:t,selectedCategory:o,onChangeSelectedCategory:r,favoriteCount:n}){return(0,i.jsxs)(P,{children:[(0,i.jsx)(A.f,{searchValue:e,onChangeSearchValue:t}),(0,i.jsx)(D,{count:n}),(0,i.jsx)(B.f,{selectedCategory:o,onChangeSelectedCategory:r})]})}var $=e.i(38313);let M=t.U.div.withConfig({displayName:"StudentFavoritesTab__StudentFavoritesTabStyled",componentId:"sc-2e0ecde6-0"})`
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
`,V=t.U.p.withConfig({displayName:"StudentFavoritesTab__EmptyMessage",componentId:"sc-2e0ecde6-1"})`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: center;
    font-size: 0.95rem;
    color: #6b6580;
`;e.s(["StudentFavoritesTab",0,function(){let[e,t]=(0,o.useState)(""),[n,s]=(0,o.useState)("all"),{stores:l}=(0,$.g)(),{student:c}=(0,d.W)(),{language:m,t:h}=(0,a.b)(),p=c?.favorites??[],g=l.filter(e=>p.includes(e._id)),f=e.trim().toLowerCase(),x=g.filter(e=>{let i="all"===n||e.category.kor===n;if(!f)return i;let t=e.name[m].toLowerCase(),o=e.theme[m].toLowerCase();return i&&(t.includes(f)||o.includes(f))}),u=[...x].sort((e,i)=>{let t=(0,r.S)(e,m),o=(0,r.S)(i,m);return t.localeCompare(o,(0,r.T)(m))});return(0,i.jsxs)(M,{children:[(0,i.jsx)(z,{}),(0,i.jsx)(R,{searchValue:e,onChangeSearchValue:t,selectedCategory:n,onChangeSelectedCategory:s,favoriteCount:g.length}),0===g.length?(0,i.jsxs)(V,{children:[" ",h("thereAreNoFavoriteStores")," "]}):0===x.length?(0,i.jsxs)(V,{children:[" ",h("thereAreNoStoresMatchingThisFilter")," "]}):(0,i.jsx)(T,{stores:u})]})}],15753)}])})();