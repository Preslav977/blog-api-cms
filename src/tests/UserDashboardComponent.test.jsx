import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";
import routes from "../router/routes";

describe("should render UserDashBoardComponent", () => {
  it("should render the content of this component", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/home/account"],
    });
    render(<RouterProvider router={router} />);
    screen.debug();

    //   expect(screen.queryByText("Welcome,").textContent).toMatch(/welcome,/i);
    //   expect(screen.queryByText("Welcome to dashboard!").textContent).toMatch(
    //     /welcome to dashboard!/i,
    //   );
    //   expect(
    //     screen.queryByText(
    //       "Note: This page is under construction. Some features might not be available",
    //     ).textContent,
    //   ).toMatch(
    //     /note: this page is under construction. some features might not be available/i,
    //   );
    //   expect(screen.queryByText("User Information").textContent).toMatch(
    //     /user information/i,
    //   );
    //   expect(screen.queryByText("First Name:").textContent).toMatch(
    //     /first name:/i,
    //   );
    //   expect(screen.queryByText("Change First Name").textContent).toMatch(
    //     /change first name/i,
    //   );
    //   expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);
    //   expect(screen.queryByText("Change Email").textContent).toMatch(
    //     /change email/i,
    //   );
    //   expect(screen.queryByText("Verified Status:").textContent).toMatch(
    //     /verified status:/i,
    //   );
    //   expect(screen.queryByText("Not Verified").textContent).toMatch(
    //     /not verified/i,
    //   );
    //   expect(screen.queryByText("Apply for Verification").textContent).toMatch(
    //     /apply for verification/i,
    //   );
    //   expect(screen.queryByText("Last Name:").textContent).toMatch(/last name:/i);
    //   expect(screen.queryByText("Change Last Name").textContent).toMatch(
    //     /change last name/i,
    //   );
    //   expect(screen.queryByText("Username:").textContent).toMatch(/username:/i);
    //   expect(screen.queryByText("Change Username").textContent).toMatch(
    //     /change username/i,
    //   );
  });
});
