import styled from 'styled-components';

import type Language from '../../types/Language';

const LogoImage = styled.img`
    margin-top: 3vh;

    @media (max-width: 767px) {
        margin-top: 2vh;
        max-width: 70%;
    }
`;

const WebsiteInformationStyled = styled.div`
    width: 92%;
    height: 75vh;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;

    @media (max-width: 767px) {
        width: 92%;
        height: 96%;
        left: 0;
        transform: none;
    }
`;

const Title = styled.p`
    font-weight: bolder;
    padding: 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`;

const Detail = styled.p`
    font-size: 0.8rem;
    text-align: center;
    padding: 0.4rem 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 0.75rem;
        padding: 0.25rem 0;
    }
`;

const ContentPadding = styled.div`
    padding: 0.3rem 1rem 0 1rem;
    margin: 0;
    font-size: 0.85rem;

    @media (max-width: 767px) {
        padding: 0.2rem 0.7rem 0 0.7rem;
        font-size: 0.75rem;
    }
`;

const OptionButton = styled.a`
    width: 90%;
    height: 5vh;
    background-color: #D9D9D9;
    border-radius: 0;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    @media (max-width: 767px) {
        height: 4.5vh;
        font-size: 0.65rem;
        margin-top: 1.2vh;
    }
`;

interface WebsiteInformationProps {
    language: Language;
}

export function WebsiteInformation({ language }: WebsiteInformationProps) {
    return (
        <WebsiteInformationStyled>
            <LogoImage src = "outstanding_logo.jpg" alt = "outstanding logo"/>
            <Title>
                {language === 'eng' ? "What is 'Outstanding Spots'?" : 'Outstanding Spots란?'}
            </Title>
            <Detail>
                <ContentPadding>
                    {language === 'eng' ? (
                        <>
                            Outstanding Spots is a web service for SUNY Korea students to find out the affiliate stores near SUNY Korea.
                            <br />
                            You can easily find out the store information and benefits through Outstanding Spots!
                        </>
                    ) : (
                        <>
                            Outstanding Spots는 한국뉴욕주립대학교 학생분들을 위한 제휴 매장 안내 웹서비스입니다.
                            <br />
                            학교와 제휴된 다양한 매장을 한눈에 확인하고, 학생들에게 제공되는 할인과 특별 혜택을 간편하게 찾아보세요!
                        </>
                    )}
                </ContentPadding>
            </Detail>
            <OptionButton href = 'https://form.naver.com/response/6ZkQLf7FKUMSGLv4rgprCw' target = "_blank" rel="noopener noreferrer">
                {language === 'eng' ? 'Apply for Affiliate Store' : '제휴 매장 신청하기'}
            </OptionButton>
            <OptionButton href = 'https://www.instagram.com/sunykorea_partnerships?igsh=MXdqZGJyZnRwMTMydg==' target = "_blank" rel="noopener noreferrer">
                {language === 'eng' ? 'Instagram' : '인스타그램'}
            </OptionButton>
            <OptionButton href = 'https://pf.kakao.com/_EyprG' target = "_blank" rel="noopener noreferrer">
                {language === 'eng' ? 'KakaoTalk' : '카카오톡'}
            </OptionButton>
            <OptionButton href = 'https://docs.google.com/forms/d/e/1FAIpQLSesVboW69zSeb3O8Q1ZJwTF46rFmDj7v-SyL5S7NbLpj0Ql5Q/viewform' target = "_blank" rel="noopener noreferrer">
                {language === 'eng' ? 'Contract the developer' : '개발자에게 문의하기'}
            </OptionButton>
        </WebsiteInformationStyled>
    )
}