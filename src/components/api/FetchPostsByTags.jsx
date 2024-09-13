import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import FlexedPostComponent from "../FlexedPostComponent";
import NavComponent from "../NavComponent";

function FetchPostsByTags() {
  const [posts, setPosts] = useOutletContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://quixotic-chivalrous-quit.glitch.me/posts/tag/${name}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [name, setPosts]);

  if (loading)
    return (
      <div data-testid="loading" className="loadingContainer">
        <img className="loading" src="loading.svg" alt="Loading..." />
        <p data-testid="loading">Loading....</p>;
      </div>
    );

  if (error)
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      return <p>A network error was encountered</p>
    </div>;

  return (
    <div>
      <NavComponent />
      {posts.map((post) => (
        <FlexedPostComponent
          key={post._id}
          postImgPathId={`/posts/${post._id}`}
          postImgSrc={post.image_link}
          postCategoryPathId={`/posts/category/${post.category[0]._id}`}
          postCategory={post.category[0].category}
          postTitlePathId={`/posts/${post._id}`}
          postTitle={post.title}
          postBodyPathId={`/posts/${post._id}`}
          postBody={post.body}
        />
      ))}
    </div>
  );
}

export default FetchPostsByTags;
