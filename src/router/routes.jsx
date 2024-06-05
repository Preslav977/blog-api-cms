import { element } from "prop-types";
import App from "../App";
import LogInFormComponent from "../components/LogInFormComponent";
import NavComponent from "../components/NavComponent";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LogInFormComponent /> },
      { path: "/home", element: <NavComponent /> },
    ],
  },
];

export default routes;
