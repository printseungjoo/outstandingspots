import { useEffect } from 'react';
import styled from '@emotion/styled';

import { InitMap } from '../../apis/InitMap';

const MapStyled = styled.div`
    width: 100%;
    height: 100%;
`;

export function Map() {
    useEffect(() => {
        InitMap();
    }, []);

    return(
        <MapStyled id = 'map'>
        </MapStyled>
    )
}