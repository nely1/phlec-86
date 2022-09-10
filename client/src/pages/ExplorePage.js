import React from 'react';
import './ExplorePage.css';

import SearchBar from '../components/SearchBar';
import ExploreCard from '../components/ExploreCard';

const CARDS_PER_PAGE = 3;



export default function ExplorePage() {

    /* Retrieve data from db 
     * */


    return (
        <div>
            <div className="exploreFilters">
                <SearchBar /> 
                {/* <Filter /> */}
                {/* Wishlist */} 
            </div>

            <div>
            <ul className="exploreCards">
                <li><ExploreCard /></li>
            </ul>
            {/* <ReviewCard /> */}
            </div>            
        </div>
        
    );
}
