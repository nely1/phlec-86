import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../actions/explore";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";



export default function ExplorePage() {
    // const reviews = useSelector((state) => state.review);
    const locations = useSelector((state) => state.location);
    
    console.log("locations: " + locations);
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        dispatch(getReview(JSON.parse(localStorage.getItem("review"))));
    }, [dispatch])



    return (
        <div>
            <div className="exploreFilters">
                <SearchBar /> 
            </div>
            <div className="Explore-Reviews">
                <ul className="exploreCards" >
                    {locations}
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
