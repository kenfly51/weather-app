import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ onSearchResult }) => {
  const onKeyUp = (e) => {
  };

  return (
    <InputGroup className="mb-2">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
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
