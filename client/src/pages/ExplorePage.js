import React from 'react';
import './ExplorePage.css';

import SearchBar from '../components/SearchBar';
import ExploreCard from '../components/ExploreCard';

const CARDS_PER_PAGE = 3;



export default function ExplorePage() {

    /* Retrieve data from db 
    data = RetrieveData();
    */
    
    let dummyData = [{title: "Aurora Borealis", score: 6.9, views: 420}, 
                     {title: "Mount Doom",      score: 0.8, views: 1000}, 
                     {title: "Planet Druidia",  score: 7.3, views: 42}]
    let cards = dummyData.map((data) => 
        <li><ExploreCard key={data.title} data={data} /></li>
    );

    console.log(cards);
    

    return (
        <div>
            <div className="exploreFilters">
                <SearchBar /> 
                {/* <Filter /> */}
                {/* Wishlist */} 
            </div>

            <div>
            <ul className="exploreCards">
                {cards}
            </ul>
            {/* <ReviewCard /> */}
            </div>            
        </div>
        
    );
}
