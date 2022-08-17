import { Link, useNavigate } from "react-router-dom";
import './css/NavConnectionConfirm.css'
export default function ToMyPage( props ) {
    const navigate = useNavigate()
    const moveMyPage = () => {
        navigate('/MyPage',
        {
            state: {
                nic: props.nic
            }
        })
    }
    return (
        <>
            {props.nic ?
            <div className="login-confirm">
                <div className="login-confirm--text">
                    <p><span className="login-confirm--nic">{props.nic}</span>님 환영합니다! </p>
                </div>
                <button className="mypage-btn" onClick={moveMyPage}></button>
            </div>
            :
            <div>
                <Link to={'/LoginMain'}>로그인</Link>
            </div>
            }
        </>
    );
}