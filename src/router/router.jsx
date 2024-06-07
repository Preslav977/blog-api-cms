import { createBrowserRouter } from "react-router-dom";
import LogInFormComponent from "../components/LogInFormComponent";
import App from "../App";
import FetchPosts from "../components/api/FetchPosts";
import FetchSinglePost from "../components/api/FetchSinglePost";
import FetchPostsByCategory from "../components/api/FetchPostsByCategory";
import FetchPostsByTags from "../components/api/FetchPostsByTags";
import UserDashboardComponent from "../components/UserDashboardComponent";
import CreatePostComponent from "../components/CreatePostComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LogInFormComponent /> },
      {
        path: "/home",
        element: <FetchPosts />,
      },
      {
        path: "/home/posts/:id",
        element: <FetchSinglePost />,
      },

      { path: "/home/posts/category/:id", element: <FetchPostsByCategory /> },
      { path: "/home/posts/tag/:name", element: <FetchPostsByTags /> },
      { path: "/home/account", element: <UserDashboardComponent /> },
      { path: "/home/create", element: <CreatePostComponent /> },
    ],
  },
]);

export default router;
