import data from "../assets/pt.json";
import { City } from "../types/City";


function extractCitiesData(data: City[]) {
    const extractedData = data.map(({ city, lat, lng }) => ({ city, lat, lng }));
    return extractedData;
}

export function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const extractedData = extractCitiesData(data);