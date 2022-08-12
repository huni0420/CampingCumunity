import MainNav from '../components/Main/MainNav'
import ToMyPage from '../components/Main/ToMyPage'
import Write from '../components/Main/BoardWrite/Write'
import './Main.css'
import { Route,Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import {post} from 'axios';

export default function Main() {
    //const [data, setData] = useState([])
    //useEffect(()=>{
    //    googleOauth()
    //    .then((res)=>{ setData({data}) })
    //    .then(console.log(data))
    //},[])
    
    //const googleOauth = () => {
    //    const parsedHash = new new URLSearchParams(window.location.hash.substring(1));
    //    const accessToken = parsedHash.get("access_token");
    //    return post('/oauth/google',{ accessToken })
    //    //const { data } = await Api.post("oauth/google", { accessToken });    
    //}
    //console.log(data);

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