import styled from '@emotion/styled';

const Exit = styled.button`
    border-radius: 50%;
    border: 0.8px solid black;
    background-color: #FF9E9E;
    color: white;
    width: 0.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ExitProps {
    readonly className?: string;
    readonly onClick?: () => void;
}

export function Exits({className, onClick}: ExitProps) {
    return(
        <Exit className = {className} onClick = {onClick}>
            x
        </Exit>
    )
}