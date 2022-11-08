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
import { postPlan } from "../actions/plan";
import Routing from "../components/RoutingMachine";

function LocationMarker() {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });
}

export default function PlanViewPage({ loginState }) {
  const [plannedLocations, setPlan] = useState([]);
  const [counter, setCounter] = useState(0);
  const landmarks = useSelector((state) => state?.location);

  const history = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

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
    dispatch(postPlan(toUpload));
    history("/plan");
  }

  const today =
    new Date().getFullYear() +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + new Date().getDate()).slice(-2);

  // Prevents user from accessing page if not logged in, later redirected to login page in use effect
  if (!loginState) {
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
                      placeholder=" Name..."
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

                  <div className="PlanPageSave">
                    <button
                      type="submit"
                      className="planPageSave text3"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
