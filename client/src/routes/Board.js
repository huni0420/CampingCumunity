
import MainNav from '../components/Main/MainNav'
import ToMyPage from '../components/Main/ToMyPage'

import './Board.css'
import BoardList from "../components/Main/MainBoardList/BoardList";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function MainBoard() {

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
                    <MainNav />
                    <ToMyPage />
            </div>
            <div className="mainBoard">

                <div className="subHeader">
                    <div className="subHeaderInfo">
                        <a href="">전체<img src=""/></a>
                        <Link to='Write'>
                            <button>글쓰기</button>
                        </Link>
                    </div>
                    <div className="subHeaderSearch">
                        <select name="target" id="subHeaderSearch">
                            <option value="title">제목</option>
                            <option value="username">작성자</option>
                        </select>
                        <input type="text" placeholder="검색" className="subHeaderSearchInput" />
                        <button>검색</button>
                    </div>
                </div>
                <section className="articleList">
                {boardApi ? boardApi.map(data =>(
                    <article className="articleListItem">
                        <div className="articleListItemContent">
                            <div className="articleListItemContentTitle"> 
                                <Link to={`/Post/${data.boardnum}`}>
                                    <span>{data.title}</span>
                                </Link>
                            </div>
                            <div className="articleListItemMeta">
                                <div className="articleListItemMetaTime"><span>8시간전</span></div>
                                <div className="articleListItemMetaUser"><span><a href="">{data.nicname}</a></span></div>
                            </div>
                        </div>
                        <div className="articleListItemThumnail">
                            <img src="" alt="아직없음" />
                        </div>
                    </article>
                )):"아직안됨"}
                </section>
            </div>
        </div>
        </>
    );
}