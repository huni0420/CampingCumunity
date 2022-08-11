import { Link } from 'react-router-dom'
import './Write.css'
import { useState, useEffect } from 'react';




export default function Write(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const changeValue = (e) => {
        setTitle(e.target.value)
        setContent(e.target.value)
    }

    return (
        <>
        <div className='WriteBg'>
            <form>
                <input type="text" onChange={changeValue} name='title' placeholder="제목" className="inputSubject" />
                <textarea rows={20} onChange={changeValue} name='content' placeholder="내용" className="inputContent" />
                <button type='submit'>작성완료</button>
                <div className='submitButton'>
                    {/*<Link to={'/Main/MainBoard'}>*/}
                    {/*</Link>*/}
                    <Link to={'/Main/MainBoard'}><button>취소</button></Link>    
                </div>
            </form>
        </div>
        </>
    )
}

//value={Content} onChange={contenthandler}