import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { sunsetServices } from "../../services/sunsetServices";
import { extractedData } from "../../utils/utils";
import { Icon, LeafletEvent } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./LocationMarker.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMarkerContext } from "../../contexts/markerContext";


export const LocationMarker = () => {
    // const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
    const [sunsetTime, setSunsetTime] = useState<string | null>(null);

    const { getSunsetTime } = sunsetServices();
    const { selectedImage } = useMarkerContext();

    // map custom marker icon of a sun
    const customIcon = new Icon({
        iconUrl: "https://www.iconpacks.net/icons/2/free-sun-icon-1845-thumb.png",
        iconSize: [38, 38]
    });

    const selectedImageIcon = new Icon({
        iconUrl: "https://icon-library.com/images/google-maps-you-are-here-icon/google-maps-you-are-here-icon-25.jpg",
        iconSize: [50, 65]
    });

    const onClickMarkerHandler = async (e: LeafletEvent, lat: number, lng: number) => {
        console.log(selectedImage);
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
                    <Marker
                        key={index}
                        position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                        icon={customIcon}
                        eventHandlers={{
                            click: (e: LeafletEvent) => onClickMarkerHandler(e, Number(marker.lat), Number(marker.lng)),
                        }}
                    >
                        <Popup>
                            <section className="bg-white dark:bg-gray-900">
                                <div className="grid gap-8 lg:grid-cols-1">
                                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            <Link to="/"><FontAwesomeIcon icon={faSun} className="text-yellow-400" /> {sunsetTime}</Link>
                                        </h2>
                                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                            Here is a list of all the best spots to see the sunset in {marker.city}.
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    className="w-7 h-7 rounded-full"
                                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                                    alt="Author avatar"
                                                />
                                                <span className="font-medium dark:text-white">Ana Coelho</span>
                                            </div>
                                            <Link
                                                to="/article"
                                                className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                            >
                                                Read more
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="ml-2 w-4 h-4">
                                                </FontAwesomeIcon>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
            {selectedImage !== null &&
                <Marker
                    position={{ lat: Number(selectedImage.lat), lng: Number(selectedImage.lng) }}
                    icon={selectedImageIcon}
                    zIndexOffset={1000}
                >
                    <Popup>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="grid gap-8 lg:grid-cols-1">
                                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <Link to="/"><FontAwesomeIcon icon={faSun} className="text-yellow-400" /> {sunsetTime}</Link>
                                    </h2>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                        Here is a list of all the best spots to see the sunset in {selectedImage.city}.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                className="w-7 h-7 rounded-full"
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                                alt="Author avatar"
                                            />
                                            <span className="font-medium dark:text-white">Ana Coelho</span>
                                        </div>
                                        <Link
                                            to="/article"
                                            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                        >
                                            Read more
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="ml-2 w-4 h-4">
                                            </FontAwesomeIcon>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </Popup>
                </Marker>
            }
        </>
    );
};
