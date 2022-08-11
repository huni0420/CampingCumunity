import { Link } from 'react-router-dom';
import './LoginMain.css';

export default function LoginMain() {
    return (
        <>
        <div className='loginMain-bg'>
            <input type="text" placeholder='아이디' />
            <input type="password" placeholder='비밀번호' />
            <button>로그인</button>
            <p>회원이 아니신가요? <span><Link to='Join'>회원가입</Link></span></p>
            <p><Link to='/Main'>로그인 없이 가즈아</Link></p>
        </div>
        </>
    );
}