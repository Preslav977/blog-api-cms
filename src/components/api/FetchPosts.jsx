import { useEffect, useState } from "react";
import styles from "./FetchPosts.module.css";
import { useOutletContext } from "react-router-dom";

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

  return <main></main>;
}

export default FetchPosts;
