import styled from '@emotion/styled';

const CRUDButton = styled.button`
    width: 10rem;
    height: 8vh;
    margin-right: 1%;
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