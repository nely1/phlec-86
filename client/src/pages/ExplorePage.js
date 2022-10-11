import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../actions/location";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";



export default function ExplorePage() {
    // const reviews = useSelector((state) => state.review);

    const [selected, setSelected] = useState(0);
    console.log(selected);

    const locations = useSelector((state) => state?.location);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    let locationArray = [];

    // convert to array
    locations.map((loc) => {locationArray.push(loc)})
    console.log(locationArray);
    for (let i = 0; i < locations.length; i++) {
        locationArray[i] = <li key={i} onClick={() => {setSelected(i)}}><ExploreCard selected={selected == i ? true : false} data={locationArray[i]} /></li>;
    }


    /*
    */

    function isSelected(i) {
        if (selected == i) {
            return true;
        } else {
            return false
        }
    }

    return (
        <div>
            <div className="exploreFilters">
                <SearchBar /> 
            </div>
            <div className="Explore-Reviews">
                <ul className="exploreCards" >
                    {locationArray}
                </ul>
                <div className="reviewCards">
                    <ul className="reviews">
                        {/*reviews*/}
                    </ul>
                    {/* if (loggedIn && ! user has review) */}
                    <div className="reviewCard userReview">
                        <form className="userReview">
                            <textarea className="userReviewContent"/>
                        <input className="styledButton untoggledButton" type="submit" value="Post"/>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    );
}

