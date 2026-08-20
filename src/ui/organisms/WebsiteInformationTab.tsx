import styled from '@emotion/styled';

import { WebsiteInformation } from '../molecules/WebsiteInformation';
import type Language from '../../types/Language';
import { ExitContainer } from '../molecules/ExitContainer';

const WebsiteInformationTabStyled = styled.div`
    position: relative;
    width: 25%;
    height: 79vh;
    pointer-events: none;
    left: 2rem;
    padding-right: 1rem;
`;

const WebsiteInformationDiv = styled.div`
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    align-items: center;
`;

interface WebsiteInformationTabProps {
    className?: string;
    onClose?: () => void;
    language: Language;
}

export function WebsiteInformationTab({ className, onClose, language }: WebsiteInformationTabProps) {
    return(
        <WebsiteInformationTabStyled className = { className }>
            <WebsiteInformationDiv>
                <WebsiteInformation language = { language }/>
                <ExitContainer onClose = { onClose ?? (() => {})} />
            </WebsiteInformationDiv>
        </WebsiteInformationTabStyled>
    )
}
