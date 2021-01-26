export const transformWeatherItem = (item) => ({
  id: item.id,
  date: new Date(item.applicable_date),
  min: item.min_temp,
  max: item.max_temp,
  temp: item.the_temp,
  state: item.weather_state_name,
  stateAbbr: item.weather_state_abbr,
});
