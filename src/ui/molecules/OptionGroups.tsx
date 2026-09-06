import styled from 'styled-components';

import { Options } from '../atoms/Options';

const OptionGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

interface OptionGroupsProps {
    className?: string;
    onOpenWebsiteInfo?: () => void;
    onMyLocation?: () => void;
    onToggleFavorites?: () => void;
    favoritesOnly?: boolean;
}

export function OptionGroups({ className, onOpenWebsiteInfo, onMyLocation, onToggleFavorites, favoritesOnly }: OptionGroupsProps) {
    return (
        <OptionGroup className={className}>
            <Options optionName = '⭐' active = { favoritesOnly } onClick = { onToggleFavorites } />
            <Options optionName = '👤' onClick = { onMyLocation } />
            <Options optionName = '❓' onClick = { onOpenWebsiteInfo } />
        </OptionGroup>
    )
}