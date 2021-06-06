import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie(props) {
  const { slide, id, keyword } = props;
  const img = require(`../../images/${slide}/${slide}.png`);
  const saveIdToLocal = (e) => {
    localStorage.setItem(
      e.currentTarget.dataset.id,
      e.currentTarget.dataset.id
    );
  };

  return (
    <Link
      to="/movie"
      className="movie-content"
      data-id={id}
      onClick={(e) => saveIdToLocal(e)}
    >
      <img src={img} alt="thumbnail" />
      <span>{keyword}</span>
    </Link>
  );
}

export default Movie;
