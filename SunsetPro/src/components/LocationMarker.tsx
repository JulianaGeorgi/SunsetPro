import { useState } from "react"; 
import { useMapEvents, Marker, Popup } from "react-leaflet";

export const LocationMarker = () => {
    const [position, setPosition] = useState<{lat: number, lng: number} | null>(null);
    const map = useMapEvents({
        click(e) {
            map.locate()
            console.log(e)
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
        // locationfound(e) {
        //     setPosition(e.latlng)
        //     map.flyTo(e.latlng, map.getZoom())
        // },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Sunset:</Popup>
        </Marker>
    )
}