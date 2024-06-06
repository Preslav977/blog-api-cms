import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import FlexedPostComponent from "../FlexedPostComponent";
import NavComponent from "../NavComponent";

function FetchPostsByCategory() {
  const [posts, setPosts] = useOutletContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/category/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id, setPosts]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <NavComponent />
      {posts.map((post) => (
        <FlexedPostComponent
          key={post._id}
          postId={`/home/posts/${post._id}`}
          postImgPathId={`/home/posts/${post._id}`}
          postImgSrc={post.image_link}
          postCategory={post.category[0].category}
          postCategoryPathId={`/home/posts/category/${post.category[0]._id}`}
          postTitlePathId={`/home/posts/${post._id}`}
          postTitle={post.title}
          postBodyPathId={`/home/posts/${post._id}`}
          postBody={post.body}
        />
      ))}
    </div>
  );
}

export default FetchPostsByCategory;