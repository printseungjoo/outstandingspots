(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74989,e=>{var i=e.i(43476),t=e.i(97053),n=e.i(71645),o=e.i(18566),r=e.i(11110),a=e.i(2389),d=e.i(20907),s=e.i(74080),l=e.i(38313),c=e.i(65607);function p(e){return e.trim().replace(/\s+/g," ").toLowerCase().normalize("NFC").replace(/\s/g,"")}function m(e,i){return(0,c.S)(e,i)}let h=t.U.div.withConfig({displayName:"SignUpSearchStore__SignUpSearchStoreStyled",componentId:"sc-7ae77a8c-0"})`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 10;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,g=t.U.p.withConfig({displayName:"SignUpSearchStore__Title",componentId:"sc-7ae77a8c-1"})`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,f=t.U.div.withConfig({displayName:"SignUpSearchStore__InputFieldDiv",componentId:"sc-7ae77a8c-2"})`
    flex: 1;
    min-width: 0;
`,u=t.U.div.withConfig({displayName:"SignUpSearchStore__FieldWrap",componentId:"sc-7ae77a8c-3"})`
    position: relative;
    width: 100%;
`,x=t.U.div.withConfig({displayName:"SignUpSearchStore__InputField",componentId:"sc-7ae77a8c-4"})`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
`,w=t.U.input.withConfig({displayName:"SignUpSearchStore__StoreInput",componentId:"sc-7ae77a8c-5"})`
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.85rem;
    background: transparent;

    &::placeholder {
        font-size: 0.85rem;
    }
`,b=t.U.div.withConfig({displayName:"SignUpSearchStore__Dropdown",componentId:"sc-7ae77a8c-6"})`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,y=t.U.button.withConfig({displayName:"SignUpSearchStore__DropdownItem",componentId:"sc-7ae77a8c-7"})`
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
`,S=t.U.p.withConfig({displayName:"SignUpSearchStore__EmptyItem",componentId:"sc-7ae77a8c-8"})`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`,I=t.U.p.withConfig({displayName:"SignUpSearchStore__Description",componentId:"sc-7ae77a8c-9"})`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;function U({storeInputRef:e,onQueryChange:t}){let{language:o,t:a}=(0,r.b)(),{stores:d}=(0,l.g)(),[c,p]=(0,n.useState)(""),[_,v]=(0,n.useState)(!1),[C,N]=(0,n.useState)(0),[j,D]=(0,n.useState)({top:0,left:0,width:0}),k=(0,n.useRef)(null),z=(0,n.useRef)(null),P=(0,n.useMemo)(()=>d.filter(e=>(function(e,i){let t=i.trim().toLowerCase();if(!t)return!0;let n=m(e,"kor").toLowerCase(),o=m(e,"eng").toLowerCase();return n.includes(t)||o.includes(t)||(e.name?.kor??"").includes(t)||(e.name?.eng??"").toLowerCase().includes(t)||(e.branch?.kor??"").includes(t)||(e.branch?.eng??"").toLowerCase().includes(t)})(e,c)),[d,c]),$=e=>{p(e),t?.(e)},T=()=>{let e=k.current?.getBoundingClientRect();e&&D({top:e.bottom+4,left:e.left,width:e.width})},A=e=>{$(e),v(!0),N(0),T()},F=e=>{let i=m(e,o);z.current&&(z.current.value=i),$(i),v(!1)};return(0,i.jsxs)(h,{children:[(0,i.jsxs)(g,{children:[" ",a("store")," "]}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(u,{children:[(0,i.jsx)(x,{ref:k,children:(0,i.jsx)(w,{name:"storeQuery",type:"text",defaultValue:"",autoComplete:"off",ref:i=>{z.current=i,e&&(e.current=i)},placeholder:a("enterTheStoreNameAndBranch"),onInput:e=>A(e.currentTarget.value),onChange:e=>A(e.currentTarget.value),onCompositionEnd:e=>A(e.currentTarget.value),onFocus:()=>{v(!0),T()},onBlur:e=>{$(e.currentTarget.value),window.setTimeout(()=>v(!1),120)},onKeyDown:e=>{if(_&&0!==P.length){if("ArrowDown"===e.key)e.preventDefault(),N(e=>Math.min(e+1,P.length-1));else if("ArrowUp"===e.key)e.preventDefault(),N(e=>Math.max(e-1,0));else if("Enter"===e.key){e.preventDefault();let i=P[C]??P[0];i&&F(i)}}}})}),_&&(0,s.createPortal)((0,i.jsx)(b,{style:{top:j.top,left:j.left,width:j.width},children:0===P.length?(0,i.jsx)(S,{children:a(0===d.length?"noStoresLoaded":"noMatchingStore")}):P.map(e=>(0,i.jsx)(y,{type:"button",onMouseDown:i=>{i.preventDefault(),F(e)},children:m(e,o)},e._id))}),document.body)]}),(0,i.jsx)(I,{children:" "})]})]})}var _=e.i(89653),v=e.i(96512),C=e.i(78911),N=e.i(2974),j=e.i(83721),D=e.i(91584);let k=t.U.div.withConfig({displayName:"StoreSignUpPage__StoreSignUpPageStyled",componentId:"sc-e44f6c93-0"})`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(white 0%, #DBD8F7 30%, #DBD8F7 70%, white 100%);
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.6rem 0;
    text-align: left;

    @media (max-width: 1024px) {
        padding: 0.45rem;
    }
`,z=t.U.div.withConfig({displayName:"StoreSignUpPage__StoreSignUpField",componentId:"sc-e44f6c93-1"})`
    width: 60%;
    height: 90%;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px 0 #00000030;
    display: flex;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 100%;
        max-width: 52rem;
        height: 100%;
        min-height: 0;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        min-height: 0;
        flex-direction: column;
        overflow: hidden;
    }
`,P=t.U.div.withConfig({displayName:"StoreSignUpPage__LeftDiv",componentId:"sc-e44f6c93-2"})`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        flex-shrink: 0;
        height: auto;
        padding-top: 1rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 1rem 0 0.6rem;
    }
`,$=t.U.div.withConfig({displayName:"StoreSignUpPage__StoreIconFrame",componentId:"sc-e44f6c93-3"})`
    box-sizing: border-box;
    width: 5rem;
    height: 5rem;
    padding: 0.75rem;
    border: 0.5px solid #5D53F1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,T=t.U.img.withConfig({displayName:"StoreSignUpPage__StoreIcon",componentId:"sc-e44f6c93-4"})`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,A=t.U.p.withConfig({displayName:"StoreSignUpPage__Title",componentId:"sc-e44f6c93-5"})`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,F=t.U.p.withConfig({displayName:"StoreSignUpPage__Description",componentId:"sc-e44f6c93-6"})`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,B=t.U.form.withConfig({displayName:"StoreSignUpPage__RightDiv",componentId:"sc-e44f6c93-7"})`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        flex: 1;
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        gap: 0.12rem;
        padding: 0.8rem 0 1.2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`,W=t.U.div.withConfig({displayName:"StoreSignUpPage__SignUpIdPasswordDiv",componentId:"sc-e44f6c93-8"})`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,E=t.U.div.withConfig({displayName:"StoreSignUpPage__ButtonRow",componentId:"sc-e44f6c93-9"})`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin-top: 0.25rem;
    }

    @media (max-width: 767px) {
        width: 92%;
        margin-top: 0.7rem;
    }
