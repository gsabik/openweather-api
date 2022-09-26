import { DateTime } from "luxon";

const API_KEY = "f6d6e183370483255b2a933ee8b5d21c";
const BASE_URL = "https://api.openweathermap.org/data";

// Function that return a promise
const getWeatherData = (version, infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + version + "/" + infoType);
    // With url.search recover the querystring
    // Using the querystring, we create an object of type URLSearchParams
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url).then(res => res.json());
}

// Destructuring of data
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt, 
        sys: { country, sunrise, sunset },
        weather, 
        wind: { speed }

    } = data;

    const { main: details, icon } = weather[0];
    
    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    daily = daily.slice(1,6).map(d => ({
        title: formatToLocalTime(d.dt, timezone, 'ccc'),
        temp: d.temp.day, 
        icon: d.weather[0].icon
    }));
    
    hourly = hourly.slice(1,6).map(d => ({
        title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
        temp: d.temp, 
        icon: d.weather[0].icon
    }));

    return { timezone, daily, hourly };
}

const getFormattedWeatherData = async(searchParams) => {
    // Get current data
    const formattedCurrentWeather = await getWeatherData("2.5", "weather", searchParams).then(formatCurrentWeather);

    //Get latitude and longitud for one call API
    const { lat, lon } = formattedCurrentWeather;

    // Get daily forecast data
    const formattedForecastWeather = await getWeatherData("3.0", "onecall", {
        lat, 
        lon, 
        exclude: "current,minutely,alerts",
        units: searchParams.units
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
}

const formatToLocalTime = (
    secs,
    zone, 
    format = "cccc, dd LLL"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlfromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export { getFormattedWeatherData, formatToLocalTime, iconUrlfromCode }
