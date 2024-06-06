import "./index.css";
import { Outlet } from "react-router-dom";
import React from "react";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [posts, setPosts] = React.useState([]);

  const [IsUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  return (
    <>
      <Outlet context={[posts, setPosts, IsUserLoggedIn, setIsUserLoggedIn]} />
      <FooterComponent />
    </>
  );
}

export default App;
