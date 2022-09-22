import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../actions/album";
import AlbumPlaceBox from "../components/AlbumPlaceBox";
import "./AlbumPage.css";

export default function AlbumPage({ loginState }) {
    const history = useNavigate();
    const albums = useSelector((state) => state.album);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums(JSON.parse(localStorage.getItem("profile"))));
    }, [dispatch]);

    useEffect(() => {
        if (!loginState) {
            history("/Login");
        }
    }, [history, loginState]);

    if (!loginState) {
        return <></>;
    }
    console.log(albums);
    return (
        <>
            <div className="AlbumPageParameter">
                <h2>Search:</h2>
                <input className="AlbumPageSearch" placeholder="Find Your Past Albums"></input>
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
