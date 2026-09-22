import styled from 'styled-components';

import { hostedPhotoImgProps } from '../../lib/storesApi';

const Photo = styled.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    aspect-ratio: calc((25vw * 0.92 * 0.90) / 20vh);
    margin-top: 1.5rem;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 767px) {
        aspect-ratio: 4 / 3;
        margin-top: 0.8rem;
        min-height: 9rem;
    }
`;

const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`;

interface PhotosProps {
    photoSrc?: string;
    storeAltName?: string;
}

export function Photos({ photoSrc, storeAltName }: PhotosProps) {
    return(
        <Photo>
            <ImgStyled { ...hostedPhotoImgProps(photoSrc) } alt = { storeAltName } />
        </Photo>
    )
}