import { Link, useParams } from "react-router-dom";

export default function Detail({ blog }) {
  const { id } = useParams();

  const currentBlog = blog.find(
    item => item.id === Number(id)
  );

  if (!currentBlog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="container">
    <h1 className="title">Title</h1>
      <h2 className="tite">{currentBlog.text}</h2>
    <h3 className="disc">Discrbtion</h3>
      <h4 className="dis">{currentBlog.detail}</h4>
      <Link to="/view" className="p">Go Back</Link>
    </div>
  );
}