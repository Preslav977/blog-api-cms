import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../router/routes";
import { describe, expect } from "vitest";

describe("should render FlexedComponent posts by category", () => {
  it("should render folklore posts category on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "/home",
        "/home/posts/category/66446821f1f4a04823a2bfe8",
      ],
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
  });

  it("should render folklore music post category on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "/home",
        "/home/posts/category/6644689bf1f4a04823a2bffa",
      ],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("folklore music");

    const postTitle = screen.queryByText("Bulgarian Music Folklore");

    const postBody = screen.getByTestId("postBody");

    expect(postCategory.textContent).toEqual("folklore music");

    expect(postTitle.textContent).toEqual("Bulgarian Music Folklore");

    expect(postBody).toBeInTheDocument();

    expect(postImg).toBeInTheDocument();
  });

  it("should render history posts category on the main page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "/home",
        "/home/posts/category/6644691ff1f4a04823a2c01e",
      ],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postImg = screen.getAllByTestId("postImg");

    const postCategory = screen.queryAllByText("history");

    const postTitle = screen.queryByText("Pleven Epopee 1877 Panorama, Pleven");

    const postTitleOne = screen.queryByText("Tsar Simeon The Great");

    const postTitleTwo = screen.queryByText(
      "Vasil Levski - unsurpassed in courage, defied an empire",
    );

    const postBody = screen.getAllByTestId("postBody");

    expect(postCategory[0].textContent).toEqual("history");

    expect(postCategory[1].textContent).toEqual("history");

    expect(postCategory[2].textContent).toEqual("history");

    expect(postTitle.textContent).toEqual(
      "Pleven Epopee 1877 Panorama, Pleven",
    );

    expect(postTitleOne.textContent).toEqual("Tsar Simeon The Great");

    expect(postTitleTwo.textContent).toEqual(
      "Vasil Levski - unsurpassed in courage, defied an empire",
    );

    expect(postBody[0]).toBeInTheDocument();

    expect(postBody[1]).toBeInTheDocument();

    expect(postBody[2]).toBeInTheDocument();

    expect(postImg[0]).toBeInTheDocument();

    expect(postImg[1]).toBeInTheDocument();

    expect(postImg[2]).toBeInTheDocument();
  });
});
