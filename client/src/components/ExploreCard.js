import React from 'react';

export default function ExploreCard(props) {
    /* Need to retrieve info from database.
     * Best to pass in an object retrieved in ExplorePage as prop */
    let data = props.data;

    return (
        <div className="card">
            {/* Need img source here 
                props.data.img */ }
            <img src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?cs=srgb&dl=pexels-stein-egil-liland-1933316.jpg&fm=jpg" />
            <div className="cardInfo" >
                <h3>{data.title}</h3>
                {/* <Labels />*/}
                {/* Average Score */}
                <h3>{data.score}</h3>
                {/* Views*/}
                <h3>{data.views}</h3>
            </div>
        </div>
    );
}
