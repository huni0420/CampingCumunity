import './css/MyPageNav.css';

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import axios from 'axios';

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

    const [isOpen, setOpen] = useState(false)
    const menuRef = useRef(null)
    useEffect(()=>{
        if(isOpen===true){
            menuRef.current.style = 'display: fixed'
        }else{
            menuRef.current.style ='display: none;'
        }
    },[isOpen])
    return (
        <>
            <nav><Hamburger toggled={isOpen} toggle={setOpen} duration={0.4}/>
                <ul ref={menuRef}>
                    <li className='x-btn'><Hamburger toggled={isOpen} toggle={setOpen} color="white" duration={0.4}/></li>
                    <li><button onClick={moveMain}>Main</button></li>
                    <li><button onClick={moveMyPage}>MyContent</button></li>
                    <li><button onClick={moveMyInfo}>MyInfo</button></li>
                    <li><button onClick={withdrawal}>회원탈퇴</button></li>
                </ul>
            </nav>
        </>
    );
}