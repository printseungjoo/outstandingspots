import styled from '@emotion/styled';

const NavBarDiv = styled.div`
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    background-color: white;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
`;

const NavUl = styled.ul`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const NavLi = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #333;
    padding: 0.4rem 0;

    &:last-child {
        border-right: none;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

export function NavBar() {
    return(
        <NavBarDiv>
            <nav id = "navbar">
                <NavUl>
                    <NavLi> <a href = "/my"> My Page </a> </NavLi>
                    <NavLi> <a href = "/"> Map Page </a> </NavLi>
                    <NavLi> <a href = "/toBeContinued"> To be continued </a> </NavLi>
                    <NavLi> <a href = "/store"> Store Page </a> </NavLi>
                </NavUl>
            </nav>
        </NavBarDiv>
    )    
}