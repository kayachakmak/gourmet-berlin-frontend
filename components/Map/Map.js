import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import RestaurantPopuP from "../RestaurantPopUp/RestaurantPopUp";
import { Fragment } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

export default function Map({ restaurants }) {
  return (
    <>
      <MapContainer
        className="mt-2 relative z-0"
        center={[52.52, 13.405]}
        zoom={12}
        style={{ height: "500px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {restaurants.map((restaurant) => (
          <Fragment key={restaurant.id}>
            <Marker
              position={[
                restaurant.coordinates.lat,
                restaurant.coordinates.long,
              ]}
            >
              <Popup>
                <RestaurantPopuP restaurant={restaurant} />
              </Popup>
            </Marker>
          </Fragment>
        ))}
      </MapContainer>
    </>
  );
}
