import cookies from 'react-cookies'

export default function CookiesSave() {
    const expires = new Date();

    expires.setFullYear(expires.getFullYear()+1);
    cookies.save('page', 'main',
                {
                    path: '/Main',
                    expires,
                    //secure: true,
                    //httpOnly: true
                }
    )
}