`,R=t.U.button.withConfig({displayName:"StoreSignUpPage__CancelButton",componentId:"sc-e44f6c93-10"})`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
    }
`,L=t.U.button.withConfig({displayName:"StoreSignUpPage__SignUpButton",componentId:"sc-e44f6c93-11"})`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    box-sizing: border-box;
    padding: 0.5rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
        font-weight: 400;
    }
`;function O(){let{language:e,t}=(0,r.b)(),s=(0,o.useRouter)(),[l,c]=(0,n.useState)(""),[h,g]=(0,n.useState)(""),[f,u]=(0,n.useState)(""),x=(0,n.useRef)(null),[w,b]=(0,n.useState)(""),[y,S]=(0,n.useState)(""),[I,O]=(0,n.useState)(""),[M,Y]=(0,n.useState)(!1);async function V(i){if(M)return;let n=String(new FormData(i).get("storeQuery")??x.current?.value??"");if(!l.trim()||!h.trim()||!w.trim()||!y)return void alert(t("pleaseFillInAllFields"));if(!n.trim())return void alert(t("pleaseEnterBothTheStoreNameAndTheBranchName"));if(!f)return void alert(t("pleaseVerifyYourPhoneNumber"));if(y!==I)return void alert(t("passwordsDoNotMatch"));Y(!0);try{let e=await (0,j.m)(),i=function(e,i){let t=p(e);if(!t)return"";let n=i.filter(e=>[m(e,"kor"),m(e,"eng"),`${e.name?.kor??""} ${e.branch?.kor??""}`,`${e.name?.eng??""} ${e.branch?.eng??""}`,`${e.name?.kor??""}${e.branch?.kor??""}`,`${e.name?.eng??""}${e.branch?.eng??""}`].map(p).filter(Boolean).includes(t));return n[0]?._id??""}(n,e);if(!i)return void alert(t("pleaseEnterBothTheStoreNameAndTheBranchName"));let o=f;try{D.f.currentUser&&(o=await D.f.currentUser.getIdToken(!0))}catch(e){console.error(e)}if(!o)return void alert(t("pleaseVerifyYourPhoneNumberAgain"));await (0,N.G)({name:l.trim(),phone:h.replace(/\D/g,""),id:w.trim(),password:y,storeId:i},o),alert(t("signUpCompleted")),s.push("/login")}catch(n){let i,t;console.error(n),alert((i=(0,a.f)(e),t=n instanceof Error?n.message:"",i("DUPLICATE_ID"===t||"이미 있는 아이디입니다."===t?"thisIdIsAlreadyInUse":"DUPLICATE_PHONE"===t||"이미 가입된 전화번호입니다."===t||"이미 사용 중인 전화번호입니다."===t?"thisPhoneNumberIsAlreadyRegistered":"DUPLICATE_ACCOUNT"===t||"이미 가입된 계정입니다."===t?"thisAccountIsAlreadyRegistered":t.includes("서버")&&t.includes("Firebase")?"serverFirebaseSettingsAreInvalidCheckFirebasePrivateKeyIn":t.includes("전화번호 인증")?"pleaseVerifyYourPhoneNumberAgain":t.includes("일치하지")?"thePhoneNumberDoesNotMatchTheVerifiedNumber":t.includes("매장")?"pleaseEnterBothTheStoreNameAndTheBranchName":"failedToSignUp")))}finally{Y(!1)}}return(0,i.jsx)(k,{children:(0,i.jsxs)(z,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)($,{children:(0,i.jsx)(T,{src:"/coloredStoreIcon.png",alt:"store icon"})}),(0,i.jsxs)(A,{children:[" ",t("storeOwnerSignUp")," "]}),(0,i.jsxs)(F,{children:[" ",t("onlyTheOwnerOfThe")," "]}),(0,i.jsxs)(F,{children:[" ",t("preContractedStoreCanSignUp")," "]})]}),(0,i.jsxs)(B,{onSubmit:e=>{e.preventDefault(),V(e.currentTarget)},children:[(0,i.jsx)(d.f,{title:t("fullName"),placeholder:t("enterYourFullName"),value:l,onChange:c}),(0,i.jsx)(C.B,{phone:h,onPhoneChange:e=>{g(e),u("")},onVerified:u}),(0,i.jsx)(U,{storeInputRef:x}),(0,i.jsxs)(W,{children:[(0,i.jsx)(_.f,{title:t("id"),placeholder:t("enterYourIdField"),description:t("idRuleDetail"),value:w,onChange:b}),(0,i.jsx)(v.f,{title:t("password"),placeholder:t("enterYourPasswordField"),description:t("passwordRuleDetail"),value:y,onChange:S}),(0,i.jsx)(v.f,{title:t("checkPassword"),placeholder:t("enterYourPasswordAgain"),value:I,onChange:O,matchWith:y})]}),(0,i.jsxs)(E,{children:[(0,i.jsx)(R,{type:"button",onClick:()=>s.push("/login"),children:t("cancel")}),(0,i.jsx)(L,{type:"submit",disabled:M,children:t("submit")})]})]})]})})}e.s(["default",0,function(){return(0,i.jsx)(O,{})}],74989)},20907,89653,96512,e=>{var i=e.i(43476),t=e.i(97053);let n=t.U.div.withConfig({displayName:"SignUpInput__SignUpInputStyled",componentId:"sc-15b46572-0"})`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,o=t.U.p.withConfig({displayName:"SignUpInput__Title",componentId:"sc-15b46572-1"})`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,r=t.U.div.withConfig({displayName:"SignUpInput__InputField",componentId:"sc-15b46572-2"})`
    flex: 1;
    min-width: 0;
