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
    searchLabel: "Enter a city...",
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



// import { useState } from "react";
// import { extractedData } from "../utils/utils";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { useMap } from "react-leaflet";
// import { number } from "prop-types";

// export const SearchBar = () => {

//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredSuggestions, setFilteredSuggestions] = useState<{ city: string, lat: string, lng: string }[]>([])

//     const handleInputChange = (e: any) => {
//         const query = e.target.value;
//         setSearchQuery(query);

//         // Filter the suggestions based on the input query
//         const filteredCities: { city: string, lat: string, lng: string }[] = extractedData.filter(city =>
//             city.city.toLowerCase().includes(query.toLowerCase())
//         );

//         //TODO: sort by city name

//         setFilteredSuggestions(filteredCities);
//     };

//     const handleSuggestedCityClick = (city: string) => {
//         // Handle the selection of a suggestion (e.g., populate the search input)
//         console.log('Selected suggestion:', city);
//         setSearchQuery(city);

//         setFilteredSuggestions([]); // Clear suggestions after selection
//     };

//     const handleOnSearchClick = () => {

//         const cityToLocate = extractedData.filter(cityData => cityData.city === searchQuery)
//         console.log(cityToLocate)
//         const lat = Number(cityToLocate[0].lat);
//         const lng = Number(cityToLocate[0].lng);
//     }

//     return (
//         <form className="mb-4">
//             <label
//                 htmlFor="default-search"
//                 className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//                 Search
//             </label>
//             <div className="flex flex-row items-center gap-4">
//                 <FontAwesomeIcon icon={faSearch} className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none" />
//                 <input
//                     type="search"
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                     id="default-search"
//                     className=" w-fulltext-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Enter a city..."
//                 />
//                 <button
//                     type="button"
//                     onClick={handleOnSearchClick}
//                     className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                     Search
//                 </button>
//             </div>
//             {filteredSuggestions.length > 0 && (
//                 <div id="dropdownCities" className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
//                     <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="default-search">
//                         {filteredSuggestions.map((suggestion, index) => (
//                             <li
//                                 className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                                 key={index} onClick={() => handleSuggestedCityClick(suggestion.city)}>
//                                 {suggestion.city}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </form>

//     )
// }