import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../Nav";

// Mock the NavLink component
jest.mock("../NavLink", () => {
  return function DummyNavLink({ planetName }: { planetName: string }) {
    return <div data-testid={`navlink-${planetName}`}>{planetName}</div>;
  };
});

describe("Nav Component", () => {
  it("renders the header title", () => {
    render(<Nav />);

    expect(screen.getByText("Planet Facts")).toBeInTheDocument();
  });

  it("renders NavLink components for each planet", () => {
    render(<Nav />);

    const navLinks = screen.getAllByTestId(/navlink-/);
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it("renders Mercury link", () => {
    render(<Nav />);

    expect(screen.getByTestId("navlink-Mercury")).toBeInTheDocument();
  });

  it("has correct layout structure", () => {
    const { container } = render(<Nav />);

    const box = container.firstChild;
    expect(box).toBeInTheDocument();
  });
});
