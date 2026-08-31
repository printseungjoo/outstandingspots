import styled from 'styled-components';

import { resolvePhotoUrl } from '../../lib/storesApi';

const Photo = styled.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 20vh;
    border: 1px solid black;
    margin-top: 1.5rem;
    overflow: hidden;

    @media (max-width: 767px) {
        height: 16vh;
        margin-top: 0.8rem;
    }
`;

const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

interface PhotosProps {
    photoSrc?: string;
    storeAltName?: string;
}

export function Photos({ photoSrc, storeAltName }: PhotosProps) {
    return(
        <Photo>
            <ImgStyled src = { resolvePhotoUrl(photoSrc) } alt = { storeAltName }>
            </ImgStyled>
        </Photo>
    )
}