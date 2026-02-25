import { useEffect } from 'react';
import styled from '@emotion/styled';

import { InitMap } from '../../apis/InitMap';

const MapStyled = styled.div`
    width: 100%;
    height: 84vh;
`;

interface MapProps {
    className?: string;
}

export function Map({ className }: MapProps) {
    useEffect(() => {
        InitMap(() => {});
    }, []);

    return(
        <MapStyled id = 'map' className = { className }>
        </MapStyled>
    )
}