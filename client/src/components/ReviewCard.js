import React from 'react'

export default function ReviewCard(props) {

    console.log(props.data)
    return (
        <div className="reviewCard">
            \
            <div className="reviewUser">
                {props.data.user}
            </div>
            <div className="reviewContent">
                {props.data.content} 
            </div>
        </div>
    )
}
