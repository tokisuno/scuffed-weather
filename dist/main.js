/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRIQUE0SCxLQUFLLHdCQUF3QixRQUFRLHNCQUFzQixjQUFjOztBQUVyTTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7O0FBRTVEO0FBQ0EsK0NBQStDLGVBQWU7O0FBRTlEO0FBQ0EsNENBQTRDLGFBQWE7O0FBRXpEO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2N1ZmZlZC13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcIkQ4QVBDUEw0WFlINlU3ODg4VjQ3UEdFOFdcIlxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuY2xhc3MgV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IobG9jYXRpb24sIHRlbXAsIGZlZWxzbGlrZSwgaHVtaWRpdHksIHByZWNpcCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgICAgIHRoaXMuZmVlbHNsaWtlID0gZmVlbHNsaWtlO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgICAgIHRoaXMucHJlY2lwID0gcHJlY2lwO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5ID0gJ3Rvcm9udG8nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtjaXR5fT91bml0R3JvdXA9bWV0cmljJmtleT0ke0FQSV9LRVl9JmNvbnRlbnRUeXBlPWpzb25gLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBXZWF0aGVyIChcbiAgICAgICAgICAgIHJlc3VsdC5yZXNvbHZlZEFkZHJlc3MsXG4gICAgICAgICAgICByZXN1bHQuY3VycmVudENvbmRpdGlvbnMudGVtcCxcbiAgICAgICAgICAgIHJlc3VsdC5jdXJyZW50Q29uZGl0aW9ucy5mZWVsc2xpa2UsXG4gICAgICAgICAgICByZXN1bHQuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHksXG4gICAgICAgICAgICByZXN1bHQuY3VycmVudENvbmRpdGlvbnMucHJlY2lwLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRXZWF0aGVyKGRhdGEpIHtcbiAgICBkYXRhLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubG9jYXRpb24nKTtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSByZXMubG9jYXRpb247XG5cbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGVtcCcpO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtyZXMudGVtcH0gQ2Vsc2l1c2A7XG5cbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZlZWxzbGlrZScpO1xuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtyZXMuZmVlbHNsaWtlfSBDZWxzaXVzYDtcblxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5odW1pZGl0eScpO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtyZXMuaHVtaWRpdHl9JWA7XG5cbiAgICAgICAgY29uc3QgcHJlY2lwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnByZWNpcCcpO1xuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgUG9QOiAke3Jlcy5wcmVjaXB9JWBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgcmVzLmxvY2F0aW9uLFxuICAgICAgICAgICAgcmVzLnRlbXAsXG4gICAgICAgICAgICByZXMuZmVlbHNsaWtlLFxuICAgICAgICAgICAgcmVzLmh1bWlkaXR5LFxuICAgICAgICAgICAgcmVzLnByZWNpcFxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0V2VhdGhlcihnZXREYXRhKHNlYXJjaC52YWx1ZSkpO1xufSk7XG5cbmdldFdlYXRoZXIoZ2V0RGF0YSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==