import styled from '@emotion/styled';

const LogoImage = styled.img`
    margin-top: 3vh;
`;

const WebsiteInformationStyled = styled.div`
    width: 25%;
    height: 80vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    z-index: 3;

    @media(max-width: 1024px) and (min-width: 768px) {
        width: 50%;
    }

    @media(max-width: 767px) {
        width: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Title = styled.p`
    font-weight: bolder;
    margin-bottom: 0;
`;

const Detail = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5vh;
    text-align: center;
    margin-bottom: 0;
`;

const ContentPadding = styled.div`
    padding: 1rem 1rem;
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
`;

type Language = 'kor' | 'eng';

interface WebsiteInformationProps {
    language: Language;
}

// 로고 사진은 리뉴얼 될 예정이고 현재는 리뉴얼 전 로고 사진
export function WebsiteInformation({ language }: WebsiteInformationProps) {
    return (
        <WebsiteInformationStyled>
            <LogoImage src = "outstanding_logo.jpg" alt = "outstanding logo"/>
            <Title>
                {language === 'eng' ? "What is 'Outstanding Spots'?" : 'Outstanding Spots란?'}
            </Title>
            <Detail>
                <ContentPadding>
                    {language === 'eng' ? 'Outstanding contracts with stores near SUNY Korea to offer discounts and benefits to SUNY Korea students. Find out the store information and benefits easily through Outstanding Spots!' : 'Outstanding은 한국뉴욕주립대학교 근처 매장들과 계약해 SUNY Korea(한국뉴욕주립대학교) 학생들에게 할인과 혜택을 제공하고 있습니다. Outstanding Spots를 통해 가까운 제휴 매장을 손쉽게 찾아보고 매장별 정보와 혜택을 확인해보세요!'}
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