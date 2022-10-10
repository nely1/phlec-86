import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

// Documentation to customise routing: http://www.liedman.net/leaflet-routing-machine/api/#l-routing-control

// To change marker color, change all instances of the color "red" (iconURL too)
var redIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const createRoutineMachineLayer = (props) => {

  const planRemoveItem = (item) => {
    props.plannedLocations.splice(item, 1); 
    props.setPlan([...props.plannedLocations]);
    console.log(props.plannedLocations);
  }
  var coords = [];
  var popupMsg = [];

  for (let i = 0; i < props.plannedLocations.length; i++) {
    coords.push(props.plannedLocations[i].latlng);
    popupMsg.push("Name: " + props.plannedLocations[i].title + "<br />" + "Location Type: " + props.plannedLocations[i].theme);
  }

  var control = L.Routing.control({
    waypoints: coords,

    lineOptions: {
      styles: [{ color: 'red'}],
      missingRouteStyles: [{color: 'yellow', opacity: 0.75, weight: 7},{color: 'black', weight: 2, dashArray: '7,12'}],
    },

    
    createMarker: function(i, wp, nWps) {
      return L.marker(wp.latLng, {icon: redIcon }).bindTooltip(popupMsg[i]).on('click', function(e){control.spliceWaypoints(i,1); planRemoveItem(i)});
    },
    

  });

  return control;

};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
