import './css/MyPage.css'

import Nav from '../components/Nav/MyPageNav/MyPageNav'
import NavConnectionConfirm from '../components/Nav/NavConnectionConfirm'
import BoardList from '../components/Main/MainBoardList/BoardList'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function MyPage() {
    const location = useLocation();
    const nic = location.state.nic;
    console.log(nic);

    const [ myBoardApi, setMyBoard ] = useState([])
    useEffect(() => {
        fetch(`/api/myboard?nicname=${nic}`)
        .then((res)=> res.json())
        .then((data)=> {
            setMyBoard(data)
        });
    },[]);

    return (
        <>
        <div className='myPageBg'>
            <div className="nav">
                <Nav nic = { nic } />
                <NavConnectionConfirm nic= { nic } />
            </div>
            <div className="main">
                <section className="articleList">
                    {myBoardApi ? myBoardApi.map(data =>(
                        <BoardList key={data.id} data={data}/>
                    )):"아직안됨"}
                </section>
            </div>
        </div>
        </>
    );
}