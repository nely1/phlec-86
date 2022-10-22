import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPageBody from "./LandingPageBody";

afterEach(() => {
  cleanup();
});
test("Landing Page loads correctly", () => {
  render(<LandingPageBody></LandingPageBody>);
  const landingPageElement = screen.getByTestId("landingPage");

  expect(landingPageElement).toBeInTheDocument();
  expect(landingPageElement).toHaveTextContent(
    "With You Every Step of the WayPhlec Travels is a web app designed to record the journeys you have been, and help you discover where to go nextSign InSign Up"
  );
});
