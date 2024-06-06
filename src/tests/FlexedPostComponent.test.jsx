import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import FlexedPostComponent from "../components/FlexedPostComponent";

describe("Should render FlexedPostComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <FlexedPostComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByRole("article")).toBeInTheDocument();

    expect(screen.queryByRole("img")).toBeInTheDocument();

    expect(screen.queryByTestId("postCategory")).toBeInTheDocument();

    expect(screen.queryByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
