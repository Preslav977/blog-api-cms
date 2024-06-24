import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./FetchSinglePost.module.css";
import { Link, useOutletContext } from "react-router-dom";
import NavComponent from "../NavComponent";
import DOMPurify from "dompurify";

import { format } from "date-fns";

function FetchSinglePost() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, , checkIfUserIsLoggedIn, setCheckIfUserIsLoggedIn] =
    useOutletContext();

  const [, , , , loggedUserInformation, setLoggedUserInformation] =
    useOutletContext();

  const formRef = useRef();

  const { id } = useParams();

  const sanitizedHTMLContent = DOMPurify.sanitize(post.body);

  useEffect(() => {
    fetch(
      `https://blog-api-backend-production-5dc1.up.railway.app/posts/${id}`,
      { mode: "cors" },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPost(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id, setPost]);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p data-testid="loading">Loading....</p>
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

  async function submitComment(e) {
    e.preventDefault();

    const FormDataObject = new FormData(e.target);

    const comment = FormDataObject.get("content");

    const addCommentToPost = {
      ...post,
      content: comment,
    };

    setPost(addCommentToPost);

    formRef.current.reset();

    try {
      const response = await fetch(
        `https://blog-api-backend-production-5dc1.up.railway.app/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: comment }),
        },
      );
      const result = await response.json();

      const fetchPost = await fetch(
        `https://blog-api-backend-production-5dc1.up.railway.app/posts/${id}`,
        {
          mode: "cors",
        },
      );

      const post = await fetchPost.json();

      const postObj = {
        ...post,
        post,
      };

      setPost(postObj);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeComment(postComments) {
    const removeComment = {
      ...post,
      comments: post.comments.filter((obj) => obj._id !== postComments._id),
    };

    setPost(removeComment);

    try {
      const response = await fetch(
        `https://blog-api-backend-production-5dc1.up.railway.app/posts/${id}/comment`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: postComments._id }),
        },
      );
      const result = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavComponent />
      <article className={styles.articleDetailedContainer}>
        <div className={styles.articleCategoryContainer}>
          <p className={styles.articleCategory}>
            <Link to={`/home/posts/category/${post.category[0]._id}`}>
              {post.category[0].category}
            </Link>
          </p>
        </div>
        <div className={styles.articleAuthorInformation}>
          <h2>{post.title}</h2>
          <div className={styles.articleAuthorAndDateContainer}>
            <p>{format(post.date, "dd.MM.yyyy")}</p> | <span>by</span>{" "}
            <p>{post.author.first_name}</p>
            <p>{post.author.last_name}</p>
          </div>
        </div>
        <div className={styles.articleDetailedImageContainer}>
          <img
            data-testid="postImg"
            className={styles.articleImage}
            src={post.image_link}
            alt=""
          />
          <p>Photo by {post.image_owner}</p>
        </div>
        <div className={styles.articleDetailedDescriptionContainer}>
          <div
            className={styles.articleDetailedInformation}
            data-testid="postBody"
            dangerouslySetInnerHTML={{ __html: sanitizedHTMLContent }}
          ></div>
        </div>
        <div className={styles.articleDetailedTagsContainer}>
          <h3>Tags</h3>
          <div className={styles.articleTags}>
            {post["tags"].map((postTags) => (
              <Link
                className={styles.articleCategory}
                key={postTags}
                to={`/home/posts/tag/${postTags}`}
              >
                #{postTags}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.articleCommentsContainer}>
          <h3>Comments</h3>
          {!checkIfUserIsLoggedIn || loggedUserInformation.test_user ? (
            <p className={styles.articleLogInUser}>
              You must be logged in or a normal user to add a comment
            </p>
          ) : (
            <>
              <div>
                <p className={styles.articleLogInUser}>
                  Comment on post &apos;{post.title}&apos;
                </p>
                <form ref={formRef} onSubmit={submitComment}>
                  <label htmlFor="content"></label>
                  <textarea
                    className={styles.submitCommentTextArea}
                    name="content"
                    id="content"
                    placeholder="Enter you comment here"
                    minLength={5}
                    maxLength={100}
                    required
                  ></textarea>
                  <div className={styles.submitBtnCommentContainer}>
                    <button className={styles.submitBtnComment} type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
          {post.comments.map((postComments) => (
            <div key={postComments._id}>
              {!postComments.hidden ? (
                <div className={styles.articleComment}>
                  <p className={styles.articleUserNames}>
                    {postComments.user.first_name} {postComments.user.last_name}
                  </p>
                  <p>{format(postComments.date, "MMMM dd, yyyy")}</p>
                  <p className={styles.articleContent}>
                    {postComments.content}
                  </p>
                  <div className={styles.articleLikeContainer}>
                    {/* {!postComments.like > 0 ? (
                    <img
                      className={styles.articleCommentLikeSvg}
                      src="/like-comment.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className={styles.articleCommentLikeSvg}
                      src="/liked-comment.svg"
                      alt=""
                    />
                  )} */}
                    {/* <p className={styles.articleLike}>{postComments.like}</p> */}
                    {loggedUserInformation._id === postComments.user._id &&
                    !loggedUserInformation.admin ? (
                      <div className={styles.deleteCommentContainer}>
                        <img
                          onClick={() => {
                            (e) => e.preventDefault();
                            removeComment(postComments);
                          }}
                          className={styles.articleCommentLikeSvg}
                          src="/trashcan.svg"
                          alt=""
                        />
                        <p>Delete</p>
                      </div>
                    ) : (
                      ""
                    )}
                    {loggedUserInformation.admin ? (
                      <div className={styles.deleteCommentContainer}>
                        <img
                          onClick={() => {
                            (e) => e.preventDefault();
                            removeComment(postComments);
                          }}
                          className={styles.articleCommentLikeSvg}
                          src="/trashcan.svg"
                          alt=""
                        />
                        <p>Delete</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default FetchSinglePost;
