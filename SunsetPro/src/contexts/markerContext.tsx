import React, { createContext, useState, useContext, ReactNode } from "react";
import { City } from "../types/City";
import { useRef } from "react";

interface MarkerProviderProps {
  children: ReactNode;
}

export const MarkerContext = createContext<any>(null);

export function useMarkerContext() {
  return useContext(MarkerContext);
}

export const MarkerProvider: React.FC<MarkerProviderProps> = ({ children }) => {

  const [selectedImage, setSelectedImage] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);

  function updateSelectedImage(imageData: City) {
    setSelectedImage(imageData);
  }

  function updateLoader() {
    setIsLoading(prevLoading => !prevLoading);
  }

  const value = {
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
