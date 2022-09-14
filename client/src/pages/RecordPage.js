import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import "./RecordPage.css";
export default function RecordPage() {
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
      alt: "three",
    },
  ];
  const tags = ["Beach", "Forest", "Hills"];
  return (
    <>
      <div className="RecordPageGrid">
        <div>
          <h1 className="RecordPageTitle">Save Your Favourite Moments</h1>
          <ImageCarousel images={images}></ImageCarousel>
          <div className="RecordPageAddPhoto">
            <p className="text3">Add photo +</p>
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
          <h3 className="RecordPageTagTitle">Tags</h3>
          <TagInput givenTags={tags}></TagInput>
          <div className="RecordPageSave">
            <p className="text2">Save</p>
          </div>
        </div>
      </div>
    </>
  );
}
