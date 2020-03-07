export const getWeatherData = (lat, long) => {
  console.log('in getWeatherData', lat, long)
  // return fetch(`https://api.weather.gov/points/39.7456,-97.0892`)
  return fetch(`https://api.weather.gov/points/${lat},${long}`, {
    mode: 'cors', // no-cors, *cors, same-origin
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `Unable to get weather data for ${lat}, ${long}.`;
      return json;
    })
    .then(weather => {
      return fetch(weather.properties.forecast)
        .then(res => res.json())
        .then(forecast => {
          return forecast.properties.periods;
        });
    })
};
