import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"


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


export default function LeftNav ( props ){

    const navigate = useNavigate()
    const reduxState = useSelector((state)=> state.user)

    // 이거쓰면 페이지 이동후 뒤로가기 막힘
    //window.history.forward();

    const logout = async () => {
        if(window.confirm('로그아웃 하시겠습니까?')===true){
            //console.log(reduxState.email.includes('kakao'));
            //console.log(process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI);
            if(reduxState.email.includes('kakao')){
                window.localStorage.removeItem('persist:root');
                window.location.href='/LoginMain';
            }else{
                window.localStorage.removeItem('persist:root');
                window.location.href='/LoginMain';
            }
        }
    }
    const moveMain = () => { navigate('/Main') }
    const moveBoard = () => { navigate('/Board') }
    const moveContent = () => { navigate('/Content') }
    const moveYoutube = () => { navigate('/Youtube') }
    return(
        <Ul open = {props.open} >
            <li onClick={moveMain} >메인</li>
            <li onClick={moveBoard} >유저게시판</li>
            <li onClick={moveContent} >캠핑컨텐츠</li>
            <li onClick={moveYoutube} >캠핑유튜브</li>
            {reduxState.nicname ? <li onClick={logout}>로그아웃</li> : ""}
        </Ul>
    );
}
