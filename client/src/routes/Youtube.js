import './css/Youtube.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function MainUtube() {

    const location = useLocation();
    const nic = location.state.nic;

    const [ youtubeApi, setYoutube ] = useState([])

    useEffect(() => {
        const url = '/api/youtube';
        axios(url)
        .then((res) => setYoutube(res.data))
      },[])
    //console.log(youtubeApi)
    return (
        <>
        <div className="mainUtubeBg">
            <div className="nav">
                    <Nav nic={nic}/>
                    <ToMyPage nic= { nic } />
            </div>
            {youtubeApi ? youtubeApi.map((youtube) => {  
                return(
                    youtube.items.map((item)=>{
                    const { id, snippet = {}} = item;
                    const { title, thumbnails ={} } = snippet;
                    const { medium,high = {} } = thumbnails;
                    return(
                    <div key={title} className="mainUtube">
                            <section className="articleList">
                                <li>
                                    <a href={`https://www.youtube.com/watch?v=${id.videoId}`}>
                                        <p>
                                            <img width={medium.width} height={medium.height} src={medium.url} alt=""/>
                                        </p>
                                        <h3>{title}</h3>
                                    </a>
                                </li>
                            </section>
                        </div>
                    );
                }));
            }):"아직안됨"}
        </div>
        </>
    );
}