import { useState } from "react";
import {post} from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateNic() {

    //console.log(reduxState);//계속 찍힘 해결 해야함
    const reduxState = useSelector((state)=>state)
    const [nicname, setNicname] = useState('');

    const changeNicname = (e) => {
        e.preventDefault();
        setNicname(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addMember()
        //.then((res) => {
        //    //console.log(res.data)
        //})
        .then(moveToLogin)
    }

    const addMember = () =>{
        const url = '/api/createnicname';
        const formData = {
            nicname: nicname,
            email: reduxState.email
        }
        return post(url, formData);
    }

    const moveToLogin = () =>{
        document.location.href = '/'
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={changeNicname} name='nicname' placeholder="닉네임" className="inputNicname" />
                <button type='submit'>작성완료</button>        
            </form>
            <h1>CreateNic { reduxState.email }</h1>
        </>
    );
}