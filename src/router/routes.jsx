import App from "../App";
import LogInFormComponent from "../components/LogInFormComponent";

const routes = [
  {
    path: "/",
    element: <LogInFormComponent />,
  },

  {
    path: "/home",
    element: <App />,
    children: [],
  },
];

export default routes;
