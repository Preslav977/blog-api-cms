import { createBrowserRouter } from "react-router-dom";
import LogInFormComponent from "../components/LogInFormComponent";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInFormComponent />,
  },

  { path: "/home", element: <App />, children: [] },
]);

export default router;
