(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35271,e=>{var i=e.i(43476),t=e.i(97053),n=e.i(71645),o=e.i(18566),r=e.i(11110),a=e.i(2389),d=e.i(20907),s=e.i(89653),l=e.i(96512),c=e.i(16914),p=e.i(45502);let m=e.i(85149).L;async function h(e,i){let t=await fetch(e,(0,p.J)({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})),n=await t.json().catch(()=>({}));if(!t.ok)throw Error("string"==typeof n.error?n.error:`HTTP ${t.status}`);return n}async function g(e){return h(`${m}/students/email/code`,{email:e})}async function u(e,i){return h(`${m}/students/email/verify`,{email:e,code:i})}let f=["stonybrook.edu","fitnyc.edu"];function x(e,i){let t=(0,a.f)(i),n=e instanceof Error?e.message:"";return t("INVALID_SCHOOL_EMAIL"===n?"pleaseRequestVerificationWithAnEmailThatHasTheStonybrook":"TOO_MANY_REQUESTS"===n?"tooManyAttemptsTryAgainLater":"SMTP_NOT_CONFIGURED"===n?"emailSendingIsNotConfiguredSetResendApiKeyAnd":"SMTP_SEND_FAILED"===n?"couldNotSendTheEmailCheckTheResendApiKey":"HTTP 404"===n||n.includes("Cannot POST")?"theEmailApiIsMissingRestartTheApiServerIn":"Failed to fetch"===n||n.includes("NetworkError")||n.includes("fetch")?"theApiServerIsNotRunningStartItWithNpm":"CODE_NOT_SENT"===n?"pleaseRequestAVerificationCodeFirst":"CODE_EXPIRED"===n?"theVerificationCodeExpiredPleaseSendItAgain":"TOO_MANY_ATTEMPTS"===n||"INVALID_CODE"===n?"theVerificationCodeIsInvalid":"failedToSendTheVerificationEmail")}let w=t.U.div.withConfig({displayName:"EmailVerification__EmailVerificationStyled",componentId:"sc-d345ac36-0"})`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`,b=t.U.div.withConfig({displayName:"EmailVerification__EmailFields",componentId:"sc-d345ac36-1"})`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;function y({email:e,onEmailChange:t,onVerified:o}){let{language:a,t:d}=(0,r.b)(),[s,l]=(0,n.useState)(""),[p,m]=(0,n.useState)(!1),[h,I]=(0,n.useState)(!1),[S,_]=(0,n.useState)(!1),U=async()=>{if(!function(e){let i=e.trim().toLowerCase(),t=i.lastIndexOf("@");if(t<=0||t===i.length-1)return!1;let n=i.slice(t+1);return f.includes(n)}(e))return void alert(d("pleaseRequestVerificationWithAnEmailThatHasTheStonybrook"));try{_(!0),await g(e.trim()),m(!0),alert(d("theVerificationCodeHasBeenSentIfYouDoNot"))}catch(e){console.error(e),alert(x(e,a))}finally{_(!1)}},C=async()=>{if(!p)return void alert(d("pleaseRequestAVerificationCodeFirst"));try{_(!0),await u(e.trim(),s),I(!0),o?.()}catch(e){console.error(e),alert(x(e,a))}finally{_(!1)}};return(0,i.jsx)(w,{children:(0,i.jsxs)(b,{children:[(0,i.jsx)(c.f,{title:d("schoolEmail"),placeholder:d("enterYourSchoolEmail"),buttonText:p?d("resend"):d("verify"),value:e,onChange:e=>{h||(t(e),I(!1),m(!1),l(""))},onButtonClick:U,inputReadOnly:h,buttonDisabled:S||h,inputType:"email",description:d("onlySchoolEmailsCanBeVerified")}),(0,i.jsx)(c.f,{title:d("confirmEmail"),placeholder:d("enterEmailVerificationCode"),buttonText:d("submitCode"),value:s,onChange:e=>{h||l(e.replace(/\D/g,""))},onButtonClick:C,inputDisabled:!p&&!h,inputReadOnly:h,buttonDisabled:S||!p||h,maxLength:6,inputMode:"numeric",description:h?d("emailVerified"):p?d("ifYouDoNotSeeTheEmailPleaseCheckYour"):" "})]})})}var I=e.i(95751);let S=t.U.div.withConfig({displayName:"StudentSignUpPage__StudentSignUpPageStyled",componentId:"sc-b7210d9a-0"})`
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
        padding: 0.6rem;
    }
`,_=t.U.div.withConfig({displayName:"StudentSignUpPage__StudentSignUpField",componentId:"sc-b7210d9a-1"})`
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
`,U=t.U.div.withConfig({displayName:"StudentSignUpPage__LeftDiv",componentId:"sc-b7210d9a-2"})`
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
`,C=t.U.div.withConfig({displayName:"StudentSignUpPage__StudentIconFrame",componentId:"sc-b7210d9a-3"})`
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
`,v=t.U.img.withConfig({displayName:"StudentSignUpPage__StudentIcon",componentId:"sc-b7210d9a-4"})`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`,N=t.U.p.withConfig({displayName:"StudentSignUpPage__Title",componentId:"sc-b7210d9a-5"})`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`,D=t.U.p.withConfig({displayName:"StudentSignUpPage__Description",componentId:"sc-b7210d9a-6"})`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`,j=t.U.form.withConfig({displayName:"StudentSignUpPage__RightDiv",componentId:"sc-b7210d9a-7"})`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        padding: 0.8rem 0 1.2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        flex: 1;
    }
