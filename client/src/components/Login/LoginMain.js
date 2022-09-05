import './css/LoginMain.css';

import { useNavigate } from 'react-router-dom';


export default function LoginMain() {
    const googleWithLogin = () =>{
        window.location.href =`https://accounts.google.com/o/oauth2/auth?
                                ${process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                ${process.env.REACT_APP_GOOGLE_REDIRECT_URI}
                                ${process.env.REACT_APP_GOOGLE_RESPONSE_TIPE}
                                ${process.env.REACT_APP_GOOGLE_SCOPE}`
    }

    const kakaoLogin = () => {
        window.location.href =`https://kauth.kakao.com/oauth/authorize?response_type=code&${process.env.REACT_APP_KAKAO_API_KEY}${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
    }
    //console.log(process.env.REACT_APP_KAKAO_API_KEY);
    //console.log(process.env.REACT_APP_KAKAO_REDIRECT_URI);

    const navigate = useNavigate()
    const moveMain = () => { navigate('/Main') }
    
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