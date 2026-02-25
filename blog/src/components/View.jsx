import { Link } from "react-router-dom"

export default function View({blog}){
    return(
        <>
        {blog.map((item)=>(
            <p key={item.id}>
                <Link to={`/detail/${item.id}`}>
                    <h2>{item.text}</h2>
                </Link>
            </p>
        ))}
        </>
    )
}