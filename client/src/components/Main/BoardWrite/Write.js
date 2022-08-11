import { Link } from 'react-router-dom'
import './Write.css'
import { useState, useEffect } from 'react';
import { post } from 'axios';



export default function Write(){
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
        setTitle('');
        setContent('');
    }

    const addBoard =() =>{
        const url = '/api/boardpost';
        const formData = {
            title: title,
            content: content,
            nicname: 'java'
        }
        //formData.append('title',title);
        //formData.append('content',content);
        //formData.append('nicname','java');
        return post(url, formData);
    }

    return (
        <>
        <div className='WriteBg'>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={changeTitle} name='title' placeholder="제목" className="inputSubject" />
                <textarea rows={20} onChange={changeContent} name='content' placeholder="내용" className="inputContent" />
                <button type='submit'>작성완료</button>
                <div className='submitButton'>
                    {/*<Link to={'/Main/MainBoard'}>*/}
                    {/*</Link>*/}
                    <Link to={'/Main/MainBoard'}>
                        <button type='submit'>취소</button>
                    </Link>    
                </div>
            </form>
        </div>
        </>
    )
}

//value={Content} onChange={contenthandler}