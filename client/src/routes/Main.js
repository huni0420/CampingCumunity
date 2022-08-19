import './css/Main.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

export default function Main() {

    return (
        <div className='meta-bg'>
            <div className="nav">
                <Nav />   
                <ToMyPage />
            </div>
            <div className="main">
                <h1>메인입니다 </h1>
            </div>
        </div>
    ) 
}