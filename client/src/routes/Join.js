import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Join() {        
    const [data, setData] = useState({})
    useEffect(()=>{
        googleOauth()
        .then(res => setData(res))//setData(res)
        //.then((data) => console.log("dd",data))
    },[]);
    
    const googleOauth = async () => {
        const parsedHash = window.location.hash.substring(1);        
        const accessToken = parsedHash.split('&')[0].split('=')[1];
        //
        //response값이 object형식으로 받아져와 data로 받으면 object그대로 받고
        //{data}라고하면 object안의 data:{}를 가져와서 쓸수있다
        const { data } = await axios.post('/oauth/google',{ accessToken });
        //

        return data
    }
    
    return (
        <>
          { data ? <h1>{data.email}</h1> : "join"}
        </>
    );
}