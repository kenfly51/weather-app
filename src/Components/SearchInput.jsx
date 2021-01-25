import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { getSearchLocation, getForecast } from "../helpers/paths";
import { transformWeatherItem } from "../helpers/transformers";

const SearchInput = ({ onSearchResult }) => {
  const [searching, setSearching] = useState(false);

  const onKeyUp = async (e) => {
    if (!searching && e.key === "Enter") {
      const location = e.target.value;
      setSearching(true);
      const url = getSearchLocation(location);
      try {
        const response = await axios(url);
        const { data } = response;
        if (data && data.length === 1) {
          const foreCastUrl = getForecast(data[0].woeid);
          const foreCast = await axios(foreCastUrl);
          const transformedData = foreCast.data.consolidated_weather.map(
            transformWeatherItem
          );
          return onSearchResult(transformedData);
        }
        onSearchResult([]);
      } catch {
        onSearchResult([]);
      } finally {
        setSearching(false);
      }
    }
  };

  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={searching ? faSpinner : faSearch} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder="Search" onKeyUp={onKeyUp} />
    </InputGroup>
  );
};

SearchInput.propTypes = {
  onSearchResult: PropTypes.func.isRequired,
};

export default SearchInput;
