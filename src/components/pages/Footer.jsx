import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <p>
        This app is a homework project for HackYourFuture program please do not
        hesitate to contact us throw :
      </p>
      <div className="footer-link-container">
        <Link
          className="footer-link"
          to={"https://github.com/Mohammed-aleryani"}
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className="footer-link"
          to={"https://www.facebook.com/mohamed.aleryani.7"}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link className="footer-link" to={"mailto:mym.aleryani@gmail.com"}>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <small>Copyright © HackYourEvents</small>
    </footer>
  );
};

export default Footer;
