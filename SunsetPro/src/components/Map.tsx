import { MapContainer, TileLayer} from 'react-leaflet';
import { LocationMarker } from './LocationMarker/MarkerCluster';
import {SearchField} from './SearchBar/SearchBar';
// import { SearchBar } from './SearchBar';

export const Map = () => {
    return (
        <div className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
            <MapContainer id="map" className="h-screen w-2/3 rounded-lg" center={[39.5572, -7.51]} zoom={6} scrollWheelZoom={false}>
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