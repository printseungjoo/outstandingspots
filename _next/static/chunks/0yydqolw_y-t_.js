(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13047,e=>{"use strict";var i=e.i(43476),o=e.i(71645),n=e.i(97053),t=e.i(18566),r=e.i(42099),d=e.i(49721),s=e.i(11110);let a=n.U.div.withConfig({displayName:"LoginIdPassword__LoginIdStyled",componentId:"sc-c6289cc3-0"})`
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
`,c=(0,n.U)(d.f).withConfig({displayName:"LoginIdPassword__ColoredMyPageIcon",componentId:"sc-c6289cc3-1"})`
    height: 2.3vh;
    color: #7A77B0;
`,l=n.U.input.withConfig({displayName:"LoginIdPassword__LoginIdInput",componentId:"sc-c6289cc3-2"})`
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
`,g=n.U.div.withConfig({displayName:"LoginIdPassword__LoginPasswordStyled",componentId:"sc-c6289cc3-3"})`
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
`,h=(0,n.U)(d.f).withConfig({displayName:"LoginIdPassword__Icon",componentId:"sc-c6289cc3-4"})`
    height: 2.3vh;
    color: #7A77B0;
`,m=(0,n.U)(h).withConfig({displayName:"LoginIdPassword__ToggleIcon",componentId:"sc-c6289cc3-5"})`
    cursor: pointer;
    flex-shrink: 0;
`,p=n.U.input.withConfig({displayName:"LoginIdPassword__LoginPasswordInput",componentId:"sc-c6289cc3-6"})`
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
`;function u({onIdChange:e,onPasswordChange:n}){let{t}=(0,s.b)(),[d,x]=(0,o.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)(c,{icon:r.f.fad.user}),(0,i.jsx)(l,{type:"text",placeholder:t("enterYourId"),onChange:i=>{e(i.target.value)}})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(h,{icon:r.f.fas.lock}),(0,i.jsx)(p,{type:d?"text":"password",placeholder:t("enterYourPassword"),onChange:e=>{n(e.target.value)}}),(0,i.jsx)(m,{icon:r.f.far.eye,onClick:()=>x(e=>!e)})]})]})}let x=n.U.button.withConfig({displayName:"LoginButton__LoginButtonStyled",componentId:"sc-d69310cd-0"})`
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
`;function f({onClick:e}){let{t:o}=(0,s.b)();return(0,i.jsx)(x,{type:"button",onClick:e,children:o("login")})}let w=n.U.button.withConfig({displayName:"SignUpButton__LoginButtonStyled",componentId:"sc-fc22ff06-0"})`
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
`;function b({onClick:e}){let{t:o}=(0,s.b)();return(0,i.jsx)(w,{type:"button",onClick:e,children:o("signUp")})}var y=e.i(41513),I=e.i(30490),v=e.i(1834),_=e.i(2974),j=e.i(95751),C=e.i(17053);let L=n.U.div.withConfig({displayName:"LoginForm__LoginFormStyled",componentId:"sc-f070db4-0"})`
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
`,P=n.U.img.withConfig({displayName:"LoginForm__ColoredMyPageIcon",componentId:"sc-f070db4-1"})`
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
`,k=n.U.p.withConfig({displayName:"LoginForm__BoldText",componentId:"sc-f070db4-2"})`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E2A63;
    margin: 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`,N=n.U.div.withConfig({displayName:"LoginForm__LoginDiv",componentId:"sc-f070db4-3"})`
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
`,F=n.U.p.withConfig({displayName:"LoginForm__OnlyText",componentId:"sc-f070db4-4"})`
    font-size: 0.8rem;
    color: #2E2A63;
    margin: 0;
    padding: 0 1rem;
    text-align: center;
`,U=n.U.div.withConfig({displayName:"LoginForm__BlackThinLine",componentId:"sc-f070db4-5"})`
    width: 100%;
    height: 0.1rem;
    border-top: 0.5px solid black;
`;function B({who:e,onlyForWho:n,loginRole:r}){let{loginAdmin:d}=(0,y.A)(),{loginOwner:a}=(0,I.V)(),{loginStudent:c}=(0,v.W)(),{t:l}=(0,s.b)(),g=(0,t.useRouter)(),[h,m]=(0,o.useState)(""),[p,x]=(0,o.useState)(""),w=async()=>{if("student"===r){if(!h.trim()||!p)return void alert(l("pleaseEnterYourIdAndPassword"));try{let e=await (0,j.Y)(h.trim(),p);c(e),g.push("/student")}catch(i){let e=i instanceof Error?i.message:"";if("HTTP 404"===e||e.includes("Cannot POST"))return void alert(l("theLoginApiIsMissingRestartTheApiServerIn"));if("Failed to fetch"===e||e.includes("NetworkError")||e.includes("fetch"))return void alert(l("theApiServerIsNotRunningStartItWithNpm"));alert(l("idOrPasswordIsIncorrect"))}return}if("store"===r){if(!h.trim()||!p)return void alert(l("pleaseEnterYourIdAndPassword"));try{await (0,C.f)(h.trim(),p),d(),g.push("/admin");return}catch{}try{let e=await (0,_.g)(h.trim(),p);a(e),g.push("/owner")}catch(e){if(e instanceof _.t&&"pending"===e.status)return void alert(l("pleaseWaitForAdminApproval"));if(e instanceof _.t&&"rejected"===e.status)return void alert(l("yourRegistrationWasRejectedByTheAdmin"));alert(l("idOrPasswordIsIncorrect"))}}};return(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{src:"/coloredMyPageIcon.png",alt:"coloredMyPageIcon"}),(0,i.jsxs)(k,{children:[" ",e," "]}),(0,i.jsxs)(N,{children:[(0,i.jsx)(u,{onIdChange:m,onPasswordChange:x}),(0,i.jsx)(f,{onClick:()=>{w()}}),(0,i.jsx)(U,{}),(0,i.jsx)(b,{onClick:()=>g.push("student"===r?"/signup/student":"/signup/store")})]}),(0,i.jsxs)(F,{children:[" ",n," "]})]})}let A=n.U.div.withConfig({displayName:"LoginPage__LoginPageStyled",componentId:"sc-7054986c-0"})`
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(#DBD8F7 0%, white 30%, white 70%, #DBD8F7 100%);
`,S=n.U.div.withConfig({displayName:"LoginPage__LoginMain",componentId:"sc-7054986c-1"})`
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
`,T=n.U.img.withConfig({displayName:"LoginPage__LoginBackgroundImage",componentId:"sc-7054986c-2"})`
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
`,z=n.U.div.withConfig({displayName:"LoginPage__RoleToggle",componentId:"sc-7054986c-3"})`
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
`,E=n.U.div.withConfig({displayName:"LoginPage__RoleToggleThumb",componentId:"sc-7054986c-4"})`
    position: absolute;
    top: 0.28rem;
    bottom: 0.28rem;
    left: 0.28rem;
    width: calc(50% - 0.28rem);
    background: white;
    border-radius: 0.7rem;
    box-shadow: 0 2px 10px #2E2A6320;
    transform: translateX(${({$role:e})=>"store"===e?"100%":"0"});
    transition: transform 0.22s ease;
`,R=n.U.button.withConfig({displayName:"LoginPage__RoleToggleButton",componentId:"sc-7054986c-5"})`
    position: relative;
    z-index: 1;
    border: none;
    background: transparent;
    color: ${({$active:e})=>e?"#2E2A63":"#8a84a0"};
    font-weight: ${({$active:e})=>e?700:500};
    padding: 0.55rem 0.4rem;
    font-size: 0.88rem;
    cursor: pointer;
`,D=n.U.div.withConfig({displayName:"LoginPage__FormSlot",componentId:"sc-7054986c-6"})`
    display: contents;

    @media (max-width: 1024px) {
        display: ${({$showOnNarrow:e})=>e?"flex":"none"};
        width: 100%;
        max-width: 22rem;
        justify-content: center;
    }
`;function O(){let{t:e}=(0,s.b)(),[n,t]=(0,o.useState)("student");return(0,i.jsx)(A,{children:(0,i.jsxs)(S,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)(E,{$role:n}),(0,i.jsx)(R,{type:"button",$active:"student"===n,onClick:()=>t("student"),children:e("student")}),(0,i.jsx)(R,{type:"button",$active:"store"===n,onClick:()=>t("store"),children:e("owner")})]}),(0,i.jsx)(D,{$showOnNarrow:"student"===n,children:(0,i.jsx)(B,{who:e("studentLogin"),onlyForWho:e("onlyForSunyKoreaStudents"),loginRole:"student"})}),(0,i.jsx)(T,{src:"/loginBackgroundImage.png",alt:"loginBackgroundImage"}),(0,i.jsx)(D,{$showOnNarrow:"store"===n,children:(0,i.jsx)(B,{who:e("ownerLogin"),onlyForWho:e("onlyForPreContractedStores"),loginRole:"store"})})]})})}e.s(["default",0,function(){return(0,i.jsx)(O,{})}],13047)}]);