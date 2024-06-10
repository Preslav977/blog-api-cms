import styles from "./FetchPosts.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PostComponent from "../PostComponent";
import AuthorComponent from "../AuthorComponent";
import FlexedPostComponent from "../FlexedPostComponent";
import FeaturedTagsComponent from "../FeaturedTagsComponent";
import CommunityComponent from "../CommunityComponent";
import NavComponent from "../NavComponent";

function FetchPosts() {
  const [posts, setPosts] = useOutletContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <>
      <NavComponent />
      <main className={styles.mainContent}>
        <div className={styles.postContainerGrid}>
          {posts.slice(0, 5).map((post) => (
            <PostComponent
              key={post._id}
              postImgPathId={`/home/posts/${post._id}`}
              postImgSrc={post.image_link}
              postCategoryPathId={`/home/posts/category/${post.category[0]._id}`}
              postCategory={post.category[0].category}
              postTitle={post.title}
              postBodyPathId={`/home/posts/${post._id}`}
              postBody={post.body}
            />
          ))}
        </div>
        <hr />
        <AuthorComponent />
        <hr />
        <section>
          {posts.slice(0, 5).map((post) => (
            <FlexedPostComponent
              key={post._id}
              postImgPathId={`/home/posts/${post._id}`}
              postImgSrc={post.image_link}
              postCategoryPathId={`/home/posts/category/${post.category[0]._id}`}
              postCategory={post.category[0].category}
              postTitlePathId={`/home/posts/${post._id}`}
              postTitle={post.title}
              postBodyPathId={`/home/posts/${post._id}`}
              postBody={post.body}
            />
          ))}
        </section>
        <FeaturedTagsComponent />
        <section className={styles.mainPageSecondaryPostsSection}>
          {posts.slice(5, 10).map((post) => (
            <FlexedPostComponent
              key={post._id}
              postImgPathId={`/home/posts/${post._id}`}
              postImgSrc={post.image_link}
              postCategoryPathId={`/home/posts/category/${post.category[0]._id}`}
              postCategory={post.category[0].category}
              postTitlePathId={`/home/posts/${post._id}`}
              postTitle={post.title}
              postBodyPathId={`/home/posts/${post._id}`}
              postBody={post.body}
            />
          ))}
        </section>
        <section>
          {posts.slice(10, 15).map((post) => (
            <section key={post._id}>
              {!post.privacy ? (
                <FlexedPostComponent
                  key={post._id}
                  postImgPathId={`/home/posts/${post._id}`}
                  postImgSrc={post.image_link}
                  postCategoryPathId={`/home/posts/category/${post.category[0]._id}`}
                  postCategory={post.category[0].category}
                  postTitlePathId={`/home/posts/${post._id}`}
                  postTitle={post.title}
                  postBodyPathId={`/home/posts/${post._id}`}
                  postBody={post.body}
                />
              ) : (
                ""
              )}
            </section>
          ))}
        </section>
        <CommunityComponent />
      </main>
    </>
  );
}

export default FetchPosts;
