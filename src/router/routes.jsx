import App from "../App";
import LogInFormComponent from "../components/LogInFormComponent";
import NavComponent from "../components/NavComponent";
import FetchPosts from "../components/api/FetchPosts";
import FetchSinglePost from "../components/api/FetchSinglePost";

const routes = [
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
      {
        path: "/home/posts/:id",
        element: <FetchSinglePost />,
      },
    ],
  },
];

export default routes;
