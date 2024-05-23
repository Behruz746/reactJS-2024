import React, { useState, useContext } from "react";
import { Context } from "../context";

const SearchPanel = () => {
  const { _, dispatch } = useContext(Context);
  const [term, setTerm] = useState("");

  const upDateTerm = (e) => {
    const termStr = e.target.value;
    setTerm(termStr);
    dispatch({ type: "ON_TERM", payload: termStr });
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={upDateTerm}
      value={term}
    />
  );
};

export default SearchPanel;
