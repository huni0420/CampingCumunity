import Customer from './components/Customer';

import Login from './routes/Login';
import Join from './routes/Join';
import Main from './routes/Main';
import Youtube from "./routes/Youtube";
import CampingContent from "./routes/CampingContent";
import Board from "./routes/Board";
import MyPage from './routes/MyPage';


import Write from "./components/Main/BoardWrite/Write";
import Post from "./components/Main/MainBoardList/Post";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
function App() {
  //const [ board, setBoard ] = useState({})

  //useEffect(() => {
  //    const url = '/api/board'
  //    fetch(url)
  //    .then((res) => res.json())
  //    .then((data) => {
  //      setBoard({data})
  //    })
  //},[]);
  
  //console.log(board.data)//3번씩 찍힘 이거 해결해야됨 2022.08.10
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="Join/*" element={<Join />}/>
          <Route path="Main/*" element={<Main />} />
          <Route path="Youtube/*" element={<Youtube />} />
          <Route path="MyPage/*" element={<MyPage />}/>
          <Route path="Board/*" element={<Board />} />
          <Route path='Post/:no' element={<Post />} />
          <Route path="CampingContent/*" element={<CampingContent />} />
          <Route path="Board/Write" element={<Write />}/>
        </Routes>
    </div>
    </Router>
  );
}
      
export default App;
