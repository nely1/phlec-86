import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import "./PlanViewPage.css";
import { getLocations } from "../actions/location";
import { getPlanOne, updatePlan, deletePlan } from "../actions/plan";
import Routing from "../components/RoutingMachine";

// Gives a sliding effect when moving the map
function LocationMarker() {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });
}

export default function PlanEditPage({ loginState }) {
  const planId =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  const [plannedLocations, setPlan] = useState([]);
  const [load, setLoad] = useState(0);
  const [counter, setCounter] = useState(0);
  const landmarks = useSelector((state) => state?.location);
  const prevPlan = useSelector((state) => state?.plan);
  const history = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
    dispatch(getPlanOne(planId));
  }, [dispatch, planId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const userCurrent = JSON.parse(localStorage.getItem("profile"));

    const locationID = [];
    for (const loc of plannedLocations) {
      locationID.push(loc.id);
    }

    const toUpload = {
      userid: userCurrent.result._id,
      tripName: event.target.planName.value,
      locations: locationID,
      scheduledDate: event.target.datePlan.value,
    };

    dispatch(updatePlan(planId, toUpload));
    history("/plan");
  }

  function deletePlanFunc() {
    dispatch(deletePlan(planId));
    history("/plan");
  }

  var dateFormatted = "";

  // Fetches all places of interest that were previously planned, along with the name and date of the plan
  // For each planned place of interest, set the location marker to be in the planned state
  if (prevPlan.length > 0 && load !== 1) {
    for (let index = prevPlan[0].locations.length - 1; index >= 0; index--) {
      const loc = prevPlan[0].locations[index];

      for (const melbLoc of landmarks) {
        if (loc === melbLoc._id) {
          var newLoc = true;
          var newEntry = {
            id: melbLoc._id,
            title: melbLoc.name,
            latlng: [melbLoc.latitude, melbLoc.longitude],
            theme: melbLoc.theme,
          };
          for (const plannedLoc of plannedLocations) {
            if (JSON.stringify(plannedLoc) === JSON.stringify(newEntry)) {
              newLoc = false;
              break;
            }
          }
          if (newLoc) {
            setCounter(counter + 1);
            setPlan([...plannedLocations, newEntry]);
          }
          break;
        }
      }
    }

    if (prevPlan[0].locations.length === plannedLocations.length) {
      setLoad(1);
    }

    dateFormatted =
      new Date(prevPlan[0].scheduledDate).getFullYear() +
      "-" +
      ("0" + (new Date(prevPlan[0].scheduledDate).getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date(prevPlan[0].scheduledDate).getDate()).slice(-2);
  }

  const today =
    new Date().getFullYear() +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + new Date().getDate()).slice(-2);

  // Prevents user from accessing page if not logged in, later redirected to login page in use effect
  // Prevents displaying webpage unitl plans are loaded from database
  if (!loginState || prevPlan.length === 0) {
    return <></>;
  }

  // Create a marker that has an on-click effect to set it as a planned location
  let markers = landmarks.map((data) => (
    <Marker
      key={data.latitude}
      position={[data.latitude, data.longitude]}
      eventHandlers={{
        click: () => {
          var newEntry = {
            id: data._id,
            title: data.name,
            latlng: [data.latitude, data.longitude],
            theme: data.theme,
          };
          setCounter(counter + 1);
          setPlan([...plannedLocations, newEntry]);
        },
      }}
    >
      <Tooltip>
        Name: {data["name"]}
        <br />
        Location Type: {data.theme}
        <br />
      </Tooltip>
    </Marker>
  ));

  return (
    <>
      <div className="PlanPageBase">
        <div className="PlanPageGrid">
          <div className="PlanPageGridItem">
            <MapContainer
              center={[-37.80911373, 144.9742219]}
              zoom={25}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
                                contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers}

              <LocationMarker />
              <Routing
                key={counter}
                plannedLocations={plannedLocations}
                setPlan={setPlan}
              />
            </MapContainer>
          </div>

          <div className="PlanPageGridItem">
            <div className="PlanPageUpComing">
              <div className="PlanPageUpComingTop">
                <div className="PlanH2">Plan the tour</div>
              </div>

              <div className="PlanPageUpComingBottom">
                <form onSubmit={handleSubmit} id="planForm">
                  <div className="PlanH3">
                    Trip name: &nbsp;&nbsp;
                    <input
                      className="PlanPageNameInput"
                      type="data"
                      defaultValue={prevPlan[0].tripName}
                      id="planName"
                      name="planName"
                      required
                    ></input>
                  </div>

                  <div className="PlanH3">
                    Set the date: &nbsp;&nbsp;
                    <input
                      type="date"
                      id="datePlan"
                      name="datePlan"
                      defaultValue={dateFormatted}
                      min={today}
                      required
                    ></input>
                  </div>

                  <hr></hr>

                  <h5>Your destinations:</h5>
                  <div className="PlanPageUpComingTimeBox">
                    <div className="locationNames">
                      <ol>
                        {plannedLocations.map((location) => (
                          <li key={location.title}>
                            <h4>{location.title}</h4>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <span className="PlanPageButtons">
                    <button
                      type="button"
                      className="PlanPageDelete  text3"
                      onClick={deletePlanFunc}
                    >
                      Delete trip
                    </button>

                    <button
                      type="submit"
                      className="PlanPageSaveChanges text3"
                      value="Submit"
                    >
                      Save Changes
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
