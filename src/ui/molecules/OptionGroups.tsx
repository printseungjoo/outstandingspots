import styled from '@emotion/styled';

import { Options } from '../atoms/Options';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OptionGroupsProps {
    className?: string;
    onOpenWebsiteInfo?: () => void;
    onOpenStoreList?: () => void;
}

export function OptionGroups({ className, onOpenWebsiteInfo, onOpenStoreList }: OptionGroupsProps) {
    return (
        <OptionGroup className={className}>
            <Options optionName='❓' onClick = { onOpenWebsiteInfo } />
            <Options optionName='📜' onClick = { onOpenStoreList }/>
        </OptionGroup>
    )
}