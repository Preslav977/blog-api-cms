import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("Should render NavComponent", () => {
  // it("should render NavComponent", () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/home"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   // screen.debug();

  //   expect(screen.queryByText("Read").textContent).toMatch(/read/i);

  //   expect(screen.queryByText("Bul").textContent).toMatch(/bul/i);

  //   expect(screen.queryByText("gar").textContent).toMatch(/gar/i);

  //   expect(screen.queryByText("ian").textContent).toMatch(/ian/i);

  //   expect(screen.queryByRole("button")).not.toBeInTheDocument();
  // });

  // it("should render NavComponent navigation links", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/home"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   const user = userEvent.setup();

  //   const readLink = screen.getByTestId("read");

  //   await user.click(readLink);

  //   expect(screen.queryByText("Topics").textContent).toMatch(/topics/i);

  //   expect(screen.queryByText("Folklore").textContent).toMatch(/folklore/i);
  //   expect(screen.queryByText("Folklore Music").textContent).toMatch(
  //     /Folklore Music/i,
  //   );

  //   expect(screen.queryByText("Culture").textContent).toMatch(/culture/i);
  //   expect(screen.queryByText("History").textContent).toMatch(/history/i);
  //   expect(screen.queryByText("Nature").textContent).toMatch(/nature/i);
  //   expect(screen.queryByText("Traditions").textContent).toMatch(/traditions/i);
  //   expect(screen.queryByText("Customs").textContent).toMatch(/customs/i);
  // });

  // it("should render post besides navigation links", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/home"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   const apiLoading = screen.queryByTestId("loading");

  //   expect(apiLoading).toBeInTheDocument();

  //   await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  //   const user = userEvent.setup();

  //   const readLink = screen.getByTestId("read");

  //   await user.click(readLink);

  //   // screen.debug();

  //   const postCategory = screen.queryAllByTestId("postCategory");

  //   const postTitle = screen.queryAllByRole("heading", { level: 2 });

  //   expect(postCategory[0]).toBeInTheDocument();

  //   expect(postTitle[0]).toBeInTheDocument();
  // });

  it("should navigate to Folklore link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "/home",
        "/home/posts/category/66446821f1f4a04823a2bfe8",
      ],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    let apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    // screen.debug();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    // screen.debug();

    const folkloreLink = screen.queryByTestId("folklore");

    await user.click(folkloreLink);

    apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    // screen.debug();

    const postCategory = screen.queryByTestId("postCategory");

    expect(postCategory.textContent).toEqual("folklore");

    const postTitle = screen.queryAllByText("Bulgaria - Myths and Legends");

    expect(postTitle[0].textContent).toMatch(/bulgaria - myths and legends/i);

    expect(
      screen.queryByText("Bulgaria - Myths and Legends").textContent,
    ).toMatch(/bulgaria - myths and legends/i);
  });

  it("should navigate to  Folklore Music link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "/home",
        "/home/posts/category/6644689bf1f4a04823a2bffa",
      ],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const user = userEvent.setup();

    let apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    screen.debug();

    const folkloreMusicLink = screen.queryByTestId("folklore music");

    await user.click(folkloreMusicLink);

    apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryByTestId("postCategory");

    expect(postCategory.textContent).toMatch(/folklore music/i);

    const postTitle = screen.queryByText("Bulgarian Music Folklore");

    expect(postTitle.textContent).toMatch(/bulgarian music folklore/i);
  });
});
