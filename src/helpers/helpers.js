export const getDayName = (date) => {
  if (date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }
  return "";
};

export const formatTemp = (value) => {
  return value && parseInt(value);
};
