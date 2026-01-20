import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListOptions from "../ListOptions";

describe("ListOptions Component", () => {
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all three list item buttons", () => {
    render(
      <ListOptions selectedIndex={0} handleListItemClick={mockHandleClick} />
    );

    expect(screen.getByText("OVERVIEW")).toBeInTheDocument();
    expect(screen.getByText("INTERNAL STRUCTURE")).toBeInTheDocument();
    expect(screen.getByText("SURFACE GEOLOGY")).toBeInTheDocument();
  });

  it("marks the correct index as selected", () => {
    const { container } = render(
      <ListOptions selectedIndex={1} handleListItemClick={mockHandleClick} />
    );

    const buttons = container.querySelectorAll('[role="button"]');
    expect(buttons[1]).toHaveClass("Mui-selected");
  });

  it("calls handleListItemClick when a button is clicked", () => {
    render(
      <ListOptions selectedIndex={0} handleListItemClick={mockHandleClick} />
    );

    const overviewButton = screen
      .getByText("OVERVIEW")
      .closest('[role="button"]');
    fireEvent.click(overviewButton!);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
    expect(mockHandleClick).toHaveBeenCalledWith(expect.any(Object), 0);
  });

  it("calls handleListItemClick with correct index for geology", () => {
    render(
      <ListOptions selectedIndex={0} handleListItemClick={mockHandleClick} />
    );

    const geologyButton = screen
      .getByText("SURFACE GEOLOGY")
      .closest('[role="button"]');
    fireEvent.click(geologyButton!);

    expect(mockHandleClick).toHaveBeenCalledWith(expect.any(Object), 2);
  });

  it("updates selection when selectedIndex prop changes", () => {
    const { container, rerender } = render(
      <ListOptions selectedIndex={0} handleListItemClick={mockHandleClick} />
    );

    let buttons = container.querySelectorAll('[role="button"]');
    expect(buttons[0]).toHaveClass("Mui-selected");

    rerender(
      <ListOptions selectedIndex={2} handleListItemClick={mockHandleClick} />
    );

    buttons = container.querySelectorAll('[role="button"]');
    expect(buttons[2]).toHaveClass("Mui-selected");
  });
});
