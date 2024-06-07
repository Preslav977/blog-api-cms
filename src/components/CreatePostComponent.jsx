import { useState } from "react";
import styles from "./CreatePostComponent.module.css";

function CreatePostComponent() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [image_link, setImage_Link] = useState("");
  const [image_owner, setImage_Owner] = useState("");
  const [image_source, setImage_Source] = useState("");

  return (
    <section>
      <header>
        <h3>Welcome to Editor Suite!</h3>
        <p>
          Add your post details in the editing panel and your changes will be
          reflected in the post preview.
        </p>
        <p>Note: You must be a verified author to actually submit a post</p>
      </header>
      <div>
        <button>Title</button>
        <button>Body</button>
        <button>Tags</button>
        <button>Display Image</button>
        <button>Submit</button>
      </div>
      <div></div>
    </section>
  );
}

export default CreatePostComponent;
