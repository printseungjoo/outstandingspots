import styled from '@emotion/styled';

import { Options } from '../atoms/Options';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export function OptionGroups() {
    return(
        <OptionGroup>
            <Options optionName = '🧭'/>
            <Options optionName = '❓'/>
            <Options optionName = '📜'/>
            <Options optionName = '🔑'/>
        </OptionGroup>
    )
}