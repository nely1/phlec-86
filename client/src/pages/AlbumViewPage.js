import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumOne } from "../actions/album";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import TagViewOnly from "../components/TagViewOnly";
import "./AlbumViewPage.css";
import $ from "jquery";

// Code referenced from https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });
});

export default function AlbumViewPage({ loginState }) {
    const locationHook = useLocation();
    const album = useSelector((state) => state.album);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumOne(locationHook.state.albumId));
    }, [dispatch]);
    function fileSelectionHandler(event) {
        setImages([
            ...images,
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Melburnian_Skyline.jpg/1200px-Melburnian_Skyline.jpg",
                alt: "",
            },
        ]);
    }

    const [edit, setEdit] = useState(false);

    function changeEditState() {
        setEdit((prevEdit) => !prevEdit);
    }

    const [images, setImages] = useState([]);
    const [tags, setTags] = useState(["Beach", "Forest", "Hills"]);
    const [rating, setRating] = useState(7);
    const [albumName, setAlbumName] = useState("Frangorn Forrest");
    const [albumDescription, setAlbumDescription] = useState("");
    const [location, setLocation] = useState("");
    function handleSubmit(event) {
        changeEditState();
        event.preventDefault();
        setRating(event.target.viewRating.value);
        setAlbumName(event.target.viewName.value);
        setAlbumDescription(event.target.viewDescription.value);
        setLocation(event.target.viewLocation.value);
        // console.log(event.target.viewName.value);
        // console.log(event.target.viewDescription.value);
        // console.log(event.target.viewLocation.value);
        // console.log(event.target.viewRating.value);
    }
    const history = useNavigate();
    useEffect(() => {
        if (!loginState) {
            history("/Login");
        }
    }, [history, loginState]);
    if (!loginState || album.length !== 1) {
        return <></>;
    }
    console.log(album);
    return (
        <form onSubmit={handleSubmit}>
            <div className="AlbumViewGrid">
                <div>
                    <ImageCarousel images={album[0].images}></ImageCarousel>
                    {edit ? (
                        <div className="RecordPageAddPhoto">
                            <label htmlFor="addPhoto" className="text3">
                                Add photo +
                            </label>

                            <input
                                type="file"
                                id="addPhoto"
                                accept="image/*"
                                className="RecordPageInputPhoto"
                                onChange={fileSelectionHandler}
                            ></input>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </div>
                {!edit ? (
                    <div className="AlbumViewPageLeft">
                        <h1>{album[0].name}</h1>
                        <h3 className="RecordPageDescription">Description</h3>
                        <textarea
                            readOnly="readonly"
                            className="RecordPageDescriptionInput"
                            value={album[0].description}
                        ></textarea>
                        <h3>Tags:</h3>
                        <TagViewOnly tags={album[0].labels} visable="true"></TagViewOnly>
                        <h3>Location:</h3>
                        <input
                            className="RecordPageAlbumNameInput"
                            type="text"
                            value={album[0].location}
                            readOnly="readonly"
                        ></input>
                        <h3 className="RecordPageTagTitle">Rating</h3>
                        <input
                            className="AlbumViewPageRatingBar"
                            type="range"
                            min="0"
                            max="10"
                            value={album[0].score}
                            readOnly="readonly"
                        ></input>
                        <h3 className="RecordPageTagTitle">Date</h3>
                        <input
                            type="date"
                            id="dateAlbum"
                            name="dateAlbum"
                            value={album[0].date}
                            readOnly="readonly"
                        ></input>
                        <p> </p>
                        <button onClick={changeEditState} className="text3 AlbumViewEditButton">
                            EDIT
                        </button>
                    </div>
                ) : (
                    <div className="AlbumViewPageLeft">
                        <input
                            type="text"
                            defaultValue={albumName}
                            id="viewName"
                            name="viewName"
                            className="heading2"
                        ></input>
                        <h3 className="RecordPageDescription">Description</h3>
                        <textarea
                            className="RecordPageDescriptionInput"
                            defaultValue={albumDescription}
                            id="viewDescription"
                            name="viewDescription"
                        ></textarea>
                        <h3>Tags:</h3>
                        <TagInput tags={tags} setTags={setTags}></TagInput>
                        <TagViewOnly tags={tags}></TagViewOnly>
                        <h3>Location:</h3>
                        <input
                            className="RecordPageAlbumNameInput"
                            type="text"
                            defaultValue={location}
                            id="viewLocation"
                            name="viewLocation"
                        ></input>
                        <h3 className="RecordPageTagTitle">Rating</h3>
                        <input
                            className="AlbumViewPageRatingBar"
                            type="range"
                            min="0"
                            max="10"
                            defaultValue={rating}
                            id="viewRating"
                            name="viewRating"
                        ></input>
                        <p></p>
                        <button type="submit" className="text3 AlbumViewEditButton">
                            Save Edit
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}
