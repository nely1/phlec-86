import React, { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import "./RecordPage.css";
export default function RecordPage() {
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

  function fileSelectionHandler(event) {
    // console.log(event.target.files[0].name);
    // images.push({ url: event.target.files[0].name, alt: "" });

    setImages([
      ...images,
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Melburnian_Skyline.jpg/1200px-Melburnian_Skyline.jpg",
        alt: "",
      },
    ]);

    console.log(images);
  }
  return (
    <>
      <div className="RecordPageGrid">
        <div>
          <h1 className="RecordPageTitle">Save Your Favourite Moments</h1>
          <ImageCarousel images={images}></ImageCarousel>
          <div className="RecordPageAddPhoto">
            <label htmlFor="addPhoto" className="text3">
              Add photo +
            </label>
            <input
              type="file"
              id="addPhoto"
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
          ></input>
          <h3 className="RecordPageDescription">Description</h3>
          <textarea
            className="RecordPageDescriptionInput"
            placeholder=" Type Your Description Here"
          ></textarea>
          <h3 className="RecordPageDescription">Location</h3>
          <input
            className="RecordPageAlbumNameInput"
            type="text"
            placeholder=" Location..."
          ></input>
          <h3 className="RecordPageTagTitle">Tags</h3>
          <TagInput givenTags={tags}></TagInput>
          <h3 className="RecordPageTagTitle">Rating</h3>
          <input
            className="RecordPageRatingBar"
            type="range"
            min="0"
            max="10"
          ></input>
          <div className="RecordPageSave">
            <p className="text2">Save</p>
          </div>
        </div>
      </div>
    </>
  );
}
