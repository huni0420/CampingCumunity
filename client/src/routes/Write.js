import './css/Write.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { post } from 'axios';
import { useSelector } from 'react-redux';

export default function Write(){

    const reduxState = useSelector((state)=>state.user);
    const navigate = useNavigate();

    const move = () => {
        navigate('/Board')
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }
    const changeContent= (e) => {
        e.preventDefault();
        setContent(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addBoard()
        .then((res) => {
            console.log(res.data)
        })
    }

    const addBoard = () =>{
        const url = '/api/boardpost';
        const formData = {
            title: title,
            content: content,
            nicname: reduxState.nicname
        }
        return post(url, formData);
    }

    return (
        <>
        <div className='WriteBg'>
            <form className='write-Form' onSubmit={handleFormSubmit}>
                <p>작성자: {reduxState.nicname}</p>
                <input type="text" onChange={changeTitle} name='title' placeholder="제목" className="inputSubject" />
                <textarea rows={20} onChange={changeContent} name='content' placeholder="내용" className="inputContent" />
                <div className='submitButton'>
                <button type='submit'>작성완료</button>
                <button onClick={move} type='button'>취소</button>
                {/*<Link to="/Board">취소</Link>*/}
                </div>
            </form>
        </div>
        </>
    )
}