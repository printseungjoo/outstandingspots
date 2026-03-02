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
`;

interface PhotosProps {
    photoSrc?: string;
    storeAltName?: string;
}

export function Photos({ photoSrc, storeAltName }: PhotosProps) {
    return(
        <Photo>
            <img src = {photoSrc} alt = {storeAltName}/>
        </Photo>
    )
}