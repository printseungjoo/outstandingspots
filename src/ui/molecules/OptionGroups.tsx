import styled from '@emotion/styled';

import { Options } from '../atoms/Options';

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
            <Options optionName = '⭐' />
            <Options optionName = '👤' onClick = { onMyLocation } />
            <Options optionName = '❓' onClick = { onOpenWebsiteInfo } />
        </OptionGroup>
    )
}