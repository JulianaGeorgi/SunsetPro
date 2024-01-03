export const sunsetServices = () => {

    const api = "https://api.sunrise-sunset.org/json?";

    const getSunsetTime = async (lat:number, lng:number): Promise<string> => {
        try {
            const response = await fetch(`${api}lat=${lat}&lng=${lng}=today`);
            const json = await response.json();

            // Extract sunset time from the API response
            const sunsetTime = json.results && json.results.sunset;

            if (typeof sunsetTime === 'string') {
                console.log(sunsetTime);
                return sunsetTime;
            } else {
                throw new Error('Invalid sunset time format in API response');
            }
        } catch (error) {
            console.error('Error fetching sunset time:', error);
            throw error;
        }
    };


    return getSunsetTime
}
