import React from "react";
import AlbumPlaceBox from "../components/AlbumPlaceBox";
import "./AlbumPage.css";
export default function AlbumPage() {
    const albums = [
        {
            place: "Melbourne",
            date: "01/02/2022",
            numberPhotos: 2,
            image: {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Melburnian_Skyline.jpg/1200px-Melburnian_Skyline.jpg",
                alt: "one",
            },
        },
        {
            place: "Sydney",
            date: "09/04/1999",
            numberPhotos: 20,
            image: {
                url: "https://www.sydney.com/sites/sydney/files/styles/open_graph/public/2022-02/164142-Sydney%20Harbour%20-%20sunrise%20over%20Circular%20Quay.jpg?itok=AKlqtCiC",
                alt: "",
            },
        },
    ];
    return (
        <>
            <div className="AlbumPageParameter">
                <h2>Filter:</h2>
                <h2>Tags:</h2>
                <input
                    className="AlbumPageSearch"
                    placeholder="Search..."
                ></input>
            </div>

            {/* This would be a good candidate for a component, and should probably
             * put them in a specific grid/flexbox so that they are more responsive. */}
            <div className="AlbumPageGrid">
                {albums.map((album, index) => (
                    <AlbumPlaceBox
                        key={index}
                        album={albums[index]}
                    ></AlbumPlaceBox>
                ))}
            </div>
        </>
    );
}
