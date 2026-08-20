import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';
import { WebsiteInformation } from '../molecules/WebsiteInformation';
import type Language from '../../types/Language';

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

const ExitDiv = styled.div`
    position: relative;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    height: 98%;
    justify-content: flex-end;
    width: 100%;
`;

const ExitsPlus = styled(Exits)`
    z-index: 4;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;
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
                <ExitDiv>
                    <ExitsPlus onClick = { onClose }/>
                </ExitDiv>
            </WebsiteInformationDiv>
        </WebsiteInformationTabStyled>
    )
}
