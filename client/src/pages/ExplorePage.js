import React from 'react';
import './ExplorePage.css';

import SearchBar from '../components/SearchBar';
import ExploreCard from '../components/ExploreCard';
import ReviewCard from '../components/ReviewCard';

const CARDS_PER_PAGE = 3;



export default function ExplorePage() {

    /* Retrieve data from db 
    data = RetrieveData();
    */
    
    const dummyData = [{title: "Aurora Borealis", score: 6.9, views: 420}, 
                     {title: "Mount Doom",      score: 0.8, views: 1000}, 
                     {title: "Planet Druidia",  score: 7.3, views: 42}]
    let cards = dummyData.map((data) => 
        <li><ExploreCard key={data.title} data={data} /></li>
    );

    console.log(cards);
    
    const dummyReviews = [
        {user: "Pat01", content: "The food is good, but the screaming won't stop.", score: 7.9},
        {user: "anon", content: "Terrible... just terrible", score: 4.2},
        {user: "hikerman42", content: "Great for eating, not for walking.", score: 6.8}]

    let reviews = dummyReviews.map((review) => <li><ReviewCard key={review.user} data={review} /></li>)
    return (
        <div>
            <div className="exploreFilters">
                <SearchBar /> 
                {/* <Filter /> */}
                {/* Wishlist */} 
            </div>
            <div className="Explore-Reviews">
                <ul className="exploreCards">
                    {cards}
                </ul>
                <div className="reviewCards">
                    <ul className="reviews">
                        {reviews}
                    </ul>
                    <button className="styledButton untoggledButton prev">{"<"}</button>
                    <button className="styledButton untoggledButton next">{">"}</button>
                </div>
            </div>            
        </div>
        
    );
}
