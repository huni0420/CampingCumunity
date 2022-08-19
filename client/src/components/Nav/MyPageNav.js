import './css/MyPageNav.css';

import styled from 'styled-components';
import MyPageBurger from '../HambergerBtn/MyPageBurger';

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    //border-bottom: 2px solid #f1f1f1;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;


export default function MainNav() {
    return (
        <>
            <Nav>
                <MyPageBurger />
            </Nav>
        </>
    );
}