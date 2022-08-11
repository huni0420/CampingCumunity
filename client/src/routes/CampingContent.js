import { useEffect } from "react";
import "./CampingContent.css"
import MainNav from '../components/Main/MainNav'
import ToMyPage from '../components/Main/ToMyPage'

export default function MainContent() {
    return (
        <>
        <div className="CampingContentBg">
            <div className="nav">
                    <MainNav />
                    <ToMyPage />
            </div>
            <div className="CampingContent">
                    <h1>캠핑관련 글들</h1>
            </div>
        </div>
        </>
    );
}