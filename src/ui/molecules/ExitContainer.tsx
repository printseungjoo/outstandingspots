import styled from '@emotion/styled';

import { Exits } from '../atoms/Exits';

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

    @media (max-width: 767px) {
        width: 1.3rem;
        height: 1.3rem;
    }
`;

interface ExitDivProps {
    onClose: () => void;
}

export function ExitContainer({ onClose }: ExitDivProps) {
    return(
        <ExitDiv>
            <ExitsPlus onClick = { onClose }/>
        </ExitDiv>
    )
}