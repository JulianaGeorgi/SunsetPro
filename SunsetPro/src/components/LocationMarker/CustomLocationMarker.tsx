import { Marker } from 'react-leaflet';
import { LocationPopup } from './LocationPopup';
import { DivIcon, Icon, IconOptions } from 'leaflet';


//TODO: fix position any type
export const CustomLocationMarker = ({
    position,
    icon,
    zIndexOffset,
    onClick,
    sunsetTime,
    city,
}: {
    position: any;
    icon: Icon<IconOptions> | DivIcon | undefined;
    zIndexOffset?: number;
    onClick: (lat: number, lng: number) => void;
    sunsetTime: string | null;
    city: string;
}) => {
    return (
        <Marker
            position={position}
            icon={icon}
            zIndexOffset={zIndexOffset}
            eventHandlers={{
                click: () => onClick(position.lat, position.lng),
            }}
        >
            <LocationPopup city={city} sunsetTime={sunsetTime} />
        </Marker>
    );
};
