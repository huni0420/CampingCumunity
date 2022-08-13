import Nav from '../components/Nav/MainNav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'
import './css/Youtube.css'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

export default function MainUtube() {

    const location = useLocation();
    const nic = location.state.nic;

    const [ youtubeApi, setYoutube ] = useState([])

    useEffect(() => {
        const url = '/api/youtube';
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setYoutube({data})
        })
      },[])
    console.log(youtubeApi)
    return (
        <>
        <div className="mainUtubeBg">
            <div className="nav">
                    <Nav nic={nic}/>
                    <ToMyPage nic= { nic } />
            </div>
            {youtubeApi.data ? youtubeApi.data.map((youtube) => {  
                return(
                    youtube.items.map((item)=>{
                    const {id,snippet = {}} = item;
                    const {title, thumbnails ={} } = snippet;
                    const { medium,high = {} } = thumbnails;
                    return(
                    <div key={id} className="mainUtube">
                            <section className="articleList">
                                <li key={id}>
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

//{props.youtubeApi.data ? props.youtubeApi.data.map((youtube) => {  
//    return(
//        youtube.items.map((item)=>{
//            const {id,snippet = {}} = item;
//            const {title, thumbnails ={} } = snippet;
//            const { medium,high = {} } = thumbnails;
//            return(
//            <>
//                <li key={id}>
//                    <a href={`https://www.youtube.com/watch?v=${id.videoId}`}>
//                        <p>
//                            <img width={medium.width} height={medium.height} src={medium.url} alt=""/>
//                        </p>
//                        <h3>{title}</h3>
//                    </a>
//                </li>
//            </>
//            );
//        })
//    );
//}):"아직안됨"};