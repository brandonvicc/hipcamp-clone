import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
  marginTop: "15px",
};

const Maps = ({ apiKey, lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const center = {
    lat: parseInt(lat),
    lng: parseInt(lng),
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker key="marker_1" position={center} />
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
