import styled from '@emotion/styled';

const NaverMap = styled.button`
    height: 3.5vh;
    padding-left: 34%;
    padding-right: 34%;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6EEB7D;
    color: white;
    margin-top: 1vh;
    margin-left: 50%;
    border: 0.8px solid black;
`;

interface NaverMapsProps {
    storeNaverMap?: string
}

export function NaverMaps({ storeNaverMap }: NaverMapsProps) {
    return (
        <a href={ storeNaverMap } target="_blank" rel="noopener noreferrer">
            <NaverMap>
                N
            </NaverMap>
        </a>
    )
}