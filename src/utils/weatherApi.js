export function fetchWeather(zip, apiKey) {
  const endpoint = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=${apiKey}`)

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.list) {
        throw new Error(data.message);
      };
      return data.list;
    });
};