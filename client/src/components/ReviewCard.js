import React from "react";

export default function ReviewCard(props) {
  return (
    <div className="reviewCard">
      <div className="reviewContent">{props.children}</div>
      {/* 
      <div className="username">
        <b>{props.user}</b>
      </div>
      */}
    </div>
  );
}
