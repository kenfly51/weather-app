import React from "react";
import PropTypes from "prop-types";

const WeatherItem = (item) => {
  const { date, min, max } = item;
  return <div>weather item</div>;
};

WeatherItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherItem;
