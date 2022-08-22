import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useSelector } from 'react-redux';
import axios from 'axios';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? `translateX(0)` : `translateX(-100%)`};
        top: 0;
        left: 0;
        height:100vh;
        width: 300px;
        padding-top: 3.5rem;
        //transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
            padding-top: 60px;
        }
    }
`
export default function LeftNav(props) {
    const reduxState = useSelector((state)=>state.user);    
    const navigate = useNavigate();
    const withdrawal = () =>{
        if(window.confirm('회원 탈퇴를 하시겠습니까?')===true){
            const url = `/api/deleteuser?nicname=${reduxState.nicname}`
            axios.get(url)
            .then(axios.get(`/api/deleteboard?nicname=${reduxState.nicname}`))
            .then(res => alert(res.alarm))
            .then(window.localStorage.removeItem('persist:root'))
            .then(document.location.href='/')
        }
        else
            return;
    }
    const moveMain = () =>{ navigate('/Main') }
    const moveMyPage = () =>{ navigate('/MyPage') }
    const moveMyInfo = () =>{ navigate('/MyInfo') }
    

    return(
        <Ul open = {props.open} >
            <li onClick={moveMain}>메인</li>
            <li onClick={moveMyPage}>나의 글</li>
            <li onClick={moveMyInfo}>내정보</li>
            <li onClick={withdrawal}>회원탈퇴</li>
        </Ul>
    );
}