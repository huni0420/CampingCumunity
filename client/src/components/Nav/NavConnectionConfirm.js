import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './css/NavConnectionConfirm.css'
export default function ToMyPage() {

    const navigate = useNavigate()
    const reduxState = useSelector((state) => state);

    const moveMyPage = () => { navigate('/MyPage') }

    return (
        <>
            {reduxState.nicname ?
            <div className="login-confirm">
                <div className="login-confirm--text">
                    <p><span className="login-confirm--nic">{reduxState.nicname}</span>님 환영합니다! </p>
                </div>
                <button className="mypage-btn" onClick={moveMyPage}></button>
                {/*myfficial상 내페이지로 가는걸 링크로하고 로그인메인으로 가는걸 네비게이트써야할듯?*/}
            </div>
            :
            <div className="nologin-confirm">
                <p>Camping Cumunity!</p>
                <Link to={'/LoginMain'}>로그인</Link>
            </div>
            }
        </>
    );
}