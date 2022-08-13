import './css/Main.css'

import Nav from '../components/Nav/MainNav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

//import UserBoard from '../routes/Board'
//import CampingContent from '../routes/CampingContent'
//import CampingYoutube from '../routes/Youtube'
//import CookiesSave from '../CookiesSave'

import { useLocation } from 'react-router-dom';
//import cookies from 'react-cookies'

export default function Main() {
    const location = useLocation();
    const nic = location.state.nic;
    console.log(nic);

    return (
    <>
        <div className='mainBg'>
            <div className="nav">
                <Nav nic = { nic } />
                <ToMyPage nic= { nic } />
            </div>
            <div className="main">
                <h1>메인입니다 {nic}</h1>
            </div>
        </div>
    </>
    ) 
}