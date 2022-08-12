import { Link } from 'react-router-dom';
import './LoginMain.css';

const googleWithLogin = () =>{
    window.location.href =`https://accounts.google.com/o/oauth2/auth?`+
    `${process.env.REACT_APP_CLIENT_ID}`+
    `${process.env.REACT_APP_REDIRECT_URI}`+
    `${process.env.REACT_APP_RESPONSE_TIPE}`+
    `${process.env.REACT_APP_SCOPE}`
    //  +"client_id=1052259056526-0ja5ngaaaf3tqnct1e18pokcunre3f6u.apps.googleusercontent.com&"+
    //  "redirect_uri=http://localhost:3000/Join&"+
    //  "response_type=token&"+
    //  "scope=https://www.googleapis.com/auth/userinfo.email";

    //  https://www.googleapis.com/auth/userinfo.profile
}

  export default function LoginMain() {
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
                        <a href='/'>Sign in with KaKao</a>
                        <Link to={'/Main'}>가입없이 시작하기</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
{/*<input type="text" placeholder='아이디' />
<input type="password" placeholder='비밀번호' />
<button>로그인</button>
<p>회원이 아니신가요? <span><Link to='Join'>회원가입</Link></span></p>
<p><Link to='/Main'>로그인 없이 가즈아</Link></p>*/}