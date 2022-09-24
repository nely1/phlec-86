import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumOne, updateAlbum } from "../actions/album";
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
    const albumId = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
    const album = useSelector((state) => (albumId ? state.album.find((a) => a._id === albumId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumOne(albumId));
    }, [dispatch, albumId]);

    async function fileSelectionHandler(event) {
        setImages([...images, await getBase64(event.target.files[0])]);
    }

    const [edit, setEdit] = useState(false);

    function changeEditState() {
        setEdit((prevEdit) => !prevEdit);
    }

    useEffect(() => {
        // console.log(album);
        setImages(album ? album.images : []);
        setTags(album ? album.labels : []);
    }, [album]);
    const [images, setImages] = useState(album ? album.images : []);
    const [tags, setTags] = useState(album ? album.labels : []);

    function handleSubmit(event) {
        changeEditState();
        event.preventDefault();
        const toUpdate = {
            name: event.target.viewName.value,
            score: event.target.viewRating.value,
            location: event.target.viewLocation.value,
            description: event.target.viewDescription.value,
            images: images,
            labels: tags,
            date: event.target.dateAlbum.value,
        };
        dispatch(updateAlbum(albumId, toUpdate));
    }
    const getBase64 = (file) =>
        //https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const history = useNavigate();
    useEffect(() => {
        if (!loginState) {
            history("/Login");
        }
    }, [history, loginState]);
    if (!loginState || !album) {
        return <></>;
    }
    // console.log(album);
    return (
        <form onSubmit={handleSubmit}>
            <div className="AlbumViewGrid">
                <div>
                    <ImageCarousel images={images}></ImageCarousel>
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
                        <h1>{album.name}</h1>
                        <h3 className="RecordPageDescription">Description</h3>
                        <textarea
                            readOnly="readonly"
                            className="RecordPageDescriptionInput"
                            value={album.description}
                        ></textarea>
                        <h3>Tags:</h3>
                        <TagViewOnly tags={tags} visable="true"></TagViewOnly>
                        <h3>Location:</h3>
                        <input
                            className="RecordPageAlbumNameInput"
                            type="text"
                            value={album.location}
                            readOnly="readonly"
                        ></input>
                        <h3 className="RecordPageTagTitle">Rating</h3>
                        <input
                            className="AlbumViewPageRatingBar"
                            type="range"
                            min="0"
                            max="10"
                            value={album.score}
                            readOnly="readonly"
                        ></input>
                        <h3 className="RecordPageTagTitle">Date</h3>
                        <input
                            type="date"
                            id="dateAlbum"
                            name="dateAlbum"
                            value={album.date}
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
                            defaultValue={album.name}
                            id="viewName"
                            name="viewName"
                            className="heading2"
                        ></input>
                        <h3 className="RecordPageDescription">Description</h3>
                        <textarea
                            className="RecordPageDescriptionInput"
                            defaultValue={album.description}
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
                            defaultValue={album.location}
                            id="viewLocation"
                            name="viewLocation"
                        ></input>
                        <h3 className="RecordPageTagTitle">Rating</h3>
                        <input
                            className="AlbumViewPageRatingBar"
                            type="range"
                            min="0"
                            max="10"
                            defaultValue={album.score}
                            id="viewRating"
                            name="viewRating"
                        ></input>
                        <h3 className="RecordPageTagTitle">Date</h3>
                        <input type="date" id="dateAlbum" name="dateAlbum" defaultValue={album.date}></input>
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
