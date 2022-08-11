import { Link } from 'react-router-dom';
import './MainNav.css';

export default function MainNav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/Main'>Home</Link></li>
                    <li><Link to='/Board'>유저게시판</Link></li>
                    <li><Link to='/CampingContent'>캠핑 관련글</Link></li>
                    <li><Link to='/Youtube'>캠핑유튜브</Link></li>
                </ul>
            </nav>
        </>
    );
}