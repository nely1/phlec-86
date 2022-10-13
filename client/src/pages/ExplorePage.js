import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../actions/location";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";



export default function ExplorePage({loginState}) {

    const [selected, setSelected] = useState(0);

    const locations = useSelector((state) => state?.location);
    const dispatch = useDispatch();
    const history = useNavigate();

    
    useEffect(() => {
        if (!loginState) {
            history("/login");
        }
        else {
            dispatch(getLocations());
        }
    }, [history, loginState, dispatch]);

    

    let locationArray = [];
    let reviews;

    // convert data to array
    locations.map((loc) => {locationArray.push(loc)})
    if (locationArray.length > 0) {
        reviews = locationArray[selected].reviews; 
        }

    
    console.log(reviews);
    for (let i = 0; i < locations.length; i++) {
        locationArray[i] = 
            <li key={i} onClick={() => { setSelected(i); reviews = locationArray[selected].reviews }}>
                <ExploreCard selected={selected == i ? true : false} data={ locationArray[i] } />
            </li>;
    }

    if (reviews !== undefined) {
        reviews.map((review) => {<li><ReviewCard data={review} /></li>})
    }

    function isSelected(i) {
        if (selected == i) {
            return true;
        } else {
            return false
        }
    }

    if (!loginState) {
        return <></>;
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
                        { reviews === undefined ? <div></div> : reviews }
                        
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../actions/location";
import { postReview } from "../actions/explore";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";



export default function ExplorePage({loginState}) {

    const [selected, setSelected] = useState(0);
    const [review, setReview] = useState("");
    const locations = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const history = useNavigate();

    
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
        const toUpload = {
            location: locationArray[selected].props.children.props.data,
            review: event.target.review.value
        };
        console.log(locationArray[selected].props.children.props.data)
        dispatch(postReview(toUpload));
        
    }

    let locationArray = [];
    let reviews;

    
    // convert data to array
    locationArray = locations;
    if (locationArray.length > 0) {
        reviews = locationArray[selected].reviews; 
        }

    
    console.log(reviews);
    for (let i = 0; i < locations.length; i++) {
        locationArray[i] = 
            <li key={i} onClick={() => { setSelected(i); reviews = locationArray[selected].reviews }}>
                <ExploreCard selected={selected == i ? true : false} data={ locationArray[i] } />
            </li>;
    }

    if (reviews !== undefined) {
        reviews.map((review) => {<li><ReviewCard data={review} /></li>})
    }

    function isSelected(i) {
        if (selected == i) {
            return true;
        } else {
            return false
        }
    }

    if (!loginState) {
        return <></>;
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
                        { reviews === undefined ? <div></div> : reviews }
                        
                    </ul>
                    {/* if (loggedIn && ! user has review) */}
                    <div className="reviewCard userReview">
                        <form className="userReview" onSubmit={handleSubmit}>
                            <textarea className="userReviewContent" id="review" name="review"/>
                        <input className="styledButton untoggledButton" type="submit" value="Post"/>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    );
}
