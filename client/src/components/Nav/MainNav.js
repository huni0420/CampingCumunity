import './css/MainNav.css';

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
    const moveBoard = (nic) => {
        navigate('/Board',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveYoutube = (nic) => {
        navigate('/Youtube',
        {
            state: {
                nic: props.nic
            }
        })    
    }
    const moveContent = (nic) => {
        navigate('/Content',
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
                    <li><button onClick={moveMain}>메인</button></li>
                    <li><button onClick={moveBoard}>유저게시판</button></li>
                    <li><button onClick={moveContent}>캠핑컨텐츠</button></li>
                    <li><button onClick={moveYoutube}>캠핑유튜브</button></li>
                </ul>
            </nav>
        </>
    );
}