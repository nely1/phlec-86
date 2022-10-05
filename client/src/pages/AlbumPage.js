import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const [searchTerm, setSearchTerm] = useState("");

    if (!loginState) {
        return <></>;
    }
    return (
        <>
            <div className="AlbumPageParameter">
                <h2>Search:</h2>
                <input
                    className="AlbumPageSearch"
                    placeholder="Find Your Past Albums"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                ></input>
            </div>

            <div className="AlbumPageGrid">
                {albums
                    .filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return val;
                        } else {
                            return null;
                        }
                    })
                    .map((val, index) => (
                        <Link to={"/albumView/" + val._id} key={index}>
                            <AlbumPlaceBox album={val}></AlbumPlaceBox>
                        </Link>
                    ))}
            </div>
        </>
    );
}
