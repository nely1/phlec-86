import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations, postReview } from "../actions/location";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";

export default function ExplorePage({ loginState }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [selected, setSelected] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const locations = useSelector((state) => state?.location);

  const id = JSON.parse(localStorage.getItem("profile"));
  const username = id.result.userName;

  useEffect(() => {
    if (!loginState) {
      history("/login");
    }
  }, [history, loginState]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const toUpload = locations[selected];
    const reviewUpload = {
      description: event.target.review.value,
      username: username,
    };

    toUpload.reviews.push(reviewUpload);
    dispatch(postReview(id, toUpload));
  };

  let reviews = [];

  // convert data to array
  if (locations[0] !== undefined) {
    reviews = locations[selected].reviews;
  }

  if (locations[selected] !== undefined) {
    reviews = locations[selected].reviews.map((review) => {
      return (
        <li /* key={review.description} */>
          <ReviewCard data={review}></ReviewCard>
        </li>
      );
    });
  }

  let locationArray = [];
  for (let index = 0; index < locations.length; index++) {
    locationArray.push(locations[index]);
  }

  locationArray = locationArray
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((location, index) => {
      return (
        <li
          key={location._id}
          onClick={() => {
            setSelected(index);
          }}
        >
          <ExploreCard selected={selected === index} data={location} />
        </li>
      );
    });

  if (!loginState) {
    return <></>;
  }

  function updateSearch(event) {
    setSearchTerm(event.target.value);
  }

  let themes = [];
  for (let i = 0; i < locations.length; i++) {
    if (locations[i] !== undefined && !themes.includes(locations[i].theme)) {
      themes.push(locations[i].theme);
    }
  }

  return (
    <div>
      <div className="exploreFilters">
        <SearchBar onChange={updateSearch} />
      </div>
      <div className="Explore-Reviews">
        <ul className="exploreCards">{locationArray}</ul>
        <div className="reviewCards">
          <ul className="reviews">
            {/* reviews === undefined ? <div></div> : reviews */}
            {reviews.length === 0 ? <h3>No reviews yet.</h3> : reviews}
          </ul>
          {/* if (loggedIn && ! user has review) */}
          <div className="reviewCard userReview">
            <form className="userReview" onSubmit={handleSubmit}>
              <textarea
                className="userReviewContent"
                id="review"
                name="review"
              />
              <input
                className="styledButton untoggledButton postReviewButton"
                type="submit"
                value="Post"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
