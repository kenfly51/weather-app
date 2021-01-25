import React from "react";
import PropTypes from "prop-types";

const WeatherItem = ({ date, min, max }) => {
  return <div>weather item</div>;
};

WeatherItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default WeatherItem;
