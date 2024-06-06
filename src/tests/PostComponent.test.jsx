import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PostComponent from "../components/PostComponent";

describe("Should render PostComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <PostComponent />,
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
