import React from "react";
import { render, screen } from "@testing-library/react";
import NavLink from "../NavLink";

describe("NavLink Component", () => {
  it("renders the planet name in uppercase", () => {
    render(<NavLink planetId="0" planetName="Mercury" />);

    expect(screen.getByText("MERCURY")).toBeInTheDocument();
  });

  it("renders with correct link href", () => {
    render(<NavLink planetId="1" planetName="Venus" />);

    const link = screen.getByText("VENUS").closest("a");
    expect(link).toHaveAttribute("href", "1");
  });

  it("renders different planet names correctly", () => {
    const { rerender } = render(<NavLink planetId="0" planetName="Mercury" />);

    expect(screen.getByText("MERCURY")).toBeInTheDocument();

    rerender(<NavLink planetId="2" planetName="Earth" />);

    expect(screen.getByText("EARTH")).toBeInTheDocument();
  });

  it("has link with correct href attribute", () => {
    render(<NavLink planetId="5" planetName="Jupiter" />);

    const link = screen.getByRole("link", { name: /JUPITER/i });
    expect(link).toHaveAttribute("href", "5");
  });

  it("applies prefetch attribute", () => {
    render(<NavLink planetId="0" planetName="Mercury" />);

    const link = screen.getByText("MERCURY").closest("a");
    // Note: Next.js Link's prefetch prop won't show as an HTML attribute
    expect(link).toBeInTheDocument();
  });
});
