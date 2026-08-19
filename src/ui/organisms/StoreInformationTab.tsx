import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';
import { StoreInformation } from '../molecules/StoreInformation';
import type Store from '../../types/Store';
import type Language from '../../types/Language';

const StoreInformationTabStyled = styled.div`
    position: relative;
    width: 25%;
    height: 79vh;
    pointer-events: none;
    left: 2rem;
    padding-right: 1rem;
`;

const StoreInformationDiv = styled.div`
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

interface StoreInformationTabProps {
    className?: string;
    onClose?: () => void;
    store: Store;
    language: Language;
}

export function StoreInformationTab({ className, onClose, store, language }: StoreInformationTabProps) {
    return(
        <StoreInformationTabStyled className = { className }>
            <StoreInformationDiv>
                <StoreInformation store = { store } language = { language }/>
                <ExitDiv>
                    <ExitsPlus onClick = { onClose }/>
                </ExitDiv>
            </StoreInformationDiv>
        </StoreInformationTabStyled>
    )
}
