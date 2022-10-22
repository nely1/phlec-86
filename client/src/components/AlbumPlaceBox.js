import React from "react";
import "./AlbumPlaceBox.css";
export default function AlbumPlaceBox({ album }) {
  return (
    <div className="AlbumPageItems">
      <img className="photoBox" src={album.images[0]} alt={""}></img>
      <h3>{album.name}</h3>
      <p className="text3">
        {album.date} & {album.images.length} Photos
      </p>
    </div>
  );
}
