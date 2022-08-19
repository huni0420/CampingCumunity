import './css/Main.css'

import Nav from '../components/Nav/MainNav'
import ToMyPage from '../components/Nav/NavConnectionConfirm'

import { useDispatch, useSelector } from 'react-redux';


export default function Main() {

    //const nicRedux = useSelector( (state) => state )
    //console.log(nicRedux);

    return (
        <div className='meta-bg'>
            <div className="nav">
                <Nav />   
                <ToMyPage />
            </div>
            <div className="main">
                <h1>메인입니다 </h1>
                {/*<button onClick={()=>{ console.log(nicRedux.email)}}>버튼</button>*/}
            </div>
        </div>
    ) 
}