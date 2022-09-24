import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvent, Tooltip } from "react-leaflet";
import "./PlanPage.css";
import Routing from "../components/RoutingMachine";
import MelbourneLandmarks from "./LandmarksData.json";

function LocationMarker() {
    const map = useMapEvent("click", (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: true,
        });
    });
}

// function SetPlan(props, planArr) {
//     planArr.push(
//         {
//             title: props['Feature Name'],
//             latlng: [props.Latitude, props.Longitude],
//             theme: props.Theme,
//         }
//     )
//     console.log(planArr);
// }

// This funciton does not work, possible causes is that the latitude and longitude in the JSON file are swapped
// function Landmarks(){
//     const map = useMap();
//     const landmarks = new L.GeoJSON(MelbourneLandmarks);
//     landmarks.addTo(map);
// }

export default function PlanPage() {
    const [plannedLocations, setPlan] = useState([]);

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
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {markers}

                            <LocationMarker />
                            <Routing key={plannedLocations.length} plannedLocations={plannedLocations} />
                            {/* <Landmarks /> */}
                        </MapContainer>
                    </div>

                    <div className="PlanPageGridItem">
                        <div className="PlanPageUpComing">
                            <div className="PlanPageUpComingTop">
                                <h1>Plan the tour</h1>
                            </div>
                            <div className="PlanPageUpComingBottom">
                                <h2>Name: Boy's Night Out</h2>
                                <div className="PlanPageUpComingTimeBox">
                                    <h2>1. The Good Place</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}