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
                <h3 className="cardTitle">{data.name}</h3>
                {/* <Labels />*/}
                {/* Average Score */}
                <h3>{data.theme}</h3>
                {/* Views*/}
                <h3>{data.likes}</h3>
                {
                    props.selected == true ?
                    <svg className="arrowRight" width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 15L0 0.566243L0 29.4338L25 15Z" fill="#499951"/>
</svg>

                    : <div></div>
                    
                }
            </div>
</div>
);
}
