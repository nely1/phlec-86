import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../actions/album";
import AlbumPlaceBox from "../components/AlbumPlaceBox";
import "./AlbumPage.css";

export default function AlbumPage({ loginState }) {
  const albums = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    if (!loginState) {
      history("/login");
    } else {
      dispatch(getAlbums(JSON.parse(localStorage.getItem("profile"))));
    }
  }, [history, loginState, dispatch]);

  const [searchTerm, setSearchTerm] = useState("");

  // Prevents user from accessing page if not logged in, later redirected to login page in use effect
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
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
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
