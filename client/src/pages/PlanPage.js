import React from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, useMapEvent, Polyline } from 'react-leaflet'
import "./PlanPage.css";
import Routing from "./RoutingMachine";
import MelbourneLandmarks from "./LandmarksData.json"

function LocationMarker() {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
          animate: true,
        })
      })
  }

// This funciton does not work, possible causes is that the latitude and longitude in the JSON file are swapped
// function Landmarks(){
//     const map = useMap();
//     const landmarks = new L.GeoJSON(MelbourneLandmarks);
//     landmarks.addTo(map);
// }  

export default function PlanPage() {
    var dummyPopups = 
    [
    {title: "Ian Potter Museum", latlng: [-37.79739396, 144.9641567], planned: true}, 
    {title: "UniMelb Sports", latlng: [-37.7942, 144.9621], planned: true}, 
    {title: "Newman College", latlng: [-37.7954, 144.9633], planned: true}, 
    ]

    /* Currently all the markers are planned, and all planned markers are handled by the routing machine */

    /* Use this for popups that are not going to be planned */
    var coords = [];
    for (let i = 0; i < dummyPopups.length; i++) {
        if (dummyPopups[i].planned){
            coords.push(dummyPopups[i].latlng);
        }
    }

    let markers = MelbourneLandmarks.map((data) => 
    <Marker key={data.Latitude} position={[data.Latitude, data.Longitude]}>
        <Popup>
        Name: {data['Feature Name']}<br />
        </Popup>
    </Marker>
    );


    /* Routing option that doesn't consider physics and the natural world */
    // console.log(coords);
    //<Polyline pathOptions={routeColor} positions={coords} />
    // const routeColor = { color: 'blue' }

    return (
        <>
        
        <div className="HomePageBase">
            <div className="HomePageGrid">   
                <div className="HomePageGridItem">
                    <MapContainer center={[-37.7954, 144.9633]} zoom={28} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />                        
                        {markers}

                        <LocationMarker />
                        {/* <Landmarks /> */}
                        <Routing plannedLocations = {dummyPopups} />    

                    </MapContainer>  
                    
                </div>

                <div className="HomePageGridItem">
                    <div className="HomePageUpComing">
                        <div className="HomePageUpComingTop">
                            <h1>Plan the tour</h1>
                        </div>
                        <div className="HomePageUpComingBottom">
                            <h2>Name: Boy's Night Out</h2>
                            <div className="HomePageUpComingTimeBox">
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
