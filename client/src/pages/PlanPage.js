import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PlanOverviewPage.css";
import { getPlans, postPlan } from "../actions/plan";

function getMsg(num) {
    if (num === 0){
        return "Today"
    }
    return num + " days away"
}

export default function PlanPage({ loginState }) {
    const plans = useSelector((state) => state?.plan);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlans(JSON.parse(localStorage.getItem("profile"))));
    }, [dispatch]);
    
    if (!loginState) {
        return <></>;
    }

    let planItem = plans.map((data) => (      
        <div class="PlanDisplay">
            <p class="TripName">{data.tripName}</p>
            <p class="Countdown">{getMsg(new Date(data.scheduledDate).getDate()- new Date().getDate())} 
            &nbsp;&nbsp;&nbsp;  
                <div class = "EditBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="40" 
                    height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" 
                    stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                    </svg> 
                </div>
            </p>
        </div>
    ));

    return (
        <>
            <div class="Band">
                <div class="Card" id="PlanCard">
                    <div class = "PlanOverviewTitle">
                        Upcoming Trips:
                    </div>

                    <div class = "PlanDesc">
                        <span id = "PlanName">Plan name</span>
                        <span id = "TimeLeft">Countdown</span>
                    </div>

                    {planItem}

                    <a href={"/plan"}>
                        <div className="AddPlan" id ="AddPlan">
                            + Plan a new trip
                        </div>
                    </a>
                </div>
            </div>    
        </>
    );
}
