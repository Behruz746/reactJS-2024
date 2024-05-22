import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MovieListItem } from "./";

function MovieList({ dataList, onDelete, toggleItem, isLoading }) {
  return (
    <ul className="Movie-list">
      {isLoading ? (
        <>
          {dataList.map((data) => (
            <MovieListItem
              {...data}
              onDelte={() => onDelete(data.id)}
              toggleItem={(e) =>
                toggleItem(data.id, e.currentTarget.getAttribute("data-toggle"))
              }
              key={uuidv4()}
            />
          ))}
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </ul>
  );
}

export default MovieList;
