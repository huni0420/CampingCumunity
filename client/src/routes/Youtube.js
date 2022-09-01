import './css/Youtube.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import { useEffect, useState } from "react";
import axios from 'axios';

export default function MainUtube() {

    const [ youtubeApi, setYoutube ] = useState(false)

    useEffect(() => {
        setDataYoutube();
      },[])

    const setDataYoutube = async () => {
        const url = '/api/youtube';
        const data = await axios(url)
        setYoutube( data.data.items );
    }
    
    //console.log("api",youtubeApi)
    return (
        <div className="meta-bg">
            <div className="nav">
                    <Nav />
                    <ToMyPage />
            </div>
            <div className="mainUtube">
            {Array.isArray(youtubeApi) ? youtubeApi.map((youtube) => { 
                const { id, snippet = {}} = youtube;
                const { title, thumbnails ={} } = snippet;
                const { medium,high = {} } = thumbnails;
                return(
                    <section key={title} className="articleList">
                        <li>
                            <a href={`https://www.youtube.com/watch?v=${id.videoId}`}>
                                <p>
                                    <img width={medium.width} height={medium.height} src={medium.url} alt=""/>
                                </p>
                                <h3>{title}</h3>
                            </a>
                        </li>
                    </section>
                );
            }):"요청중..."}
            </div>
        </div>
    );
}