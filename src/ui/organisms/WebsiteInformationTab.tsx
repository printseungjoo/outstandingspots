import styled from 'styled-components';

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

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 48%;
        left: 1.5rem;
        padding-right: 0.75rem;
    }

    @media (max-width: 767px) {
        width: calc(100% - 1.2rem);
        left: 0.6rem;
        height: 100%;
        margin-left: 0.1rem;
        padding-right: 1.3rem;
    }
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
