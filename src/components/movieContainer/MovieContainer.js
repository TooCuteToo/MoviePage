import React, { useState, useContext } from "react";
import "./MovieContainer.css";
import { MoviesContext } from "../../App";
import { Movie, Header } from "../../export";

function MovieContainer() {
  const data = useContext(MoviesContext);
  const [movies] = useState(data["movies"]);
  localStorage.clear();
  return (
    <main>
      <Header icon_1="video.png" icon_2="toggle.png" className="main-header" />
      <h1>Movies</h1>
      <div className="container">
        {movies.map((data) => {
          const { slide, id, keyword } = data;
          return <Movie key={id} slide={slide} id={id} keyword={keyword} />;
        })}
      </div>
    </main>
  );
}

export default MovieContainer;
