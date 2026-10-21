import styled from 'styled-components'

const SignUpInputStyled = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
        width: 92%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
    }
`;

const Title = styled.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }

    @media (max-width: 767px) {
        width: auto;
    }
`;

const InputField = styled.div`
    flex: 1;
    min-width: 0;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`;

const Description = styled.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

interface SignUpInputProps {
    title: string;
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
}

export function SignUpInput({ title, placeholder, value, onChange }: SignUpInputProps) {
    return(
        <SignUpInputStyled>
            <Title> { title } </Title>
            <InputField>
                <Input type = "text" value = { value } placeholder = { placeholder }
                    onChange = {(e) => onChange?.(e.target.value)} />
                <Description>{'\u00A0'}</Description>
            </InputField>
        </SignUpInputStyled>
    )
}