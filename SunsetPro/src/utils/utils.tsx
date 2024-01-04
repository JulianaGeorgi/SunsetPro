import data from "../assets/pt.json";
import { City } from "../types/City";


function extractCitiesData(data: City[]) {
    const extractedData = data.map(({ city, lat, lng }) => ({ city, lat, lng }));
    // const citiesList = data.map(city => city.city);
    // const citiesListSorted = citiesList.sort();
    // return citiesListSorted;
    return extractedData;
}

// function extractCoordinates(city) {
//    const cityCoordinates = data.map(lat =>) 
// }

export const extractedData = extractCitiesData(data);