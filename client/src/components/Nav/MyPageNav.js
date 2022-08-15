import './css/MyPageNav.css';

import { useNavigate } from 'react-router-dom';

export default function MainNav( props ) {
    const navigate = useNavigate()
    const moveMain = () => {
        navigate('/Main',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveMyPage = () => {
        navigate('/MyPage',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveMyInfo = () => {
        navigate('/MyInfo',
        {
            state: {
                nic: props.nic
            }
        })    
    }

    const withdrawal = () =>{
        const url = '/api/delete'
        
    }

    return (
        <>
            <nav>
                <ul>
                    <li><button onClick={moveMain}>Main</button></li>
                    <li><button onClick={moveMyPage}>MyContent</button></li>
                    <li><button onClick={moveMyInfo}>MyInfo</button></li>
                    <li><button onClick={withdrawal}></button>회원탈퇴</li>
                </ul>
            </nav>
        </>
    );
}