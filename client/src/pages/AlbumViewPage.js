import React, { useState } from "react";
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

export default function AlbumViewPage() {
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

    const [images, setImages] = useState([
        // {
        //     url: "http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg",
        //     alt: "one",
        // },
        // {
        //     url: "https://whatsonblog.melbourne.vic.gov.au/wp-content/uploads/2020/07/DJI_0031_D-Hannah.jpg",
        //     alt: "two",
        // },
        // {
        //     url: "https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?cs=srgb&dl=pexels-pok-rie-130576.jpg&fm=jpg",
        //     alt: "",
        // },
    ]);
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
        console.log(event.target.viewName.value);
        console.log(event.target.viewDescription.value);
        console.log(event.target.viewLocation.value);
        console.log(event.target.viewRating.value);
    }
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
                        <h1>{albumName}</h1>
                        <h3 className="RecordPageDescription">Description</h3>
                        <textarea
                            readOnly="readonly"
                            className="RecordPageDescriptionInput"
                            value={albumDescription}
                        ></textarea>
                        <h3>Tags:</h3>
                        <TagViewOnly tags={tags} visable="true"></TagViewOnly>
                        <h3>Location:</h3>
                        <input
                            className="RecordPageAlbumNameInput"
                            type="text"
                            value={location}
                            readOnly="readonly"
                        ></input>
                        <h3 className="RecordPageTagTitle">Rating</h3>
                        <input
                            className="AlbumViewPageRatingBar"
                            type="range"
                            min="0"
                            max="10"
                            value={rating}
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
                        <button
                            type="submit"
                            className="text3 AlbumViewEditButton"
                        >
                            Save Edit
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}
