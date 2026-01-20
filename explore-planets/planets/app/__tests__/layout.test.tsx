import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

// Mock child components
jest.mock("@/components/nav-bar/Nav", () => {
  return function DummyNav() {
    return <div>Navigation</div>;
  };
});

describe("RootLayout", () => {
  it("renders correctly with children", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders with proper structure", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    expect(container).toBeInTheDocument();
  });
});
