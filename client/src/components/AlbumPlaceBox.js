import React from "react";
import "./AlbumPlaceBox.css";
export default function AlbumPlaceBox({ album }) {
    return (
        <div className="AlbumPageItems">
            <img
                className="photoBox"
                src={album.image.url}
                alt={album.image.alt}
            ></img>
            <h3>{album.place}</h3>
            <p className="text3">
                {album.date} & {album.numberPhotos} Photos
            </p>
        </div>
    );
}
