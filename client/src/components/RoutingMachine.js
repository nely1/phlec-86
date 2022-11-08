import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

// Documentation to customise routing: http://www.liedman.net/leaflet-routing-machine/api/#l-routing-control

// To change marker color, change all instances of the color "red" (iconURL too)
let redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const createRoutineMachineLayer = (props) => {
  // Remove a location from the plan
  const planRemoveItem = (item) => {
    props.plannedLocations.splice(item, 1);
    props.setPlan([...props.plannedLocations]);
  };
  let coords = [];
  let popupMsg = [];

  // Add a tooltip for each marker
  for (const element of props.plannedLocations) {
    coords.push(element.latlng);
    popupMsg.push(
      "Name: " + element.title + "<br />" + "Location Type: " + element.theme
    );
  }

  let control = L.Routing.control({
    waypoints: coords,

    lineOptions: {
      styles: [{ color: "red" }],
      missingRouteStyles: [
        { color: "yellow", opacity: 0.75, weight: 7 },
        { color: "black", weight: 2, dashArray: "7,12" },
      ],
    },

    createMarker: function (i, wp, nWps) {
      return L.marker(wp.latLng, { icon: redIcon })
        .bindTooltip(popupMsg[i])
        .on("click", function (e) {
          control.spliceWaypoints(i, 1);
          planRemoveItem(i);
        });
    },
  });

  return control;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
