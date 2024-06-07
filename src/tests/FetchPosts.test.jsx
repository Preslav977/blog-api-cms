import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../router/routes";
import { describe, expect } from "vitest";

describe("Should render FetchPosts component", () => {
  it("should render Loading while the API fetches", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home"],
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  });

  it("should render first post on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/home/posts/664467ebf1f4a04823a2bfe1/"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("folklore");

    const postTitle = screen.queryByText("Bulgaria - Myths and Legends");

    const postBody = screen.getByTestId("postBody");

    expect(postCategory.textContent).toEqual("folklore");

    expect(postTitle.textContent).toEqual("Bulgaria - Myths and Legends");

    expect(postBody).toBeInTheDocument();

    expect(postImg).toBeInTheDocument();

    expect(screen.queryByText("Preslaw").textContent).toMatch(/preslaw/i);

    expect(screen.queryByText("Cvetanow").textContent).toMatch(/cvetanow/i);

    expect(
      screen.queryByText("Photo by Trekking Bulgaria").textContent,
    ).toMatch(/photo by trekking bulgaria/i);

    screen.debug();

    expect(screen.queryByText("#bulgaria").textContent).toMatch(/#bulgaria/i);
  });

  it("should render second post on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home", "/home/posts/66446886f1f4a04823a2bff3"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("folklore music");

    const postTitle = screen.queryByText("Bulgarian Music Folklore");

    const postBody = screen.getByTestId("postBody");

    expect(postCategory.textContent).toEqual("folklore music");

    expect(postTitle.textContent).toEqual("Bulgarian Music Folklore");

    expect(postBody).toBeInTheDocument();

    expect(postImg).toBeInTheDocument();

    expect(screen.queryByText("Preslaw").textContent).toMatch(/preslaw/i);

    expect(screen.queryByText("Cvetanow").textContent).toMatch(/cvetanow/i);

    expect(
      screen.queryByText("Photo by Trekking Bulgaria").textContent,
    ).toMatch(/photo by trekking bulgaria/i);

    screen.debug();

    expect(screen.queryByText("#bulgaria").textContent).toMatch(/#bulgaria/i);

    expect(screen.queryByText("#folklore").textContent).toMatch(/#folklore/i);

    expect(screen.queryByText("#music").textContent).toMatch(/#music/i);

    expect(screen.queryByText("#culture").textContent).toMatch(/#culture/i);

    expect(screen.queryByText("#balkan").textContent).toMatch(/#balkan/i);
  });
});
