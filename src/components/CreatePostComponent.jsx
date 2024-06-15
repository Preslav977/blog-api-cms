import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./CreatePostComponent.module.css";
import NavComponent from "./NavComponent";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

function CreatePostComponent() {
  const formRef = useRef();

  let postId = "";

  let retrievePostCategory = "";

  const [, , , , , , createPost, setCreatePost] = useOutletContext();
  const [, , , , loggedUserInformation, setLoggedUserInformation] =
    useOutletContext();

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

  const [image_link, setImage_Link] = useState("");
  const [image_owner, setImage_Owner] = useState("");
  const [image_source, setImage_Source] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const FormDataObject = new FormData(e.target);

    const postTitle = FormDataObject.get("title");

    const postBody = FormDataObject.get("body");

    const postCategory = FormDataObject.get("category");

    const postTags = FormDataObject.get("tags");

    const postImage_Link = FormDataObject.get("image_link");

    const postImage_Owner = FormDataObject.get("image_owner");

    const postImage_Source = FormDataObject.get("image_source");

    let postPrivacy = FormDataObject.get("privacy");

    if (postPrivacy === "on") {
      postPrivacy = true;
    } else {
      postPrivacy = false;
    }

    const createPostObject = {
      ...createPost,
      title: postTitle,
      author: loggedUserInformation._id,
      body: postBody,
      category: postCategory,
      tags: postTags,
      image_link: postImage_Link,
      image_owner: postImage_Owner,
      image_source: postImage_Source,
      privacy: postPrivacy,
    };

    setCreatePost(createPostObject);

    formRef.current.reset();

    try {
      const response = await fetch(
        "https://blog-api-backend-production-5dc1.up.railway.app/posts/",
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            author: loggedUserInformation._id,
            body: postBody,
            category: postCategory,
            tags: postTags,
            image_link: postImage_Link,
            image_owner: postImage_Owner,
            image_source: postImage_Source,
            privacy: postPrivacy,
          }),
        },
      );

      const result = await response.json();

      console.log(result);

      postId = result._id;

      retrievePostCategory = postCategory;

      try {
        const response = await fetch(
          `https://blog-api-backend-production-5dc1.up.railway.app/posts/${postId}/category`,
          {
            method: "POST",
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              id: postId,
              category: retrievePostCategory,
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
                  minLength={5}
                  maxLength={80}
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
                <Editor
                  apiKey="c6fjep42m9iubxcb2use57a5q6cerr9fqhik1zpcyiil5z32"
                  textareaName="body"
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant"),
                      ),
                  }}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
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
                <input type="text" name="tags" minLength={3} maxLength={30} />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_link">Display Image:</label>
                <input
                  type="text"
                  name="image_link"
                  value={image_link}
                  onChange={(e) => setImage_Link(e.target.value)}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_owner">Display Image Owner:</label>
                <input
                  type="text"
                  name="image_owner"
                  minLength={3}
                  maxLength={30}
                  value={image_owner}
                  onChange={(e) => setImage_Owner(e.target.value)}
                />
              </div>
              <div className={styles.formWrapper}>
                <label htmlFor="image_source">Display Image Source:</label>
                <input
                  type="text"
                  name="image_source"
                  minLength={3}
                  maxLength={30}
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
        </div>
      </section>
    </>
  );
}

export default CreatePostComponent;