`,E=t.U.div.withConfig({displayName:"StudentSignUpPage__SignUpIdPasswordDiv",componentId:"sc-b7210d9a-8"})`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`,A=t.U.div.withConfig({displayName:"StudentSignUpPage__ButtonRow",componentId:"sc-b7210d9a-9"})`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin-top: 0.7rem;
    }

    @media (max-width: 767px) {
        width: 92%;
    }
`,k=t.U.button.withConfig({displayName:"StudentSignUpPage__CancelButton",componentId:"sc-b7210d9a-10"})`
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
`,T=t.U.button.withConfig({displayName:"StudentSignUpPage__SignUpButton",componentId:"sc-b7210d9a-11"})`
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
`;function P(){let{language:e,t}=(0,r.b)(),c=(0,o.useRouter)(),[p,m]=(0,n.useState)(""),[h,g]=(0,n.useState)(""),[u,f]=(0,n.useState)(!1),[x,w]=(0,n.useState)(""),[b,P]=(0,n.useState)(""),[z,W]=(0,n.useState)(""),[F,O]=(0,n.useState)(!1);async function $(){if(!F){if(!p.trim()||!h.trim()||!x.trim()||!b||!z)return void alert(t("pleaseFillInAllFields"));if(!u)return void alert(t("pleaseVerifyYourSchoolEmail"));if(b!==z)return void alert(t("passwordsDoNotMatch"));O(!0);try{await (0,I.i)({nickname:p.trim(),email:h.trim(),id:x.trim(),password:b}),alert(t("signUpCompleted")),c.push("/login")}catch(n){let i,t;console.error(n),alert((i=(0,a.f)(e),t=n instanceof Error?n.message:"",i("DUPLICATE_ID"===t?"itIsAlreadyADuplicateId":"DUPLICATE_EMAIL"===t?"thisEmailIsAlreadyRegistered":"EMAIL_NOT_VERIFIED"===t?"pleaseVerifyYourSchoolEmail":"MISSING_FIELDS"===t?"pleaseFillInAllFields":"INVALID_SCHOOL_EMAIL"===t?"pleaseRequestVerificationWithAnEmailThatHasTheStonybrook":"INVALID_ID"===t?"idMustBe420CharactersIncludingANumberAnd":"INVALID_PASSWORD"===t?"passwordMustBe820CharactersIncludingALetterAnd":"HTTP 404"===t||t.includes("Cannot POST")?"theSignupApiIsMissingRestartTheApiServerIn":"Failed to fetch"===t||t.includes("NetworkError")||t.includes("fetch")?"theApiServerIsNotRunningStartItWithNpm":"failedToSignUp")))}finally{O(!1)}}}return(0,i.jsx)(S,{children:(0,i.jsxs)(_,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(v,{src:"/mortarboardIcon.png",alt:"student icon"})}),(0,i.jsxs)(N,{children:[" ",t("studentSignUp")," "]}),(0,i.jsxs)(D,{children:[" ",t("onlySunyKoreaStudents")," "]}),(0,i.jsxs)(D,{children:[" ",t("canSignUp")," "]})]}),(0,i.jsxs)(j,{onSubmit:e=>{e.preventDefault(),$()},children:[(0,i.jsx)(d.f,{title:t("nickname"),placeholder:t("enterYourNickname"),value:p,onChange:m}),(0,i.jsx)(y,{email:h,onEmailChange:e=>{g(e),f(!1)},onVerified:()=>f(!0)}),(0,i.jsxs)(E,{children:[(0,i.jsx)(s.f,{title:t("setId"),placeholder:t("enterYourIdField"),description:t("idRuleDetail"),value:x,onChange:w}),(0,i.jsx)(l.f,{title:t("setPassword"),placeholder:t("enterYourPasswordField"),description:t("passwordRuleDetail"),value:b,onChange:P}),(0,i.jsx)(l.f,{title:t("checkPassword"),placeholder:t("enterYourPasswordAgain"),value:z,onChange:W,matchWith:b})]}),(0,i.jsxs)(A,{children:[(0,i.jsx)(k,{type:"button",onClick:()=>c.push("/login"),children:t("cancel")}),(0,i.jsx)(T,{type:"submit",disabled:F,children:t("submit")})]})]})]})})}e.s(["default",0,function(){return(0,i.jsx)(P,{})}],35271)},20907,89653,96512,e=>{var i=e.i(43476),t=e.i(97053);let n=t.U.div.withConfig({displayName:"SignUpInput__SignUpInputStyled",componentId:"sc-15b46572-0"})`
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
`,u=t.U.p.withConfig({displayName:"SignUpIdInputWithDescription__Description",componentId:"sc-ee1cdedf-5"})`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`,f=(0,t.U)(s.f).withConfig({displayName:"SignUpIdInputWithDescription__ValidityIcon",componentId:"sc-ee1cdedf-6"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
`;e.s(["f",0,function({title:e,placeholder:t,description:n,value:o,onChange:r,hideHintOnNarrow:a}){var d;let s=(o??"").length>0,x=(d=o??"",/^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(d));return(0,i.jsxs)(c,{children:[(0,i.jsxs)(p,{children:[" ",e," "]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(h,{type:"text",value:o,placeholder:t,onChange:e=>r?.(e.target.value)}),(0,i.jsxs)(g,{$hideOnNarrow:a,children:[(0,i.jsxs)(u,{children:[" ",n," "]}),s&&(0,i.jsx)(f,{icon:x?l.f.fas.check:l.f.fas.xmark,$valid:x})]})]})]})}],89653);var x=e.i(71645),w=e.i(11110);let b=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__SignUpPasswordInputWithDescriptionStyled",componentId:"sc-fe50bc24-0"})`
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
`,I=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__InputField",componentId:"sc-fe50bc24-2"})`
    flex: 1;
    min-width: 0;
