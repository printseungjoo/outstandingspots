import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';
import { WebsiteInformation } from '../molecules/WebsiteInformation';

const WebsiteInformationTabStyled = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 84vh;
    pointer-events: none;
    z-index: 3;
`;

const ExitsPlus = styled(Exits)`
    z-index: 3;
    position: absolute;
    left: calc(25% + 1rem);
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;
`;

type Language = 'kor' | 'eng';

interface WebsiteInformationTabProps {
    onClose?: () => void;
    language: Language;
}

export function WebsiteInformationTab({ onClose, language }: WebsiteInformationTabProps) {
    return(
        <WebsiteInformationTabStyled>
            <WebsiteInformation language = { language }/>
            <ExitsPlus onClick={ onClose }/>
        </WebsiteInformationTabStyled>
    )
}