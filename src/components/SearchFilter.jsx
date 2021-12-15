import { FormControl, Input } from "@material-ui/core";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchFilter = (props) => {
  const {
    listeners: { onChange }
  } = props;

  const [internalValue, setInternalValue] = useState("");

  const handleOnChange = (e) => {
    setInternalValue(e.target.value);
    onChange(internalValue);
  };

  return (
    <FormControl>
      <Input
        type="search"
        placeholder="Search..."
        onChange={(e) => handleOnChange(e)}
        value={internalValue}
      />
    </FormControl>
  );
};

SearchFilter.propTypes = {
  initialValue: PropTypes.string
};

export default SearchFilter;
