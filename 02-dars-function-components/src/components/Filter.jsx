import React, { useContext } from "react";
import { Context } from "../context";

const btns = [
  { classes: "btn", title: "Barcha kinolar", dataToggle: "all" },
  { classes: "btn", title: "Mashxur kinolar", dataToggle: "popular" },
  {
    classes: "btn",
    title: "Eng ko'p ko'rilgan kinolar",
    dataToggle: "mostViewers",
  },
];

function Filter() {
  const { state, dispatch } = useContext(Context);

  const filterClick = (e) => {
    const tegAtt = e.currentTarget.getAttribute("data-toggle");

    dispatch({
      type: "ON_FILTER",
      payload: tegAtt,
    });
  };

  return (
    <div className="btn-group">
      {btns.map(({ title, classes, dataToggle }, idx) => (
        <button
          className={`${classes} ${
            state.filter === dataToggle ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={filterClick}
          data-toggle={dataToggle}
          key={idx}
        >
          {title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
