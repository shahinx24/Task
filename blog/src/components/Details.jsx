
export default function Detail({blog}){
    return(
        <>
        {blog.map((item)=>(
            <p key={item.id}>
                <h1>{item.text}</h1>
                <h3>{item.detail}</h3>
            </p>
        ))}
        </>
    )
}