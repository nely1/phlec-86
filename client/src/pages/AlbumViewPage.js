import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import TagViewOnly from "../components/TagViewOnly";
import "./AlbumViewPage.css";
export default function AlbumViewPage() {
    function fileSelectionHandler(event) {
        setImages([
            ...images,
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Melburnian_Skyline.jpg/1200px-Melburnian_Skyline.jpg",
                alt: "",
            },
        ]);

        console.log(images);
    }

    const [edit, setEdit] = useState(false);

    function changeEditState() {
        setEdit(!edit);
    }
    const [images, setImages] = useState([
        {
            url: "http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg",
            alt: "one",
        },
        {
            url: "https://whatsonblog.melbourne.vic.gov.au/wp-content/uploads/2020/07/DJI_0031_D-Hannah.jpg",
            alt: "two",
        },
        {
            url: "https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?cs=srgb&dl=pexels-pok-rie-130576.jpg&fm=jpg",
            alt: "",
        },
    ]);
    const tags = ["Beach", "Forest", "Hills"];
    const placeRating = "7";
    return (
        <div className="AlbumViewGrid">
            <div>
                <ImageCarousel images={images}></ImageCarousel>
                <a href="/Album">
                    <button className="text3 ToAlbumButton">Album</button>
                </a>
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
                    <h1>Frangorn Foreest</h1>
                    <h3 className="RecordPageDescription">Description</h3>
                    <textarea
                        readOnly="readonly"
                        className="RecordPageDescriptionInput"
                        placeholder=" Type Your Description Here"
                    ></textarea>
                    <h3>Tags:</h3>
                    <TagViewOnly givenTags={tags}></TagViewOnly>
                    <h3>Location:</h3>
                    <input
                        className="RecordPageAlbumNameInput"
                        type="text"
                        value={"Melbourne"}
                        readOnly="readonly"
                    ></input>
                    <h3 className="RecordPageTagTitle">Rating</h3>
                    <input
                        className="AlbumViewPageRatingBar"
                        type="range"
                        min="0"
                        max="10"
                        value={placeRating}
                        readOnly="readonly"
                    ></input>
                    <p> </p>
                    <button
                        onClick={changeEditState}
                        className="text3 AlbumViewEditButton"
                    >
                        EDIT
                    </button>
                </div>
            ) : (
                <div className="AlbumViewPageLeft">
                    <h1>Frangorn Foreest</h1>
                    <h3 className="RecordPageDescription">Description</h3>
                    <textarea
                        className="RecordPageDescriptionInput"
                        placeholder=" Type Your Description Here"
                    ></textarea>
                    <h3>Tags:</h3>
                    <TagInput givenTags={tags}></TagInput>
                    <h3>Location:</h3>
                    <input
                        className="RecordPageAlbumNameInput"
                        type="text"
                        placeholder={"Melbourne"}
                    ></input>
                    <h3 className="RecordPageTagTitle">Rating</h3>
                    <input
                        className="AlbumViewPageRatingBar"
                        type="range"
                        min="0"
                        max="10"
                        defaultValue={placeRating}
                    ></input>
                    <p></p>
                    <button
                        onClick={changeEditState}
                        className="text3 AlbumViewEditButton"
                    >
                        Save Edit
                    </button>
                </div>
            )}
        </div>
    );
}