`,S=t.U.input.withConfig({displayName:"SignUpPasswordInputWithDescription__Input",componentId:"sc-fe50bc24-3"})`
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
`,_=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__DescriptionRow",componentId:"sc-fe50bc24-4"})`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:e})=>e&&"display: none;"}
    }
`,U=t.U.p.withConfig({displayName:"SignUpPasswordInputWithDescription__Description",componentId:"sc-fe50bc24-5"})`
    font-size: 0.75rem;
    color: ${({$tone:e})=>"valid"===e?"#22c55e":"invalid"===e?"#ef4444":"gray"};
    margin: 0;
    margin-left: 0.2rem;
    flex-shrink: 0;
    text-align: left;

    @media (max-width: 1024px) {
        ${({$hideOnNarrow:e})=>e&&"display: none;"}
    }
`,C=(0,t.U)(s.f).withConfig({displayName:"SignUpPasswordInputWithDescription__ValidityIcon",componentId:"sc-fe50bc24-6"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
`,v=t.U.div.withConfig({displayName:"SignUpPasswordInputWithDescription__SignUpPasswordStyled",componentId:"sc-fe50bc24-7"})`
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
`,D=(0,t.U)(N).withConfig({displayName:"SignUpPasswordInputWithDescription__ToggleIcon",componentId:"sc-fe50bc24-9"})`
    cursor: pointer;
    flex-shrink: 0;
`;e.s(["f",0,function({title:e,placeholder:t,description:n,value:o,onChange:r,matchWith:a,hideHintOnNarrow:d}){var s;let c,{t:p}=(0,w.b)(),[m,h]=(0,x.useState)(!1),g=void 0!==a,u=(o??"").length>0,f=(s=o??"",/^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(s)),N=u&&o===a;g&&u&&(c=p(N?"thePasswordsYouEnteredMatch":"thePasswordsYouEnteredDoNotMatch"));let j=!g||!!c;return(0,i.jsxs)(b,{children:[(0,i.jsxs)(y,{$hasDescription:j,children:[" ",e," "]}),(0,i.jsxs)(I,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(S,{type:m?"text":"password",value:o,placeholder:t,onChange:e=>r?.(e.target.value)}),(0,i.jsx)(D,{icon:l.f.far.eye,onClick:()=>h(e=>!e)})]}),g?c&&(0,i.jsxs)(U,{$hideOnNarrow:d,$tone:N?"valid":"invalid",children:[" ",c," "]}):(0,i.jsxs)(_,{$hideOnNarrow:d,children:[(0,i.jsxs)(U,{$tone:"gray",children:[" ",n," "]}),u&&(0,i.jsx)(C,{icon:f?l.f.fas.check:l.f.fas.xmark,$valid:f})]})]})]})}],96512)},16914,e=>{var i=e.i(43476),t=e.i(97053);let n=t.U.div.withConfig({displayName:"SignUpInputWithButton__SignUpInputWithButtonStyled",componentId:"sc-cf5931e6-0"})`
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
`;e.s(["f",0,function({title:e,placeholder:t,buttonText:c,value:p,onChange:m,onButtonClick:h,inputDisabled:g,inputReadOnly:u,buttonDisabled:f,buttonId:x,inputType:w="text",maxLength:b,inputMode:y,description:I}){let S=!!(g||u),_=" "===I;return(0,i.jsxs)(n,{children:[(0,i.jsxs)(o,{$hasDescription:!!I&&!_,children:[" ",e," "]}),(0,i.jsxs)(a,{children:[(0,i.jsxs)(d,{$inactive:S,children:[(0,i.jsx)(s,{type:w,value:p,$inactive:S,disabled:g,readOnly:u,maxLength:b,inputMode:y,placeholder:t,onChange:e=>{g||u||m?.(e.target.value)}}),(0,i.jsx)(l,{id:x,type:"button",disabled:f,onClick:h,children:c})]}),I&&(0,i.jsxs)(r,{$spacer:_,children:[" ",I," "]})]})]})}])}])})();