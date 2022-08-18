import { useNavigate } from 'react-router-dom';
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
    
    const moveMain = () => {
        navigate('/Main',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveBoard = (nic) => {
        navigate('/Board',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveYoutube = (nic) => {
        navigate('/Youtube',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveContent = (nic) => {
        navigate('/Content',
        {
            state: {
                nic: props.nic
            }
        })    
    }

    window.history.forward();
    const logout = () => {
        document.location.href='/LoginMain'
    }

    return(
        <Ul open = {props.open} >
            <li onClick={moveMain}>메인</li>
            <li onClick={moveBoard}>유저게시판</li>
            <li onClick={moveContent}>캠핑컨텐츠</li>
            <li onClick={moveYoutube}>캥핑유튜브</li>
            {props.nic ? <li onClick={logout}>로그아웃</li> : ""}
        </Ul>
    );
}