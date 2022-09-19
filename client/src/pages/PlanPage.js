import React, {useState} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, useMapEvent, Polyline } from 'react-leaflet'
import "./PlanPage.css";


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
    {title: "The Good Place", latlng: [-37.7983, 144.9610], planned: true, score: 1.3}, 
    {title: "UniMelb", latlng: [-37.7971, 144.9621], planned: true, score: 9.8 }, 
    {title: "Lincoln Square", latlng: [-37.7979, 144.9601], planned: true, score: 7.7}, 
    ]


    var polyline = [];

    for (let i = 0; i < dummyPopups.length; i++) {
        if (dummyPopups[i].planned){
            polyline.push(dummyPopups[i].latlng);
        }
    }

    console.log(polyline);

    const routeColor = { color: 'blue' }

    let markers = dummyPopups.map((data) => 
        <Marker key={data.title} position={data.latlng}>
            <Popup>
            Name: {data.title}<br /> Score: {data.score}
            </Popup>
        </Marker>
    );

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
                        
                        {markers}

                        <LocationMarker />
                        <Polyline pathOptions={routeColor} positions={polyline} />
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
