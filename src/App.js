import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.scss";
import WeatherItem from "./Components/WeatherItem";
import SearchInput from "./Components/SearchInput";

const App = () => {
  const [foreCast, setForeCast] = useState([]);

  const renderWeatherItems = () => {
    return foreCast.slice(0, 5).map((item) => (
      <Col sm xs={12} key={item.id}>
        <WeatherItem item={item} />
      </Col>
    ));
  };

  return (
    <Container className="app">
      <Row>
        <Col sm={4} xs={12}>
          <SearchInput onSearchResult={setForeCast} />
        </Col>
      </Row>
      <Row>{renderWeatherItems()}</Row>
    </Container>
  );
};

export default App;
