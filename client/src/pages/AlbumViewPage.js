import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import TagViewOnly from "../components/TagViewOnly";
import "./AlbumViewPage.css";
export default function AlbumViewPage() {
    const [edit, setEdit] = useState(0);
    function changeEditState() {
        setEdit(!edit);
    }
    const images = [
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
    ];
    const tags = ["Beach", "Forest", "Hills"];
    const placeRating = "7";
    return (
        <div className="AlbumViewGrid">
            <div>
                <ImageCarousel images={images}></ImageCarousel>
            </div>
            {!edit ? (
                <div>
                    <h1>Frangorn Foreest</h1>
                    <h3 className="RecordPageDescription">Description</h3>
                    <textarea
                        readOnly="readonly"
                        className="RecordPageDescriptionInput"
                        placeholder=" Type Your Description Here"
                    ></textarea>
                    <h3>Tags:</h3>
                    <TagViewOnly givenTags={tags}></TagViewOnly>
                    <input
                        className="AlbumViewPageRatingBar"
                        type="range"
                        min="0"
                        max="10"
                        value={placeRating}
                        readOnly="readonly"
                    ></input>
                    <button onClick={changeEditState}>THE EDIT BUTTON</button>
                </div>
            ) : (
                <div>
                    <h1>Frangorn Foreest (EDIT)</h1>
                    <h3 className="RecordPageDescription">Description</h3>
                    <textarea
                        className="RecordPageDescriptionInput"
                        placeholder=" Type Your Description Here"
                    ></textarea>
                    <h3>Tags:</h3>
                    <TagInput givenTags={tags}></TagInput>
                    <input
                        className="AlbumViewPageRatingBar"
                        type="range"
                        min="0"
                        max="10"
                        value={placeRating}
                    ></input>
                    <button onClick={changeEditState}>THE EDIT BUTTON</button>
                </div>
            )}
        </div>
    );
}
