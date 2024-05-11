import React from "react";

function MovieListItem({ name, views, favorite }) {
  return (
    <li
      className={`list-group-item d-flex jusrify-content-between ${
        favorite && "increase"
      }`}
    >
      <span className="list-group-item-label">{name}</span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={views}
      />
      <div className="d-flex justify-center align-item-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default MovieListItem;
