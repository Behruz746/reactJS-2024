import React from "react";

const btns = [
  { classes: "btn", title: "Barcha kinolar", dataToggle: "all" },
  { classes: "btn", title: "Mashxur kinolar", dataToggle: "popular" },
  {
    classes: "btn",
    title: "Eng ko'p ko'rilgan kinolar",
    dataToggle: "mostViewers",
  },
];

function Filter({ filterClick, filter }) {
  return (
    <div className="btn-group">
      {btns.map(({ title, classes, dataToggle }, idx) => (
        <button
          className={`${classes} ${
            filter === dataToggle ? "btn-dark" : "btn-outline-dark"
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
