import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';
import { StoreInformation } from '../molecules/StoreInformation';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

const StoreInformationTabStyled = styled.div`
    position: relative;
    width: 100%;
    height: 84vh;
    pointer-events: none;
`;

const ExitsPlus = styled(Exits)`
    z-index: 4;
    position: absolute;
    left: calc(25% + 1rem);
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;
`;

type Language = 'kor' | 'eng';

interface StoreInformationTabProps {
    className?: string;
    onClose?: () => void;
    store: fetchStoreInterface;
    language: Language;
}

export function StoreInformationTab({ className, onClose, store, language }: StoreInformationTabProps) {
    return(
        <StoreInformationTabStyled className = { className }>
            <StoreInformation store = { store } language = { language }/>
            <ExitsPlus onClick = { onClose }/>
        </StoreInformationTabStyled>
    )
}