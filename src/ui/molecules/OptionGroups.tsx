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
}

export function OptionGroups({ className, map, onOpenWebsiteInfo }: OptionGroupsProps) {
    return (
        <OptionGroup className={className}>
            <Options optionName='🧭' onClick={() => {
                if (map) {
                    CurrentLocation(map);
                }
            }} />
            <Options optionName='❓' onClick = { onOpenWebsiteInfo } />
            <Options optionName='📜' />
            <Options optionName='🔑' />
        </OptionGroup>
    )
}