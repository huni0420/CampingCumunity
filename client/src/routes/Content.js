import { useEffect } from "react";
import "./css/Content.css"
import Nav from '../components/Nav/MainNav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'
import { useLocation } from 'react-router-dom';

export default function MainContent() {

    const location = useLocation();
    const nic = location.state.nic;

    return (
        <>
        <div className="CampingContentBg">
            <div className="nav">
                    <Nav nic={nic} />
                    <ToMyPage nic= { nic } />
            </div>
            <div className="CampingContent">
                    <h1>캠핑관련 글들</h1>
            </div>
        </div>
        </>
    );
}