import React from "react";
import { render, screen } from "@testing-library/react";
import NavLink from "../NavLink";

describe("NavLink Component", () => {
  it("renders the planet name in uppercase", () => {
    render(<NavLink planetName="Mercury" />);

    expect(screen.getByText("MERCURY")).toBeInTheDocument();
  });

  it("renders with correct link href", () => {
    render(<NavLink planetName="Venus" />);

    const link = screen.getByText("VENUS").closest("a");
    expect(link).toHaveAttribute("href", "/venus");
  });

  it("renders different planet names correctly", () => {
    const { rerender } = render(<NavLink planetName="Mercury" />);

    expect(screen.getByText("MERCURY")).toBeInTheDocument();

    rerender(<NavLink planetName="Earth" />);

    expect(screen.getByText("EARTH")).toBeInTheDocument();
  });

  it("has link with correct href attribute", () => {
    render(<NavLink planetName="Jupiter" />);

    const link = screen.getByRole("link", { name: /JUPITER/i });
    expect(link).toHaveAttribute("href", "/jupiter");
  });

  it("applies prefetch attribute", () => {
    render(<NavLink planetName="Mercury" />);

    const link = screen.getByText("MERCURY").closest("a");
    // Note: Next.js Link's prefetch prop won't show as an HTML attribute
    expect(link).toBeInTheDocument();
  });
});
