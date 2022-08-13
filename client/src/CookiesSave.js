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
    //cookies.save('page2', 'userBoard',
    //            {
    //                path: '/Main',
    //                expires,
    //                //secure: true,
    //                //httpOnly: true
    //            }
    //)
    //cookies.save('page', 'campingContent',
    //            {
    //                path: '/Main',
    //                expires,
    //                //secure: true,
    //                //httpOnly: true
    //            }
    //)
    //cookies.save('page', 'campingYoutube',
    //            {
    //                path: '/Main',
    //                expires,
    //                //secure: true,
    //                //httpOnly: true
    //            }
    //)
}