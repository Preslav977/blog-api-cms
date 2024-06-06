import { createBrowserRouter } from "react-router-dom";
import LogInFormComponent from "../components/LogInFormComponent";
import App from "../App";
import NavComponent from "../components/NavComponent";
import FetchPosts from "../components/api/FetchPosts";
import FetchSinglePost from "../components/api/FetchSinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LogInFormComponent /> },
      {
        path: "/home",
        element: (
          <>
            <NavComponent />
            <FetchPosts />
          </>
        ),
      },
      { path: "/home/posts/:id", element: <FetchSinglePost /> },
    ],
  },
]);

export default router;
