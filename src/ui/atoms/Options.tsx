import styled from '@emotion/styled';

const Option = styled.button`
    margin-bottom: 1.2rem;
    display: inline-flex;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.8px solid black;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 1.5rem;
`

interface OptionProps {
    optionName: string;
}

export function Options({ optionName }: OptionProps) {
    return(
        <Option>
            { optionName }
        </Option>
    )
}