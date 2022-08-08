import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

export const Map: React.FC = () => {
  const MapComp = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiaHBpY2FyZCIsImEiOiJja3NyZ2kwMWgwbWtzMnF0Zmx0cTNpNnY4In0.VJXVzllg9hbWLVIowlHRFA"
  });

  return (
    <MapComp
      style="mapbox://styles/mapbox/streets-v9"
      center={[-96, 38]}
      zoom={[3.83]}
      containerStyle={{
        height: "100vh",
        width: "100%"
      }}
    >
    </MapComp>
  );
}