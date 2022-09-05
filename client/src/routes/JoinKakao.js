import axios from 'axios';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export default function JoinGoogle() {    
    const navigate = useNavigate()
    const moveMain = () => { navigate('/Main') }
    const moveCreateNic = () => { navigate('/CreateNic') }

    const reduxState = useSelector( (state) => state.user )    
    
    const dispatch = useDispatch();

    // 카카오서버에서 받은 인가코드를 uri로 받은다음 인가코드로 카카오 api서버에 요청해서
    // access_token을 받아온다
    // access 토큰을 백엔드로 보내서 백에서 로그인 유저정보를 받아온다음 데이터 베이스와 비교해서
    // 없은 가입자라면 nicname생성 창으로, 존재하는 유저라면 main으로 보내준다.
    const uri = document.location.href;
    const code = uri.split('?')[1].split('=')[1];
    useEffect(()=>{
        if (code !== undefined) {
            requestToken(code)
              .then(({ data }) => {
                kakaoOauth(data.access_token) //access토큰을 가지고 sever로가서 카카오에 유저정보요청
                .then(({data}) => {
                    dispatch({ type: 'onCheck', payload: { nicname: data[0].nicname , email: data[0].email } }) // 가져온 유저정보에서 id값과 그에 맞는 닉네임을 reducer 저장
                });
              })
              .catch(err => {
                console.error('requestToken:', err)
              })
          }
        return;
    },[]);
    
    const requestToken = (code) => {
        const JS_APP_KEY = `${process.env.REACT_APP_KAKAO_API_KEY2}`;
        const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI2}`;
        const makeFormData = params => {
          const searchParams = new URLSearchParams()
          Object.keys(params).forEach(key => {
            searchParams.append(key, params[key])
          })
      
          return searchParams
        }
      
        return axios({   
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          url: 'https://kauth.kakao.com/oauth/token',
          data: makeFormData({
            grant_type: 'authorization_code',
            client_id: JS_APP_KEY,
            redirect_uri: REDIRECT_URI,
            client_secret: `${process.env.REACT_APP_KAKAO_CLIENT_SECRET}`,
            code,
          })
        })
      }
    const kakaoOauth = (accessToken) => {
        console.log(accessToken)
        return axios.post('/api/oauth/kakao',{ accessToken })
    }


    console.log(reduxState.nicname);
    if(reduxState.nicname === undefined){
        moveCreateNic();
    }else{
        moveMain();
    }
}