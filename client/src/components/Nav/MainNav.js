import './css/MainNav.css';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Burger from '../HambergerBtn/Burger';


const Nav = styled.nav`
    width: 100%;
    height: 65px;
    //border-bottom: 2px solid #f1f1f1;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export default function MainNav( props ) {
    const navigate = useNavigate()
    
    function moveMain () {
        navigate('/Main',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    function moveBoard() {
        navigate('/Board',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    function moveYoutube () {
        navigate('/Youtube',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    function moveContent() {
        navigate('/Content',
        {
            state: {
                nic: props.nic
            }
        })    
    }

    
    return (
        <Nav>
            <Burger nic = {props.nic} 
                moveMain = { moveMain }
                moveBoard = { moveBoard }
                moveYoutube = { moveYoutube }
                moveContent = { moveContent } />
        </Nav>
    );
}