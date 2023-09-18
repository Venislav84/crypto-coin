import React, { useState } from "react";
import { TextField } from "@mui/material";
import Style from "./SearchField.module.css";

const SearchFiled = (props) => {

  return (
    <div className={Style.search}>
      <TextField
        label="Search Crypto Currency"
        variant="outlined"
        onChange={(e) => (props.sendData(e.target.value))}
        className={Style.searchField}
      />
    </div>
  );
};

export default SearchFiled;
