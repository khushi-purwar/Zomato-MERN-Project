import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { MdContentCopy  } from "react-icons/md";
import { FaDirections } from "react-icons/fa";


const Mapview = (props) => {
    return (
        <>
             <div>
            <h4 className="text-xl font-regular">Call</h4>
            <h5 className="text-zomato-200 font-medium">{props.phno}</h5>
          </div>

          <div>
            <h4 className="text-xl font-regular mb-3">Direction</h4>
            <div className="w-full h-48 ">
            <MapContainer
              center={props.mapLocation}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={props.mapLocation}>
                <Popup>
                  {props.title}
                </Popup>
              </Marker>
            </MapContainer>
            </div>
            

          </div>

          <p>{props.address}</p>
           
           <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg border-gray-400">
              <span className="text-lg"><MdContentCopy /></span>  Copy
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg border-gray-400">
           <span className="text-zomato-400 text-lg">    < FaDirections />  </span>  Direction
            </button>
           </div>
        </>
    )
}

export default Mapview;
