import React from "react";
import "../styles/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className="navigation">
      <p className="gmail">Gmail</p>
      <p className="img">Images</p>
      <FontAwesomeIcon icon={faGrip} className='grip-icon' />
     <div className="profile-image"></div>
      </div>
  );
}

export default Navigation;
