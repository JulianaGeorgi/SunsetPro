import "./MarkerCluster.css";
import { useState } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";

import { sunsetServices } from "../../services/sunsetServices";
import { extractedData } from "../../utils/utils";
import { useMarkerContext } from "../../contexts/markerContext";

import { CustomLocationMarker } from "./CustomLocationMarker";


export const LocationMarker = () => {

    const [sunsetTime, setSunsetTime] = useState<string | null>(null);

    const { getSunsetTime } = sunsetServices();
    const { selectedImage } = useMarkerContext();

    // map custom marker icon of a sun
    const customIcon = new Icon({
        iconUrl: "https://www.iconpacks.net/icons/2/free-sun-icon-1845-thumb.png",
        iconSize: [38, 38]
    });

    // map custom marker icon when an user clicks on an image from the gallery
    const selectedImageIcon = new Icon({
        iconUrl: "https://icon-library.com/images/google-maps-you-are-here-icon/google-maps-you-are-here-icon-25.jpg",
        iconSize: [50, 65]
    });

    const onClickMarkerHandler = async (lat: number, lng: number) => {
        getSunsetTime(lat, lng)
            .then((sunsetTime) => {
                setSunsetTime(sunsetTime);
            });
    };

    return (
        <>
            <MarkerClusterGroup chunkedLoading>
            // setting all the predefined markers
                {extractedData.map((marker, index) => (
                    <CustomLocationMarker
                        key={index}
                        position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                        icon={customIcon}
                        onClick={onClickMarkerHandler}
                        city={marker.city}
                        sunsetTime={sunsetTime}
                    />
                ))}
            </MarkerClusterGroup>

            // set location marker when user clicks on one of the images from the gallery
            {selectedImage !== null &&
                <CustomLocationMarker
                    position={{ lat: Number(selectedImage.lat), lng: Number(selectedImage.lng) }}
                    icon={selectedImageIcon}
                    zIndexOffset={1000}
                    onClick={onClickMarkerHandler}
                    city={selectedImage.city}
                    sunsetTime={sunsetTime}
                />
            }
        </>
    );
};