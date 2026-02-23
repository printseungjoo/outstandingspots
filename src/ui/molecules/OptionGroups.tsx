import styled from '@emotion/styled';

import { Options } from '../atoms/Options';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OptionGroupsProps {
    className?: string;
}

export function OptionGroups({ className }: OptionGroupsProps) {
    return(
        <OptionGroup className = { className }>
            <Options optionName = '🧭'/>
            <Options optionName = '❓'/>
            <Options optionName = '📜'/>
            <Options optionName = '🔑'/>
        </OptionGroup>
    )
}