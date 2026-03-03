import styled from '@emotion/styled';

const Photo = styled.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 25vh;
    border: 1px solid black;
    margin-top: 1.5rem;
    overflow: hidden;
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
            <ImgStyled src = {photoSrc} alt = {storeAltName}>
            </ImgStyled>
        </Photo>
    )
}