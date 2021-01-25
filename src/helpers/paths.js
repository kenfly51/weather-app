export const getSearchLocation = (location) =>
  `location/search/?query=${location}`;

export const getForecast = (woeid) =>
  `location/${woeid}/`;
