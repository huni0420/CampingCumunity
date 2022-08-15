import { Link } from "react-router-dom";

export default function BoardList( props ){
    return(
        <>
        <article className="articleListItem">
            <div className="articleListItemContent">
                <div className="articleListItemContentTitle"> 
                    <Link to={`/Post/${props.data.boardnum}`}>
                        <span>{props.data.title}</span>
                    </Link>
                </div>
                <div className="articleListItemMeta">
                    <div className="articleListItemMetaTime"><span>8시간전</span></div>
                    <div className="articleListItemMetaUser"><span>{props.data.nicname}</span></div>
                </div>
            </div>
            {/*<div className="articleListItemThumnail">
                <img src="" alt="아직없음" />
            </div>*/}
        </article>
        </>
    );
}