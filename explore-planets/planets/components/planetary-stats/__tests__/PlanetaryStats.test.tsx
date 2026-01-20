import React from "react";
import { render, screen } from "@testing-library/react";
import PlanetaryStats from "../PlanetaryStats";

describe("PlanetaryStats Component", () => {
  it("renders the component with correct name and data", () => {
    render(<PlanetaryStats name="rotation time" data="58.6 Days" />);

    expect(screen.getByText("ROTATION TIME")).toBeInTheDocument();
    expect(screen.getByText("58.6 Days")).toBeInTheDocument();
  });

  it("renders with different name and data", () => {
    render(<PlanetaryStats name="radius" data="2,439.7 KM" />);

    expect(screen.getByText("RADIUS")).toBeInTheDocument();
    expect(screen.getByText("2,439.7 KM")).toBeInTheDocument();
  });

  it("converts name to uppercase", () => {
    render(<PlanetaryStats name="average temp" data="430°c" />);

    const heading = screen.getByText("AVERAGE TEMP");
    expect(heading).toBeInTheDocument();
  });

  it("has correct styling structure", () => {
    const { container } = render(
      <PlanetaryStats name="revolution time" data="87.97 Days" />
    );

    const box = container.firstChild;
    expect(box).toBeInTheDocument();
  });
});
