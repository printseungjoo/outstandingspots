import styled from '@emotion/styled';

const CRUDButton = styled.button`
    width: 13%;
    height: 11vh;
    margin-left: 4%;
    background-color: #78A7FF;
    color: white;
    font-weight: bolder;
    border: 0;
    border-radius: 10px;
`;

interface CRUDButtonsProps {
    name: string;
}

export function CRUDButtons({ name }: CRUDButtonsProps) {
    return(
        <CRUDButton>
            { name }
        </CRUDButton>
    )
}