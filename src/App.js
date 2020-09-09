import React from "react";
import "./assets/stylesheets/App.css";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Map center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </Layout>
  );
}

export default App;
