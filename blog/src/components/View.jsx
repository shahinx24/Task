import { Link } from "react-router-dom"

export default function View({blog}){
    return(
        <>
        <h1>Titels</h1>
        {blog.map((item)=>(
            <p key={item.id}>
                <Link to={`/detail/${item.id}`}>
                    <h2>{item.text}</h2>
                </Link>
            </p>
        ))}
        <Link to="/" >Back</Link>
        </>
    )
}