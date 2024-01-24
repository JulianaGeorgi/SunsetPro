import { createContext, useState, useContext, ReactNode, useRef } from "react";

import { City } from "../types/City";
import { MapPosition } from "../types/MapPosition";

import { mapDefaultPosition } from "../utils/constants";


interface MarkerProviderProps {
  children: ReactNode;
}

export const MarkerContext = createContext<any>(null);

export function useMarkerContext() {
  return useContext(MarkerContext);
}

export const MarkerProvider: React.FC<MarkerProviderProps> = ({ children }) => {

  const [selectedImage, setSelectedImage] = useState<City | null>(null);
  const [currentMapPosition, setCurrentMapPosition] = useState<MapPosition>(mapDefaultPosition);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);

  function updateMapView(lat: number, lng: number) {
    setCurrentMapPosition({
      ...currentMapPosition,
      coordinates: [lat, lng],
      zoom: 8
    });
  }

  function updateSelectedImage(imageData: City) {
    setSelectedImage(imageData);
  }

  function updateLoader() {
    setIsLoading(prevLoading => !prevLoading);
  }

  const value = {
    currentMapPosition,
    updateMapView,
    selectedImage,
    updateSelectedImage,
    isLoading,
    updateLoader,
    ref
  };

  return (
    <MarkerContext.Provider value={value}>
      {children}
    </MarkerContext.Provider>
  );
};
