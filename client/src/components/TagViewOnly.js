import React from "react";
import "./TagInput.css";
export default function TagViewOnly({ givenTags }) {
    const tags = givenTags;

    return (
        <div className="tagContainer">
            {tags.map((tag, index) => (
                <div className="tagItem" key={index}>
                    <span className="tagLabel text3">{tag}</span>
                </div>
            ))}
        </div>
    );
}
