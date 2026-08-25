import styled from 'styled-components';

import type Language from '../../types/Language';

const FooterRightTextStyled = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 80%;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const FileIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const Text = styled.p`
    color: black;
    font-size: 0.9rem;
`;

interface FooterRightTextProps {
    language: Language;
}

export function FooterRightText({ language }: FooterRightTextProps) {
    return(
        <FooterRightTextStyled>
            <FileIcon src = '/file.png' alt = 'file' />
            <Text> {language === 'eng' ? 'Web guide (PDF)' : '웹 사용 설명서 (PDF)'} </Text>
        </FooterRightTextStyled>
    )
}