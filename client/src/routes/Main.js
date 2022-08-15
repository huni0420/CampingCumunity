import './css/Main.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import { useLocation } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    const nic = location.state.nic;

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