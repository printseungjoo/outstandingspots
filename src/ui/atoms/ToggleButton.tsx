import styled from '@emotion/styled';

const ToggleButtonStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ToggleOption = styled.p`
    font-weight: bolder;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2em;
    color: white;
    white-space: nowrap;
`;

const ToggleInput = styled.input`
    display: none;

    &:checked + label span {
        left: 64%;
    }
`;

const Square = styled.label`
    width: 7.5rem;
    height: 3.2rem;
    display: block;
    position: relative;
    border-radius: 999px;
    border: 0.8px solid black;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #D9D9D9;
`;

const Circle = styled.span`
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 0.25rem;
    background-color: #78A7FF;
    transition: all 0.2s ease-in;
`;

interface ToggleButtonProps {
    className?: string;
}

export function ToggleButton({ className }: ToggleButtonProps) {
    return (
        <ToggleButtonStyled className = { className }>
            <ToggleOption>
                매장 
            </ToggleOption>
            <ToggleInput type = "checkbox" id = "toggle">
            </ToggleInput>
            <Square htmlFor = "toggle">
                <Circle>
                </Circle>
            </Square>
            <ToggleOption> 
                카테고리 
            </ToggleOption>
        </ToggleButtonStyled>
    )
}