import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Element from "./TagViewOnly";

afterEach(() => {
  cleanup();
});
test("Tags Load correctly given visability (1) and list of tags (Sydney, Melbourne, Perth)", () => {
  render(
    <Element tags={["Sydney", "Melbourne", "Perth"]} visable="1"></Element>
  );
  screen.getAllByTestId("tags");
  const sydneyTag = screen.getByText("Sydney");
  const melbourneTag = screen.getByText("Melbourne");
  const perthTag = screen.getByText("Perth");
  expect(sydneyTag).toBeInTheDocument();
  expect(melbourneTag).toBeInTheDocument();
  expect(perthTag).toBeInTheDocument();
});

test("Tags are not loaded when visability ('') and list of tags (Sydney, Melbourne, Perth)", () => {
  render(
    <Element tags={["Sydney", "Melbourne", "Perth"]} visable=""></Element>
  );
  const tmp = screen.getByTestId("tagContainer");
  expect(tmp).toBeInTheDocument();
});
