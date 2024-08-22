class WeatherData {
    constructor(degC, degF, precip, humidity) {
        this.degC = degC;
        this.degF = degF;
        this.precip = precip;
        this.humidity = humidity;
    }
}
const API_KEY = "D8APCPL4XYH6U7888V47PGE8W"

async function getWeather(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);
    const result = await response.json();
    return result;
}

console.log(getWeather('Burlington'));
