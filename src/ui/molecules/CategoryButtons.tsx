import styled from '@emotion/styled';
import { useState } from 'react';

import { Categories } from '../atoms/Categories';
import { Exits } from '../atoms/Exits';

const CategoryButton = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.7rem 0.1rem;
`;

const ExitsPlus = styled(Exits)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`

export function CategoryButtons() {
    const [clicked, setClicked] = useState(false);

    return(
        <CategoryButton>
            <Categories categoryName = '음식점' clicked = { clicked } onClick={() => setClicked(true)}/>
            {clicked && <ExitsPlus onClick={() => setClicked(false)}/>}
        </CategoryButton>
    )
}