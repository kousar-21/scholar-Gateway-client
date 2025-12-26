import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center }) {
  const map = useMap();
  map.flyTo(center, 13, { duration: 1.5 });
  return null;
}

const MapDisplay = ({ lat, lng, locationName }) => {
  const position = [lat || 0, lng || 0];

  return (
  
    <div className="relative z-0 p-4 md:p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-sm overflow-hidden">
      
      <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
        Location Explorer
      </h2>
      
      {/* 
         isolation-auto helps prevent Leaflet from escaping its container
      */}
      <div className="h-[250px] md:h-[450px] w-full rounded-lg overflow-hidden border-2 md:border-4 border-white shadow-inner relative z-0">
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false} 
          className="h-full w-full z-0"
          style={{ zIndex: 0 }} 
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {lat && lng && (
            <>
              <ChangeView center={position} />
              <Marker position={position}>
                <Popup>
                  <span className="font-medium text-purple-800">
                    {locationName || "Selected Location"}
                  </span>
                </Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>

      <div className="mt-4 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center">
        <p className="text-xs md:text-sm text-gray-600">
          Coordinates: <span className="font-mono bg-orange-100 px-2 py-1 rounded">
            {lat?.toFixed(4)}, {lng?.toFixed(4)}
          </span>
        </p>
        <button className="w-full md:w-auto bg-blue-800 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium">
          {locationName}
        </button>
      </div>
    </div>
  );
};

export default MapDisplay;