`,a=t.U.input.withConfig({displayName:"SignUpInput__Input",componentId:"sc-15b46572-3"})`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,d=t.U.p.withConfig({displayName:"SignUpInput__Description",componentId:"sc-15b46572-4"})`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;e.s(["f",0,function({title:e,placeholder:t,value:s,onChange:l}){return(0,i.jsxs)(n,{children:[(0,i.jsxs)(o,{children:[" ",e," "]}),(0,i.jsxs)(r,{children:[(0,i.jsx)(a,{type:"text",value:s,placeholder:t,onChange:e=>l?.(e.target.value)}),(0,i.jsx)(d,{children:" "})]})]})}],20907);var s=e.i(49721),l=e.i(42099);let c=t.U.div.withConfig({displayName:"SignUpIdInputWithDescription__SignUpIdInputWithDescriptionStyled",componentId:"sc-ee1cdedf-0"})`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,p=t.U.p.withConfig({displayName:"SignUpIdInputWithDescription__Title",componentId:"sc-ee1cdedf-1"})`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,m=t.U.div.withConfig({displayName:"SignUpIdInputWithDescription__InputField",componentId:"sc-ee1cdedf-2"})`
    flex: 1;
    min-width: 0;
`,h=t.U.input.withConfig({displayName:"SignUpIdInputWithDescription__Input",componentId:"sc-ee1cdedf-3"})`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`,g=t.U.div.withConfig({displayName:"SignUpIdInputWithDescription__DescriptionRow",componentId:"sc-ee1cdedf-4"})`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:e})=>e&&"display: none;"}
    }
