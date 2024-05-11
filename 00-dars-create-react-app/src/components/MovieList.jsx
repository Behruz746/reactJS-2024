import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MovieListItem } from "./";

function MovieList({ dataList }) {
  return (
    <ul className="Movie-list">
      {dataList.map((data) => (
        <MovieListItem {...data} key={uuidv4()} />
      ))}
    </ul>
  );
}

export default MovieList;
