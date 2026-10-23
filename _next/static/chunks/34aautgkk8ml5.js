(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62959,e=>{"use strict";var i=e.i(43476),n=e.i(71645),t=e.i(18566),d=e.i(41513);function o({children:e}){let{isAdmin:i,isCheckingAdmin:r}=(0,d.A)(),a=(0,t.useRouter)();return((0,n.useEffect)(()=>{r||i||a.replace("/login")},[i,r,a]),r||!i)?null:e}var r=e.i(97053),a=e.i(22016),m=e.i(11110);let s=r.U.div.withConfig({displayName:"AdminNav__AdminNavStyled",componentId:"sc-21119e8-0"})`
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
`,l=r.U.div.withConfig({displayName:"AdminNav__AdminNavTop",componentId:"sc-21119e8-1"})`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        display: contents;
    }
`,c=r.U.p.withConfig({displayName:"AdminNav__Text",componentId:"sc-21119e8-2"})`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,h=(0,r.U)(a.default).withConfig({displayName:"AdminNav__AdminNavOption",componentId:"sc-21119e8-3"})`
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
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        white-space: nowrap;
    }
`,p=r.U.span.withConfig({displayName:"AdminNav__IconSlot",componentId:"sc-21119e8-4"})`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,g=r.U.img.withConfig({displayName:"AdminNav__Icon",componentId:"sc-21119e8-5"})`
    width: 0.9rem;
    height: 0.9rem;
`,x=r.U.img.withConfig({displayName:"AdminNav__SmallIcon",componentId:"sc-21119e8-6"})`
    width: 1rem;
    height: 1rem;
`,f=r.U.div.withConfig({displayName:"AdminNav__AdminNavBottom",componentId:"sc-21119e8-7"})`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        display: contents;
    }
`,w=r.U.button.withConfig({displayName:"AdminNav__AdminLogoutButton",componentId:"sc-21119e8-8"})`
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
`;function u(){let e=(0,t.usePathname)(),n=(0,t.useRouter)(),{t:o}=(0,m.b)(),{logoutAdmin:r}=(0,d.A)(),a="/admin"===e||"/admin/"===e;return(0,i.jsxs)(s,{children:[(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{children:" 관리 "}),(0,i.jsxs)(h,{href:"/admin",$selected:a,children:[" ",(0,i.jsxs)(p,{children:[" ",(0,i.jsx)(g,{src:a?"/coloredStoreIcon.png":"/storePageIcon.png",alt:"store icon"})," "]})," ",o("storesManagement")," "]}),(0,i.jsxs)(h,{href:"/admin/owners",$selected:"/admin/owners"===e,children:[" ",(0,i.jsxs)(p,{children:[" ",(0,i.jsx)(x,{src:"/admin/owners"===e?"/coloredMyPageIcon.png":"/myPageIcon.png",alt:"owner icon"})," "]})," ",o("ownersManagement")," "]})]}),(0,i.jsx)(f,{children:(0,i.jsx)(w,{onClick:()=>{r(),n.push("/login")},children:o("logout")})})]})}let y=r.U.div.withConfig({displayName:"AdminPage__AdminPageStyled",componentId:"sc-d0d2c087-0"})`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,b=r.U.div.withConfig({displayName:"AdminPage__AdminContent",componentId:"sc-d0d2c087-1"})`
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
`;function v({children:e}){return(0,i.jsxs)(y,{children:[(0,i.jsx)(u,{}),(0,i.jsx)(b,{children:e})]})}e.s(["default",0,function({children:e}){return(0,i.jsx)(o,{children:(0,i.jsx)(v,{children:e})})}],62959)}]);