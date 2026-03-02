import styled from '@emotion/styled';

const HeaderStyled = styled.div`
    width: 100%;
    height: 8vh;
    color: #535FC1;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E3E6FF;
`;

interface ContentProps {
    content: string;
    className?: string;
    onClick?: () => void;
}

export function Header({ content, className, onClick }: ContentProps) {
    return(
        <HeaderStyled className = { className } onClick = { onClick }>
            { content }
        </HeaderStyled>
    )
}