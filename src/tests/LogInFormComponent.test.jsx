import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("should render LogInFormComponent", () => {
  it("should render the content of this component", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(
      screen.queryByText("Welcome back to Bulgarian!").textContent,
    ).toMatch(/welcome back to bulgarian!/i);

    expect(screen.queryByTestId("logInFormPrivacy").textContent).toEqual(
      "By continuing, you are agree to our User Agreement and Privacy Policy.",
    );

    expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);

    expect(
      screen.queryByText("Email does not match required format").textContent,
    ).toMatch(/email does not match required format/i);

    expect(screen.queryByText("Password:").textContent).toMatch(/password:/i);

    expect(
      screen.queryByText("Password must be at least 8 characters long.")
        .textContent,
    ).toMatch(/password must be at least 8 characters long./i);

    const logInBtn = screen.queryByRole("button");

    expect(logInBtn.textContent).toMatch(/log in/i);
  });

  it("should render the content and the span errors.", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    expect(
      screen.queryByText("Welcome back to Bulgarian!").textContent,
    ).toMatch(/welcome back to bulgarian!/i);

    expect(screen.queryByTestId("logInFormPrivacy").textContent).toEqual(
      "By continuing, you are agree to our User Agreement and Privacy Policy.",
    );

    expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);

    expect(screen.queryByText("Password:").textContent).toMatch(/password:/i);

    const logInBtn = screen.queryByRole("button");

    expect(logInBtn.textContent).toMatch(/log in/i);
  });

  it("should render when the user types to hide the span errors.", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [""],
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    await user.type(screen.getByRole("input-email"), "test@abv.bg");

    expect(screen.getByRole("input-email")).toHaveValue("test@abv.bg");

    expect(
      screen.queryByText("Email does not match required format"),
    ).not.toBeInTheDocument();

    await user.type(screen.getByRole("input-password"), "12345678");

    expect(screen.getByRole("input-password")).toHaveValue("12345678");

    expect(
      screen.queryByText("Password must be at least 8 characters long."),
    ).not.toBeInTheDocument();
  });
});
