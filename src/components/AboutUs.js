import React, { useState } from "react";

import CloudDown from "./CloudDown";

import worker from "../images/main-workers.png";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <p className="extra-content-AU">
      If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn't anything embarrassing hidden in the middle of text. All the
      Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
      necessary, making this the first true generator on the Internet. It uses a
      dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable.
    </p>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <>
      <section className="aboutUs-section-AU">
        <CloudDown />
        <div className="inner-section-AU">
          <div className="bg-AU">
            <header className="header-AU">
              <h2>About Us</h2>
            </header>
            <div className="banner-AU">
              <div className="textBox-AU">
                <h2>Banana - Hamas</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.<span>...</span>
                  {readMore && extraContent}
                  <a
                    className="read-more-link-AU"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <p>{linkName}</p>
                  </a>
                </p>
              </div>
              <div className="bg-img-AU">
                <img src={worker}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
