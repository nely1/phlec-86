import React, {useState} from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, useMapEvent, Polyline } from 'react-leaflet'
import "./PlanPage.css";
import Routing from "./RoutingMachine";


function LocationMarker() {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
          animate: true,
        })
      })
  }
  

export default function PlanPage() {

    var dummyPopups = 
    [
    {title: "Ian Potter Museum", latlng: [-37.7977, 144.9641], planned: true, score: 1.3}, 
    {title: "UniMelb Sports", latlng: [-37.7942, 144.9621], planned: true, score: 9.8 }, 
    {title: "Newman College", latlng: [-37.7954, 144.9633], planned: true, score: 7.7}, 
    ]


    /* Currently all the markers are planned, and all planned markers are handled by the routing machine */

    /* Use this for popups that are not going to be planned */
    var coords = [];
    for (let i = 0; i < dummyPopups.length; i++) {
        if (dummyPopups[i].planned){
            coords.push(dummyPopups[i].latlng);
        }
    }

    let markers = dummyPopups.map((data) => 
    <Marker key={data.title} position={data.latlng}>
        <Popup>
        Name: {data.title}<br /> Score: {data.score}
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
                    <MapContainer center={[-37.7983, 144.9610]} zoom={28} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {/* {markers} */}

                        <LocationMarker />
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
