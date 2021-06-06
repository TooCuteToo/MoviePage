import React from "react";
import "./Trailer.css";

function Trailer(props) {
  const { handleClick, trailer } = props;
  const video = require(`../../trailers/${trailer}`);

  return (
    <div className="trailer">
      <video src={video} controls="true" />
      <img
        src={require("../../icons/close.png")}
        className="close"
        alt="close-button"
        onClick={handleClick}
      />
    </div>
  );
}

export default Trailer;
