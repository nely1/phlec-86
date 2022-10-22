import React, { useState } from "react";
import "./ImageCarousel.css";
export default function ImageCarousel({ images, setCurrentImageIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToImage(index) {
    setCurrentIndex(index);
    setCurrentImageIndex(index);
  }
  return (
    <>
      {images.length !== 0 ? (
        <div>
          <img
            className="CarouselImage"
            src={images[currentIndex]}
            alt={""}
          ></img>
          <div className="dotsContainer">
            {images.map((images, index) => (
              <div
                className="dots"
                key={index}
                onClick={() => goToImage(index)}
              >
                &#9679;
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {images.length === 0 ? (
        <div className="PlaceHolder">
          <div className="NoImageText">
            {" "}
            <h1>
              Add new images<br></br> Current Album is Empty
            </h1>
          </div>
        </div>
      ) : null}
    </>
  );
}
