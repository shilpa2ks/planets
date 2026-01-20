import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PlanetComponent from "../Planet";
import { IPlanet } from "../../types";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const { priority, ...rest } = props;
    return <img {...rest} />;
  },
}));

// Mock child components
jest.mock("../../planetary-stats/PlanetaryStats", () => {
  return function DummyPlanetaryStats({ name, data }: any) {
    return <div data-testid={`stat-${name}`}>{data}</div>;
  };
});

jest.mock("../ListOptions", () => {
  return function DummyListOptions({
    selectedIndex,
    handleListItemClick,
  }: any) {
    return (
      <div data-testid="list-options">
        <button onClick={(e) => handleListItemClick(e, 0)}>Overview</button>
        <button onClick={(e) => handleListItemClick(e, 1)}>Structure</button>
        <button onClick={(e) => handleListItemClick(e, 2)}>Geology</button>
      </div>
    );
  };
});

const mockPlanet: IPlanet = {
  id: "0",
  name: "Mercury",
  images: {
    planet: "./assets/planet-mercury.svg",
    internal: "./assets/planet-mercury-internal.svg",
    geology: "./assets/geology-mercury.png",
  },
  overview: {
    content: "Mercury is the smallest planet.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  },
  structure: {
    content: "Mercury has a solid silicate crust.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
  },
  geology: {
    content: "Mercury's surface is similar to the Moon.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
  },
  rotation: "58.6 Days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430°c",
};

describe("Planet Component", () => {
  it("renders planet name", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    expect(screen.getByText("Mercury")).toBeInTheDocument();
  });

  it("displays overview content by default", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    expect(
      screen.getByText("Mercury is the smallest planet."),
    ).toBeInTheDocument();
  });

  it("displays Wikipedia source link", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    const link = screen.getByText("Wikipedia");
    expect(link).toHaveAttribute("href", mockPlanet.overview.source);
  });

  it("renders all planetary stats", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    expect(screen.getByTestId("stat-rotation time")).toBeInTheDocument();
    expect(screen.getByTestId("stat-revolution time")).toBeInTheDocument();
    expect(screen.getByTestId("stat-radius")).toBeInTheDocument();
    expect(screen.getByTestId("stat-Average temp.")).toBeInTheDocument();
  });

  it("shows structure content when structure button is clicked", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    const structureButton = screen.getByText("Structure");
    fireEvent.click(structureButton);

    expect(
      screen.getByText("Mercury has a solid silicate crust."),
    ).toBeInTheDocument();
  });

  it("shows geology content when geology button is clicked", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    const geologyButton = screen.getByText("Geology");
    fireEvent.click(geologyButton);

    expect(
      screen.getByText("Mercury's surface is similar to the Moon."),
    ).toBeInTheDocument();
  });

  it("displays geology image only when geology is selected", () => {
    const { container } = render(<PlanetComponent planet={mockPlanet} />);

    // Initially geology image should not be visible
    let images = container.querySelectorAll("img");
    expect(images.length).toBe(1); // Only planet image

    // Click geology button
    const geologyButton = screen.getByText("Geology");
    fireEvent.click(geologyButton);

    // Now both planet and geology images should be visible
    images = container.querySelectorAll("img");
    expect(images.length).toBe(2);
  });

  it("renders ListOptions component", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    expect(screen.getByTestId("list-options")).toBeInTheDocument();
  });

  it("updates source link when changing content", () => {
    render(<PlanetComponent planet={mockPlanet} />);

    let link = screen.getByText("Wikipedia");
    expect(link).toHaveAttribute("href", mockPlanet.overview.source);

    const structureButton = screen.getByText("Structure");
    fireEvent.click(structureButton);

    link = screen.getByText("Wikipedia");
    expect(link).toHaveAttribute("href", mockPlanet.structure.source);
  });
});
