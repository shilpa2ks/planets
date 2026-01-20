import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock components
jest.mock("@/components/nav-bar/Nav", () => {
  return function DummyNav() {
    return <div data-testid="nav-component">Navigation</div>;
  };
});

jest.mock("@/components/planet/Planet", () => {
  return function DummyPlanetComponent() {
    return <div data-testid="planet-component">Planet Content</div>;
  };
});

// Mock planets data
jest.mock("@/data/planets", () => ({
  planets: [
    {
      id: "0",
      name: "Mercury",
      images: {
        planet: "./assets/planet-mercury.svg",
        internal: "./assets/planet-mercury-internal.svg",
        geology: "./assets/geology-mercury.png",
      },
      overview: {
        content: "Mercury is the smallest planet.",
        source: "https://en.wikipedia.org/wiki/Mercury",
      },
      structure: {
        content: "Mercury has a structure...",
        source: "https://example.com",
      },
      geology: {
        content: "Mercury has geology...",
        source: "https://example.com",
      },
      rotation: "58.6 Days",
      revolution: "87.97 Days",
      radius: "2,439.7 KM",
      temperature: "430°c",
    },
  ],
}));

describe("Home Page", () => {
  it("renders the Nav component", () => {
    render(<Home />);

    expect(screen.getByTestId("nav-component")).toBeInTheDocument();
  });

  it("renders the PlanetComponent", () => {
    render(<Home />);

    expect(screen.getByTestId("planet-component")).toBeInTheDocument();
  });

  it("renders both navigation and planet content", () => {
    render(<Home />);

    expect(screen.getByTestId("nav-component")).toBeInTheDocument();
    expect(screen.getByTestId("planet-component")).toBeInTheDocument();
  });
});
