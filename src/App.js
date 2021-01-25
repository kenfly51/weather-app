import "./App.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherItem from "./Components/WeatherItem";
import SearchInput from "./Components/SearchInput";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={4} xs={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <WeatherItem />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
