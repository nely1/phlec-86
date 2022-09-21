import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import "./RecordPage.css";
import $ from "jquery";
import { postAlbum } from "../actions/album";

// Code referenced from https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });
});

export default function RecordPage() {
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
    const [tags, setTags] = useState([]);

    function fileSelectionHandler(event) {
        // console.log(event.target.files[0]);
        // images.push({ url: event.target.files[0].name, alt: "" });

        setImages([...images, event.target.files[0]]);
    }
    const navigate = useNavigate();

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();
        const userCurrent = JSON.parse(localStorage.getItem("profile"));
        let test = await getBase64(images[0]);
        const toUpload = {
            name: event.target.recordAlbumName.value,
            score: event.target.recordRating.value,
            location: event.target.recordLocation.value,
            description: event.target.recordDescription.value,
            userid: userCurrent._id,
            images: [test],
            labels: tags,
        };
        dispatch(postAlbum(toUpload));
        navigate("/album");
    }

    const getBase64 = (file) =>
        //https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    return (
        <form onSubmit={handleSubmit} id="recordForm">
            <div className="RecordPageGrid">
                <div>
                    <h1 className="RecordPageTitle">
                        Save Your Favourite Moments
                    </h1>
                    <ImageCarousel images={images}></ImageCarousel>
                    <div className="RecordPageAddPhoto">
                        <label htmlFor="addPhoto" className="text3">
                            Add photo +
                        </label>
                        {/* <FileBase
                            className="RecordPageInputPhoto"
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setImages({ ...images, selectedFile: base64 })
                            }
                        ></FileBase> */}
                        <input
                            type="file"
                            id="addPhoto"
                            name="addPhoto"
                            accept="image/*"
                            className="RecordPageInputPhoto"
                            onChange={fileSelectionHandler}
                        ></input>
                    </div>
                </div>
                <div>
                    <h3 className="RecordPageAlbumNameTitle">Album name</h3>
                    <input
                        className="RecordPageAlbumNameInput"
                        type="text"
                        placeholder=" Name..."
                        id="recordAlbumName"
                        name="recordAlbumName"
                    ></input>
                    <h3 className="RecordPageDescription">Description</h3>
                    <textarea
                        className="RecordPageDescriptionInput"
                        placeholder=" Type Your Description Here"
                        id="recordDescription"
                        name="recordDescription"
                    ></textarea>
                    <h3 className="RecordPageDescription">Location</h3>
                    <input
                        className="RecordPageAlbumNameInput"
                        type="text"
                        placeholder=" Location..."
                        id="recordLocation"
                        name="recordLocation"
                    ></input>
                    <h3 className="RecordPageTagTitle">Tags</h3>
                    <TagInput tags={tags} setTags={setTags}></TagInput>
                    <h3 className="RecordPageTagTitle">Rating</h3>
                    <input
                        className="RecordPageRatingBar"
                        type="range"
                        min="0"
                        max="10"
                        defaultValue="5"
                        id="recordRating"
                        name="recordRating"
                    ></input>
                    <div className="RecordPageSave">
                        <button
                            type="submit"
                            className="RecordPageSave text3"
                            value="Submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
