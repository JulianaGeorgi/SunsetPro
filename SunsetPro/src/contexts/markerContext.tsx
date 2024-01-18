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
  const ref = useRef(null);

  function updateSelectedImage(imageData: City) {
    setSelectedImage(imageData);
  }

  const value = {
    selectedImage,
    updateSelectedImage,
    ref
  };

  return (
    <MarkerContext.Provider value={value}>
      {children}
    </MarkerContext.Provider>
  );
};
