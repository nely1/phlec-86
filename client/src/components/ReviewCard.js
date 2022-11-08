import React from "react";

export default function ReviewCard(props) {
  return (
    <div className="reviewCard">
      <div className="reviewContent">
        {props.data === undefined ? props.data : props.data.description}
      </div>
      <div className="reviewName">
        <b>{props.data.username === undefined ? "" : props.data.username}</b>
      </div>
    </div>
  );
}