`,f=t.U.p.withConfig({displayName:"SignUpIdInputWithDescription__Description",componentId:"sc-ee1cdedf-5"})`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,u=(0,t.U)(s.f).withConfig({displayName:"SignUpIdInputWithDescription__ValidityIcon",componentId:"sc-ee1cdedf-6"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
`;e.s(["f",0,function({title:e,placeholder:t,description:n,value:o,onChange:r,hideHintOnNarrow:a}){var d;let s=(o??"").length>0,x=(d=o??"",/^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(d));return(0,i.jsxs)(c,{children:[(0,i.jsxs)(p,{children:[" ",e," "]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(h,{type:"text",value:o,placeholder:t,onChange:e=>r?.(e.target.value)}),(0,i.jsxs)(g,{$hideOnNarrow:a,children:[(0,i.jsxs)(f,{children:[" ",n," "]}),s&&(0,i.jsx)(u,{icon:x?l.f.fas.check:l.f.fas.xmark,$valid:x})]})]})]})}],89653);var x=e.i(71645),w=e.i(11110);let b=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__SignUpPasswordInputWithDescriptionStyled",componentId:"sc-fe50bc24-0"})`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,y=t.U.p.withConfig({displayName:"SignUpPasswordInputWithDescription__Title",componentId:"sc-fe50bc24-1"})`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: ${({$hasDescription:e})=>e?"1rem":"0"};

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`,S=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__InputField",componentId:"sc-fe50bc24-2"})`
    flex: 1;
    min-width: 0;
`,I=t.U.input.withConfig({displayName:"SignUpPasswordInputWithDescription__Input",componentId:"sc-fe50bc24-3"})`
    box-sizing: border-box;
    width: 90%;
    padding: 0.4rem 0.4rem 0.4rem 0.3rem;
    margin: 0;
    border: none;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`,U=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__DescriptionRow",componentId:"sc-fe50bc24-4"})`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:e})=>e&&"display: none;"}
    }
`,_=t.U.p.withConfig({displayName:"SignUpPasswordInputWithDescription__Description",componentId:"sc-fe50bc24-5"})`
    font-size: 0.75rem;
    color: ${({$tone:e})=>"valid"===e?"#22c55e":"invalid"===e?"#ef4444":"gray"};
    margin: 0;
    margin-left: 0.2rem;
    flex-shrink: 0;
    text-align: left;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:e})=>e&&"display: none;"}
    }
`,v=(0,t.U)(s.f).withConfig({displayName:"SignUpPasswordInputWithDescription__ValidityIcon",componentId:"sc-fe50bc24-6"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
`,C=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__SignUpPasswordStyled",componentId:"sc-fe50bc24-7"})`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0.15rem;
`,N=(0,t.U)(s.f).withConfig({displayName:"SignUpPasswordInputWithDescription__Icon",componentId:"sc-fe50bc24-8"})`
    height: 1.5vh;
    color: #7A77B0;
`,j=(0,t.U)(N).withConfig({displayName:"SignUpPasswordInputWithDescription__ToggleIcon",componentId:"sc-fe50bc24-9"})`
    cursor: pointer;
    flex-shrink: 0;
