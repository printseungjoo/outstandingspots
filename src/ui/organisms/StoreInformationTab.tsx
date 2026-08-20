import styled from '@emotion/styled';

import { StoreInformation } from '../molecules/StoreInformation';
import type Store from '../../types/Store';
import type Language from '../../types/Language';
import { ExitContainer } from '../molecules/ExitContainer';

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
                <ExitContainer onClose = { onClose ?? (() => {})} />
            </StoreInformationDiv>
        </StoreInformationTabStyled>
    )
}
