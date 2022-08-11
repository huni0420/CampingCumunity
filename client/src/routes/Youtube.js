import MainNav from '../components/Main/MainNav'
import ToMyPage from '../components/Main/ToMyPage'
import './Youtube.css'
import { useEffect, useState } from "react";

export default function MainUtube() {
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
                    {/*<button className='navBtn'></button>*/}
                    <MainNav />
                    <ToMyPage />
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