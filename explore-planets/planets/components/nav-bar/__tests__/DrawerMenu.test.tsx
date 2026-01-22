import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import DrawerMenu from "../DrawerMenu";
import { planets } from "@/data/planets";

// Mock NavLink component
jest.mock("../NavLink", () => {
  return function MockNavLink({ planetName }: { planetName: string }) {
    return <span data-testid={`navlink-${planetName}`}>{planetName}</span>;
  };
});

describe("DrawerMenu Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the menu icon button", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("drawer is closed by default", () => {
    render(<DrawerMenu />);

    // Drawer content should not be visible initially
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("opens the drawer when menu button is clicked", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Drawer should now be visible (MuiDrawer-root has role presentation)
    const drawers = screen.getAllByRole("presentation");
    expect(drawers.length).toBeGreaterThan(0);
  });

  it("renders all planets in the drawer", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Check that all planets are rendered
    planets.forEach((planet) => {
      expect(screen.getByTestId(`navlink-${planet.name}`)).toBeInTheDocument();
    });
  });

  it("renders planet names as NavLinks", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    expect(screen.getByText("Mercury")).toBeInTheDocument();
    expect(screen.getByText("Venus")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Mars")).toBeInTheDocument();
    expect(screen.getByText("Jupiter")).toBeInTheDocument();
    expect(screen.getByText("Saturn")).toBeInTheDocument();
    expect(screen.getByText("Uranus")).toBeInTheDocument();
    expect(screen.getByText("Neptune")).toBeInTheDocument();
  });

  it("renders circle icons for each planet", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Check for CircleIcon SVGs using getAllByTestId
    const circleIcons = screen.getAllByTestId("CircleIcon");
    expect(circleIcons.length).toBe(planets.length);
  });

  it("closes the drawer when clicking on the backdrop", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Drawer should be open
    expect(screen.getAllByRole("presentation").length).toBeGreaterThan(0);

    // Click on the backdrop to close (MUI Drawer uses backdrop)
    const backdrop = document.querySelector(".MuiBackdrop-root");
    if (backdrop) {
      fireEvent.click(backdrop);
    }

    // Drawer should close
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("renders list items for each planet", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(planets.length);
  });

  it("renders a list inside the drawer", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("menu button has correct aria-label", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByLabelText("menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("menu button has large size", () => {
    const { container } = render(<DrawerMenu />);

    const menuButton = container.querySelector(".MuiIconButton-sizeLarge");
    expect(menuButton).toBeInTheDocument();
  });

  it("renders ListItemButton for each planet", () => {
    render(<DrawerMenu />);

    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Each planet should have a clickable list item button
    const listItemButtons = screen.getAllByRole("button");
    // Menu button is hidden (aria-hidden) when drawer is open, so all buttons are planet buttons
    expect(listItemButtons.length).toBe(planets.length);
  });
});
