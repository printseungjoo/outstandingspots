import styled from 'styled-components';

import { Exits } from '../atoms/Exits';
import { AllStores } from '../molecules/AllStores';
import type Store from '../../types/Store';
import type Language from '../../types/Language';

const AllStoresTabStyled = styled.div`
    position: relative;
    width: 100%;
    height: 84vh;
    pointer-events: none;
`;

const ExitsPlus = styled(Exits)`
    z-index: 3;
    position: absolute;
    left: calc(25% + 1rem);
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: auto;

    @media(max-width: 1024px) and (min-width: 768px) {
        left: calc(50% + 1rem);
    }

    @media(max-width: 767px) {
        left: 90%;
    }
`;

interface AllStoresTabProps {
    onOpen?: (store: Store) => void;
    onClose?: () => void;
    language: Language;
    stores: Store[];
}

export function AllStoresTab({ onOpen, onClose, language, stores }: AllStoresTabProps) {
    return(
        <AllStoresTabStyled>
            <AllStores onOpen = { onOpen } language = { language } stores = { stores }/>
            <ExitsPlus onClick = { onClose }/>
        </AllStoresTabStyled>
    )
}