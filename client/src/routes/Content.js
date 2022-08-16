import "./css/Content.css"

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainContent() {

    const location = useLocation();
    const nic = location.state.nic;

    const [blogContent, setBlogContent] = useState([]);

    //useEffect(()=>{
    //    SearchBlog()
    //    .then(res => setBlogContent(res))
    //})

    //const SearchBlog = async () => {
    //    const {data:{items}} = await axios.get('/v1/search/blog',{
    //        params:{
    //          query: '캠핑',
    //          display: 
    //        },
    //        headers: {
    //          'X-Naver-Client-Id': process.env.REACT_APP_NAVER_ID_KEY,
    //          'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET_KEY
    //        }
    //    });
    //    return items
    //}

    return (
        <>
        <div className="meta-bg">
            <div className="nav">
                    <Nav nic={nic} />
                    <ToMyPage nic= { nic } />
            </div>
            <div className="CampingContent">
                {blogContent ? blogContent.map((content) => {
                    // SUMMARY:
                    // 네이버에서 검색API로 가져온 data중 title에는 검색query로 검색되는 부분에 <b></b>가 붙어서 온다
                    // <b></b>를 지우기 위해 replace와 정규식을 사용해서 이 부분을 삭제하는 과정이 필요하다
                    // 
                    // WAY:
                    // 삭제할 string 부분을 //g로 감싼다
                    // g로 감싼 부분의 string을 모두 replace의 두번째 paramater로 바꾼다
                    //  
                    // ect:
                    // &amp;는 왜 붙는지 모르겠지만 같이 붙어와서 삭제해주었다.
                    //
                    let title = (((content.title).replace(/<b>/g,'')).replace(/<\/b>/g,'')).replace(/&amp;/g,'')
                    return(
                        <div key={title}>
                            {title}
                            <a href={content.link}>{content.link}</a>
                        </div>
                    )
                }):"Loading..."}
            </div>
        </div>
        </>
    );
}