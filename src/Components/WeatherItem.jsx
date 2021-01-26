import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { getStateImage } from "../helpers/paths";
import { getDayName, formatTemp } from "../helpers/helpers";

const WeatherItem = ({ item }) => {
  const { date, min, max, state, stateAbbr } = item;

  const dayOfWeek = getDayName(date);
  return (
    <Card className="weather-item">
      <Card.Img
        className="state-image"
        variant="top"
        src={getStateImage(stateAbbr)}
      />
      <Card.Body>
        <Card.Title>{dayOfWeek}</Card.Title>
        <Card.Subtitle>{state}</Card.Subtitle>
        <div className="temp-details">
          <div>{`min: ${formatTemp(min)}`}</div>
          <div>{`max: ${formatTemp(max)}`}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

WeatherItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    stateAbbr: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherItem;
