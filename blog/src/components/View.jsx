import { Link } from "react-router-dom"

export default function View({ blog }) {
    return (
        <div className="container">
            <h1 className="title">Titles</h1>

            <div className="blog-list">
                {blog.map((item) => (
                    <Link
                        key={item.id}
                        to={`/detail/${item.id}`}
                        className="disc"
                    >
                        <h2>{item.text}</h2>
                    </Link>
                ))}
            </div>

            <Link to="/" className="p">Back</Link>
        </div>
    )
}