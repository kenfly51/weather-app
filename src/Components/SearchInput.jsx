/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useForecast } from "../hooks/useForecast";

const SearchInput = ({ onSearchResult }) => {
  const [searchText, setSearchText] = useState();
  const [forecastData, getForecastData] = useForecast();
  const { loading, result } = forecastData;

  useEffect(() => {
    if (searchText) {
      getForecastData(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    if (result) {
      onSearchResult(result);
    }
  }, [onSearchResult, result]);

  const onKeyUp = async (e) => {
    if (!loading && e.key === "Enter") {
      setSearchText(e.target.value);
    }
  };

  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend>
        <InputGroup.Text className="search-icon">
          <FontAwesomeIcon
            className={loading ? "searching" : ""}
            icon={loading ? faSpinner : faSearch}
          />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl data-testid="search-input" placeholder="Search" onKeyUp={onKeyUp} />
    </InputGroup>
  );
};

SearchInput.propTypes = {
  onSearchResult: PropTypes.func.isRequired,
};

export default SearchInput;
