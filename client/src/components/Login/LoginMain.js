import './css/LoginMain.css';

import { useNavigate, useHistory } from 'react-router-dom';
import { useEffect } from 'react';


const googleWithLogin = () =>{
    window.location.href =`https://accounts.google.com/o/oauth2/auth?`+
    `${process.env.REACT_APP_CLIENT_ID}`+
    `${process.env.REACT_APP_REDIRECT_URI}`+
    `${process.env.REACT_APP_RESPONSE_TIPE}`+
    `${process.env.REACT_APP_SCOPE}`
}

export default function LoginMain() {
    const navigate = useNavigate()

    const moveMain = () => {
        navigate('/Main',
        {
            state: {
                nic: ''
            }
        })
    }
    
    const kakaoLogin = () => {
        alert('아직 구현중에 있습니다.')
    }

    return (
        <>
            <div className='loginBg'>
                <div className='login'>
                    <h1>Login</h1>
                    <div className='line'></div>
                    <div className='loginDescription'>
                        <h3>캠핑커뮤니티 로그인 하기</h3>
                        <p>캠핑을 즐기는 여러분, 지금 함께 하세요</p>
                    </div>
                    <div className='loginBtn'>
                        <button onClick={googleWithLogin} >Sign in with Google</button>
                        <button onClick={kakaoLogin}>Sign in with KaKao</button>
                        <button onClick={moveMain}>로그인없이 시작하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}