import React from "react";

export default function ExploreCard(props) {
  /* Need to retrieve info from database.
   * Best to pass in an object retrieved in ExplorePage as prop */
  if (props.data !== undefined) {
    let data = props.data;

    let image;

    switch (data.theme) {
      case "Transport":
        image = "/images/Transport.jpg";
        break;
      case "Mixed Use":
        image = "/images/Mixed_Use.jpg";
        break;
      case "Place Of Assembly":
        image = "/images/Mixed_Use.jpg";
        break;
      case "Leisure/Recreation":
        image = "/images/Leisure.jpg";
        break;
      case "Place of Worship":
        image = "/images/Worship.jpg";
        break;
      case "Health Services":
        image = "/images/Health.png";
        break;
      case "Community Use":
        image = "/images/Community.jpg";
        break;
      case "Retail":
        image = "/images/Retail.jpg";
        break;
      case "Education Centre":
        image = "/images/Education.jpg";
        break;
      case "Office":
        image = "/images/Office.png";
        break;
      case "Vacant Land":
        image = "/images/Vacant.jpg";
        break;
      case "Purpose Built":
        image = "/images/Purpose.jpg";
        break;
      case "Specialist Residential Accomodation":
        image = "/images/Specialist.webp";
        break;
      case "Residential Accomodation":
        image = "/images/Residental.jpg";
        break;
      case "Industrial":
        image = "/images/Industrial.jpg";
        break;
      case "Warehouse/Store":
        image = "/images/Warehouse.webp";
        break;
      default:
        image = "/images/Blank.jpg";
    }

    image = process.env.PUBLIC_URL + image;
    return (
      <div className="card">
        <div className="exploreImage">
          <img src={image} />
        </div>
        <div className="cardInfo">
          <h3 className="cardTitle">{data.name}</h3>
          {/* <Labels />*/}
          {/* Average Score */}
          <h3>{data.theme}</h3>
          {/* Views*/}
        </div>
        {props.selected == true ? (
          <svg
            className="arrowRight"
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25 15L0 0.566243L0 29.4338L25 15Z" fill="#499951" />
          </svg>
        ) : (
          <div></div>
        )}
      </div>
    );
  } else {
    <div></div>;
  }
}
