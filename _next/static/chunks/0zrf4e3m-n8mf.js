(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30319,e=>{var n=e.i(43476),i=e.i(71645),t=e.i(74080),r=e.i(97053),o=e.i(11110),a=e.i(65607);let d=r.U.div.withConfig({displayName:"AdminOwnerSearch__AdminOwnerSearchStyled",componentId:"sc-b7c1a55a-0"})`
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
`,c=r.U.p.withConfig({displayName:"AdminOwnerSearch__Text",componentId:"sc-b7c1a55a-1"})`
    color: black;
    font-size: 0.8rem;
    margin: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,s=r.U.div.withConfig({displayName:"AdminOwnerSearch__SearchDiv",componentId:"sc-b7c1a55a-2"})`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`,l=r.U.div.withConfig({displayName:"AdminOwnerSearch__SearchBarDiv",componentId:"sc-b7c1a55a-3"})`
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
`,m=r.U.span.withConfig({displayName:"AdminOwnerSearch__SearchIcon",componentId:"sc-b7c1a55a-4"})`
    font-size: 1rem;
    color: #333;
`,h=r.U.input.withConfig({displayName:"AdminOwnerSearch__SearchInput",componentId:"sc-b7c1a55a-5"})`
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
`,p=r.U.div.withConfig({displayName:"AdminOwnerSearch__Dropdown",componentId:"sc-b7c1a55a-6"})`
    box-sizing: border-box;
    position: fixed;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    box-shadow: 0 4px 10px #00000020;
`,f=r.U.button.withConfig({displayName:"AdminOwnerSearch__DropdownItem",componentId:"sc-b7c1a55a-7"})`
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
`,u=r.U.p.withConfig({displayName:"AdminOwnerSearch__EmptyItem",componentId:"sc-b7c1a55a-8"})`
    margin: 0;
    padding: 0.45rem 0.5rem;
    font-size: 0.85rem;
    color: gray;
`;function g(e,n){return(0,a.O)(e.storeName,n)}function w(e,n){return`${e.name} \xb7 ${g(e,n)} \xb7 ${e.phone}`}e.s(["V",0,function({searchValue:e,onChangeSearchValue:r,owners:a}){let{language:g,t:x}=(0,o.b)(),[b,y]=(0,i.useState)(!1),[_,j]=(0,i.useState)(0),[C,v]=(0,i.useState)({top:0,left:0,width:0}),I=(0,i.useRef)(null),A=(0,i.useMemo)(()=>{let n=e.trim();return n?a.filter(e=>(function(e,n){let i=n.trim().toLowerCase();if(!i)return!0;let t=i.replace(/\D/g,""),r=e.phone.replace(/\D/g,"");return[e.name,e.phone,e.storeName?.kor??"",e.storeName?.eng??"",w(e,"kor"),w(e,"eng")].join(" ").toLowerCase().includes(i)||t.length>0&&r.includes(t)})(e,n)).slice(0,8):[]},[a,e]),N=()=>{let e=I.current?.getBoundingClientRect();e&&v({top:e.bottom+4,left:e.left,width:e.width})},U=e=>{r(w(e,g)),y(!1)};return(0,n.jsxs)(d,{children:[(0,n.jsxs)(c,{children:[" ",x("search")," "]}),(0,n.jsx)(s,{children:(0,n.jsxs)(l,{ref:I,children:[(0,n.jsx)(m,{children:" 🔍 "}),(0,n.jsx)(h,{type:"text",id:"ownerSearchBar",value:e,autoComplete:"off",onChange:e=>{r(e.target.value),y(!0),j(0),N()},onFocus:()=>{y(!0),N()},onBlur:()=>{window.setTimeout(()=>y(!1),120)},onKeyDown:e=>{if(b&&0!==A.length){if("ArrowDown"===e.key)e.preventDefault(),j(e=>Math.min(e+1,A.length-1));else if("ArrowUp"===e.key)e.preventDefault(),j(e=>Math.max(e-1,0));else if("Enter"===e.key){e.preventDefault();let n=A[_]??A[0];n&&U(n)}}},placeholder:"kor"===g?"이름/매장명/전화번호 검색":"Search name/store name/phone number"})]})}),b&&""!==e.trim()&&(0,t.createPortal)((0,n.jsx)(p,{style:{top:C.top,left:C.left,width:C.width},children:0===A.length?(0,n.jsx)(u,{children:x("noMatchingOwner")}):A.map((e,i)=>(0,n.jsx)(f,{type:"button",className:i===_?"active":"",onMouseDown:n=>{n.preventDefault(),U(e)},children:w(e,g)},e._id))}),document.body)]})},"c",0,g])},16914,e=>{var n=e.i(43476),i=e.i(97053);let t=i.U.div.withConfig({displayName:"SignUpInputWithButton__SignUpInputWithButtonStyled",componentId:"sc-cf5931e6-0"})`
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
`,r=i.U.p.withConfig({displayName:"SignUpInputWithButton__Title",componentId:"sc-cf5931e6-1"})`
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
`,o=i.U.p.withConfig({displayName:"SignUpInputWithButton__Description",componentId:"sc-cf5931e6-2"})`
    font-size: 0.75rem;
    color: #5D53F1;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        ${({$spacer:e})=>e&&"display: none;"}
    }
`,a=i.U.div.withConfig({displayName:"SignUpInputWithButton__InputFieldDiv",componentId:"sc-cf5931e6-3"})`
    flex: 1;
    min-width: 0;
`,d=i.U.div.withConfig({displayName:"SignUpInputWithButton__InputField",componentId:"sc-cf5931e6-4"})`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: ${({$inactive:e})=>e?"#EEECFA":"white"};
`,c=i.U.input.withConfig({displayName:"SignUpInputWithButton__SignUpInput",componentId:"sc-cf5931e6-5"})`
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
`,s=i.U.button.withConfig({displayName:"SignUpInputWithButton__SignUpButton",componentId:"sc-cf5931e6-6"})`
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
`;e.s(["f",0,function({title:e,placeholder:i,buttonText:l,value:m,onChange:h,onButtonClick:p,inputDisabled:f,inputReadOnly:u,buttonDisabled:g,buttonId:w,inputType:x="text",maxLength:b,inputMode:y,description:_}){let j=!!(f||u),C=" "===_;return(0,n.jsxs)(t,{children:[(0,n.jsxs)(r,{$hasDescription:!!_&&!C,children:[" ",e," "]}),(0,n.jsxs)(a,{children:[(0,n.jsxs)(d,{$inactive:j,children:[(0,n.jsx)(c,{type:x,value:m,$inactive:j,disabled:f,readOnly:u,maxLength:b,inputMode:y,placeholder:i,onChange:e=>{f||u||h?.(e.target.value)}}),(0,n.jsx)(s,{id:w,type:"button",disabled:g,onClick:p,children:l})]}),_&&(0,n.jsxs)(o,{$spacer:C,children:[" ",_," "]})]})]})}])},75540,e=>{var n=e.i(43476);e.i(51718);var i=e.i(35020),i=i,t=e.i(76389),r=i,o=e.i(10581),a=i,d=e.i(71645),c=e.i(18566),s=e.i(97053),l=e.i(49721),m=e.i(42099),h=e.i(91584),p=e.i(11110),f=e.i(30490),u=e.i(38313),g=e.i(78911),w=e.i(2974),x=e.i(30319),b=e.i(65607);let y=s.U.div.withConfig({displayName:"OwnerAccountTab__Page",componentId:"sc-82ec19f4-0"})`
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
`,_=s.U.div.withConfig({displayName:"OwnerAccountTab__HeaderBlock",componentId:"sc-82ec19f4-1"})`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`,j=s.U.p.withConfig({displayName:"OwnerAccountTab__Title",componentId:"sc-82ec19f4-2"})`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`,C=s.U.p.withConfig({displayName:"OwnerAccountTab__SubTitle",componentId:"sc-82ec19f4-3"})`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`,v=s.U.div.withConfig({displayName:"OwnerAccountTab__Grid",componentId:"sc-82ec19f4-4"})`
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        overflow: visible;
        height: auto;
    }
