(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81957,e=>{"use strict";var t=e.i(43476),n=e.i(71645),i=e.i(18566),d=e.i(1834);function o({children:e}){let{isStudent:t,isCheckingStudent:a}=(0,d.W)(),r=(0,i.useRouter)();return((0,n.useEffect)(()=>{a||t||r.replace("/login")},[t,a,r]),a||!t)?null:e}var a=e.i(97053),r=e.i(22016),c=e.i(11110);let s=a.U.div.withConfig({displayName:"StudentNav__StudentNavStyled",componentId:"sc-b0a34b8e-0"})`
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
`,l=a.U.div.withConfig({displayName:"StudentNav__StudentNavTop",componentId:"sc-b0a34b8e-1"})`
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
`,m=a.U.p.withConfig({displayName:"StudentNav__Text",componentId:"sc-b0a34b8e-2"})`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`,h=(0,a.U)(r.default).withConfig({displayName:"StudentNav__StudentNavOption",componentId:"sc-b0a34b8e-3"})`
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
`,p=a.U.span.withConfig({displayName:"StudentNav__IconSlot",componentId:"sc-b0a34b8e-4"})`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,u=a.U.img.withConfig({displayName:"StudentNav__Icon",componentId:"sc-b0a34b8e-5"})`
    width: 0.9rem;
    height: 0.9rem;
`,g=a.U.img.withConfig({displayName:"StudentNav__SmallIcon",componentId:"sc-b0a34b8e-6"})`
    width: 1rem;
    height: 1rem;
`,x=a.U.div.withConfig({displayName:"StudentNav__StudentNavBottom",componentId:"sc-b0a34b8e-7"})`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`,f=a.U.button.withConfig({displayName:"StudentNav__StudentLogoutButton",componentId:"sc-b0a34b8e-8"})`
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
`;function w(){let e=(0,i.usePathname)(),n=(0,i.useRouter)(),{t:o}=(0,c.b)(),{logoutStudent:a}=(0,d.W)(),r="/student"===e||"/student/"===e;return(0,t.jsxs)(s,{children:[(0,t.jsxs)(l,{children:[(0,t.jsxs)(m,{children:[" ",o("myPage")," "]}),(0,t.jsxs)(h,{href:"/student",$selected:r,children:[(0,t.jsxs)(p,{children:[" ",(0,t.jsx)(u,{src:r?"/coloredStoreIcon.png":"/storePageIcon.png",alt:"favorites icon"})," "]}),o("favoriteStores")]}),(0,t.jsxs)(h,{href:"/student/recent",$selected:"/student/recent"===e,children:[(0,t.jsxs)(p,{children:[" ",(0,t.jsx)(g,{src:"/student/recent"===e?"/fileIcon.png":"/blackFileIcon.png",alt:"recent icon"})," "]}),o("recentlyViewed")]}),(0,t.jsxs)(h,{href:"/student/account",$selected:"/student/account"===e,children:[(0,t.jsxs)(p,{children:[" ",(0,t.jsx)(g,{src:"/student/account"===e?"/coloredMyPageIcon.png":"/myPageIcon.png",alt:"account icon"})," "]}),o("accountManagement")]})]}),(0,t.jsx)(x,{children:(0,t.jsx)(f,{onClick:()=>{a(),n.push("/login")},children:o("logout")})})]})}let b=a.U.div.withConfig({displayName:"StudentPage__StudentPageStyled",componentId:"sc-86cd0cf5-0"})`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`,y=a.U.div.withConfig({displayName:"StudentPage__StudentContent",componentId:"sc-86cd0cf5-1"})`
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
`;function v({children:e}){return(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{}),(0,t.jsx)(y,{children:e})]})}e.s(["default",0,function({children:e}){return(0,t.jsx)(o,{children:(0,t.jsx)(v,{children:e})})}],81957)}]);