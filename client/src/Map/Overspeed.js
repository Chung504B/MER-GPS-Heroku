import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { cities } from "../data/cities";
import { cars } from "../data/cars";
import { Marker, Tooltip, useMap } from "react-leaflet";
import { MarkerLayer } from "../layers/marker_layer";
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";
import { test } from "../data/test";
import { MyComponent } from "../data/test3";

export const overSpeed = () => {
  const position = [23.6, 120.9];

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerLayerWithTooltip data={MyComponent} />
    </MapContainer>
  );
};
