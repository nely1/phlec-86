import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAlbums } from "../actions/album";
import AlbumPlaceBox from "../components/AlbumPlaceBox";
import "./AlbumPage.css";
export default function AlbumPage() {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.album);
    // console.log(albums);
    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);
    // const albums = [
    //     {
    //         place: "Melbourne",
    //         date: "01/02/2022",
    //         numberPhotos: 2,
    //         image: {
    //             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Melburnian_Skyline.jpg/1200px-Melburnian_Skyline.jpg",
    //             alt: "",
    //         },
    //     },
    //     {
    //         place: "Sydney",
    //         date: "09/04/1999",
    //         numberPhotos: 20,
    //         image: {
    //             url: "https://www.sydney.com/sites/sydney/files/styles/open_graph/public/2022-02/164142-Sydney%20Harbour%20-%20sunrise%20over%20Circular%20Quay.jpg?itok=AKlqtCiC",
    //             alt: "",
    //         },
    //     },
    // ];
    return (
        <>
            <div className="AlbumPageParameter">
                <h2>Search:</h2>
                <input
                    className="AlbumPageSearch"
                    placeholder="Find Your Past Albums"
                ></input>
            </div>

            {/* This would be a good candidate for a component, and should probably
             * put them in a specific grid/flexbox so that they are more responsive. */}
            <div className="AlbumPageGrid">
                {albums.map((album, index) => (
                    <a href="Albumview" key={index}>
                        <AlbumPlaceBox album={albums[index]}></AlbumPlaceBox>
                    </a>
                ))}
            </div>
        </>
    );
}
