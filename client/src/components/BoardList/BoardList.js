import { Link } from "react-router-dom";
import './BoardList.css'

export default function BoardList( props ){
    return(
        <div className="board__list-item">
            <div className="board__list-title"> 
                <Link to={`/Post/${props.data.boardnum}`}>
                    <span>{props.data.title}dasgadgdsgsdgdsgsdgadsgdsgsd</span>
                </Link>
            </div>
            <div className="articleListItemMeta board__list-meta">
                <div className="articleListItemMetaUser board__list-user"><span>{props.data.nicname}</span></div>
                <div className="articleListItemMetaTime board__list-time"><span>8시간전</span></div>
                <span>조회수: {props.data.boardview}</span>
            </div>
        </div>
    );
}