`,I=s.U.div.withConfig({displayName:"OwnerAccountTab__RightColumn",componentId:"sc-82ec19f4-5"})`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-height: 0;
    height: 100%;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
        overflow: visible;
    }
`,A=s.U.div.withConfig({displayName:"OwnerAccountTab__Card",componentId:"sc-82ec19f4-6"})`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`,N=(0,s.U)(A).withConfig({displayName:"OwnerAccountTab__LeftCard",componentId:"sc-82ec19f4-7"})`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
    }
`,U=s.U.div.withConfig({displayName:"OwnerAccountTab__InfoList",componentId:"sc-82ec19f4-8"})`
    min-height: 0;
`,T=(0,s.U)(A).withConfig({displayName:"OwnerAccountTab__PhoneCard",componentId:"sc-82ec19f4-9"})`
    flex-shrink: 0;
`,O=(0,s.U)(A).withConfig({displayName:"OwnerAccountTab__PasswordCard",componentId:"sc-82ec19f4-10"})`
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;
`,S=s.U.p.withConfig({displayName:"OwnerAccountTab__CardTitle",componentId:"sc-82ec19f4-11"})`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`,k=(0,s.U)(S).withConfig({displayName:"OwnerAccountTab__PhoneTitle",componentId:"sc-82ec19f4-12"})`
    margin-bottom: 0.9rem;
