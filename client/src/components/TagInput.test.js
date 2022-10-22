import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Element from "./TagInput";

afterEach(() => {
  cleanup();
});

test("Render correctly given tags of ['Sydney','Melbourne', 'Perth']", () => {
  render(<Element tags={["Sydney", "Melbourne", "Perth"]}></Element>);
  const sydneyTag = screen.getByText("Sydney");
  const melbourneTag = screen.getByText("Melbourne");
  const perthTag = screen.getByText("Perth");
  expect(sydneyTag).toBeInTheDocument();
  expect(melbourneTag).toBeInTheDocument();
  expect(perthTag).toBeInTheDocument();
});
