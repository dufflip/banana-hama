import React from "react";

import { Link } from "react-router-dom";

import { AiOutlineDoubleLeft } from "react-icons/ai";

import "../css/back-button.css";

const BackButton = () => {
  return (
    <div className="back">
      <AiOutlineDoubleLeft />
    </div>
  );
};

export default BackButton;
