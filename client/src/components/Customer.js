export default function Customer( props ){
    //console.log(props)
    return(
        <>
            {props.customerApi.data ? props.customerApi.data.map(c =>{
                return(
                    <>
                        <p>{c.id}</p>
                        <p>{c.image}</p>
                        <p>{c.birthday}</p>
                        <p>{c.name}</p>
                        <p>{c.gender}</p>
                        <p>{c.job}</p>
                    </>
                )
            }): ""};
        </>
    );
}