`,z=s.U.p.withConfig({displayName:"OwnerAccountTab__CardHint",componentId:"sc-82ec19f4-13"})`
    font-size: 0.8rem;
    color: ${({$success:e})=>e?"#22a06b":"#8a84a0"};
    margin: 0 0 0.55rem 0;
`,$=s.U.div.withConfig({displayName:"OwnerAccountTab__InfoRow",componentId:"sc-82ec19f4-14"})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    @media (max-width: 1024px) {
        ${({$stack:e})=>e&&`
            display: block;
        `}
    }
`,B=s.U.div.withConfig({displayName:"OwnerAccountTab__NameEditBlock",componentId:"sc-82ec19f4-15"})`
    min-width: 0;
    flex: 1;
`,P=s.U.div.withConfig({displayName:"OwnerAccountTab__NameEditRow",componentId:"sc-82ec19f4-16"})`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
`,E=s.U.p.withConfig({displayName:"OwnerAccountTab__InfoLabel",componentId:"sc-82ec19f4-17"})`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`,D=s.U.p.withConfig({displayName:"OwnerAccountTab__InfoValue",componentId:"sc-82ec19f4-18"})`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`,F=s.U.button.withConfig({displayName:"OwnerAccountTab__OutlineButton",componentId:"sc-82ec19f4-19"})`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`,W=s.U.button.withConfig({displayName:"OwnerAccountTab__PrimaryButton",componentId:"sc-82ec19f4-20"})`
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
`,L=(0,s.U)(F).withConfig({displayName:"OwnerAccountTab__NameActionButton",componentId:"sc-82ec19f4-21"})`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`,R=(0,s.U)(W).withConfig({displayName:"OwnerAccountTab__NameSaveButton",componentId:"sc-82ec19f4-22"})`
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
`,M=s.U.input.withConfig({displayName:"OwnerAccountTab__NameInput",componentId:"sc-82ec19f4-23"})`
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
`,Y=s.U.span.withConfig({displayName:"OwnerAccountTab__StatusBadge",componentId:"sc-82ec19f4-24"})`
    display: inline-flex;
    align-items: center;
    background: #e8f8ef;
    color: #1f9d57;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 600;
`,V=s.U.div.withConfig({displayName:"OwnerAccountTab__Stepper",componentId:"sc-82ec19f4-25"})`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0 0 0.7rem 0;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`,H=s.U.div.withConfig({displayName:"OwnerAccountTab__Step",componentId:"sc-82ec19f4-26"})`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 4.5rem;
`,K=s.U.span.withConfig({displayName:"OwnerAccountTab__StepDot",componentId:"sc-82ec19f4-27"})`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    background: ${({$active:e,$done:n})=>e||n?"#7965EA":"#cfcadf"};
`,G=s.U.span.withConfig({displayName:"OwnerAccountTab__StepLabel",componentId:"sc-82ec19f4-28"})`
    font-size: 0.7rem;
    color: ${({$active:e})=>e?"#7965EA":"#8a84a0"};
    text-align: center;
`,q=s.U.div.withConfig({displayName:"OwnerAccountTab__StepLine",componentId:"sc-82ec19f4-29"})`
    flex: 1;
    height: 2px;
    margin-bottom: 1.1rem;
    background: ${({$done:e})=>e?"#7965EA":"#e4e0f2"};
`,X=s.U.div.withConfig({displayName:"OwnerAccountTab__FieldRow",componentId:"sc-82ec19f4-30"})`
    display: flex;
    align-items: flex-end;
    gap: 0.6rem;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: stretch;
    }
`,J=s.U.div.withConfig({displayName:"OwnerAccountTab__Field",componentId:"sc-82ec19f4-31"})`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`,Q=s.U.p.withConfig({displayName:"OwnerAccountTab__FieldLabel",componentId:"sc-82ec19f4-32"})`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`,Z=s.U.input.withConfig({displayName:"OwnerAccountTab__TextInput",componentId:"sc-82ec19f4-33"})`
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
`,ee=s.U.div.withConfig({displayName:"OwnerAccountTab__PasswordWrap",componentId:"sc-82ec19f4-34"})`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`,en=(0,s.U)(Z).withConfig({displayName:"OwnerAccountTab__PasswordInput",componentId:"sc-82ec19f4-35"})`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`,ei=s.U.button.withConfig({displayName:"OwnerAccountTab__EyeButton",componentId:"sc-82ec19f4-36"})`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`,et=s.U.div.withConfig({displayName:"OwnerAccountTab__PasswordStack",componentId:"sc-82ec19f4-37"})`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`,er=(0,s.U)(J).withConfig({displayName:"OwnerAccountTab__PasswordField",componentId:"sc-82ec19f4-38"})`
    gap: 0.2rem;
`,eo=(0,s.U)(ee).withConfig({displayName:"OwnerAccountTab__CompactPasswordWrap",componentId:"sc-82ec19f4-39"})`
    min-height: 2rem;
`,ea=(0,s.U)(en).withConfig({displayName:"OwnerAccountTab__CompactPasswordInput",componentId:"sc-82ec19f4-40"})`
    padding: 0.35rem 0.6rem;
`,ed=s.U.p.withConfig({displayName:"OwnerAccountTab__MatchHint",componentId:"sc-82ec19f4-41"})`
    font-size: 0.75rem;
    color: ${({$valid:e})=>e?"#22c55e":"#ef4444"};
    margin: 0.15rem 0 0 0;
    text-align: left;
`,ec=s.U.div.withConfig({displayName:"OwnerAccountTab__ButtonRight",componentId:"sc-82ec19f4-42"})`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
`,es=s.U.div.withConfig({displayName:"OwnerAccountTab__WithdrawBox",componentId:"sc-82ec19f4-43"})`
    flex-shrink: 0;
    margin-top: 0.65rem;
    padding: 0.65rem 0.8rem 0.6rem;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.45rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`,el=s.U.p.withConfig({displayName:"OwnerAccountTab__WithdrawTitle",componentId:"sc-82ec19f4-44"})`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`,em=s.U.p.withConfig({displayName:"OwnerAccountTab__WithdrawText",componentId:"sc-82ec19f4-45"})`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`,eh=s.U.button.withConfig({displayName:"OwnerAccountTab__WithdrawButton",componentId:"sc-82ec19f4-46"})`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`,ep=s.U.div.withConfig({displayName:"OwnerAccountTab__WithdrawActions",componentId:"sc-82ec19f4-47"})`
    display: flex;
    justify-content: flex-end;
`;e.s(["OwnerAccountTab",0,function(){let{language:e,t:s}=(0,p.b)(),{owner:A,updateOwner:ee,logoutOwner:en}=(0,f.V)(),{stores:ef}=(0,u.g)(),eu=(0,c.useRouter)(),eg=ef.find(e=>e._id===A?.storeId),ew=A?eg?(0,b.S)(eg,e):(0,x.c)(A,e):"",[ex,eb]=(0,d.useState)(!1),[ey,e_]=(0,d.useState)(A?.name??""),[ej,eC]=(0,d.useState)(!1),[ev,eI]=(0,d.useState)(1),[eA,eN]=(0,d.useState)(""),[eU,eT]=(0,d.useState)(""),[eO,eS]=(0,d.useState)(!1),ek=(0,d.useRef)(null),ez=(0,d.useRef)(null),e$=(0,d.useRef)(null),[eB,eP]=(0,d.useState)(""),[eE,eD]=(0,d.useState)(""),[eF,eW]=(0,d.useState)(""),[eL,eR]=(0,d.useState)(!1),[eM,eY]=(0,d.useState)(!1),[eV,eH]=(0,d.useState)(!1),[eK,eG]=(0,d.useState)(!1);if((0,d.useEffect)(()=>{let e=sessionStorage.getItem("os-pending-phone");e&&(eN(e),sessionStorage.removeItem("os-pending-phone"))},[]),(0,d.useEffect)(()=>{h.f.languageCode=(0,b.T)(e)},[e]),(0,d.useEffect)(()=>()=>{ez.current?.clear(),ez.current=null},[]),!A)return null;async function eq(){let e=ey.trim();if(!e)return void alert(s("pleaseEnterYourName"));eC(!0);try{let n=await (0,w.T)(A._id,e);ee(n),eb(!1)}catch(e){console.error(e),alert(s("failedToUpdateTheName"))}finally{eC(!1)}}async function eX(){if((0,g.G)()){sessionStorage.setItem("os-pending-phone",eA);let e=(0,g.p)();alert(s("firebasePhoneAuthLocalhost",{url:e})),window.location.replace(e);return}if(!(0,g.C)(eA))return void alert(s("enterAValidKoreanNumber"));try{eS(!0),ek.current=await (0,o.f)(h.f,(0,g.w)(eA),(()=>{if(ez.current)return ez.current;if(!e$.current)throw Error("reCAPTCHA container is missing.");let e=new t.f(h.f,e$.current,{size:"invisible"});return ez.current=e,e})()),eI(2),alert(s("theVerificationCodeHasBeenSent"))}catch(n){console.error(n),ez.current?.clear(),ez.current=null,alert((0,g.y)(n,e))}finally{eS(!1)}}async function eJ(){let n=eU.trim();if(!n)return void alert(s("pleaseEnterTheVerificationCode"));try{eS(!0);let e=(0,g.w)(eA);if(h.f.currentUser?.phoneNumber!==e){let e=ek.current;if(!e)return void alert(s("pleaseRequestAVerificationCodeFirst"));let t=i.i.credential(e.verificationId,n);if(h.f.currentUser)try{await (0,a.A)(h.f.currentUser,t)}catch(o){let t=(0,g.X)(o);if("auth/credential-already-in-use"!==t&&"auth/account-exists-with-different-credential"!==t)throw o;await h.f.signOut(),await (0,r.F)(h.f,i.i.credential(e.verificationId,n))}else await (0,r.F)(h.f,t)}let t=h.f.currentUser;if(!t)throw Error(s("phoneVerificationFailed"));let o=await t.getIdToken(!0),d=await (0,w.P)(A._id,o);ee(d),eI(3)}catch(n){console.error(n),alert((0,g.o)(n,e))}finally{eS(!1)}}async function eQ(){if(!eB||!eE||!eF)return void alert(s("pleaseFillInAllPasswordFields"));if(!(0,w.n)(eE))return void alert(s("use820CharactersIncludingLettersAndNumbers"));if(eE!==eF)return void alert(s("theNewPasswordsDoNotMatch"));eG(!0);try{try{await (0,w.g)(A.id,eB)}catch(e){if(e instanceof w.t)return void alert(s("theCurrentPasswordIsIncorrect"));throw e}await (0,w.s)(A._id,eB,eE),eP(""),eD(""),eW(""),alert(s("passwordHasBeenChanged"))}catch(n){console.error(n);let e=n instanceof Error?n.message:"";e.includes("현재 비밀번호")||e.toLowerCase().includes("current password")?alert(s("theCurrentPasswordIsIncorrect")):alert(e||s("failedToChangeThePassword"))}finally{eG(!1)}}async function eZ(){if(window.confirm(s("areYouSureYouWantToDeleteThisAccountThis")))try{await (0,w.Y)(A._id),en(),eu.push("/login")}catch(e){console.error(e),alert(s("failedToDeleteTheAccount"))}}let e0="approved"===A.status?s("approved"):"rejected"===A.status?s("rejected"):s("pending2");return(0,n.jsxs)(y,{children:[(0,n.jsxs)(_,{children:[(0,n.jsxs)(j,{children:[" ",s("accountManagement")," "]}),(0,n.jsxs)(C,{children:[" ",s("youCanManageYourAccountAndSecurityInformation")," "]})]}),(0,n.jsxs)(v,{children:[(0,n.jsxs)(N,{children:[(0,n.jsxs)(S,{children:[" ",s("basicInformation")," "]}),(0,n.jsxs)(U,{children:[(0,n.jsx)($,{$stack:ex,children:ex?(0,n.jsxs)(B,{children:[(0,n.jsxs)(E,{children:[" ",s("name")," "]}),(0,n.jsxs)(P,{children:[(0,n.jsx)(M,{value:ey,onChange:e=>e_(e.target.value)}),(0,n.jsxs)(L,{type:"button",onClick:()=>{eb(!1),e_(A.name)},children:[" ",s("cancel")," "]}),(0,n.jsx)(R,{type:"button",disabled:ej,onClick:()=>{eq()},children:s("save")})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(E,{children:[" ",s("name")," "]}),(0,n.jsxs)(D,{children:[" ",A.name," "]})]}),(0,n.jsxs)(F,{type:"button",onClick:()=>{e_(A.name),eb(!0)},children:[" ",s("edit")," "]})]})}),(0,n.jsx)($,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(E,{children:[" ",s("id")," "]}),(0,n.jsxs)(D,{children:[" ",A.id," "]})]})}),(0,n.jsx)($,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(E,{children:[" ",s("phoneNumber")," "]}),(0,n.jsxs)(D,{children:[" ",A.phone," "]})]})}),(0,n.jsx)($,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(E,{children:[" ",s("assignedStore")," "]}),(0,n.jsxs)(D,{children:[" ",ew," "]})]})}),(0,n.jsx)($,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(E,{children:[" ",s("accountStatus")," "]}),(0,n.jsxs)(Y,{children:[" ",e0," "]})]})}),(0,n.jsxs)(es,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(el,{children:[" ",s("deleteAccount")," "]}),(0,n.jsx)(em,{children:s("ifYouDeleteYourAccountYourOwnerInformationWillBe")})]}),(0,n.jsx)(ep,{children:(0,n.jsx)(eh,{type:"button",onClick:()=>{eZ()},children:s("deleteAccount")})})]})]})]}),(0,n.jsxs)(I,{children:[(0,n.jsxs)(T,{children:[(0,n.jsxs)(k,{children:[" ",s("changePhoneNumber")," "]}),3===ev&&(0,n.jsx)(z,{$success:!0,children:s("phoneNumberHasBeenChanged")}),(0,n.jsxs)(V,{children:[(0,n.jsxs)(H,{$active:1===ev,$done:ev>1,children:[(0,n.jsx)(K,{$active:1===ev,$done:ev>1,children:"1"}),(0,n.jsx)(G,{$active:1===ev,children:s("newNumber")})]}),(0,n.jsx)(q,{$done:ev>1}),(0,n.jsxs)(H,{$active:2===ev,$done:ev>2,children:[(0,n.jsx)(K,{$active:2===ev,$done:ev>2,children:"2"}),(0,n.jsx)(G,{$active:2===ev,children:s("verifyCode")})]}),(0,n.jsx)(q,{$done:ev>2}),(0,n.jsxs)(H,{$active:3===ev,$done:3===ev,children:[(0,n.jsx)(K,{$active:3===ev,$done:3===ev,children:"✓"}),(0,n.jsx)(G,{$active:3===ev,children:s("done")})]})]}),1===ev&&(0,n.jsxs)(X,{children:[(0,n.jsxs)(J,{children:[(0,n.jsxs)(Q,{children:[" ",s("newPhoneNumber")," "]}),(0,n.jsx)(Z,{type:"tel",value:eA,placeholder:s("enterOnlyNumbers"),onChange:e=>eN(e.target.value.replace(/\D/g,""))})]}),(0,n.jsx)(W,{type:"button",disabled:eO,onClick:()=>{eX()},children:s("sendCode")})]}),2===ev&&(0,n.jsxs)(X,{children:[(0,n.jsxs)(J,{children:[(0,n.jsxs)(Q,{children:[" ",s("verificationCode")," "]}),(0,n.jsx)(Z,{type:"text",inputMode:"numeric",maxLength:6,value:eU,placeholder:s("enterTheCode"),onChange:e=>eT(e.target.value.replace(/\D/g,""))})]}),(0,n.jsx)(W,{type:"button",disabled:eO,onClick:()=>{eJ()},children:s("confirm")})]}),(0,n.jsx)("div",{ref:e$,style:{position:"absolute",width:1,height:1,left:-9999}})]}),(0,n.jsxs)(O,{children:[(0,n.jsxs)(S,{children:[" ",s("changePassword")," "]}),(0,n.jsx)(z,{children:s("n820CharactersIncludingLettersAndNumbers")}),(0,n.jsxs)(et,{children:[(0,n.jsxs)(er,{children:[(0,n.jsxs)(Q,{children:[" ",s("currentPassword")," "]}),(0,n.jsxs)(eo,{children:[(0,n.jsx)(ea,{type:eL?"text":"password",value:eB,onChange:e=>eP(e.target.value)}),(0,n.jsx)(ei,{type:"button",onClick:()=>eR(e=>!e),children:(0,n.jsx)(l.f,{icon:m.f.far.eye})})]})]}),(0,n.jsxs)(er,{children:[(0,n.jsxs)(Q,{children:[" ",s("newPassword")," "]}),(0,n.jsxs)(eo,{children:[(0,n.jsx)(ea,{type:eM?"text":"password",value:eE,onChange:e=>eD(e.target.value)}),(0,n.jsx)(ei,{type:"button",onClick:()=>eY(e=>!e),children:(0,n.jsx)(l.f,{icon:m.f.far.eye})})]})]}),(0,n.jsxs)(er,{children:[(0,n.jsxs)(Q,{children:[" ",s("confirmNewPassword")," "]}),(0,n.jsxs)(eo,{children:[(0,n.jsx)(ea,{type:eV?"text":"password",value:eF,onChange:e=>eW(e.target.value)}),(0,n.jsx)(ei,{type:"button",onClick:()=>eH(e=>!e),children:(0,n.jsx)(l.f,{icon:m.f.far.eye})})]}),eF.length>0&&(0,n.jsx)(ed,{$valid:eF===eE,children:eF===eE?s("thePasswordsYouEnteredMatch"):s("thePasswordsYouEnteredDoNotMatch")})]})]}),(0,n.jsx)(ec,{children:(0,n.jsx)(W,{type:"button",disabled:eK,onClick:()=>{eQ()},children:s("changePassword")})})]})]})]})]})}],75540)}])})();