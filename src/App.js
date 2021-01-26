import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.scss";
import WeatherItem from "./components/WeatherItem";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [forecast, setForecast] = useState([]);

  const renderWeatherItems = () => {
    return forecast.slice(0, 5).map((item) => (
      <Col sm xs={12} key={item.id}>
        <WeatherItem item={item} />
      </Col>
    ));
  };

  const hasForecast = forecast.length > 0;

  return (
    <Container className="app">
      <Row>
        <Col sm={4} xs={12}>
          <SearchInput onSearchResult={setForecast} />
        </Col>
      </Row>
      <Row>
        {hasForecast ? (
          renderWeatherItems()
        ) : (
          <Col>There is no data to display</Col>
        )}
      </Row>
    </Container>
  );
};

export default App;
