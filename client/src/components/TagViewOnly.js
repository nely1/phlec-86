import React from "react";
import "./TagInput.css";
export default function TagViewOnly({ tags, visable }) {
  return visable ? (
    <div className="tagContainer">
      {tags.map((tag, index) => (
        <div className="tagItem" key={index}>
          <span data-testid="tags" className="tagLabel text3">
            {tag}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <>
      <div data-testid="tagContainer"></div>
    </>
  );
}
