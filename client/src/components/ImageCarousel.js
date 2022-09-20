import React, { useState } from "react";
import "./ImageCarousel.css";
export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function goToImage(index) {
        setCurrentIndex(index);
    }
    console.log(images.length);
    return (
        <>
            {images.length !== 0 ? (
                <div>
                    {/* <div onClick={goToPrev}>ARROW</div> */}
                    <img
                        className="CarouselImage"
                        src={images[currentIndex].url}
                        alt={images[currentIndex].alt}
                    ></img>
                    {/* <div onClick={goToNext}>ARROW</div> */}
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
        </>
    );
}
