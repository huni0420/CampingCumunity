import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './css/Post.css'
export default function Post() {
    //Link에 파라메터를 덧붙여서 전달하면
    //route에 파라메터의 키값으로 정의해서
    //넘어온 파라메터를 useParams를 사용해서 object로 받는다
    const no = useParams();
    //console.log(no);  // { no : '1'}
    //console.log(no.no); // 1


    const [ post, setPost ] = useState([]);
    const [ repply, setRepply ] = useState([]);
    useEffect(() => {
        fetch(`/api/post?boardnum=${no.no}`)
        .then((res)=> res.json())
        .then((data)=> {
            setPost(data)
        });
    },[])

    console.log(post);
    
    return(
        <div className="meta-bg">
            <div></div>
            <div className="post">
                <div className="post-header">
                    <h2>{post.title}</h2>
                    <div className="post-header--meta-list">
                        <div className="post-header--meta-list__left">
                            <p>2022-08-19 |</p>
                            <p>{post.nicname} |</p>
                        </div>
                        <div className="post-header--meta-list__right">
                            <p>조회 252 |</p>
                            <p>댓글 385 |</p>
                        </div>
                    </div>
                </div>
                {post.map(post => {
                    return(
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
                        {}
                        <Link to='/'>가자</Link>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}