import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { sunsetServices } from "../services/sunsetServices";
import { extractedData } from "../utils/utils";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

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
                    <Popup>Sunset today at: {sunsetTime}</Popup>
                </Marker>
            ))}
        </MarkerClusterGroup>
    );
};
