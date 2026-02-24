import { Link } from "react-router-dom"

export default function View({blog}){
    return(
        <>
        {blog.map((item)=>(
            <p key={item.id}>
                <Link to="/Detail">{item.text} </Link>
            </p>
        ))}
        </>
    )
}