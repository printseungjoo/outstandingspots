import styled from 'styled-components';

const NaverMap = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.35rem;
    height: 1.35rem;
    padding: 0;
    margin-left: 0.4rem;
    vertical-align: middle;
    font-weight: bolder;
    font-size: 0.7rem;
    line-height: 1;
    background-color: #6EEB7D;
    color: white;
    border: 0.8px solid black;
    flex-shrink: 0;
    margin-bottom: 0.3rem;
`;

interface NaverMapsProps {
    storeNaverMap?: string
}

export function NaverMaps({ storeNaverMap }: NaverMapsProps) {
    return (
        <a href={ storeNaverMap } target="_blank" rel="noopener noreferrer">
            <NaverMap> N </NaverMap>
        </a>
    )
}
