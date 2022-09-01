import CreateNic from '../components/Join/CreateNic'
import axios from 'axios';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export default function Join() {    
    const navigate = useNavigate()
    const moveMain = () => { navigate('/Main') }
    const moveCreateNic = () => { navigate('/CreateNic') }

    const reduxState = useSelector( (state) => state.user )    
    
    const dispatch = useDispatch();
    
    

    // server에서 받아온 유저정보를 data에 담기
    useEffect(()=>{
        googleOauth()
        .then(res => res.data)
        .then(data => dispatch({ type: 'onCheck', payload: { nicname: data[0].nicname , email: data[0].email } }));
            //console.log(data[0].nicname)) // ex) nicname: 'afdfd'
        return;
    },[]);

    // 구글로그인을 하면 access_token을 받아와서 server에 token을 전달
    // server에서 토큰으로 로그인한 정보를 받아오는 처리를 하고 {data}에 구글로그인 정보를 받음
    const googleOauth = async () => {
        const parsedHash = window.location.hash.substring(1);        
        const accessToken = parsedHash.split('&')[0].split('=')[1];

        return await axios.post('/api/oauth/google',{ accessToken });
    }

    //const checkMember = async () => {
    //    return await axios.post('/api/check_id', { email: googleData });
    //}
    

    if(reduxState.nicname === undefined){
        //<button onClick={()=>{moveCreateNic()}}></button>
        moveCreateNic();
    }else{
        //<button onClick={()=>{moveMain()}}></button>
        moveMain();
    }
}