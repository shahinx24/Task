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
    <>
      <h2>{currentBlog.text}</h2>
      <h3>{currentBlog.detail}</h3>
      <Link to="/view">Go Back</Link>
    </>
  );
}