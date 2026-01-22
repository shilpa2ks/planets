import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonOptions from "../ButtonOptions";

describe("ButtonOptions Component", () => {
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all three buttons", () => {
    render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    expect(screen.getByText("OVERVIEW")).toBeInTheDocument();
    expect(screen.getByText("INTERNAL STRUCTURE")).toBeInTheDocument();
    expect(screen.getByText("SURFACE GEOLOGY")).toBeInTheDocument();
  });

  it("renders buttons inside a ButtonGroup", () => {
    const { container } = render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const buttonGroup = container.querySelector(".MuiButtonGroup-root");
    expect(buttonGroup).toBeInTheDocument();
  });

  it("calls handleListItemClick with index 0 when OVERVIEW is clicked", () => {
    render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const overviewButton = screen.getByText("OVERVIEW");
    fireEvent.click(overviewButton);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(0);
  });

  it("calls handleListItemClick with index 1 when INTERNAL STRUCTURE is clicked", () => {
    render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const structureButton = screen.getByText("INTERNAL STRUCTURE");
    fireEvent.click(structureButton);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(1);
  });

  it("calls handleListItemClick with index 2 when SURFACE GEOLOGY is clicked", () => {
    render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const geologyButton = screen.getByText("SURFACE GEOLOGY");
    fireEvent.click(geologyButton);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(2);
  });

  it("renders with text variant buttons", () => {
    const { container } = render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const buttonGroup = container.querySelector(".MuiButtonGroup-root");
    expect(buttonGroup).toHaveClass("MuiButtonGroup-text");
  });

  it("renders with large size buttons", () => {
    const { container } = render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const buttons = container.querySelectorAll(".MuiButton-root");
    buttons.forEach((button) => {
      expect(button).toHaveClass("MuiButton-sizeLarge");
    });
  });

  it("renders with fullWidth ButtonGroup", () => {
    const { container } = render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    const buttonGroup = container.querySelector(".MuiButtonGroup-root");
    expect(buttonGroup).toHaveClass("MuiButtonGroup-fullWidth");
  });

  it("accepts different selectedIndex values", () => {
    const { rerender } = render(
      <ButtonOptions selectedIndex={0} handleListItemClick={mockHandleClick} />,
    );

    // Component should render without errors with different selectedIndex
    rerender(
      <ButtonOptions selectedIndex={1} handleListItemClick={mockHandleClick} />,
    );
    expect(screen.getByText("OVERVIEW")).toBeInTheDocument();

    rerender(
      <ButtonOptions selectedIndex={2} handleListItemClick={mockHandleClick} />,
    );
    expect(screen.getByText("SURFACE GEOLOGY")).toBeInTheDocument();
  });
});
