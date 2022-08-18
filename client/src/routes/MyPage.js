import './css/MyPage.css'

import Nav from '../components/Nav/MyPageNav'
import NavConnectionConfirm from '../components/Nav/NavConnectionConfirm'
import BoardList from '../components/BoardList/BoardList'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function MyPage() {
    const location = useLocation();
    const nic = location.state.nic;
    //console.log(nic);

    const [ myBoardApi, setMyBoard ] = useState([])
    useEffect(() => {
        axios.get(`/api/board?nicname=${nic}`)
        .then((res)=> setMyBoard(res.data))
    },[]);

    return (
        <div className='meta-bg'>
            <div className="nav">
                <Nav nic = { nic } />
                <NavConnectionConfirm nic= { nic } />
            </div>
            <div className="my-board">
                <section className="articleList">
                    {myBoardApi.length === 0 ? "작성한 글이 없습니다."
                    :(myBoardApi ? myBoardApi.map(board =>(
                        <BoardList key={board.boardnum} data={board}/>
                    )):"아직안됨")}
                </section>
            </div>
        </div>
    );
}