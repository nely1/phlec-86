import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations, postReview } from "../actions/location";
// import { postReview } from "../actions/explore";

import "./ExplorePage.css";

import SearchBar from "../components/SearchBar";
import ExploreCard from "../components/ExploreCard";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";

export default function ExplorePage({loginState}) {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [selected, setSelected] = useState(0);
    const locations = useSelector((state) => state?.location);
    useEffect(() => {
        if (!loginState) {
            history("/login");
        }       
    }, [history, loginState]);
    
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    const handleSubmit = (event) => {
        console.log("Handling Submit... ");
        event.preventDefault();
        const toUpload = locationArray[selected].props.children.props.data; 
        console.log("toUpload = " + JSON.stringify(toUpload));
        console.log("locationArray[selected].props.children.props.data: " + JSON.stringify(locationArray[selected].props.children.props.data));
        toUpload.reviews.push(event.target.review.value);
        console.log("toUpload.reviews: " + toUpload.reviews);
        dispatch(postReview(toUpload));
        
    }

    let locationArray = [];
    let reviews = [];

    // convert data to array
    locationArray = locations.slice(0);
    if (locationArray.length > 0) {
        reviews = locationArray[selected].reviews; 
    }

    if (locationArray[selected] !== undefined) {
        reviews = locationArray[selected].reviews.map((review) => { 
        return (<li key={review}><ReviewCard data={ review } >{review}</ReviewCard></li>)
    });
    }
    

    console.log("reviews: " + reviews);
    for (let i = 0; i < locations.length; i++) {
        locationArray[i] = 
            <li key={i} onClick={() => { setSelected(i); }}>
                <ExploreCard selected={selected == i} data={ locationArray[i] } />
            </li>;
    }

    if (!loginState) {
        return <></>;
    }

    /*
    async function handleSubmit(event) {
        event.preventDefault();
        const userCurrent = JSON.parse(localStorage.getItem("profile"));
        const toUpload = event.target.userReviewContent.value //{
            //username: userCurrent.result.userName,
            //userid: userCurrent.result._id,
            //review: event.target.userReviewContent.value,
            //dateUploaded: new Date(),
            //locationid: locationArray[selected]._id,
        // }

        dispatch(postReview(locationArray[selected]._id, toUpload));
    }
    */

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
                        { /* reviews === undefined ? <div></div> : reviews */ }
                        { reviews }
                        
                    </ul>
                    {/* if (loggedIn && ! user has review) */}
                    <div className="reviewCard userReview">
                        <form className="userReview" onSubmit={ handleSubmit }>
                            <textarea className="userReviewContent" id="review" name="review"/>
                        <input className="styledButton untoggledButton" type="submit" value="Post"/>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    );
}

