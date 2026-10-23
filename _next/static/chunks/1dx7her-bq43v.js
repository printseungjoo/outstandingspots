(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60070,e=>{"use strict";var n=e.i(43476),i=e.i(71645),t=e.i(18566),o=e.i(30490);function r({children:e}){let{isOwner:n,isCheckingOwner:a}=(0,o.V)(),d=(0,t.useRouter)();return((0,i.useEffect)(()=>{a||n||d.replace("/login")},[n,a,d]),a||!n)?null:e}var a=e.i(97053),d=e.i(22016),c=e.i(11110);let s=a.U.div.withConfig({displayName:"OwnerNav__OwnerNavStyled",componentId:"sc-1613b046-0"})`
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
`,l=a.U.div.withConfig({displayName:"OwnerNav__OwnerNavTop",componentId:"sc-1613b046-1"})`
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
`,m=a.U.p.withConfig({displayName:"OwnerNav__Text",componentId:"sc-1613b046-2"})`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,h=(0,a.U)(d.default).withConfig({displayName:"OwnerNav__OwnerNavOption",componentId:"sc-1613b046-3"})`
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
        color: ${({$selected:e})=>e?"#7965EA":"black"};
        background-color: ${({$selected:e})=>e?"#F1EDFC":"transparent"};
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
`,p=a.U.span.withConfig({displayName:"OwnerNav__IconSlot",componentId:"sc-1613b046-4"})`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,w=a.U.img.withConfig({displayName:"OwnerNav__Icon",componentId:"sc-1613b046-5"})`
    width: 0.9rem;
    height: 0.9rem;
`,g=a.U.img.withConfig({displayName:"OwnerNav__SmallIcon",componentId:"sc-1613b046-6"})`
    width: 1rem;
    height: 1rem;
`,x=a.U.div.withConfig({displayName:"OwnerNav__OwnerNavBottom",componentId:"sc-1613b046-7"})`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,f=a.U.button.withConfig({displayName:"OwnerNav__OwnerLogoutButton",componentId:"sc-1613b046-8"})`
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
`;function u(){let e=(0,t.usePathname)(),i=(0,t.useRouter)(),{t:r}=(0,c.b)(),{logoutOwner:a}=(0,o.V)(),d="/owner"===e||"/owner/"===e;return(0,n.jsxs)(s,{children:[(0,n.jsxs)(l,{children:[(0,n.jsx)(m,{children:" 관리 "}),(0,n.jsxs)(h,{href:"/owner",$selected:d,children:[(0,n.jsxs)(p,{children:[" ",(0,n.jsx)(w,{src:d?"/coloredStoreIcon.png":"/storePageIcon.png",alt:"store icon"})," "]}),r("storeInformation")]}),(0,n.jsxs)(h,{href:"/owner/edit",$selected:"/owner/edit"===e,children:[(0,n.jsxs)(p,{children:[" ",(0,n.jsx)(g,{src:"/owner/edit"===e?"/fileIcon.png":"/blackFileIcon.png",alt:"edit icon"})," "]}),r("editStoreInformation")]}),(0,n.jsxs)(h,{href:"/owner/account",$selected:"/owner/account"===e,children:[(0,n.jsxs)(p,{children:[" ",(0,n.jsx)(g,{src:"/owner/account"===e?"/coloredMyPageIcon.png":"/myPageIcon.png",alt:"account icon"})," "]}),r("accountManagement")]})]}),(0,n.jsx)(x,{children:(0,n.jsx)(f,{type:"button",onClick:()=>{a(),i.push("/login")},children:r("logout")})})]})}let b=a.U.div.withConfig({displayName:"OwnerPage__OwnerPageStyled",componentId:"sc-c713fb34-0"})`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,y=a.U.div.withConfig({displayName:"OwnerPage__OwnerContent",componentId:"sc-c713fb34-1"})`
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
`;function j({children:e}){return(0,n.jsxs)(b,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(y,{children:e})]})}e.s(["default",0,function({children:e}){return(0,n.jsx)(r,{children:(0,n.jsx)(j,{children:e})})}],60070)}]);