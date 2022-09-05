import Loading from '../components/Login/Loading'
import LoginMain from '../components/Login/LoginMain'
import { useState } from 'react';


export default function Login() {
    const [loading, setLoading] = useState(true);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    return (
        <div>
            { loading ? <Loading /> :<LoginMain />}
        </div>
    )
}