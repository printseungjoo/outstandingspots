import styled from 'styled-components';

const Option = styled.button<{ $active?: boolean }>`
    margin-bottom: 1.2rem;
    display: inline-flex;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.8px solid ${({ $active }) => $active ? '#7965EA' : 'black'};
    justify-content: center;
    align-items: center;
    background-color: ${({ $active }) => $active ? '#F1EDFC' : 'white'};
    font-size: 1.5rem;
`

interface OptionProps {
    optionName: string;
    onClick?: () => void;
    active?: boolean;
}

export function Options({ optionName, onClick, active }: OptionProps) {
    return(
        <Option type = 'button' $active = { active } onClick = { onClick }>
            { optionName }
        </Option>
    )
}