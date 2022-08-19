import './css/MyPage.css'

import Nav from '../components/Nav/MyPageNav'
import NavConnectionConfirm from '../components/Nav/NavConnectionConfirm'
import BoardList from '../components/BoardList/BoardList'

import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'

export default function MyPage() {
    const reduxState = useSelector((state) => state);
    const [ myBoardApi, setMyBoard ] = useState([]);

    useEffect(() => {
        axios.get(`/api/board?nicname=${reduxState.nicname}`)
        .then((res)=> setMyBoard(res.data))
    },[]);

    return (
        <div className='meta-bg'>
            <div className="nav">
                <Nav />
                <NavConnectionConfirm />
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