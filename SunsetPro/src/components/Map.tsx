import { MapContainer, TileLayer} from 'react-leaflet';
import { LocationMarker } from './LocationMarker';
import { SearchBar } from './SearchBar';

export const Map = () => {
    return (
        <div className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
            <SearchBar />
            <MapContainer id="map" className="h-screen w-2/3 rounded-lg" center={[39.5572, -7.51]} zoom={6} scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[38.7077507, -9.1365919]}> // Lisbon coordinates
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <LocationMarker />
            </MapContainer>
        </div>
    )
}