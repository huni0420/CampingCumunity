export default function Youtube(props) {
    return(
        <>
            {props.youtubeApi.data ? props.youtubeApi.data.map((youtube) => {  
                return(
                    youtube.items.map((item)=>{
                        const {id,snippet = {}} = item;
                        const {title, thumbnails ={} } = snippet;
                        const { medium,high = {} } = thumbnails;
                        return(
                        <>
                            <li key={id}>
                                <a href={`https://www.youtube.com/watch?v=${id.videoId}`}>
                                    <p>
                                        <img width={medium.width} height={medium.height} src={medium.url} alt=""/>
                                    </p>
                                    <h3>{title}</h3>
                                </a>
                            </li>
                        </>
                        );
                    })
                );
            }):"아직안됨"};
        </>
    );
}