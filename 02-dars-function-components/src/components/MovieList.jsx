import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../context";
import { MovieListItem } from "./";
import { searchHeander, filterHendel } from "../utilities/data";

function MovieList() {
  const { state } = useContext(Context);
  const dataList = filterHendel(
    searchHeander(state.data, state.term),
    state.filter
  );

  return (
    <ul className="Movie-list">
      {state.load ? (
        <>
          {dataList.map((data) => (
            <MovieListItem key={uuidv4()} {...data} />
          ))}
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </ul>
  );
}

export default MovieList;
