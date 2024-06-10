import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CreatePostComponent.module.css";
import NavComponent from "./NavComponent";
import { useOutletContext } from "react-router-dom";

function CreatePostComponent() {
  const { id } = useParams();

  const [, , , , , , createPost, setCreatePost] = useOutletContext();
  const [, , , , loggedInUser, setLoggedInUser] = useOutletContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const [category, setCategory] = useState(
    "Choose a category",
    "folklore",
    "folklore music",
    "nature",
    "history",
    "culture",
    "traditions",
    "customs",
  );

  const [tags, setTags] = useState("");
  const [image_link, setImage_Link] = useState("");
  const [image_owner, setImage_Owner] = useState("");
  const [image_source, setImage_Source] = useState("");

  let postId = "";

  let getPostCategory = "";

  async function handleSubmit(e) {
    e.preventDefault();

    const FormDataObject = new FormData(e.target);

    const postTitle = FormDataObject.get("title");

    const postBody = FormDataObject.get("body");

    const postCategory = FormDataObject.get("category");

    console.log(postCategory);

    const postTags = FormDataObject.get("tags");

    const postImage_Link = FormDataObject.get("image_link");

    console.log(postImage_Link);

    const postImage_Owner = FormDataObject.get("image_owner");

    const postImage_Source = FormDataObject.get("image_source");

    // const postPrivacy = FormDataObject.get("privacy");

    const createPostObject = {
      ...createPost,
      title: postTitle,
      author: loggedInUser._id,
      body: postBody,
      category: postCategory,
      tags: postTags,
      image_link: postImage_Link,
      image_owner: postImage_Owner,
      image_source: postImage_Source,
      privacy: false,
    };

    setCreatePost(createPostObject);

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          author: loggedInUser._id,
          body: postBody,
          category: postCategory,
          tags: postTags,
          image_link: postImage_Link,
          image_owner: postImage_Owner,
          image_source: postImage_Source,
          privacy: false,
          // privacy: postPrivacy
        }),
      });

      if (response.status !== 200) {
        throw new Error(response.status);
      }

      const result = await response.json();

      console.log(result);

      postId = result._id;

      getPostCategory = postCategory;

      try {
        const response = await fetch(
          `http://localhost:3000/posts/${id}/category`,
          {
            method: "POST",
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: postId,
              category: getPostCategory,
            }),
          },
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function togglePostPrivacy(e) {
    const obj = {
      ...createPost,
      privacy: e.target.checked,
    };

    console.log(obj);

    setCreatePost(obj);
  }

  return (
    <>
      <NavComponent />
      <section className={styles.creatingPostContainer}>
        <header className={styles.creatingPostHeader}>
          <h2>Welcome to Editor Suite!</h2>
          <p>
            Add your post details in the editing panel and your changes will be
            reflected in the post preview.
          </p>
          <p>Note: You must be a verified author to actually submit a post</p>
        </header>
        <div className={styles.createPostFormLivePreviewContainer}>
          <div className={styles.formContainer}>
            <form className={styles.createPostForm} onSubmit={handleSubmit}>
              <div className={styles.formWrapper}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="author"></label>
                <input type="hidden" name="author" />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="body">Body</label>
                <textarea
                  name="body"
                  id=""
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option defaultValue={"Choose a category"}>
                    Choose a category
                  </option>
                  <option value="folklore">Folklore</option>
                  <option value="folklore music">Folklore Music</option>
                  <option value="nature">Nature</option>
                  <option value="history">History</option>
                  <option value="culture">Culture</option>
                  <option value="traditions">Traditions</option>
                  <option value="customs">Customs</option>
                </select>
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_link">Display Image:</label>
                <input type="text" name="image_link" />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_owner">Display Image Owner:</label>
                <input
                  type="text"
                  name="image_owner"
                  value={image_owner}
                  onChange={(e) => setImage_Owner(e.target.value)}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_source">Display Image Source:</label>
                <input
                  type="text"
                  name="image_source"
                  value={image_source}
                  onChange={(e) => setImage_Source(e.target.value)}
                />
              </div>
              <div className={styles.formWrapperCheckbox}>
                <label htmlFor="privacy">Privacy</label>
                <input
                  type="checkbox"
                  name="privacy"
                  id=""
                  checked={createPost.privacy}
                  onChange={togglePostPrivacy}
                />
              </div>
              <button type="submit">Submit Post</button>
            </form>
          </div>
          {/* <div className={styles.testing}></div> */}
        </div>
      </section>
    </>
  );
}

export default CreatePostComponent;
