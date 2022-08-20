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
    const reduxState = useSelector((state)=>state)

    // 얘땜에 이틀 고생함 ㅅㅂ진짜 개새끼 내가 이딴코드를 왜짯는지 화가날지경,
    // 이거를 Nav바에 걸어버리니 그냥 싹다 막혀서 페이지 이동하고나서 뒤로가기가 안되는 지경에 이르르러서
    // 이틀밤낮을 찾아헤매는데 왜 안되는지 안나와서 시발 내가진자 화가나려고한다, 진짜 이거 죽여버리고싶은 코드다!~!~ㅜㅏ링뉘ㅏ후ㅏㅣㄹ누힌믛ㅇㄴ
    // 이거쓰면 페이지 이동후 뒤로가기 막힘
    //window.history.forward();

    const logout = () => {document.location.href='/LoginMain'}

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