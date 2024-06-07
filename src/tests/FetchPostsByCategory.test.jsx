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
});