`;e.s(["f",0,function({title:e,placeholder:t,description:n,value:o,onChange:r,matchWith:a,hideHintOnNarrow:d}){var s;let c,{t:p}=(0,w.b)(),[m,h]=(0,x.useState)(!1),g=void 0!==a,f=(o??"").length>0,u=(s=o??"",/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(s)),N=f&&o===a;g&&f&&(c=p(N?"thePasswordsYouEnteredMatch":"thePasswordsYouEnteredDoNotMatch"));let D=!g||!!c;return(0,i.jsxs)(b,{children:[(0,i.jsxs)(y,{$hasDescription:D,children:[" ",e," "]}),(0,i.jsxs)(S,{children:[(0,i.jsxs)(C,{children:[(0,i.jsx)(I,{type:m?"text":"password",value:o,placeholder:t,onChange:e=>r?.(e.target.value)}),(0,i.jsx)(j,{icon:l.f.far.eye,onClick:()=>h(e=>!e)})]}),g?c&&(0,i.jsxs)(_,{$hideOnNarrow:d,$tone:N?"valid":"invalid",children:[" ",c," "]}):(0,i.jsxs)(U,{$hideOnNarrow:d,children:[(0,i.jsxs)(_,{$tone:"gray",children:[" ",n," "]}),f&&(0,i.jsx)(v,{icon:u?l.f.fas.check:l.f.fas.xmark,$valid:u})]})]})]})}],96512)},16914,e=>{var i=e.i(43476),t=e.i(97053);let n=t.U.div.withConfig({displayName:"SignUpInputWithButton__SignUpInputWithButtonStyled",componentId:"sc-cf5931e6-0"})`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`,o=t.U.p.withConfig({displayName:"SignUpInputWithButton__Title",componentId:"sc-cf5931e6-1"})`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: ${({$hasDescription:e})=>e?"1rem":"0"};

    @media (max-width: 767px) {
        width: auto;
        margin-bottom: 0;
    }
`,r=t.U.p.withConfig({displayName:"SignUpInputWithButton__Description",componentId:"sc-cf5931e6-2"})`
    font-size: 0.75rem;
    color: #5D53F1;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$spacer:e})=>e&&"display: none;"}
    }
`,a=t.U.div.withConfig({displayName:"SignUpInputWithButton__InputFieldDiv",componentId:"sc-cf5931e6-3"})`
    flex: 1;
    min-width: 0;
`,d=t.U.div.withConfig({displayName:"SignUpInputWithButton__InputField",componentId:"sc-cf5931e6-4"})`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: ${({$inactive:e})=>e?"#EEECFA":"white"};
`,s=t.U.input.withConfig({displayName:"SignUpInputWithButton__SignUpInput",componentId:"sc-cf5931e6-5"})`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0.5rem;
    background: transparent;
    color: ${({$inactive:e})=>e?"#8A8A8A":"black"};
    cursor: ${({$inactive:e})=>e?"not-allowed":"text"};

    &:disabled, &:read-only {
        color: #8A8A8A;
        cursor: not-allowed;
    }
`,l=t.U.button.withConfig({displayName:"SignUpInputWithButton__SignUpButton",componentId:"sc-cf5931e6-6"})`
    flex-shrink: 0;
    box-sizing: border-box;
    border: none;
    border-left: 0.75px solid #5D53F1;
    color: #5D53F1;
    background-color: white;
    font-size: 0.8rem;
    width: 4rem;
    white-space: nowrap;
    border-radius: 0;
    padding: 0;

    &:active, &:focus, &:focus-visible {
        outline: none;
        box-shadow: none;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;e.s(["f",0,function({title:e,placeholder:t,buttonText:c,value:p,onChange:m,onButtonClick:h,inputDisabled:g,inputReadOnly:f,buttonDisabled:u,buttonId:x,inputType:w="text",maxLength:b,inputMode:y,description:S}){let I=!!(g||f),U=" "===S;return(0,i.jsxs)(n,{children:[(0,i.jsxs)(o,{$hasDescription:!!S&&!U,children:[" ",e," "]}),(0,i.jsxs)(a,{children:[(0,i.jsxs)(d,{$inactive:I,children:[(0,i.jsx)(s,{type:w,value:p,$inactive:I,disabled:g,readOnly:f,maxLength:b,inputMode:y,placeholder:t,onChange:e=>{g||f||m?.(e.target.value)}}),(0,i.jsx)(l,{id:x,type:"button",disabled:u,onClick:h,children:c})]}),S&&(0,i.jsxs)(r,{$spacer:U,children:[" ",S," "]})]})]})}])}])})();