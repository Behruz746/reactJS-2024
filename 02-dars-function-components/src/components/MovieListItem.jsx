import React, { useContext } from "react";
import { Context } from "../context";

function MovieListItem(props) {
  const { name, views, favorite, like, id } = props;
  const { state, dispatch } = useContext(Context);

  const onDelete = () => {
    dispatch({ type: "ON_DELETE", payload: id });
  };

  const toggleItem = (e) => {
    const payload = {
      id,
      prop: e.currentTarget.getAttribute("data-toggle"),
    };
    dispatch({ type: "ON_TOGGLE_ITEM", payload: payload });
  };

  return (
    <li
      className={`list-group-item d-flex jusrify-content-between ${
        favorite && "increase"
      } ${like && "like"}`}
    >
      <span
        className="list-group-item-label"
        onClick={toggleItem}
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={views}
      />
      <div className="d-flex justify-center align-item-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={toggleItem}
          data-toggle="favorite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default MovieListItem;
