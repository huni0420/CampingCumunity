import MainNav from '../components/Main/MainNav'
import ToMyPage from '../components/Main/ToMyPage'
import Write from '../components/Main/BoardWrite/Write'
import './Main.css'
import { Route,Routes } from "react-router-dom";

export default function Main() {
    return (
        <>
            <div className='mainBg'>
                <div className="nav">
                    {/*<button className='navBtn'></button>*/}
                    <MainNav />
                    <ToMyPage />
                </div>
                <div className="main">
                    <h1>메인화면입니다</h1>
                </div>
            </div>
        </>
    );
}