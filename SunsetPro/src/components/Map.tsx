import { MapContainer, TileLayer } from 'react-leaflet';
import { LocationMarker } from './LocationMarker/MarkerCluster';
import { SearchField } from './SearchBar/SearchBar';
import { useMarkerContext } from "../contexts/markerContext";

export const Map = () => {

    // ref for scrolling to map when an image from the gallery is clicked
    const {ref, currentMapPosition} = useMarkerContext();
   
    return (
        <div className='bg-white rounded-lg shadow dark:bg-gray-900 m-4' ref={ref}>
            <MapContainer 
            id="map" 
            className="h-screen w-2/3 rounded-lg" 
            center={currentMapPosition.coordinates} 
            zoom={currentMapPosition.zoom} 
            scrollWheelZoom={false}
            //trigger re-render
            key={`${currentMapPosition.coordinates[0]}-${currentMapPosition.coordinates[1]}-${currentMapPosition.zoom}`}>
                <SearchField />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    )
}