import styled from 'styled-components';

import { Options } from '../atoms/Options';
import { ToBeContinuedAlert } from '../atoms/ToBeContinuedAlert';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OptionGroupsProps {
    className?: string;
    onOpenWebsiteInfo?: () => void;
    onMyLocation?: () => void;
}

export function OptionGroups({ className, onOpenWebsiteInfo, onMyLocation }: OptionGroupsProps) {
    return (
        <OptionGroup className={className}>
            <Options optionName = '⭐' onClick = { ToBeContinuedAlert } />
            <Options optionName = '👤' onClick = { onMyLocation } />
            <Options optionName = '❓' onClick = { onOpenWebsiteInfo } />
        </OptionGroup>
    )
}