export const getWeatherData = (lat, long) => {
  return fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then(res => res.json())
    .then(weather => {
      return fetch(weather.properties.forecast)
        .then(res => res.json())
        .then(forecast => forecast.properties.periods);
    });
};

//
