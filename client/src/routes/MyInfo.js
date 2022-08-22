import './css/MyInfo.css'

import Nav from '../components/Nav/MyPageNav'
import NavConnectionConfirm from '../components/Nav/NavConnectionConfirm'

import { useState } from 'react';
import { post } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MyInfo() {
    const reduxState = useSelector((state) => state.user);
    const [newNicname, setNewNicname] = useState('');

    const changeNicname = (e) => {
        e.preventDefault();
        setNewNicname(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(newNicname=='')
            alert('변경할 닉네임을 입력해주세요')
        else{
            changeNic()
            .then((res) => {
                console.log(res.data)
            })
        }
    }
        
    const changeNic = () =>{
        const url = '/api/updatenicname';
        const formData = {
            nicname: reduxState.nicname,
            newNicname: newNicname
        }
        return post(url, formData);
    }

    return (
        <div className='meta-bg'>
            <div className="nav">
                <Nav />
                <NavConnectionConfirm />
            </div>
            <div className='infoChange'>
                <h3>현재회원 닉네임: {reduxState.nicname}</h3>
                <form className='info-form' onSubmit={handleFormSubmit}>
                    <input type="text" onChange={changeNicname} name='newNicname' id='newNicname' placeholder="새로운 닉네임을 입력해주세요" className="inputSubject" />
                    <button type='submit'>닉네임 변경하기</button>
                </form>
            </div>
        </div>
    );
}