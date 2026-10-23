import { localeCode, localized, localizedName } from '../../lib/localized'
import { getT } from '../../i18n'
import styled from 'styled-components'
import { useMemo } from 'react'

import type Store from '../../types/Store'
import type Language from '../../types/Language'

const AllStore = styled.div`
    width: 25%;
    height: 80vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    z-index: 3;

    @media(max-width: 1024px) and (min-width: 768px) {
        width: 50%;
    }

    @media(max-width: 767px) {
        width: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Title = styled.p`
    font-weight: bolder;
    margin-bottom: 1vh;
    margin-top: 3vh;
`;

const Detail = styled.p`
    font-size: 0.8rem;
    margin-top: 1vh;
    text-align: center;
    margin-bottom: 3vh;
`;

const StoreButton = styled.button`
    width: 100%;
    font-size: 0.8rem;
    background-color: #EFEEEF;
    border-radius: 0;
    border: 0.3px solid black;
    padding: 3vh;
`;

interface AllStoresProps {
    onOpen?: (store: Store) => void;
    language: Language;
    stores: Store[];
}

export function AllStores({ onOpen, language, stores }: AllStoresProps) {
    const t = getT(language);

    const sortedStores = useMemo(() => {
        return [...stores].sort((a, b) => {
            const aName =
                localizedName(a, language);
            const bName =
                localizedName(b, language);
            return aName.localeCompare(bName, localeCode(language));
        });
    }, [stores, language]);

    return (
        <AllStore>
            <Title>
                {t('viewAllStores')}
            </Title>
            <Detail>
                {t('itIsArrangedInAlphabeticalOrder')} <br/> {t('scrollThroughToFindOutMore')}
            </Detail>
            {sortedStores.map((store) => (
                <StoreButton key = {store._id} onClick = {() => {onOpen?.(store);}}>
                    {localized(store.name, language)} {localized(store.branch, language)}
                </StoreButton>
            ))}
        </AllStore>
    )
}