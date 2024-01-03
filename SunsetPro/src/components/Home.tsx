import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export const Home = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-orange-300 to-rose-300' >
            <h1 className=''>Choose your location</h1>
            <MapContainer id="map" className="h-96 w-full" center={[39.5572, -7.51]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.7077507, -9.1365919]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}