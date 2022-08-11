import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post() {
    //Link에 파라메터를 덧붙여서 전달하면
    //route에 파라메터의 키값으로 정의해서
    //넘어온 파라메터를 useParams를 사용해서 object로 받는다
    const no = useParams();
    //console.log(no);  // { no : '1'}
    //console.log(no.no); // 1

    const [ post, setPost ] = useState([]);
    useEffect(() => {
        fetch(`/api/post?boardnum=${no.no}`)
        .then((res)=> res.json())
        .then((data)=> {
            setPost(data)
        });
    },[])
    console.log(post);
    return(
        <>
        {post.map(post => {
            return(
                <>
                    <h3>{post.title}</h3>
                    <h3>{post.nicname}</h3>
                    <h3>{post.content}</h3>
                </>
            )
        })}
        <Link to='/'>가자</Link>
        </>
    );
}