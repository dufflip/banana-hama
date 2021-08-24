import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container-FT">
      <div className="footer-wrap-FT">
        <section className="social-media-FT">
          <div className="social-media-wrap-FT">
            <Link className="socialLogo-FT" to="/">
              BH
            </Link>
            <div className="socialIcons-FT">
              <a
                className="SocialIconLink-FT"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="SocialIconLink-FT"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="SocialIconLink-FT"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className="SocialIconLink-FT"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
