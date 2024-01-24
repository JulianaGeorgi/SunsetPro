import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import "leaflet-geosearch/dist/geosearch.css";
import "./SearchBar.css";

export const SearchField = () => {
  const provider = new OpenStreetMapProvider({
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    notFoundMessage: "Location not found. Please try again.",
    provider: provider,
    searchLabel: "Enter a location...",
    showMarker: false,
    style: "button",
  });

  const map = useMap();
  useEffect(():any => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};