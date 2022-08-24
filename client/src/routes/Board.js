import './css/Board.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'
import BoardList from "../components/BoardList/BoardList";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';  
import axios from 'axios';


export default function MainBoard() {

    const reduxState = useSelector((state)=>state.user);
    const navigate = useNavigate()
    const location = useLocation();
    
    // write버튼 클릭시 미가입회원은 write페이지 못들어가게 막기
    const moveWrite = () => {
        if(reduxState.nicname === undefined )
            alert('가입후 이용해 주세요!')
        else
            navigate('/Write')    
    }

    // pageNation 구현부
    const [pageNum, setPageNum] = useState(0);
    const [firstPageNumber, setFirstPageNumber] = useState(0)
    const [LastPageNumber, setLastPageNumber] = useState(10);
    const page = (e) => {
        setPageNum(e.target.value)
    }
    useEffect(()=>{
        const first = pageNum*10;
        const last = first+10;
        setFirstPageNumber(first);
        setLastPageNumber(last);
    },[pageNum])

    //select의 선택된 옵션값의 value를 가져옴
    const [selected, setSelected] = useState('title');
    const selectValue = (e) => {
        setSelected(e.target.value);
    }

    //검색할 내용 가져옴
    const [search, setSearch] = useState('');
    const searchText = (e) => {
        setSearch(e.target.value)
    }

    //검색버튼을 눌러 검색내용을 불러올 useEfeect를 호출
    const [onSearch, setOnSearch] = useState(true);
    const searchStart =() =>{
        if(onSearch==true)
            setOnSearch(false)
        if(onSearch==false)
            setOnSearch(true)
    }
    
    //게시판의 내용을 server로 요청
    const [ boardApi, setBoard ] = useState([])
    useEffect( ()=>{
        const url = `/api/board?${selected}=${search}`
        
        axios.get(url)
        .then((res)=> setBoard(res.data))
        //검색후 page를 1번으로 돌려놓음
        .then(setPageNum(0))
    },[onSearch])

    // pagenation page개수 구현
    const render = () => {
        const pageBtn = []
        for( let i = 0; i<boardApi.length/10; i++) {
            pageBtn.push(i);
        }
        return pageBtn;
    }
    const p = render();
    return (
        <div className="meta-bg">
            <div className="nav">
                <Nav />
                <ToMyPage />
            </div>
            <div className="board">
                <div className="board__content">
                    <div className="board__write">
                        <p>전체 글</p>
                        <span></span>
                        {/*<Link to="/Write">글쓰기</Link>*/}
                        <button onClick={moveWrite}></button>
                    </div>
                    <div className="board__search-content">
                        <select onChange={selectValue} >  {/*id="subHeaderSearch"*/}
                            <option value="title">제목</option>
                            <option value="nicname">작성자</option>
                        </select>
                        <input onChange={searchText} type="text" placeholder="검색" />
                        <button onClick={searchStart}></button>
                    </div>
                </div>
                <section className="board__list">
                    { boardApi ? boardApi.reverse().map(board =>( 
                        <BoardList key={board.boardnum} data={board}/>
                    )).slice(firstPageNumber,LastPageNumber) :"아직안됨" }
                    <div className='page-btn'>
                        <button>&lt;</button>
                        {render().map(pageNationBtn => 
                            <button key={ pageNationBtn } type='button' onClick={page} value={pageNationBtn} >{pageNationBtn+1}</button>
                        )}
                        <button>&gt;</button>
                    </div>
                </section>
            </div>
        </div>
    );
}
//onClick={ pageNationPrev }
//onClick={ pageNationNext }