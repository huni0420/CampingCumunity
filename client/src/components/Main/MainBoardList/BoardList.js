//import BoardJson from  '../../../Board.json'
//const json = BoardJson.board.filter(subject=>(subject));

export default function BoardList( props ){
    console.log(props.boardApi.data[0].title)
    return(
        <>
        {props.boardApi.data.map( board =>(
        <article className="articleListItem">
            <div className="articleListItemContent">
                <div className="articleListItemContentTitle"> 
                        <span>{board.title}</span>
                </div>
                <div className="articleListItemMeta">
                    <div className="articleListItemMetaTime"><span>8시간전</span></div>
                    <div className="articleListItemMetaUser"><span><a href="">{board.title}</a></span></div>
                </div>
            </div>
            <div className="articleListItemThumnail">
                <img src="" alt="아직없음" />
            </div>
        </article>
        ))}
        </>
    );
}