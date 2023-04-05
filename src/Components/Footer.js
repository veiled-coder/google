import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p className="country">Nigeria</p>
      <hr></hr>
      <div className="footer-links">
        <div className="footer-links_info">
          <p>
            <a href="/">About</a>
          </p>
          <p>
            <a href="/">Advertising</a>
          </p>
          <p>
            <a href="/">Business</a>
          </p>
          <p>
            <a href="/">How search Works</a>
          </p>
        </div>
        <p className="carbon">
          <a href="/">Carbon neutral since 2007</a>
        </p>

        <div className="footer-links_terms">
          <p>
            <a href="/">Privacy</a>
          </p>
          <p>
            <a href="/">Terms</a>
          </p>
          <p>
            <a href="/">Settings</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
