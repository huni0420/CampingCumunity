import './css/MyPageNav.css';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyPageBurger from '../HambergerBtn/MyPageBurger';

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
    const moveMain = () => {
        navigate('/Main',
        {
            state: {
                nic: props.nic
            }
        })    
    }

    const moveMyPage = () => {
        navigate('/MyPage',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    
    const moveMyInfo = () => {
        navigate('/MyInfo',
        {
            state: {
                nic: props.nic
            }
        })    
    }

    const withdrawal = () =>{
        if(window.confirm('회원 탈퇴를 하시겠습니까?')===true){
            const url = `/api/deleteuser?nicname=${props.nic}`
            axios.get(url)
            .then(axios.get(`/api/deleteboard?nicname=${props.nic}`))
            .then(res => alert(res.alarm))
            .then(document.location.href='/')
        }
        else
            return;
    }

    
    return (
        <>
            <Nav>
            <MyPageBurger nic = {props.nic} 
                        moveMain = { moveMain }
                        moveMyPage = { moveMyPage }
                        moveMyInfo = { moveMyInfo }
                        withdrawal = { withdrawal } />
            </Nav>
        </>
    );
}