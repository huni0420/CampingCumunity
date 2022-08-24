import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import './css/Post.css'

export default function Post() {
    const reduxState = useSelector((state) => state.user);
    //Link에 파라메터를 덧붙여서 전달하면
    //route에 파라메터의 키값으로 정의해서
    //넘어온 파라메터를 useParams를 사용해서 object로 받는다
    const no = useParams();
    //console.log(no);  // { no : '1'}
    //console.log(no.no); // 1


    const [ post, setPost ] = useState([]);
    //const [ postView, setPostView] = useState(post.boardview);
    const [ reply, setReply ] = useState([]);
    useEffect(async () => {
        const boardnum = no.no
        await axios.post(`/api/viewcount`,{ boardnum })
        await fetch(`/api/post?boardnum=${no.no}`)
        .then((res)=> res.json())
        .then((data)=> {
            setPost(data)
        });
        //await axios.get(`/api/boardreply?boardnum=${no.no}`)
        //.then((res) => res)
        //.then((data) => { setReply(data) });
    },[])

    useEffect(() => {
        axios.get(`/api/boardreply?boardnum=${no.no}`)
        .then((res) => res)
        .then((data) => { setReply(data) });
    },[])

    //useEffect(() => {
    //    const boardnum = no.no
    //    axios.post(`/api/viewcount`,{ boardnum })
    //},[postView])

    const [replyText, setReplyText] = useState('');
    const changetext = (e) => {
        e.preventDefault();
        setReplyText(e.target.value)
    }
    const handleFormSubmit = () => {
        const url = '/api/replyboard';
        const reply = {
            nicname: reduxState.nicname,
            content: replyText,
            boardnum: no.no
        }
        axios.post(url, reply)
    };

    console.log("post",post);
    console.log("reply",reply)
    
    return(
        <div className="meta-bg">
            <div></div>
            {post.map(post => {
                return(
            <div key={post.title} className="post">
                <div className="post-header">
                    <h2>{post.title}</h2>
                    <div className="post-header--meta-list">
                        <div className="post-header--meta-list__left">
                            <p>2022-08-19 |</p>
                            <p>{post.nicname} |</p>
                        </div>
                        <div className="post-header--meta-list__right">
                            <p>조회수 {post.boardview +1} |</p>
                            <p>댓글 385 |</p>
                        </div>
                    </div>
                </div>
                
                <div className="post-content">
                    <h3>{post.content}bnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfmlbnlbnldnlbdnlbncvlbmlfdadglradlkcv ldkddfgflkbmfdbld bl flb ldfklvmcklbmflkb kdl blk dflb l bkl bkldfklbkzlcmvklcvmklmvlz
                    vfmdlvmdflmbfklmablf lkb lfb lkdf kb dflbdfskbdlfb dkflb lkdf lkbkblmdsflb dflkbl dfklbfdbdflkb ldfbfdklb dflb fld bldfb kdfblfnfbkdf blfd bldf lb databfdl
                    bfg blgfkbldlbldb ldgsb dgklb lgd bldg bl dgb dglb;dgbdb dklb fdl bldf bl tklgb l bkls bglb lgd bkgls lbglkd setContentbdg kbl dglbdg
                    bgdlkb dkglb lkgdmbdmblkgmdlkbmdglbkmdktlgmbltsmgdmgdfgmlfml</h3>
                    <div className="reply-write">
                        <form onSubmit={handleFormSubmit}>
                            <textarea rows={5} onChange={changetext} name='content' placeholder="내용"/>
                            <button type="submit">답글달기</button>
                        </form>
                    </div>
                    <div className="reply-content">
                        {reply.data.map(reply => {
                            return (
                                <div key={reply.replynum}>
                                    <h3>{ reply.content }</h3>
                                    <p>{ reply.nicname }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            )
            })}
        </div>
    );
}