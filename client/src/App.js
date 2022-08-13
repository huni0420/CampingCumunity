import Login from './routes/Login';
import Join from './routes/Join';
import Main from './routes/Main';
import Youtube from "./routes/Youtube";
import Content from "./routes/Content";
import Board from "./routes/Board";
import MyPage from './routes/MyPage';


import Write from "./components/Main/BoardWrite/Write";
import Post from "./components/Main/MainBoardList/Post";
import LoginMain from './components/Login/LoginMain';
import MyInfo from './components/MyPage/MyInfo'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="LoginMain/*" element={<LoginMain />} />
          <Route path="Join/*" element={<Join />}/>
          <Route path="Main/*" element={<Main />} />
          <Route path="Youtube/*" element={<Youtube />} />
          <Route path="Board/*" element={<Board />} />
          <Route path='Post/:no' element={<Post />} />
          <Route path="Board/Write" element={<Write />}/>
          <Route path="Content/*" element={<Content />} />
          <Route path="MyPage/*" element={<MyPage />}/>
          <Route path="MyInfo/*" element={<MyInfo />}/>
        </Routes>
    </div>
    </Router>
  );
}
      
export default App;
