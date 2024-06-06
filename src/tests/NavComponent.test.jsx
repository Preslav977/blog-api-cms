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
});
