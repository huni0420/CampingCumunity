//import { Link } from 'react-router-dom';
import './MyPageNav.css';

import { useNavigate } from 'react-router-dom';

export default function MainNav( props ) {
    const navigate = useNavigate()
    
    const moveMyPage = () => {
        navigate('/MyPage',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveMyInfo = (nic) => {
        navigate('/MyInfo',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    return (
        <>
            <nav>
                <ul>
                    <li><button onClick={moveMyPage}>MyContent</button></li>
                    <li><button onClick={moveMyInfo}>MyInfo</button></li>
                </ul>
            </nav>
        </>
    );
}