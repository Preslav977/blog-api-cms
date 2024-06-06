import styles from "./FetchPosts.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PostComponent from "../PostComponent";

function FetchPosts() {
  const [posts, setPosts] = useOutletContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(posts);

  useEffect(() => {
    fetch("http://localhost:3000/posts", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setPosts]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={styles.mainContent}>
      <div className={styles.postContainerGrid}>
        {posts.slice(0, 5).map((post) => (
          <PostComponent
            key={post._id}
            postImgPathId={`/posts/${post._id}`}
            postImgSrc={post.image_link}
            postCategoryPathId={`/posts/category/${post.category[0]._id}`}
            postCategory={post.category[0].category}
            postTitle={post.title}
            postBodyPathId={`/posts/${post._id}`}
            postBody={post.body}
          />
        ))}
      </div>
    </main>
  );
}

export default FetchPosts;
