import { generateRandomNumber } from "../utils/utils";

export const sunsetServices = () => {

    const getSunsetTime = async (lat: number, lng: number): Promise<string> => {
        const api = "https://api.sunrise-sunset.org/json?";
        try {
            // const response = await fetch("https://run.mocky.io/v3/2a5de4ff-bb60-4862-9e2c-9c80c1cdaed4")
            const response = await fetch(`${api}lat=${lat}&lng=${lng}=today`);
            const json = await response.json();

            // Extract sunset time from the API response
            const sunsetTime = json.results && json.results.sunset;

            if (typeof sunsetTime === 'string') {
                return sunsetTime;
            } else {
                throw new Error('Invalid sunset time format in API response');
            }
        } catch (error) {
            console.error('Error fetching sunset time:', error);
            throw error;
        }
    };

    const getSunsetImage = (width: number, height: number) => {
        const id = generateRandomNumber(1, 100);
        return `https://picsum.photos/id/${id}/${width}/${height}`;
    };

    return {
        getSunsetTime,
        getSunsetImage,
    }
}
