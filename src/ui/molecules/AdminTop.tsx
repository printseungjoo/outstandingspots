import styled from '@emotion/styled';
import { useState } from 'react';

import { LanguageButtons } from './LanguageButtons';
import { ToggleButton } from '../atoms/ToggleButton';
import { CRUDButtons } from '../atoms/CRUDButtons';

const AdminTopOuter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 3vh;
`;

const AdminTopScale = styled.div`
    transform: scale(0.8);
    transform-origin: top center;
`;

const AdminTopStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    font-weight: bolder;
    color: white;
    font-size: 2.3rem;
    margin: 0 3% 0 0;
    white-space: nowrap;
`;

const ToggleButtonPlus = styled(ToggleButton)`
    margin-left: 42vw;
    margin-right: 2%;
`;

type Language = 'kor' | 'eng'

interface AdminTopProps {
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
}

export function AdminTop({ isChecked, onToggle }: AdminTopProps) {
    const [language, setLanguage] = useState<Language>('kor');

    return (
        <AdminTopOuter>
            <AdminTopScale>
                <AdminTopStyled>
                    <Title> Admin Page </Title>
                    <LanguageButtons onChangeLanguage = { setLanguage }/>
                    <ToggleButtonPlus isChecked = { isChecked } onToggle = { onToggle } />
                    <CRUDButtons name = '추가' />
                    <CRUDButtons name = '편집' />
                    <CRUDButtons name = '삭제' />
                </AdminTopStyled>
            </AdminTopScale>
        </AdminTopOuter>
    )
}