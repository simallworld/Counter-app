import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("Initial count is 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("Increment increases count", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  test("Decrement decreases count", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("increment"));
    fireEvent.click(screen.getByTestId("decrement"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("Does not decrement below 0", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("decrement"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("Does not increment above 10", () => {
    render(<Counter />);
    for (let i = 0; i < 11; i++) {
      fireEvent.click(screen.getByTestId("increment"));
    }
    expect(screen.getByTestId("count")).toHaveTextContent("10");
  });
});


