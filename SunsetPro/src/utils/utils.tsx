import data from "../assets/pt.json";
import { City } from "../types/City";


function extractCitiesData(data: City[]) {
    const extractedData = data.map(({ city, lat, lng, imageUrl }) => ({ city, lat, lng, imageUrl }));
    return extractedData;
}

function extractCitiesImageUrls(data: City[]) {
    const extractedImageUrls = data.map(({ imageUrl }) => ({ imageUrl }));
    return extractedImageUrls;
}

export function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const extractedData = extractCitiesData(data);
export const extractedImageUrls = extractCitiesImageUrls(data);