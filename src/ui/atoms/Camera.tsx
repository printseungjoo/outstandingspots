import styled from '@emotion/styled';

const CameraStyled = styled.button`
    width: 1%;
    height: 3.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
    margin-left: 50%;
    border: 0.8px solid black;
`;

const Icon = styled.span`
    transform: translateY(-10%);
`;

interface CameraProps {
    storePhoto: string;
}

export function Camera({ storePhoto }: CameraProps) {
    return (
        <a href = { storePhoto } target="_blank">
            <CameraStyled>
                <Icon>
                    📷
                </Icon>
            </CameraStyled>
        </a>
    )
}