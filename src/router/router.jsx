import { createBrowserRouter } from "react-router-dom";
import LogInFormComponent from "../components/LogInFormComponent";
import App from "../App";
import NavComponent from "../components/NavComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LogInFormComponent /> },
      { path: "/home", element: <NavComponent /> },
    ],
  },
]);

export default router;
