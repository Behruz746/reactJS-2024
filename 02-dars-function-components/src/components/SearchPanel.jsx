import React, { useState } from "react";

const SearchPanel = ({ upDateTermHandel }) => {
  const [term, setTerm] = useState("");

  const upDateTerm = (e) => {
    const term = e.target.value;
    setTerm(term);
    upDateTermHandel(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={upDateTerm}
      termue={term}
    />
  );
};

export default SearchPanel;
