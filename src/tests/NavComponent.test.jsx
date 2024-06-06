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
  it("should render NavComponent", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home"],
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Read").textContent).toMatch(/read/i);

    expect(screen.queryByText("Bul").textContent).toMatch(/bul/i);

    expect(screen.queryByText("gar").textContent).toMatch(/gar/i);

    expect(screen.queryByText("ian").textContent).toMatch(/ian/i);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render NavComponent navigation links", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/home"],
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    expect(screen.queryByText("Topics").textContent).toMatch(/topics/i);

    expect(screen.queryByText("Folklore").textContent).toMatch(/folklore/i);
    expect(screen.queryByText("Folklore Music").textContent).toMatch(
      /Folklore Music/i,
    );

    expect(screen.queryByText("Culture").textContent).toMatch(/culture/i);
    expect(screen.queryByText("History").textContent).toMatch(/history/i);
    expect(screen.queryByText("Nature").textContent).toMatch(/nature/i);
    expect(screen.queryByText("Traditions").textContent).toMatch(/traditions/i);
    expect(screen.queryByText("Customs").textContent).toMatch(/customs/i);
  });
});
