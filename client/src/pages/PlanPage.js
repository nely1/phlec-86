import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PlanPage.css";
import { getPlans } from "../actions/plan";

// Calculate the corresponding time left until the planned date
function getMsg(scheduledDate) {
  const timeRemaining =
    new Date(scheduledDate).getDate() - new Date().getDate();
  const daysRemaining = Math.ceil(
    (new Date(scheduledDate).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );
  if (timeRemaining === 0) {
    return "Today";
  } else if (timeRemaining === 1) {
    return "1 day away";
  } else {
    return daysRemaining + " days away";
  }
}

export default function PlanPage({ loginState }) {
  const plans = useSelector((state) => state?.plan);
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loginState) {
      history("/login");
    } else {
      dispatch(getPlans(JSON.parse(localStorage.getItem("profile"))));
    }
  }, [loginState, history, dispatch]);

  // Prevents user from accessing page if not logged in, later redirected to login page in use effect
  if (!loginState) {
    return <></>;
  }

  let planItem = plans.map((data) => (
    <div className="PlanDisplay" key={data._id}>
      <p className="TripName">{data.tripName}</p>
      <div className="Countdown">
        {getMsg(data.scheduledDate)}
        &nbsp;&nbsp;&nbsp;
        <div className="EditBtn">
          <a href={"/planEdit/" + data._id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-edit"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
              <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
              <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="Band">
        <div className="Card" id="PlanCard">
          <div className="PlanOverviewTitle">Upcoming Trips:</div>

          <div className="PlanDesc">
            <span id="PlanName">Plan name</span>
            <span id="TimeLeft">Countdown</span>
          </div>

          {planItem}

          <a href={"/planView"}>
            <div className="AddPlan" id="AddPlan">
              + Plan a new trip
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
