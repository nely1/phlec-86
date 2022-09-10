import React from 'react';

export default function ExploreCard(props) {
    /* Need to retrieve info from database.
     * Best to pass in an object retrieved in ExplorePage as prop */


    return (
        <div className="card">
            {/* Need img source here 
                props.data.img */ }
            <img src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?cs=srgb&dl=pexels-stein-egil-liland-1933316.jpg&fm=jpg" />
            <div className="cardInfo" >
                <h3>Title</h3>
                {/* <Labels />*/}
                {/* Average Score */}
                <h3>Score</h3>
                {/* Views*/}
                <h3>Views</h3>
            </div>
        </div>
    );
}
