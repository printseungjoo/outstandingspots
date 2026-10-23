(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,86875,e=>{"use strict";var t=e.i(43476),n=e.i(71645),i=e.i(18566),o=e.i(97053),a=e.i(49721),d=e.i(42099),r=e.i(11110),s=e.i(1834),c=e.i(2974),l=e.i(95751);let m=e.i(85149).Y,u=o.U.div.withConfig({displayName:"StudentAccountTab__Page",componentId:"sc-8af0e86b-0"})`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0.7rem 1.5rem 0.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    overflow: hidden;
    text-align: left;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
        overflow: auto;
        height: auto;
    }
`,h=o.U.div.withConfig({displayName:"StudentAccountTab__HeaderBlock",componentId:"sc-8af0e86b-1"})`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,p=o.U.p.withConfig({displayName:"StudentAccountTab__Title",componentId:"sc-8af0e86b-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,f=o.U.p.withConfig({displayName:"StudentAccountTab__SubTitle",componentId:"sc-8af0e86b-3"})`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,b=o.U.div.withConfig({displayName:"StudentAccountTab__Grid",componentId:"sc-8af0e86b-4"})`
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        overflow: visible;
        height: auto;
    }
`,g=o.U.div.withConfig({displayName:"StudentAccountTab__Card",componentId:"sc-8af0e86b-5"})`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,x=(0,o.U)(g).withConfig({displayName:"StudentAccountTab__LeftCard",componentId:"sc-8af0e86b-6"})`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,w=o.U.div.withConfig({displayName:"StudentAccountTab__InfoList",componentId:"sc-8af0e86b-7"})`
    flex: 1;
    min-height: 0;
`,y=(0,o.U)(g).withConfig({displayName:"StudentAccountTab__PasswordCard",componentId:"sc-8af0e86b-8"})`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,_=(0,o.U)(g).withConfig({displayName:"StudentAccountTab__GuideCard",componentId:"sc-8af0e86b-9"})`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;

    @media (max-width: 1024px) {
        height: auto;
    }
`,C=o.U.p.withConfig({displayName:"StudentAccountTab__CardTitle",componentId:"sc-8af0e86b-10"})`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,j=o.U.p.withConfig({displayName:"StudentAccountTab__CardHint",componentId:"sc-8af0e86b-11"})`
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.55rem 0;
`,A=o.U.p.withConfig({displayName:"StudentAccountTab__GuideText",componentId:"sc-8af0e86b-12"})`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    line-height: 1.45;
`,T=o.U.div.withConfig({displayName:"StudentAccountTab__InfoRow",componentId:"sc-8af0e86b-13"})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
        ${({$stack:e})=>e&&`
            display: block;
            flex-wrap: nowrap;
        `}
    }
`,I=o.U.div.withConfig({displayName:"StudentAccountTab__NameEditBlock",componentId:"sc-8af0e86b-14"})`
    min-width: 0;
    flex: 1;
`,S=o.U.div.withConfig({displayName:"StudentAccountTab__NameEditRow",componentId:"sc-8af0e86b-15"})`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,N=o.U.p.withConfig({displayName:"StudentAccountTab__InfoLabel",componentId:"sc-8af0e86b-16"})`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,U=o.U.p.withConfig({displayName:"StudentAccountTab__InfoValue",componentId:"sc-8af0e86b-17"})`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,v=o.U.button.withConfig({displayName:"StudentAccountTab__OutlineButton",componentId:"sc-8af0e86b-18"})`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,k=o.U.button.withConfig({displayName:"StudentAccountTab__PrimaryButton",componentId:"sc-8af0e86b-19"})`
    border: none;
    background: #7965EA;
    color: white;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,z=(0,o.U)(v).withConfig({displayName:"StudentAccountTab__NameActionButton",componentId:"sc-8af0e86b-20"})`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,P=(0,o.U)(k).withConfig({displayName:"StudentAccountTab__NameSaveButton",componentId:"sc-8af0e86b-21"})`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        font-size: 0.75rem;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,E=o.U.input.withConfig({displayName:"StudentAccountTab__NameInput",componentId:"sc-8af0e86b-22"})`
    box-sizing: border-box;
    width: 12rem;
    border: 1px solid #d8d3ea;
    border-radius: 0.3rem;
    padding: 0.35rem 0.5rem;
    font-size: 0.85rem;
    color: #2E2A63;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: none;
        height: 2.15rem;
    }
`,B=o.U.div.withConfig({displayName:"StudentAccountTab__Field",componentId:"sc-8af0e86b-23"})`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,W=o.U.p.withConfig({displayName:"StudentAccountTab__FieldLabel",componentId:"sc-8af0e86b-24"})`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,Y=o.U.input.withConfig({displayName:"StudentAccountTab__TextInput",componentId:"sc-8af0e86b-25"})`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    padding: 0.4rem 0.65rem;
    font-size: 0.85rem;
    color: #2E2A63;
    background: white;

    &:focus {
        outline: none;
        border-color: #7965EA;
    }
`,L=o.U.div.withConfig({displayName:"StudentAccountTab__PasswordWrap",componentId:"sc-8af0e86b-26"})`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,D=(0,o.U)(Y).withConfig({displayName:"StudentAccountTab__PasswordInput",componentId:"sc-8af0e86b-27"})`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,R=o.U.button.withConfig({displayName:"StudentAccountTab__EyeButton",componentId:"sc-8af0e86b-28"})`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,F=o.U.div.withConfig({displayName:"StudentAccountTab__PasswordStack",componentId:"sc-8af0e86b-29"})`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,M=(0,o.U)(B).withConfig({displayName:"StudentAccountTab__PasswordField",componentId:"sc-8af0e86b-30"})`
    gap: 0.2rem;
`,G=(0,o.U)(L).withConfig({displayName:"StudentAccountTab__CompactPasswordWrap",componentId:"sc-8af0e86b-31"})`
    min-height: 2rem;
`,H=(0,o.U)(D).withConfig({displayName:"StudentAccountTab__CompactPasswordInput",componentId:"sc-8af0e86b-32"})`
    padding: 0.35rem 0.6rem;
`,$=o.U.p.withConfig({displayName:"StudentAccountTab__MatchHint",componentId:"sc-8af0e86b-33"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,K=o.U.div.withConfig({displayName:"StudentAccountTab__ButtonRight",componentId:"sc-8af0e86b-34"})`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`,O=o.U.div.withConfig({displayName:"StudentAccountTab__WithdrawBox",componentId:"sc-8af0e86b-35"})`
    height: 100%;
    padding: 0.85rem 1.05rem;

    @media (max-width: 1024px) {
        height: auto;
    }
    box-sizing: border-box;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.55rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`,V=o.U.p.withConfig({displayName:"StudentAccountTab__WithdrawTitle",componentId:"sc-8af0e86b-36"})`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,Z=o.U.p.withConfig({displayName:"StudentAccountTab__WithdrawText",componentId:"sc-8af0e86b-37"})`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,q=o.U.button.withConfig({displayName:"StudentAccountTab__WithdrawButton",componentId:"sc-8af0e86b-38"})`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,J=o.U.div.withConfig({displayName:"StudentAccountTab__WithdrawActions",componentId:"sc-8af0e86b-39"})`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`;e.s(["StudentAccountTab",0,function(){let{t:e}=(0,r.b)(),{student:o,updateStudent:g,logoutStudent:B}=(0,s.W)(),Y=(0,i.useRouter)(),[L,D]=(0,n.useState)(!1),[Q,X]=(0,n.useState)(o?.nickname??""),[ee,et]=(0,n.useState)(!1),[en,ei]=(0,n.useState)(""),[eo,ea]=(0,n.useState)(""),[ed,er]=(0,n.useState)(""),[es,ec]=(0,n.useState)(!1),[el,em]=(0,n.useState)(!1),[eu,eh]=(0,n.useState)(!1),[ep,ef]=(0,n.useState)(!1);if(!o)return null;async function eb(){let t=Q.trim();if(!t)return void alert(e("pleaseEnterYourName"));et(!0);try{let e=await (0,l.D)(o._id,t);g(e),D(!1)}catch(t){console.error(t),alert(e("failedToUpdateTheName"))}finally{et(!1)}}async function eg(){if(!en||!eo||!ed)return void alert(e("pleaseFillInAllPasswordFields"));if(!(0,c.n)(eo))return void alert(e("use820CharactersIncludingLettersAndNumbers"));if(eo!==ed)return void alert(e("theNewPasswordsDoNotMatch"));ef(!0);try{try{await (0,l.Y)(o.id,en)}catch(n){let t=n instanceof Error?n.message:"";if("INVALID_CREDENTIALS"===t||t.includes("올바르지"))return void alert(e("theCurrentPasswordIsIncorrect"));throw n}await (0,l.Z)(o._id,en,eo),ei(""),ea(""),er(""),alert(e("passwordHasBeenChanged"))}catch(n){console.error(n);let t=n instanceof Error?n.message:"";t.includes("현재 비밀번호")||t.toLowerCase().includes("current password")?alert(e("theCurrentPasswordIsIncorrect")):alert(t||e("failedToChangeThePassword"))}finally{ef(!1)}}async function ex(){if(window.confirm(e("areYouSureYouWantToDeleteThisAccountThis")))try{await (0,l.w)(o._id),B(),Y.push("/login")}catch(t){console.error(t),alert(e("failedToDeleteTheAccount"))}}return(0,t.jsxs)(u,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{children:[" ",e("accountManagement")," "]}),(0,t.jsxs)(f,{children:[" ",e("youCanManageYourAccountAndSecurityInformation")," "]})]}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(x,{children:[(0,t.jsxs)(C,{children:[" ",e("basicInformation")," "]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(T,{$stack:L,children:L?(0,t.jsxs)(I,{children:[(0,t.jsxs)(N,{children:[" ",e("name")," "]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(E,{value:Q,onChange:e=>X(e.target.value)}),(0,t.jsxs)(z,{type:"button",onClick:()=>{D(!1),X(o.nickname)},children:[" ",e("cancel")," "]}),(0,t.jsx)(P,{type:"button",disabled:ee,onClick:()=>{eb()},children:e("save")})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(N,{children:[" ",e("name")," "]}),(0,t.jsxs)(U,{children:[" ",o.nickname," "]})]}),(0,t.jsxs)(v,{type:"button",onClick:()=>{X(o.nickname),D(!0)},children:[" ",e("edit")," "]})]})}),(0,t.jsx)(T,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(N,{children:[" ",e("id")," "]}),(0,t.jsxs)(U,{children:[" ",o.id," "]})]})}),(0,t.jsx)(T,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(N,{children:[" ",e("email")," "]}),(0,t.jsxs)(U,{children:[" ",o.email," "]})]})})]})]}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(C,{children:[" ",e("changePassword")," "]}),(0,t.jsx)(j,{children:e("n820CharactersIncludingLettersAndNumbers")}),(0,t.jsxs)(F,{children:[(0,t.jsxs)(M,{children:[(0,t.jsxs)(W,{children:[" ",e("currentPassword")," "]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(H,{type:es?"text":"password",value:en,onChange:e=>ei(e.target.value)}),(0,t.jsx)(R,{type:"button",onClick:()=>ec(e=>!e),children:(0,t.jsx)(a.f,{icon:d.f.far.eye})})]})]}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(W,{children:[" ",e("newPassword")," "]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(H,{type:el?"text":"password",value:eo,onChange:e=>ea(e.target.value)}),(0,t.jsx)(R,{type:"button",onClick:()=>em(e=>!e),children:(0,t.jsx)(a.f,{icon:d.f.far.eye})})]})]}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(W,{children:[" ",e("confirmNewPassword")," "]}),(0,t.jsxs)(G,{children:[(0,t.jsx)(H,{type:eu?"text":"password",value:ed,onChange:e=>er(e.target.value)}),(0,t.jsx)(R,{type:"button",onClick:()=>eh(e=>!e),children:(0,t.jsx)(a.f,{icon:d.f.far.eye})})]}),ed.length>0&&(0,t.jsx)($,{$valid:ed===eo,children:ed===eo?e("thePasswordsYouEnteredMatch"):e("thePasswordsYouEnteredDoNotMatch")})]})]}),(0,t.jsx)(K,{children:(0,t.jsx)(k,{type:"button",disabled:ep,onClick:()=>{eg()},children:e("changePassword")})})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(V,{children:[" ",e("deleteAccount")," "]}),(0,t.jsx)(Z,{children:e("ifYouDeleteYourAccountYourStudentInformationWillBe")})]}),(0,t.jsx)(J,{children:(0,t.jsx)(q,{type:"button",onClick:()=>{ex()},children:e("deleteAccount")})})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(C,{children:[" ",e("koreanWebUserGuide2")," "]}),(0,t.jsx)(A,{children:e("youCanViewTheKoreanWebUserGuide")}),(0,t.jsx)(K,{children:(0,t.jsx)(k,{type:"button",onClick:()=>window.open(m,"_blank","noopener,noreferrer"),children:e("open3")})})]})]})]})}])}]);