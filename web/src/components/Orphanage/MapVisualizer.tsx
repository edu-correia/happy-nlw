import React from 'react';

import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

interface MapProps{
    latitude: number;
    longitude: number;
}

const MapVisualizer: React.FC<MapProps> = ({latitude, longitude}) => {
    return (
        <Map 
            center={[latitude,longitude]} 
            zoom={16} 
            style={{ width: '100%', height: 280 }}
            dragging={false}
            touchZoom={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            >
            <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker interactive={false} icon={happyMapIcon} position={[latitude,longitude]} />
        </Map>
    )
}

export default MapVisualizer;