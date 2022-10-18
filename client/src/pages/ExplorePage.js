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
        toUpload.reviews.push(event.target.review.value);
        dispatch(postReview(id, toUpload));
    }

    let reviews = [];

    // convert data to array
    //locationArray = locations.slice(0);
    if (locations[0] !== undefined) {
        reviews = locations[selected].reviews; 
    }

    if (locations[selected] !== undefined) {
        reviews = locations[selected].reviews.map((review) => { 
        return (<li key={ review }><ReviewCard data={ review } user={ username }>{ review }</ReviewCard></li>)
    });
    }
    


    /*
    let locationArray = locations.map((data, index) => {
        console.log(index);
        <li key={ index } onClick={() => { setSelected(index); }}>
            <ExploreCard selected={selected == index} data={ data } />
        </li>;
    }) 
    */
    let locationArray = [];
    for (let index = 0; index < locations.length; index++) {
        locationArray.push(
            <li key={ index } onClick={() => { setSelected(index); }}>
                <ExploreCard selected={selected == index} data={ locations[index] } />
            </li>
        );
    }

    console.log(locationArray);
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
                    { locationArray }
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

