import styled from '@emotion/styled';

const Option = styled.button`
    margin-bottom: 0.8rem;
    display: inline-flex;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    border: 0.8px solid black;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 1rem;
`

interface OptionProps {
    optionName: string;
}

export function Options({ optionName }: OptionProps) {
    return(
        <Option>
            {optionName}
        </Option>
    )
}