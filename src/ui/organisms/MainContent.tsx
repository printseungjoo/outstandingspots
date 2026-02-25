import styled from '@emotion/styled';

import { AllCategories } from '../molecules/AllCategories';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';

const MainContentStyled = styled.div`
    position: relative;
    width: 100%;
    height: 84vh;
`;

const MapPlus = styled(Map)`
    position: absolute;
    z-index: 1;
`;

const LanguageButtonsPlus = styled(LanguageButtons)`
    position: absolute;
    z-index: 2;
    right: 0;
    margin: 2rem 2rem;
`;

const OptionGroupsPlus = styled(OptionGroups)`
    position: absolute;
    z-index: 2;
    margin: 2rem 2rem;
`;

const AllCategoriesPlus = styled(AllCategories)`
    position: absolute;
    z-index: 2;
    bottom: 2rem;
`

interface MainContentProps {
    className?: string;
}

export function MainContent({ className }: MainContentProps) {
    return (
        <MainContentStyled className = {className}>
            <MapPlus />
            <LanguageButtonsPlus />
            <OptionGroupsPlus />
            <AllCategoriesPlus />
        </MainContentStyled>
    )
}