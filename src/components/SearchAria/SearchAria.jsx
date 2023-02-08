import React from "react";
import "./SearchAria.css";
import { useState } from "react";

import { UilSearchAlt } from "@iconscout/react-unicons";

const SearchAria = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = () => {
    props.onDataChange(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onDataChange(searchTerm);
    }
  };
  return (
    <div className="SearchAria">
      <div className="Search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
        <div className="Search-Button">
          <UilSearchAlt onClick={handleClick} />
        </div>
      </div>
      <div className="User"></div>
    </div>
  );
};

export default SearchAria;
