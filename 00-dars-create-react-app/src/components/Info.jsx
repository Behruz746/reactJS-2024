import React from "react";

function Info({ allMovies, favoriteMovies }) {
  return (
    <div className="Info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {allMovies}</p>
      <p className="fs-4 text-uppercase">
        Sivimli kinolar soni: {favoriteMovies}
      </p>
    </div>
  );
}

export default Info;
