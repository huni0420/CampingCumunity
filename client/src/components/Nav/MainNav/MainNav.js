//import { Link } from 'react-router-dom';
import './MainNav.css';
import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

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
    return (
        <>
            <nav>
                <ul>
                    {/*<li><button onClick={props.main}>메인</button></li>
                    <li><button onClick={props.board}>유저게시판</button></li>
                    <li><button onClick={props.content}>캠핑컨텐츠</button></li>
                    <li><button onClick={props.youtube}>캠핑유튜브</button></li>
                    //
                    <Link to={'/Main'}>메인</Link>
                    <Link to={'/Board'}>게시판</Link>
                    <Link to={'/Content'}>컨텐츠</Link>
                    <Link to={'/Youtube'}>유튜브</Link>*/}
                    <li><button onClick={moveMain}>메인</button></li>
                    <li><button onClick={moveBoard}>유저게시판</button></li>
                    <li><button onClick={moveContent}>캠핑컨텐츠</button></li>
                    <li><button onClick={moveYoutube}>캠핑유튜브</button></li>
                </ul>
            </nav>
        </>
    );
}