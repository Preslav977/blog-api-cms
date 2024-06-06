import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import FeaturedTagsComponent from "../components/FeaturedTagsComponent";
import { describe, expect } from "vitest";

describe("Should render FeaturedTagsComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <FeaturedTagsComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(screen.queryByText("#Bulgaria").textContent).toMatch(/#bulgaria/i);

    expect(screen.queryByText("#Folklore").textContent).toMatch(/#folklore/i);

    expect(screen.queryByText("#History").textContent).toMatch(/#history/i);

    expect(screen.queryByText("#Traditions").textContent).toMatch(
      /#traditions/i,
    );

    expect(screen.queryByText("#Customs").textContent).toMatch(/#customs/i);
  });
});
