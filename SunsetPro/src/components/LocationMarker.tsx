import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import { sunsetServices } from "../services/sunsetServices";

export const LocationMarker = () => {
    const [position, setPosition] = useState<{ lat: number, lng: number } | null>(null);
    const [sunsetTime, setSunsetTime] = useState<string | null>(null);
    const getSunsetTime = sunsetServices();

    const map = useMapEvents({
        click(e) {
            map.locate()
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());

            getSunsetTime(e.latlng.lat, e.latlng.lng).then((sunsetTime) => {
                setSunsetTime(sunsetTime);
            });
        },
        // locationfound(e) {
        //     setPosition(e.latlng)
        //     map.flyTo(e.latlng, map.getZoom())
        // },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Sunset today at: {sunsetTime}</Popup>
        </Marker>
    )
}