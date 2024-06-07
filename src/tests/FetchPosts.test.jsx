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

  it("should render third post on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home", "/home/posts/66446904f1f4a04823a2c017"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("history");

    const postTitle = screen.queryByText("Pleven Epopee 1877 Panorama, Pleven");

    const postBody = screen.getByTestId("postBody");

    expect(postCategory.textContent).toEqual("history");

    expect(postTitle.textContent).toEqual(
      "Pleven Epopee 1877 Panorama, Pleven",
    );

    expect(postBody).toBeInTheDocument();

    expect(postImg).toBeInTheDocument();

    expect(screen.queryByText("Preslaw").textContent).toMatch(/preslaw/i);

    expect(screen.queryByText("Cvetanow").textContent).toMatch(/cvetanow/i);

    expect(
      screen.queryByText("Photo by Bulgarian Travel Org").textContent,
    ).toMatch(/photo by bulgarian travel org/i);

    screen.debug();

    expect(screen.queryByText("#bulgaria").textContent).toMatch(/#bulgaria/i);

    expect(screen.queryByText("#history").textContent).toMatch(/#history/i);

    expect(screen.queryByText("#monument").textContent).toMatch(/#monument/i);

    expect(screen.queryByText("#pleven").textContent).toMatch(/#pleven/i);
  });

  it("should render fourth post on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home", "/home/posts/664468bef1f4a04823a2c005"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("nature");

    const postTitle = screen.queryByText("Pirin National Park");

    const postBody = screen.getByTestId("postBody");

    expect(postCategory.textContent).toEqual("nature");

    expect(postTitle.textContent).toEqual("Pirin National Park");

    expect(postBody).toBeInTheDocument();

    expect(postImg).toBeInTheDocument();

    expect(screen.queryByText("Preslaw").textContent).toMatch(/preslaw/i);

    expect(screen.queryByText("Cvetanow").textContent).toMatch(/cvetanow/i);

    expect(
      screen.queryByText("Photo by Bulgaria Travel Org").textContent,
    ).toMatch(/photo by bulgaria travel org/i);

    screen.debug();

    expect(screen.queryByText("#bulgaria").textContent).toMatch(/#bulgaria/i);

    expect(screen.queryByText("#nature").textContent).toMatch(/#nature/i);

    expect(screen.queryByText("#history").textContent).toMatch(/#history/i);
  });
});
