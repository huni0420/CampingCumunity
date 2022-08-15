import CreateNic from '../components/Join/CreateNic'

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {        
    const [data, setData] = useState({})
    const [num, setNum] =useState({})
    const navigate = useNavigate()

    const move = () => {
        navigate('/Main',
        {
            state: {
                nic: num[0]
            }
        })    
    }

    // server에서 받아온 유저정보를 data에 담기
    useEffect(()=>{
        googleOauth()
        .then(res => setData(res))
    },[]);

    useEffect(()=>{
        checkMember()
        .then((res) => setNum(res.data))
    },[data])
    

    // 구글로그인을 하면 access_token을 받아와서 server에 token을 전달
    // server에서 토큰으로 로그인한 정보를 받아오는 처리를 하고 {data}에 구글로그인 정보를 받음
    const googleOauth = async () => {
        const parsedHash = window.location.hash.substring(1);        
        const accessToken = parsedHash.split('&')[0].split('=')[1];

        // response값이 object형식으로 받아져와 data로 받으면 object그대로 받고
        // {data}라고하면 object안의 data:{}를 가져와서 쓸수있다
        const { data } = await axios.post('/api/oauth/google',{ accessToken });

        return data
    }

    const checkMember = async () => {
        const checknum = await axios.post('/api/check_id', { email: data.email });

        return checknum;
    }
    console.log(num[1]);
    return (
        <>
          { num[1] ? move() : setTimeout((<CreateNic email={data.email}/>),200)}
        </>
    );
}