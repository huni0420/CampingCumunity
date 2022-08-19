import { Link } from "react-router-dom";
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
    const reduxState = useSelector((state)=>state);    

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
    return(
        <Ul open = {props.open} >
            <li><Link to='/Main'>메인</Link></li>
            <li><Link to='/MyPage'>MyContent</Link></li>
            <li><Link to='/MyInfo'>MyInfo</Link></li>
            <li onClick={ ()=>{ withdrawal() } }>회원탈퇴</li>
        </Ul>
    );
}