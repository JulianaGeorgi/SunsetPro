import React, { createContext, useState, useContext, ReactNode } from "react";
import { City } from "../types/City";

interface MarkerProviderProps {
  children: ReactNode;
}

export const MarkerContext = createContext<any>(null);

export function useMarkerContext() {
  return useContext(MarkerContext);
}

export const MarkerProvider: React.FC<MarkerProviderProps> = ({ children }) => {
  // Your provider logic here

  const [selectedImage, setSelectedImage] = useState<City | null >(null);

  function updateSelectedImage(imageData: City) {
    setSelectedImage(imageData);
  }

  const value = {
    selectedImage,
    updateSelectedImage
  };

  return (
    <MarkerContext.Provider value={value}>
      {children}
    </MarkerContext.Provider>
  );
};
