import React, { useState, useContext } from "react";
import { Context } from "../context";

const MoviesAddForm = () => {
  const { _, dispatch } = useContext(Context);
  const [itemData, setItemData] = useState({ name: "", views: "" });

  const onChangeInput = (e) =>
    setItemData({ ...itemData, [e.target.name]: e.target.value });

  const addFormHandel = (e) => {
    e.preventDefault();
    if (itemData.name && itemData.views) {
      dispatch({
        type: "ADD_ITEM",
        payload: { name: itemData.name, views: itemData.views },
      });
    }
    setItemData({ name: "", views: "" });
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shing</h3>
      <form action="#" className="add-form d-flex" onSubmit={addFormHandel}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          onChange={(e) => onChangeInput(e)}
          name="name"
          value={itemData.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan"
          onChange={(e) => onChangeInput(e)}
          name="views"
          value={itemData.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
