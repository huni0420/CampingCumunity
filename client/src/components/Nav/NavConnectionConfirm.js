import { Link, useNavigate } from "react-router-dom";

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
            <div>
                <span>환영합니다 </span>
                <button onClick={moveMyPage} ><span>{props.nic}</span></button>님
                <Link to={'/'}>로그아웃</Link>
            </div>
            :
            <div>
                <Link to={'/LoginMain'}>로그인</Link>
            </div>}
        </>
    );
}