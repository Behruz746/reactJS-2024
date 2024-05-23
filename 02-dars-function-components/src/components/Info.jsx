import React, { useContext } from "react";
import { Context } from "../context";

function Info() {
  const { state } = useContext(Context);

  return (
    <div className="Info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {state.data.length}
      </p>
      <p className="fs-4 text-uppercase">
        Sivimli kinolar soni: {state.data.filter((c) => c.favorite).length}
      </p>
    </div>
  );
}

export default Info;
