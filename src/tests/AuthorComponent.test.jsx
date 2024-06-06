import { screen, render } from "@testing-library/react";
import AuthorComponent from "../components/AuthorComponent";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";

describe("Should render AuthorComponent", () => {
  it("should render the component content", () => {
    const routes = [
      {
        path: "/",
        element: <AuthorComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Attention")).toBeInTheDocument();

    expect(
      screen.queryByText("Want to be an author in this blog?"),
    ).toBeInTheDocument();

    expect(screen.queryByTestId("authorInformation")).toBeInTheDocument();

    expect(screen.queryByText("Go to link")).toBeInTheDocument();
  });
});
