import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import { describe, expect } from "vitest";

describe("Should render FooterComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <FooterComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Improve your skills").textContent).toMatch(
      /improve your skills/i,
    );

    expect(screen.queryByText("Get in the KNOW").textContent).toMatch(
      /get in the know/i,
    );

    expect(
      screen.queryByText(
        "We at Bulgarian community have the utmost passion for preserving our traditions and customs and passing it to the next generations.",
      ).textContent,
    ).toMatch(
      /we at Bulgarian community have the utmost passion for preserving our traditions and customs and passing it to the next generations/i,
    );

    expect(screen.queryByText("About Bulgarian").textContent).toMatch(
      /about bulgarian/i,
    );

    expect(screen.queryByText("About Us").textContent).toMatch(/about us/i);

    expect(screen.queryByText("Our Vision").textContent).toMatch(/our vision/i);

    expect(screen.queryByText("Contact Us").textContent).toMatch(/contact us/i);

    expect(screen.queryByText("Advertise").textContent).toMatch(/advertise/i);

    expect(screen.queryByText("Editors Column").textContent).toMatch(
      /editors column/i,
    );

    expect(screen.queryByText("Email").textContent).toMatch(/Email/i);
  });
});
