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

    const reduxState = useSelector((state)=>state)

    window.history.forward();
    const logout = () => {
        document.location.href='/LoginMain'
    }
    const navigate = useNavigate()

    return(
        <Ul open = {props.open} >
            <Link to=''></Link>
            <li><Link to='/Main'>메인</Link></li>
            <li><Link to='/Board'>유저게시판</Link></li>
            <li><Link to='/Content'>캠핑컨텐츠</Link></li>
            <li><Link to='/Youtube'>캥핑유튜브</Link></li>
            {reduxState.nicname ? <li onClick={logout}>로그아웃</li> : ""}
        </Ul>
    );
}