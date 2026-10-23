(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30319,e=>{var n=e.i(43476),i=e.i(71645),r=e.i(74080),t=e.i(97053),o=e.i(11110),d=e.i(65607);let a=t.U.div.withConfig({displayName:"AdminOwnerSearch__AdminOwnerSearchStyled",componentId:"sc-b7c1a55a-0"})`
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
`,s=t.U.p.withConfig({displayName:"AdminOwnerSearch__Text",componentId:"sc-b7c1a55a-1"})`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,l=t.U.div.withConfig({displayName:"AdminOwnerSearch__SearchDiv",componentId:"sc-b7c1a55a-2"})`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,c=t.U.div.withConfig({displayName:"AdminOwnerSearch__SearchBarDiv",componentId:"sc-b7c1a55a-3"})`
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
`,m=t.U.span.withConfig({displayName:"AdminOwnerSearch__SearchIcon",componentId:"sc-b7c1a55a-4"})`
    font-size: 1rem;
    color: #333;
`,p=t.U.input.withConfig({displayName:"AdminOwnerSearch__SearchInput",componentId:"sc-b7c1a55a-5"})`
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
`,h=t.U.div.withConfig({displayName:"AdminOwnerSearch__Dropdown",componentId:"sc-b7c1a55a-6"})`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,g=t.U.button.withConfig({displayName:"AdminOwnerSearch__DropdownItem",componentId:"sc-b7c1a55a-7"})`
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
`,w=t.U.p.withConfig({displayName:"AdminOwnerSearch__EmptyItem",componentId:"sc-b7c1a55a-8"})`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;function f(e,n){return(0,d.O)(e.storeName,n)}function x(e,n){return`${e.name} \xb7 ${f(e,n)} \xb7 ${e.phone}`}e.s(["V",0,function({searchValue:e,onChangeSearchValue:t,owners:d}){let{language:f,t:b}=(0,o.b)(),[u,y]=(0,i.useState)(!1),[j,_]=(0,i.useState)(0),[C,A]=(0,i.useState)({top:0,left:0,width:0}),O=(0,i.useRef)(null),T=(0,i.useMemo)(()=>{let n=e.trim();return n?d.filter(e=>(function(e,n){let i=n.trim().toLowerCase();if(!i)return!0;let r=i.replace(/\D/g,""),t=e.phone.replace(/\D/g,"");return[e.name,e.phone,e.storeName?.kor??"",e.storeName?.eng??"",x(e,"kor"),x(e,"eng")].join(" ").toLowerCase().includes(i)||r.length>0&&t.includes(r)})(e,n)).slice(0,8):[]},[d,e]),v=()=>{let e=O.current?.getBoundingClientRect();e&&A({top:e.bottom+4,left:e.left,width:e.width})},N=e=>{t(x(e,f)),y(!1)};return(0,n.jsxs)(a,{children:[(0,n.jsxs)(s,{children:[" ",b("search")," "]}),(0,n.jsx)(l,{children:(0,n.jsxs)(c,{ref:O,children:[(0,n.jsx)(m,{children:" 🔍 "}),(0,n.jsx)(p,{type:"text",id:"ownerSearchBar",value:e,autoComplete:"off",onChange:e=>{t(e.target.value),y(!0),_(0),v()},onFocus:()=>{y(!0),v()},onBlur:()=>{window.setTimeout(()=>y(!1),120)},onKeyDown:e=>{if(u&&0!==T.length){if("ArrowDown"===e.key)e.preventDefault(),_(e=>Math.min(e+1,T.length-1));else if("ArrowUp"===e.key)e.preventDefault(),_(e=>Math.max(e-1,0));else if("Enter"===e.key){e.preventDefault();let n=T[j]??T[0];n&&N(n)}}},placeholder:"kor"===f?"이름/매장명/전화번호 검색":"Search name/store name/phone number"})]})}),u&&""!==e.trim()&&(0,r.createPortal)((0,n.jsx)(h,{style:{top:C.top,left:C.left,width:C.width},children:0===T.length?(0,n.jsx)(w,{children:b("noMatchingOwner")}):T.map((e,i)=>(0,n.jsx)(g,{type:"button",className:i===j?"active":"",onMouseDown:n=>{n.preventDefault(),N(e)},children:x(e,f)},e._id))}),document.body)]})},"c",0,f])},29666,e=>{var n=e.i(43476),i=e.i(71645),r=e.i(97053),t=e.i(11110);let o=r.U.div.withConfig({displayName:"AdminOwnersManagementTop__AdminOwnersManagementTopStyled",componentId:"sc-79208889-0"})`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
`,d=r.U.div.withConfig({displayName:"AdminOwnersManagementTop__TitleDiv",componentId:"sc-79208889-1"})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`,a=r.U.p.withConfig({displayName:"AdminOwnersManagementTop__BoldText",componentId:"sc-79208889-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,s=r.U.p.withConfig({displayName:"AdminOwnersManagementTop__SubText",componentId:"sc-79208889-3"})`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;function l(){let{t:e}=(0,t.b)();return(0,n.jsx)(o,{children:(0,n.jsxs)(d,{children:[(0,n.jsxs)(a,{children:[" ",e("ownersManagement")," "]}),(0,n.jsxs)(s,{children:[" ",e("youCanAllowOrManageOwnerRegistration")," "]})]})})}var c=e.i(30319);let m=r.U.div.withConfig({displayName:"AdminOwnersFilterBar__AdminOwnersFilterBarStyled",componentId:"sc-15715cda-0"})`
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
`;function p({searchValue:e,onChangeSearchValue:i,owners:r}){return(0,n.jsx)(m,{children:(0,n.jsx)(c.V,{searchValue:e,onChangeSearchValue:i,owners:r})})}let h=r.U.div.withConfig({displayName:"AdminOwnersTable__TableWrap",componentId:"sc-66fd83d1-0"})`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`,g=r.U.table.withConfig({displayName:"AdminOwnersTable__Table",componentId:"sc-66fd83d1-1"})`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`,w=r.U.th.withConfig({displayName:"AdminOwnersTable__Th",componentId:"sc-66fd83d1-2"})`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`,f=r.U.td.withConfig({displayName:"AdminOwnersTable__Td",componentId:"sc-66fd83d1-3"})`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,x=(0,r.U)(w).withConfig({displayName:"AdminOwnersTable__ActionTh",componentId:"sc-66fd83d1-4"})`
    width: 10rem;
`,b=(0,r.U)(w).withConfig({displayName:"AdminOwnersTable__DateTh",componentId:"sc-66fd83d1-5"})`
    width: 7.5rem;
`,u=(0,r.U)(f).withConfig({displayName:"AdminOwnersTable__EmptyTd",componentId:"sc-66fd83d1-6"})`
    color: #9a94b0;
`,y=r.U.button.withConfig({displayName:"AdminOwnersTable__ActionButton",componentId:"sc-66fd83d1-7"})`
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
`,j=(0,r.U)(y).withConfig({displayName:"AdminOwnersTable__PrimaryButton",componentId:"sc-66fd83d1-8"})`
    background-color: #7965EA;
    color: white;
`,_=r.U.div.withConfig({displayName:"AdminOwnersTable__CardList",componentId:"sc-66fd83d1-9"})`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1rem;
        box-sizing: border-box;
    }
`,C=r.U.div.withConfig({displayName:"AdminOwnersTable__OwnerCard",componentId:"sc-66fd83d1-10"})`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`,A=r.U.div.withConfig({displayName:"AdminOwnersTable__CardInfo",componentId:"sc-66fd83d1-11"})`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`,O=r.U.p.withConfig({displayName:"AdminOwnersTable__CardName",componentId:"sc-66fd83d1-12"})`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`,T=r.U.p.withConfig({displayName:"AdminOwnersTable__CardMeta",componentId:"sc-66fd83d1-13"})`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`,v=r.U.div.withConfig({displayName:"AdminOwnersTable__CardActions",componentId:"sc-66fd83d1-14"})`
    display: flex;
    gap: 0.45rem;
`,N=(0,r.U)(y).withConfig({displayName:"AdminOwnersTable__CardActionButton",componentId:"sc-66fd83d1-15"})`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,I=(0,r.U)(j).withConfig({displayName:"AdminOwnersTable__CardPrimaryButton",componentId:"sc-66fd83d1-16"})`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`,S=r.U.p.withConfig({displayName:"AdminOwnersTable__EmptyCard",componentId:"sc-66fd83d1-17"})`
    margin: 0;
    padding: 0.9rem 0.2rem;
    font-size: 0.85rem;
    color: #9a94b0;
    text-align: left;
`;function U(e){if(!e)return"";let n=new Date(e);if(Number.isNaN(n.getTime()))return e.slice(0,10);let i=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),t=String(n.getDate()).padStart(2,"0");return`${i}-${r}-${t}`}function k({owners:e,variant:i,onApprove:r,onReject:o,onPending:d}){let{language:a,t:s}=(0,t.b)(),l="pending"===i;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{children:(0,n.jsxs)(g,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)(w,{children:[" ",s(l?"applicant":"owner")," "]}),(0,n.jsxs)(w,{children:[" ",s("contact")," "]}),(0,n.jsxs)(w,{children:[" ",s("linkedStore")," "]}),l&&(0,n.jsxs)(b,{children:[" ",s("appliedDate")," "]}),(0,n.jsxs)(x,{children:[" ",s("actions")," "]})]})}),(0,n.jsx)("tbody",{children:0===e.length?(0,n.jsx)("tr",{children:(0,n.jsx)(u,{colSpan:l?5:4,children:s("noOwnersInThisList")})}):e.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)(f,{children:[" ",e.name," "]}),(0,n.jsxs)(f,{children:[" ",e.phone," "]}),(0,n.jsxs)(f,{children:[" ",(0,c.c)(e,a)," "]}),l&&(0,n.jsxs)(f,{children:[" ",U(e.createdAt)," "]}),(0,n.jsx)(f,{children:l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{type:"button",onClick:()=>o?.(e),children:s("reject")}),(0,n.jsx)(j,{type:"button",onClick:()=>r?.(e),children:s("approve")})]}):(0,n.jsx)(y,{type:"button",onClick:()=>d?.(e),children:s("pending")})})]},e._id))})]})}),(0,n.jsx)(_,{children:0===e.length?(0,n.jsx)(S,{children:s("noOwnersInThisList")}):e.map(e=>(0,n.jsxs)(C,{children:[(0,n.jsxs)(A,{children:[(0,n.jsxs)(O,{children:[" ",e.name," "]}),(0,n.jsxs)(T,{children:[" ",s("contact"),": ",e.phone," "]}),(0,n.jsxs)(T,{children:[" ",s("linkedStore"),": ",(0,c.c)(e,a)," "]}),l&&(0,n.jsxs)(T,{children:[s("appliedDate"),": ",U(e.createdAt)]})]}),(0,n.jsx)(v,{children:l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N,{type:"button",onClick:()=>o?.(e),children:s("reject")}),(0,n.jsx)(I,{type:"button",onClick:()=>r?.(e),children:s("approve")})]}):(0,n.jsx)(N,{type:"button",onClick:()=>d?.(e),children:s("pending")})})]},e._id))})]})}var z=e.i(2974);let M=r.U.div.withConfig({displayName:"AdminOwnersManagementTab__AdminOwnersManagementTabStyled",componentId:"sc-40030f55-0"})`
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
`,D=r.U.div.withConfig({displayName:"AdminOwnersManagementTab__Section",componentId:"sc-40030f55-1"})`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,B=r.U.div.withConfig({displayName:"AdminOwnersManagementTab__SectionTitleRow",componentId:"sc-40030f55-2"})`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,F=r.U.p.withConfig({displayName:"AdminOwnersManagementTab__SectionTitle",componentId:"sc-40030f55-3"})`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
`,E=r.U.span.withConfig({displayName:"AdminOwnersManagementTab__SectionCount",componentId:"sc-40030f55-4"})`
    font-weight: bold;
    font-size: 1rem;
    color: #7965EA;
`;e.s(["AdminOwnersManagementTab",0,function(){let{t:e}=(0,t.b)(),[r,o]=(0,i.useState)(""),[d,a]=(0,i.useState)([]),[s,c]=(0,i.useState)(!0),m=(0,i.useCallback)(async()=>{a(await (0,z.c)())},[]);(0,i.useEffect)(()=>{let n=!1;return c(!0),(0,z.c)().then(e=>{n||a(e)}).catch(i=>{console.error(i),n||alert(e("failedToLoadOwners"))}).finally(()=>{n||c(!1)}),()=>{n=!0}},[]);let h=d.filter(e=>"pending"===e.status),g=d.filter(e=>"approved"===e.status),w=d.filter(e=>"rejected"===e.status);async function f(n,i){try{await (0,z.Q)(n._id,i),await m()}catch(n){console.error(n),alert(e("failedToUpdateTheOwner"))}}return(0,n.jsxs)(M,{children:[(0,n.jsx)(l,{}),(0,n.jsx)(p,{searchValue:r,onChangeSearchValue:o,owners:d}),(0,n.jsxs)(D,{children:[(0,n.jsxs)(B,{children:[(0,n.jsxs)(F,{children:[" ",e("pendingApplications")," "]}),(0,n.jsxs)(E,{children:[" ",s?"-":h.length," "]})]}),(0,n.jsx)(k,{variant:"pending",owners:h,onApprove:e=>{f(e,"approved")},onReject:e=>{f(e,"rejected")}})]}),(0,n.jsxs)(D,{children:[(0,n.jsxs)(B,{children:[(0,n.jsxs)(F,{children:[" ",e("approvedOwners")," "]}),(0,n.jsxs)(E,{children:[" ",s?"-":g.length," "]})]}),(0,n.jsx)(k,{variant:"approved",owners:g,onPending:e=>{f(e,"pending")}})]}),(0,n.jsxs)(D,{children:[(0,n.jsxs)(B,{children:[(0,n.jsxs)(F,{children:[" ",e("rejectedOwners")," "]}),(0,n.jsxs)(E,{children:[" ",s?"-":w.length," "]})]}),(0,n.jsx)(k,{variant:"rejected",owners:w,onPending:e=>{f(e,"pending")}})]})]})}],29666)}])})();