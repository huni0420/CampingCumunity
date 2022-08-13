
import Nav from '../components/Nav/MainNav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import './css/Board.css'
import BoardList from "../components/Main/MainBoardList/BoardList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function MainBoard() {
    const location = useLocation();
    const navigate = useNavigate()
    
    const nic = location.state.nic;
    
    const moveWrite = () => {
        if(nic==='')
            alert('가입후 이용해 주세요!')
        else
        navigate('/Board/Write',
        {
            state: {
                nic: nic
            }
        })    
    }

    const [ boardApi, setBoard ] = useState([])

    useEffect(() => {
        const url = '/api/board'
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setBoard(data);
        })
    },[]);
    
    //console.log(boardApi[0].boardnum)
    return (
        <>
        <div className="mainBoardBg">
            <div className="nav">
                    {/*<button className='navBtn'></button>*/}
                    <Nav nic= { nic } />
                    <ToMyPage nic= { nic }/>
            </div>
            <div className="mainBoard">

                <div className="subHeader">
                    <div className="subHeaderInfo">
                        <a href="">전체<img src=""/></a>
                        {/*<Link to='Write'>*/}
                            <button onClick={moveWrite}>글쓰기</button>
                        {/*</Link>*/}
                    </div>
                    <div className="subHeaderSearch">
                        <select name="target" id="subHeaderSearch">
                            <option value="title">제목</option>
                            <option value="nicname">작성자</option>
                        </select>
                        <input type="text" placeholder="검색" className="subHeaderSearchInput" />
                        <button type='sumit'>검색</button>
                    </div>
                </div>
                <section className="articleList">
                {boardApi ? boardApi.map(data =>(
                    <BoardList key={data.id} data={data}/>
                )):"아직안됨"}
                </section>
            </div>
        </div>
        </>
    );
}