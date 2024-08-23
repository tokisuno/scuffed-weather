import * as _css from './style.css';

const API_KEY = "D8APCPL4XYH6U7888V47PGE8W"

const form = document.querySelector('form');
const search = document.querySelector('input');

class Weather {
    constructor(location, temp, feelslike, humidity, precip) {
        this.location = location;
        this.temp = temp;
        this.feelslike = feelslike;
        this.humidity = humidity;
        this.precip = precip;
    }
}

async function getData(city = 'toronto') {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`, { mode: 'cors' });

        const result = await response.json();
        console.log(result);

        const data = new Weather (
            result.resolvedAddress,
            result.currentConditions.temp,
            result.currentConditions.feelslike,
            result.currentConditions.humidity,
            result.currentConditions.precip,
        )
        return data;
    } catch (err) {
        throw err;
    }
}

function getWeather(data) {
    data.then(res => {
        const location = document.querySelector('div.location');
        location.textContent = res.location;

        const temperature = document.querySelector('div.temp');
        temperature.textContent = `Temperature: ${res.temp} Celsius`;

        const feelsLike = document.querySelector('div.feelslike');
        feelsLike.textContent = `Feels like: ${res.feelslike} Celsius`;

        const humidity = document.querySelector('div.humidity');
        humidity.textContent = `Humidity: ${res.humidity}%`;

        const precip = document.querySelector('div.precip');
        precip.textContent = `PoP: ${res.precip}%`
        
        console.log(
            res.location,
            res.temp,
            res.feelslike,
            res.humidity,
            res.precip
        );
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getWeather(getData(search.value));
});

getWeather(getData());
