import Login from './routes/Login';
import Join from './routes/Join';
import JoinKakao from './routes/JoinKakao';
import Main from './routes/Main';
import Youtube from "./routes/Youtube";
import Content from "./routes/Content";
import Board from "./routes/Board";
import MyPage from './routes/MyPage';
import MyInfo from './routes/MyInfo'
import Write from "./routes/Write";
import Post from "./routes/Post";

import CreateNic from './components/Join/CreateNic';
import LoginMain from './components/Login/LoginMain';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="LoginMain/*" element={<LoginMain />} />
          <Route path="Join/*" element={<Join />}/>
          <Route path="JoinKakao/*" element={<JoinKakao />}/>
          <Route path='CreateNic/*' element={<CreateNic />} />
          <Route path="Main/*" element={<Main />} />
          <Route path="Youtube/*" element={<Youtube />} />
          <Route path="Board/*" element={<Board />} />
          <Route path='Post/:no' element={<Post />} />
          <Route path="Write/*" element={<Write />}/>
          <Route path="Content/*" element={<Content />} />
          <Route path="MyPage/*" element={<MyPage />}/>
          <Route path="MyInfo/*" element={<MyInfo />}/>
        </Routes>
    </div>
  );
}
      
export default App;