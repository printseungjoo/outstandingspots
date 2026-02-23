import styled from '@emotion/styled';

const Language = styled.button<{selected: boolean}>`
    font-weight: bold;
    background-color: ${({ selected }) => selected?'#E3E6FF':'white'};
    border: 0px solid black;
    border-radius: 0;
    padding: 0.5rem 0.6rem;
`;

interface LanguageProps {
    languageName: string;
    selected: boolean;
    onClick: () => void;
}

export function Languages({ languageName, selected, onClick }: LanguageProps) {
    return(
        <Language selected = { selected } onClick = { onClick }>
            { languageName }
        </Language>
    )
}