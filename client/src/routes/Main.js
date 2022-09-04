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
                <div className='main-top'>
                    <h2>여러분의<br/>캠핑을<br/> <pre>'공유'하세요</pre></h2>
                </div>
                <div className='main-center'>
                    {/*<Count />*/}
                </div>
            </div>
        </div>
    ) 
}