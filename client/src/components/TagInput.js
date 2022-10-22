import React from "react";
import "./TagInput.css";
export default function TagInput({ tags, setTags }) {
  function handleEnter(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function deleteTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }
  return (
    <div className="tagContainer">
      {tags.map((tag, index) => (
        <div className="tagItem" key={index}>
          <span className="tagLabel text3">{tag}</span>
          <span className="tagDelete" onClick={() => deleteTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        className="tagInput"
        type="text"
        placeholder="Enter you tag"
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
}
