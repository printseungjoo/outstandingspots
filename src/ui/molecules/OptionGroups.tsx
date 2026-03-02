import styled from '@emotion/styled';

import { Options } from '../atoms/Options';
import { CurrentLocation } from './CurrentLocation';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OptionGroupsProps {
    className?: string;
    map?: kakao.maps.Map | null;
    onOpenWebsiteInfo?: () => void;
    onOpenStoreList?: () => void;
}

export function OptionGroups({ className, map, onOpenWebsiteInfo, onOpenStoreList }: OptionGroupsProps) {
    return (
        <OptionGroup className={className}>
            <Options optionName='🧭' onClick={() => {
                if (map) {
                    CurrentLocation(map);
                }
            }} />
            <Options optionName='❓' onClick = { onOpenWebsiteInfo } />
            <Options optionName='📜' onClick = { onOpenStoreList }/>
            <Options optionName='🔑' />
        </OptionGroup>
    )
}