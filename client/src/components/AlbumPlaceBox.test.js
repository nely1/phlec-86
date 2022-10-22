import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Element from "./AlbumPlaceBox";

afterEach(() => {
  cleanup();
});

test("Album Box loads given an album ", () => {
  const album = {
    images: [
      "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?cs=srgb&dl=pexels-stein-egil-liland-1933316.jpg&fm=jpg",
    ],
    date: "2022-01-01",
    name: "Melbourne",
  };
  render(<Element album={album}></Element>);
  const albumName = screen.getByText("Melbourne");
  const albumQuickInfo = screen.getByText("2022-01-01 & 1 Photos");
  expect(albumName).toBeInTheDocument();
  expect(albumQuickInfo).toBeInTheDocument();
});
