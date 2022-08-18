import './css/MainNav.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Hamburger from 'hamburger-react'
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
    //const navigate = useNavigate()
    
    //const moveMain = () => {
    //    navigate('/Main',
    //    {
    //        state: {
    //            nic: props.nic
    //        }
    //    })    
    //}
    //const moveBoard = (nic) => {
    //    navigate('/Board',
    //    {
    //        state: {
    //            nic: props.nic
    //        }
    //    })    
    //}
    //const moveYoutube = (nic) => {
    //    navigate('/Youtube',
    //    {
    //        state: {
    //            nic: props.nic
    //        }
    //    })    
    //}
    //const moveContent = (nic) => {
    //    navigate('/Content',
    //    {
    //        state: {
    //            nic: props.nic
    //        }
    //    })    
    //}

    //window.history.forward();
    //const logout = () => {
    //    document.location.href='/LoginMain'
    //}

    //const innerHamberger = useRef(null)
    //const outterHamberger = useRef(null)
    //window.onresize = () => {
    //    if(window.innerWidth<=1400)
    //    {
    //        outterHamberger.current.style = 'visibility: visible'
    //        innerHamberger.current.style = 'visibility: visible'
    //        if(isOpen===true){
    //            menuRef.current.style = 'display: fixed'
    //        }else{
    //            menuRef.current.style = 'display: none;'
    //        }
    //    }
    //    else
    //    {
    //        outterHamberger.current.style = 'visibility: hidden'
    //        innerHamberger.current.style = 'visibility: hidden'
    //        menuRef.current.style = 'display: fixed'
    //        menuRef.current.style = 'height: 600px'
    //        menuRef.current.style = 'width: 348px'
    //    }
    //}
    //// useRef로 ul태그의 style을 조절할 수 있게 만듦
    //// hamberger api를 통해 isOpen의 
    //const [isOpen, setOpen] = useState(false)
    //const menuRef = useRef(null)
    //useEffect(()=>{
    //    if(isOpen===true){
    //        menuRef.current.style = 'display: grid'
    //        if(window.innerWidth<=1400)
    //        {
    //            outterHamberger.current.style = 'visibility: visible'
    //            innerHamberger.current.style = 'visibility: visible'
    //            if(isOpen===true){
    //                menuRef.current.style = 'display: grid'
    //            }else{
    //                menuRef.current.style = 'display: none;'
    //            }
    //        }
    //        else
    //        {
    //            outterHamberger.current.style = 'visibility: hidden'
    //            innerHamberger.current.style = 'visibility: hidden'
    //            menuRef.current.style = 'display: grid'
    //            menuRef.current.style = 'height: 600px'
    //            menuRef.current.style = 'width: 348px'
    //        }
    //    }
    //    else if(isOpen===false){
    //        if(window.innerWidth<=1400)
    //        {
    //            outterHamberger.current.style = 'visibility: visible'
    //            innerHamberger.current.style = 'visibility: visible'
    //            if(isOpen===true){
    //                menuRef.current.style = 'display: fixed'
    //            }else{
    //                menuRef.current.style = 'display: none;'
    //            }
    //        }
    //        else
    //        {
    //            outterHamberger.current.style = 'visibility: hidden'
    //            innerHamberger.current.style = 'visibility: hidden'
    //            menuRef.current.style = 'display: grid'
    //            menuRef.current.style = 'height: 600px'
    //            menuRef.current.style = 'width: 348px'
    //        }
    //    }
    //},[isOpen])
    
    return (
        <Nav>
            <Burger nic = {props.nic} />
            {/*<div ref={outterHamberger}>
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.4}/>
            </div>*/}
            {/*<ul ref={menuRef} > 
                <li className='x-btn' ref={innerHamberger} ><Hamburger toggled={isOpen} toggle={setOpen} color="white" duration={0.4}/></li>
                
                <li onClick={moveMain}>메인</li>
                <li onClick={moveBoard}>유저게시판</li>
                <li onClick={moveContent}>캠핑컨텐츠</li>
                <li onClick={moveYoutube}>캥핑유튜브</li>
                <li onClick={logout}>로그아웃</li>
            </ul>*/}
        </Nav>
    );
}