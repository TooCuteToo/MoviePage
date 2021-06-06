import React, { useContext, useState } from "react";
import "./MovieLanding.css";
import { Header, Banner, Trailer } from "../../export";
import { MoviesContext } from "../../App";

function MovieLanding() {
  const id = Object.keys(localStorage)[0];
  const data = useContext(MoviesContext);

  const [showTrailer, setTrailer] = useState(false);
  const { logo, keyword, content, slide, background, trailer } = data["movies"][
    id
  ];

  const handleClick = () => setTrailer(!showTrailer);

  const banner_props = {
    keyword: keyword,
    content: content,
    slide: slide,
    background: background,
  };

  return (
    <div>
      <Header icon_1={logo} icon_2="toggle.png" className="landing-header" />
      <Banner {...banner_props} handleClick={handleClick} />
      {showTrailer ? (
        <Trailer trailer={trailer} handleClick={handleClick} />
      ) : null}
    </div>
  );
}

export default MovieLanding;
