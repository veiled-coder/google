import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import SearchLanguage from "./SearchLanguage";

function SearchInput() {
  return (
    <>
      <div className="search-input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
        <FontAwesomeIcon icon={faMicrophone} className="icon microphone-icon" />
        <FontAwesomeIcon icon={faCamera} className="icon camera-icon" />
        <input type="search" className="search-bar-input"></input>
       </div>
        <div className="search-options">
          <p className="search-option search-option_google"><a href="/">Google Search</a></p>
          <p className="search-option search-option_lucky"><a href="/">I'm Feeling Lucky</a> </p>
      </div>
      <SearchLanguage/>
      </>
    
  );
}

export default SearchInput;
