import { useState } from "react";
import {post} from "axios";

export default function CreateNic( props ) {
    const [nicname, setNicname] = useState('');

    const changeNicname = (e) => {
        e.preventDefault();
        setNicname(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addMember()
        .then((res) => {
            //console.log(res.data)
        })
        .then(setNicname(''))
        .then(moveToLogin)
    }
    
    const moveToLogin = () =>{
        document.location.href = '/'
    }

    const addMember = () =>{
        const url = '/api/createnicname';
        const formData = {
            nicname: nicname,
            email: props.email
        }
        return post(url, formData);
    }
    console.log(props.email)
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" onChange={changeNicname} name='nicname' placeholder="닉네임" className="inputNicname" />
            <button type='submit'>작성완료</button>        
        </form>
            <h1>CreateNic {props.email}</h1>
        </>
    );
}