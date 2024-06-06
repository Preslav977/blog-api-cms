import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CommunityComponent from "../components/CommunityComponent";
import { describe, expect } from "vitest";

describe("Should render CommunityComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <CommunityComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("The Bulgarian Community").textContent).toMatch(
      /the bulgarian community/i,
    );

    expect(screen.queryByText("Follow us on our socials").textContent).toMatch(
      /follow us on our socials/i,
    );

    const img = screen.queryAllByTestId("img");

    expect(img.length).toEqual(10);
  });
});
