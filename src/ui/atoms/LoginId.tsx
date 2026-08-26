import styled from "styled-components";
import { byPrefixAndName } from "../../icon/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLanguage } from "../../contexts/LanguageContext";

const LoginIdStyled = styled.div`
    width: 100%;
    height: 5vh;
    border: 0;
    outline: none;
    background-color: #E6E3FB;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    gap: 0.5rem;
`;

const ColoredMyPageIcon = styled(FontAwesomeIcon)`
    height: 2.3vh;
    color: #7A77B0;
`;

const LoginIdInput = styled.input`
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
`;

export function LoginId() {
    const { language } = useLanguage();

    return(
        <LoginIdStyled>
            <ColoredMyPageIcon icon = {byPrefixAndName.fad['user']} />
            <LoginIdInput type = 'text' placeholder = {language === 'eng' ? 'Enter your ID' : 'ID를 입력해주세요'} />
        </LoginIdStyled>
    )
}