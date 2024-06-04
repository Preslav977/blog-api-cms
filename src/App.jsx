import "./index.css";
import { useState, createContext } from "react";
import NavComponent from "./components/NavComponent";
import { Outlet } from "react-router-dom";

export const PostContext = createContext(null);

export const IsUserLoggedInContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  const [IsUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <IsUserLoggedInContext.Provider
          value={[IsUserLoggedIn, setIsUserLoggedIn]}
        >
          <NavComponent />
          <Outlet />
        </IsUserLoggedInContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
