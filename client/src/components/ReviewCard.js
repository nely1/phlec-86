import React from 'react'

export default function ReviewCard(props) {

    console.log("props.data = " + props.data)
    return (
        <div className="reviewCard">
            <div className="reviewContent">
                { props.children }
            </div>
            <div className="username">
                <b>{ props.user }</b>
            </div>
        </div>
    )
}
