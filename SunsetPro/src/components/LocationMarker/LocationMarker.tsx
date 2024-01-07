import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { sunsetServices } from "../../services/sunsetServices";
import { extractedData } from "../../utils/utils";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./LocationMarker.css";
import { Link } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LocationMarker = () => {
    // const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
    const [sunsetTime, setSunsetTime] = useState<string | null>(null);
    const getSunsetTime = sunsetServices();

    const customIcon = new Icon({
        iconUrl: "https://www.iconpacks.net/icons/2/free-sun-icon-1845-thumb.png",
        iconSize: [38, 38]
    });

    return (
        <MarkerClusterGroup chunkedLoading>
            {extractedData.map((marker, index) => (
                <Marker
                    key={index}
                    position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                    icon={customIcon}
                    eventHandlers={{
                        click: (e) => {
                            getSunsetTime(e.latlng.lat, e.latlng.lng).then((sunsetTime) => {
                                setSunsetTime(sunsetTime);
                            });
                        },
                    }}>
                    <Popup>
                        <h1 className="text-xl text-center font-bold text-slate-800" ><FontAwesomeIcon icon={faClock} className="text-red-500" /> {sunsetTime}</h1>
                        <p className="text-slate-800"> Check out the best locations:
                            <Link to="/" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">
                                Read article →
                            </Link></p>
                        <img className="rounded-lg" src="https://offloadmedia.feverup.com/portosecreto.co/wp-content/uploads/2022/03/13114446/sunset-porto-unsplash.jpg"></img>
                    </Popup>
                </Marker>
            ))}
        </MarkerClusterGroup>
    );
};
