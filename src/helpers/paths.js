export const getSearchLocation = (location) =>
  `location/search/?query=${location}`;

export const getForecast = (woeid) =>
  `location/${woeid}/`;

  export const getStateImage = (state) => `https://www.metaweather.com/static/img/weather/${state}.svg`