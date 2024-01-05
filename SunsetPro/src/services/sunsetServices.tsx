export const sunsetServices = () => {

    const api = "https://api.sunrise-sunset.org/json?";

    const getSunsetTime = async (lat:number, lng:number): Promise<string> => {
        try {
            // const response = await fetch(`${api}lat=${lat}&lng=${lng}=today`);
            const response = await fetch("https://run.mocky.io/v3/2a5de4ff-bb60-4862-9e2c-9c80c1cdaed4")
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

    return getSunsetTime
}
