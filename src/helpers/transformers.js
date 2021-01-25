export const transformWeatherItem = (item) => ({
  id: item.id,
  date: new Date(item.applicable_date),
  min: item.min_temp,
  max: item.max_temp,
});
