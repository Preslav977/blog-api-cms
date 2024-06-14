import "./index.css";
import { Outlet } from "react-router-dom";
import React from "react";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [posts, setPosts] = React.useState([]);

  const [checkIfUserIsLoggedIn, setCheckIfUserIsLoggedIn] =
    React.useState(false);

  const [loggedUserInformation, setLoggedUserInformation] = React.useState({});

  const [createPost, setCreatePost] = React.useState({
    title: "",
    author: "",
    body: "",
    category: [],
    tags: "",
    image_link: "",
    image_owner: "",
    image_source: "",
    privacy: false,
    comments: [],
  });

  return (
    <>
      <Outlet
        context={[
          posts,
          setPosts,
          checkIfUserIsLoggedIn,
          setCheckIfUserIsLoggedIn,
          loggedUserInformation,
          setLoggedUserInformation,
          createPost,
          setCreatePost,
        ]}
      />
      <FooterComponent />
    </>
  );
}

export default App;
