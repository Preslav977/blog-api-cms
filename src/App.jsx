import "./index.css";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  const [posts, setPosts] = React.useState([]);

  const [IsUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  return (
    <>
      <Outlet context={[posts, setPosts, IsUserLoggedIn, setIsUserLoggedIn]} />
    </>
  );
}

export default App;
