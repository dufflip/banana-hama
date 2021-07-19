import React from "react";

import "../css/cloudDown.css";

import cloud1 from "../images/cloud1.png";
import cloud2 from "../images/cloud2.png";
import cloud3 from "../images/cloud3.png";
import cloud4 from "../images/cloud4.png";
import cloud5 from "../images/cloud5.png";

const CloudUp = () => {
  return (
    <div className="every-clouds">
      <img className="cloud2" src={cloud1} />
      <img className="cloud2" src={cloud2} />
      <img className="cloud3" src={cloud3} />
      <img className="cloud3" src={cloud4} />
      <img className="cloud2" src={cloud5} />
    </div>
  );
};

export default CloudUp;
