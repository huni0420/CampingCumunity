import Loading from '../components/Login/Loading'
import LoginMain from '../components/Login/LoginMain'
import { useState, useEffect } from 'react';


export default function Login() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    },[])
    return (
        <>
            { loading ? <Loading /> :<LoginMain />}
        </>
    )
}