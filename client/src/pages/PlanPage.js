import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, useMapEvent, Tooltip } from "react-leaflet";
import "./PlanPage.css";
import { getLandmarks } from "../actions/plan";
import Routing from "../components/RoutingMachine";
import MelbourneLandmarks from "./LandmarksData.json";

function LocationMarker() {
    const map = useMapEvent("click", (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: true,
        });
    });
}

// Emergency redo location model code
// import locations from '../data/locationModel.js' 
// import { createRequire } from "module"; // Bring in the ability to create the 'require' method
// const require = createRequire(import.meta.url); // construct the require method
// const landmarks = require('../data/LandmarksData.json') // use the require method

// export const loginUser = async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     for (const location of landmarks){
//         const newLandmark = await locations.create({
//             theme: location.Theme, 
//             subTheme: location['Sub Theme'], 
//             name: location['Feature Name'],
//             latitude: location.Latitude,
//             longitude: location.Longitude,
//             reviews: [],
//         });
//     }


export default function PlanPage() {
    const [plannedLocations, setPlan] = useState([]);
    const [counter, setCounter] = useState(0);

    const landmarks = useSelector((state) => state.landmarks);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLandmarks());
    }, [dispatch]);

    async function handleSubmit(event) {
        event.preventDefault();
        const userCurrent = JSON.parse(localStorage.getItem("profile"));
        const toUpload = {
            userid: userCurrent.result._id,
            tripName: event.target.planName.value,
            locations: plannedLocations,
            scheduleDate: event.target.datePlan.value,
        };
        console.log(landmarks);
    }


    let markers = MelbourneLandmarks.map((data) => (
        <Marker
            key={data.Latitude}
            position={[data.Latitude, data.Longitude]}
            eventHandlers={{
                click: () => {
                    var newEntry = {
                        title: data["Feature Name"],
                        latlng: [data.Latitude, data.Longitude],
                        theme: data.Theme,
                    };
                    setCounter(counter + 1);
                    setPlan([...plannedLocations, newEntry]);
                },
            }}
        >
            <Tooltip>
                Name: {data["Feature Name"]}
                <br />
                Location Type: {data.Theme}
                <br />
            </Tooltip>
        </Marker>
    ));

    return (
        <>
            <div className="PlanPageBase">
                <div className="PlanPageGrid">
                    <div className="PlanPageGridItem">
                        <MapContainer center={[-37.80911373, 144.9742219]} zoom={25} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
                                contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {markers}

                            <LocationMarker />
                            <Routing key = {counter} plannedLocations = {plannedLocations} setPlan = {setPlan} />  
                        </MapContainer>     
                    </div>

                <div className="PlanPageGridItem">
                    <div className="PlanPageUpComing">
                        <div className="PlanPageUpComingTop">
                            <h2>Plan the tour</h2>
                        </div>

                        <div className="PlanPageUpComingBottom">
                            <form onSubmit={handleSubmit} id="planForm">
                                <h3>Trip name: &nbsp;&nbsp;
                                <input
                                    className="PlanPageNameInput"
                                    type="data"
                                    placeholder=" Name..."
                                    id="planName"
                                    name="planName"
                                    required
                                ></input>
                                </h3>

                                <h3>Set the date: &nbsp;&nbsp;
                                <input type="date" id="datePlan" name="datePlan" required></input>
                                </h3>

                                <hr></hr>

                                <h1>Your destinations:</h1>
                                <div className="PlanPageUpComingTimeBox">
                                    <div className = "locationNames">
                                        <ol>
                                            {
                                                plannedLocations.map(
                                                    location => (
                                                        <li key={location.title}> 
                                                            <h4>{location.title}</h4>
                                                        </li>
                                                    )
                                                )
                                            }
                                        </ol>
                                    </div>
                                </div>

                                <div className="PlanPageSave">
                                    <button type="submit" className="planPageSave text3" value="Submit">
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
