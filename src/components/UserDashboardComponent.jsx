import { useOutletContext } from "react-router-dom";
import styles from "./UserDashboardComponent.module.css";
import NavComponent from "./NavComponent";
import { useState, useEffect } from "react";
import FlexedPostComponent from "./FlexedPostComponent";
import { useParams } from "react-router-dom";

function UserDashboardComponent() {
  const [posts, setPosts] = useOutletContext();

  const [, , checkIfUserIsLoggedIn, setCheckIfUserIsLoggedIn] =
    useOutletContext();

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const [, , , , loggedUserInformation, setLoggedUserInformation] =
    useOutletContext();

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/user", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }

        return response.json();
      })
      .then((response) => setLoggedUserInformation(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [setLoggedUserInformation]);

  async function removePost(post) {
    setPosts(posts.filter((obj) => obj._id !== post._id));

    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: post._id }),
      });
      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function publishPost(post) {
    setPosts(
      posts.map((obj) => {
        if (obj._id === post._id) {
          return { ...obj, privacy: (obj.privacy = true) };
        } else {
          return obj;
        }
      }),
    );

    try {
      const response = await fetch(`http://localhost:3000/post/${id}`, {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          privacy: post.privacy,
          id: post._id,
        }),
      });

      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function unPublishPost(post) {
    setPosts(
      posts.map((obj) => {
        if (obj._id === post._id) {
          return { ...obj, privacy: (obj.privacy = false) };
        } else {
          return obj;
        }
      }),
    );

    try {
      const response = await fetch(`http://localhost:3000/post/${id}`, {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          privacy: post.privacy,
          id: post._id,
        }),
      });

      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  if (checkIfUserIsLoggedIn) {
    return (
      <>
        <NavComponent />
        <div className={styles.userDashboardWrapper}>
          <div className={styles.userDashboardContainer}>
            <div className={styles.greetingUserContainer}>
              <h2 className={styles.greetingUser}>
                Welcome, {loggedUserInformation.first_name}
              </h2>
              <p>Welcome to dashboard!</p>
              <p className={styles.userWarningParagraph}>
                Note: This page is under construction. Some features might not
                be available
              </p>
            </div>
            <h3 className={styles.userInformationHeader}> User Information</h3>
            <div className={styles.userDashboardContent}>
              <div className={styles.userDashboardLeftContent}>
                <div className={styles.userContent}>
                  <p className={styles.userLabel}>First Name:</p>
                  <p className={styles.userInformation}>
                    {loggedUserInformation.first_name}
                  </p>
                  <a className={styles.userLink}>Change First Name</a>
                </div>
                <div>
                  <p className={styles.userLabel}>Email:</p>
                  <p className={styles.userInformation}>
                    {" "}
                    {loggedUserInformation.email}
                  </p>
                  <a className={styles.userLink}>Change Email</a>
                </div>
                <div>
                  <p className={styles.userLabel}>Verified Status:</p>
                  {!loggedUserInformation.verified_status ? (
                    <p className={styles.userInformation}>Not Verified</p>
                  ) : (
                    <p className={styles.userInformation}>Verified</p>
                  )}
                  <a className={styles.userLink}>Apply for Verification</a>
                </div>
              </div>
              <div className={styles.userDashboardRightContent}>
                <div>
                  <p className={styles.userLabel}>Last Name:</p>
                  <p className={styles.userInformation}>
                    {" "}
                    {loggedUserInformation.last_name}
                  </p>
                  <a className={styles.userLink}>Change Last Name</a>
                </div>
                <div>
                  <p className={styles.userLabel}>Username:</p>
                  <p className={styles.userInformation}>
                    {" "}
                    {loggedUserInformation.username}
                  </p>
                  <a className={styles.userLink}>Change Username</a>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.authorPostsContainer}>
              <h3 className={styles.userDashboardPostHeader}>
                Manage your posts
              </h3>
              <div>
                {posts.map((post) => (
                  <section key={post._id}>
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
                    {post.author._id === loggedUserInformation._id ? (
                      <div className={styles.managePostButtons}>
                        <button
                          className={styles.managePostButton}
                          onClick={() => removePost(post)}
                        >
                          Delete
                        </button>
                        <button
                          className={styles.managePostButton}
                          onClick={() => publishPost(post)}
                        >
                          Publish
                        </button>
                        <button
                          className={styles.managePostButton}
                          onClick={() => unPublishPost(post)}
                        >
                          Unpublished
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <p>You must be logged to see this page!</p>;
}

export default UserDashboardComponent;
