import './css/Write.css'

import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { post } from 'axios';

export default function Write(){
    const location = useLocation();
    const nic = location.state.nic;

    const navigate = useNavigate()
    const move = () => {

        navigate('/Board',
        {
            state: {
                nic: nic
            }
        })
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //console.log(title);

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
        .then(
            navigate('/Board',
            {
                state: {
                    nic: nic
                }
            })   
        )
    }

    const addBoard = () =>{
        const url = '/api/boardpost';
        const formData = {
            title: title,
            content: content,
            nicname: nic
        }
        return post(url, formData);
    }

    return (
        <>
        <div className='WriteBg'>
            <form className='write-Form' onSubmit={handleFormSubmit}>
                <p>작성자: {nic}</p>
                <input type="text" onChange={changeTitle} name='title' placeholder="제목" className="inputSubject" />
                <textarea rows={20} onChange={changeContent} name='content' placeholder="내용" className="inputContent" />
                <div className='submitButton'>
                <button type='submit'>작성완료</button>
                <button onClick={move} type='button'>취소</button>
                </div>
            </form>
        </div>
        </>
    )
}