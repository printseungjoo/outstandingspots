import styled from '@emotion/styled';

const ToggleButtonStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ToggleOption = styled.p`
    font-weight: bolder;
    margin-left: 1%;
    margin-right: 1%;
    font-size: 1.2em;
    color: white;
`;

const ToggleInput = styled.input`
    display: none;

    &:checked + label span {
        left: 67%;
    }
`;

const Square = styled.label`
    width: 17%;
    height: 12vh;
    display: block;
    position: relative;
    border-radius: 999px;
    border: 0.8px solid black;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #D9D9D9;
`;

const Circle = styled.span`
    width: 28%;
    height: 10vh;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 4%;
    background-color: #78A7FF;
    transition: all 0.2s ease-in;
`;

export function ToggleButton() {
    return (
        <ToggleButtonStyled>
            <ToggleOption> 매장 </ToggleOption>
            <ToggleInput type = "checkbox" id = "toggle">
            </ToggleInput>
            <Square htmlFor = "toggle">
                <Circle></Circle>
            </Square>
            <ToggleOption> 카테고리 </ToggleOption>
        </ToggleButtonStyled>
    )
}