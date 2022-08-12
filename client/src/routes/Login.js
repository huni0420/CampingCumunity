import Loading from '../components/Login/Loading'
import LoginMain from '../components/Login/LoginMain'
import { useState, useEffect } from 'react';


export default function Login() {
    const [loading, setLoading] = useState(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    console.log(typeof(`https://accounts.google.com/o/oauth2/auth?
    ${process.env.REACT_APP_CLIENT_ID}
    ${process.env.REACT_APP_REDIRECT_URI}
    ${process.env.REACT_APP_RESPONSE_TIPE}
    ${process.env.REACT_APP_SCOPE}`));
    return (
        <div>
            { loading ? <Loading /> :<LoginMain />}
        </div>
    )
}