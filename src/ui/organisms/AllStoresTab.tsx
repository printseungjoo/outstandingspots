import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';
import { AllStores } from '../molecules/AllStores';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

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
`;

interface AllStoresTabProps {
    onOpen?: (store: fetchStoreInterface) => void;
    onClose?: () => void;
}

export function AllStoresTab({ onOpen, onClose }: AllStoresTabProps) {
    return(
        <AllStoresTabStyled>
            <AllStores onOpen = { onOpen }/>
            <ExitsPlus onClick = { onClose }/>
        </AllStoresTabStyled>
    )
}