import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "./PlanPage.css";


export default function PlanPage() {

    return (
        <>
        <div className="HomePageBase">
            <div className="HomePageGrid">   
                <div className="HomePageGridItem">
                    <MapContainer center={[-37.7983, 144.9610]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-37.7983, 144.9610]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
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
